define('ostp-files-ember-v2/components/researcher-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),

    //vars
    page: 'main',
    department: null,
    departments: ["Plase Select Funding", "D.O.T (Department of Transportation)", "D.O.D (Department of Defense)", "D.O.E (Department of Energy)", "N.I.H (National Institutes of Health)"],

    init: function init() {
      this._super.apply(this, arguments);
      var store = this.get('store');
      store.createRecord('grant');
    },
    actions: {

      selectDepartment: function selectDepartment(g, value) {
        g.set('grantDepartmentName', value.target.value);
      },
      selectGrantNumber: function selectGrantNumber(g, value) {
        g.set('grantNumber', value.target.value);
      }, saveToModel: function saveToModel() {
        console.log('hry');
      },
      addDropDown: function addDropDown() {
        var store = this.get('store');
        store.createRecord('grant');
      },
      buildUrl: function buildUrl() {
        return this.get('_url');
      },
      preUpload: function preUpload(comp, drop, file) {
        var _this = this;

        this.set('openModal', true);
        this.set('latestFileName', file.name);
        var promise = new _ember['default'].RSVP.Promise(function (resolve) {
          _this.set('resolve', resolve);
        });
        return promise;
      },
      validateForm: function validateForm(g) {
        g.save();
        console.log(g.grantNumber);

        for (var i = 0; i <= $('.departmentSelect').length; i++) {
          console.log(store.peekAll('grant').objectAt(i).get("grantDepartmentName"));
          console.log(store.peekAll('grant').objectAt(i).get("grantNumber"));
        }
      }
    }
  });
});