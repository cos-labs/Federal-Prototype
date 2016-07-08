import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

var TYPE_MAP = {
  validator: {
    namespace: 'dynamic-forms.validations',
    functionName: 'validate'
  },
  change: {
    namespace: 'dynamic-forms.formatters',
    functionName: 'format'
  }
};

var DynamicForm = Ember.Component.extend({

  renderSchema: Ember.K,

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this.$().alpaca(this.get('renderSchema'));
  },

  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);
    var schemaObj = this._initSchema(this.get('schema'));
    var schemaWithData = this._processData(schemaObj);
    var schemaWithPostRender = this._buildPostRender(schemaWithData);
    var schemaWithActions = this._addActions(schemaWithPostRender);
    var filteredSchema = this._processFilters(schemaWithActions);
    var mappedSchema = this._replaceKeywordsWithFunctions(filteredSchema);
    this.set('renderSchema', mappedSchema);
  },

  _buildPostRender: function _buildPostRender(schemaObj) {
    var _this = this;

    var postRenderFns = [];
    if (this.get('changeAction')) {
      (function () {
        var fields = Object.keys(schemaObj.schema.properties);
        var changeAction = _this.get('changeAction');
        var changeFn = function changeFn(control) {
          fields.forEach(function (field) {
            control.childrenByPropertyId[field].on('keyup', function (e) {
              changeAction(e, field);
            });
            control.childrenByPropertyId[field].on('click', function (e) {
              changeAction(e, field);
            });
          });
        };
        postRenderFns.push(changeFn);
      })();
    }
    if (this.get('postRender')) {
      postRenderFns.push(this.get('postRender'));
    }

    if (postRenderFns.length > 0) {
      if (schemaObj.postRender) {
        postRenderFns.push(schemaObj.postRender);
      }
      schemaObj.postRender = function () {
        var args = arguments;
        postRenderFns.forEach(function (fn) {
          return fn(args[0]);
        });
      };
    }
    return schemaObj;
  },

  _addActions: function _addActions(schemaObj) {
    return _.reduce(this.get('formActions'), function (result, value, key) {
      if (((((result || {}).options || {}).form || {}).buttons || {})[key]) {
        result.options.form.buttons[key].click = value;
      }
      return result;
    }, schemaObj);
  },

  _processFilters: function _processFilters(schemaObj) {
    var _this2 = this;

    if (!(schemaObj && schemaObj.options && schemaObj.options.fields)) {
      return schemaObj;
    }
    var optionFields = schemaObj.options.fields;
    var newSchema = _.reduce(optionFields, function (result, val, key) {
      if (val['filter-rules']) {
        val['filter-rules'].forEach(function (element) {
          var filterRule = getOwner(_this2).lookup(element + ':dynamic-forms.filter-rules');
          filterRule.filter(key, result);
        });
      }
      return result;
    }, _.clone(schemaObj, true));
    return newSchema;
  },

  _processData: function _processData(schemaObj) {
    var _this3 = this;

    if (this.get('data') && Ember.typeOf(this.get('data')) === 'object') {
      schemaObj.data = this.get('data');
    } else if (this.get('data') && Ember.typeOf(this.get('data')) === 'instance') {
      var keys = Object.keys(schemaObj.schema.properties);
      var dataObj = _.reduce(keys, function (data, key) {
        data[key] = _this3.get('data').get(key);
        return data;
      }, {});
      schemaObj.data = dataObj;
    }
    return schemaObj;
  },

  _initSchema: function _initSchema(schema) {
    var schemaObj = undefined;
    if (typeof schema === 'string') {
      schemaObj = JSON.parse(schema);
    } else {
      schemaObj = _.clone(schema, true);
    }

    return schemaObj;
  },

  _replaceKeywordsWithFunctions: function _replaceKeywordsWithFunctions(schemaObj) {
    var container = getOwner(this);
    var replaceWithFunction = function replaceWithFunction(object, value, key) {
      if (TYPE_MAP.hasOwnProperty(key) && typeof value === 'string') {
        var type = TYPE_MAP[key];
        var typeObj = container.lookup(value + ':' + type.namespace);
        if (typeObj) {
          object[key] = typeObj[type.functionName];
        } // else fail with a message that the given type couldn't be found
      } else if (typeof value === 'object') {
          object[key] = _.transform(value, replaceWithFunction);
        } else {
          object[key] = value;
        }
    };
    return _.transform(schemaObj, replaceWithFunction);
  }
});

export default DynamicForm;