"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ostp-files-ember-v2/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _emberDataAdaptersJsonApi) {
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({
    host: 'http://127.0.0.1:8000',
    buildURL: function buildURL(type, id, record) {
      //call the default buildURL and then append a slash
      // return this._super(type, id, record) + '/';
      return this._super(type, id, record);
    }
  });
});
define('ostp-files-ember-v2/adapters/collection', ['exports', 'ember-osf/adapters/collection'], function (exports, _emberOsfAdaptersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCollection['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/comment-report', ['exports', 'ember-osf/adapters/comment-report'], function (exports, _emberOsfAdaptersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCommentReport['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/comment', ['exports', 'ember-osf/adapters/comment'], function (exports, _emberOsfAdaptersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersComment['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/contributor', ['exports', 'ember-osf/adapters/contributor'], function (exports, _emberOsfAdaptersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersContributor['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/draft-registration', ['exports', 'ember-osf/adapters/draft-registration'], function (exports, _emberOsfAdaptersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersDraftRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/file-contents', ['exports', 'ember-osf/adapters/file-contents'], function (exports, _emberOsfAdaptersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileContents['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/file-provider', ['exports', 'ember-osf/adapters/file-provider'], function (exports, _emberOsfAdaptersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileProvider['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/file-version', ['exports', 'ember-osf/adapters/file-version'], function (exports, _emberOsfAdaptersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileVersion['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/file', ['exports', 'ember-osf/adapters/file'], function (exports, _emberOsfAdaptersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFile['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/institution', ['exports', 'ember-osf/adapters/institution'], function (exports, _emberOsfAdaptersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersInstitution['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/log', ['exports', 'ember-osf/adapters/log'], function (exports, _emberOsfAdaptersLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersLog['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/metaschema', ['exports', 'ember-osf/adapters/metaschema'], function (exports, _emberOsfAdaptersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersMetaschema['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/node-link', ['exports', 'ember-osf/adapters/node-link'], function (exports, _emberOsfAdaptersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNodeLink['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/node', ['exports', 'ember-osf/adapters/node'], function (exports, _emberOsfAdaptersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNode['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/osf-adapter', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersOsfAdapter['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/registration', ['exports', 'ember-osf/adapters/registration'], function (exports, _emberOsfAdaptersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/adapters/user', ['exports', 'ember-osf/adapters/user'], function (exports, _emberOsfAdaptersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersUser['default'];
    }
  });
});
define('ostp-files-ember-v2/app', ['exports', 'ember', 'ostp-files-ember-v2/resolver', 'ember-load-initializers', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2Resolver, _emberLoadInitializers, _ostpFilesEmberV2ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].podModulePrefix,
    Resolver: _ostpFilesEmberV2Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ostp-files-ember-v2/authenticators/osf-token', ['exports', 'ember-osf/authenticators/osf-token'], function (exports, _emberOsfAuthenticatorsOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthenticatorsOsfToken['default'];
    }
  });
});
define('ostp-files-ember-v2/authorizers/osf-token', ['exports', 'ember-osf/authorizers/osf-token'], function (exports, _emberOsfAuthorizersOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthorizersOsfToken['default'];
    }
  });
});
define('ostp-files-ember-v2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ostp-files-ember-v2/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ostpFilesEmberV2ConfigEnvironment) {

  var name = _ostpFilesEmberV2ConfigEnvironment['default'].APP.name;
  var version = _ostpFilesEmberV2ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("ostp-files-ember-v2/components/department-file-viewer", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      moreInfo: function moreInfo() {
        for (var i = 0; i <= _ember["default"].$(".document").length; i++) {
          if (_ember["default"].$(".more-info-button").index(event.target) === i) {
            _ember["default"].$(".document:eq(" + i + ")").removeClass("document-view-document");
            _ember["default"].$(".document:eq(" + i + ")").toggleClass("document-more-info");
            _ember["default"].$(".view-document:eq(" + i + ")").hide();
            _ember["default"].$(".more-info:eq(" + i + ")").toggle("fast");
          }
        }
      },
      viewDocument: function viewDocument() {
        for (var i = 0; i <= _ember["default"].$(".document").length; i++) {
          if (_ember["default"].$(".view-document-button").index(event.target) === i) {
            _ember["default"].$(".document:eq(" + i + ")").removeClass("document-more-info");
            _ember["default"].$(".document:eq(" + i + ")").toggleClass("document-view-document");
            _ember["default"].$(".more-info:eq(" + i + ")").hide();
            _ember["default"].$(".view-document:eq(" + i + ")").toggle("fast");
          }
        }
      }
    }
  });
});
define('ostp-files-ember-v2/components/dropzone-widget/component', ['exports', 'ember-osf/components/dropzone-widget/component'], function (exports, _emberOsfComponentsDropzoneWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsDropzoneWidgetComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/dropzone-widget', ['exports', 'ember', 'ostp-files-ember-v2/components/template'], function (exports, _ember, _ostpFilesEmberV2ComponentsTemplate) {
    exports['default'] = _ember['default'].Component.extend({
        layout: _ostpFilesEmberV2ComponentsTemplate['default'],
        session: _ember['default'].inject.service(),
        classNames: ['dropzone'],
        didRender: function didRender() {
            var _this = this;

            var preUpload = this.get('preUpload');
            var dropzoneOptions = this.get('options');
            var listeners = this.get('listeners');
            if (!this.get('buildUrl') && !preUpload && (!dropzoneOptions || !dropzoneOptions.url)) {
                console.error('Need to define url somewhere');
            }
            var drop = new Dropzone('#' + this.elementId, { // jshint ignore:line
                url: function url(file) {
                    return typeof _this.get('buildUrl') === 'function' ? _this.get('buildUrl')(file) : _this.get('buildUrl');
                },
                autoProcessQueue: false
            });

            var headers = {};
            this.get('session').authorize('authorizer:osf-token', function (headerName, content) {
                headers[headerName] = content;
            });

            drop.options.headers = headers;
            drop.on('addedfile', function (file) {
                if (preUpload) {
                    preUpload(_this, drop, file).then(function () {
                        return drop.processFile(file);
                    });
                } else {
                    drop.processFile(file);
                }
            });
            drop.options = _ember['default'].merge(drop.options, dropzoneOptions);
            if (listeners && typeof listeners === 'object') {
                Object.keys(listeners).map(function (each) {
                    return drop.on(each, listeners[each]);
                });
            }
        }
    });
});
define('ostp-files-ember-v2/components/dynamic-form', ['exports', 'ember-cli-dynamic-forms/components/dynamic-form'], function (exports, _emberCliDynamicFormsComponentsDynamicForm) {
  exports['default'] = _emberCliDynamicFormsComponentsDynamicForm['default'];
});
define('ostp-files-ember-v2/components/f-login-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ostp-files-ember-v2/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('ostp-files-ember-v2/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('ostp-files-ember-v2/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-browser/component', ['exports', 'ember-osf/components/file-browser/component'], function (exports, _emberOsfComponentsFileBrowserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-browser-icon/component', ['exports', 'ember-osf/components/file-browser-icon/component'], function (exports, _emberOsfComponentsFileBrowserIconComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserIconComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-browser-tree/component', ['exports', 'ember-osf/components/file-browser-tree/component'], function (exports, _emberOsfComponentsFileBrowserTreeComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserTreeComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-chooser/component', ['exports', 'ember-osf/components/file-chooser/component'], function (exports, _emberOsfComponentsFileChooserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileChooserComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-renderer/component', ['exports', 'ember-osf/components/file-renderer/component'], function (exports, _emberOsfComponentsFileRendererComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileRendererComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-version/component', ['exports', 'ember-osf/components/file-version/component'], function (exports, _emberOsfComponentsFileVersionComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileVersionComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/file-widget/component', ['exports', 'ember-osf/components/file-widget/component'], function (exports, _emberOsfComponentsFileWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileWidgetComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/login-form/component', ['exports', 'ember-osf/components/login-form/component'], function (exports, _emberOsfComponentsLoginFormComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsLoginFormComponent['default'];
    }
  });
});
define("ostp-files-ember-v2/components/meta-data", ["exports", "ember"], function (exports, _ember) {

  var schema = {
    "schema": {
      "title": "Describe the document",
      "description": "The meta data associated with the document that was uploaded.",
      "type": "object",
      "properties": {

        "document-name": {
          "type": "string",
          "title": "Document Name"
        },

        "date-published": {
          "type": "string",
          "title": "Date Published"
        },

        "publisher": {
          "type": "string",
          "title": "Publisher"
        },

        "institution": {
          "type": "string",
          "title": "institution"
        },

        "pi": {
          "type": "string",
          "title": "Principal Investigator"
        },

        "pi-email": {
          "type": "string",
          "title": "Principal Investigator Email"
        },

        "author-list": {
          "type": "string",
          "title": "Author(s)"
        }
      }
    },

    "options": {
      "helper": "The meta data associated with the document that was uploaded.",
      "fields": {

        "document-name": {
          "size": 256,
          "helper": "Please enter the documents name.",
          "placeholder": "documents name"
        },

        "date-published": {
          "format": "date-time",
          "helper": "Please enter when the document was published.",
          "placeholder": "e.g. 5/5/1995"
        },

        "publisher": {
          "size": 256,
          "helper": "Please enter the publisher.",
          "placeholder": "Publisher"
        },

        "institution": {
          "size": 256,
          "helper": "Please enter the institution.",
          "placeholder": "Institution"
        },

        "pi": {
          "size": 156,
          "helper": "Please enter the Principal Investigator.",
          "placeholder": "e.g. John Doe"
        },

        "pi-email": {
          "format": "email",
          "size": 256,
          "helper": "Please enter the Principal Investigator Email address.",
          "placeholder": "e.g. JohnDoe@mail.com"
        },

        "author-list": {
          "size": 256,
          "helper": "Please enter the auther(s), if you have more than author use commas to separate them.",
          "placeholder": "e.g. Cameron, Blandford Carolyn Stewart, Ryan Mason"
        }

      }
    }
  };

  exports["default"] = _ember["default"].Component.extend({
    schema: schema
  });
});
define('ostp-files-ember-v2/components/oauth-popup/component', ['exports', 'ember-osf/components/oauth-popup/component'], function (exports, _emberOsfComponentsOauthPopupComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOauthPopupComponent['default'];
        }
    });
});
define('ostp-files-ember-v2/components/osf-copyright/component', ['exports', 'ember-osf/components/osf-copyright/component'], function (exports, _emberOsfComponentsOsfCopyrightComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfCopyrightComponent['default'];
        }
    });
});
define('ostp-files-ember-v2/components/osf-footer/component', ['exports', 'ember-osf/components/osf-footer/component'], function (exports, _emberOsfComponentsOsfFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfFooterComponent['default'];
        }
    });
});
define('ostp-files-ember-v2/components/osf-mode-footer/component', ['exports', 'ember-osf/components/osf-mode-footer/component'], function (exports, _emberOsfComponentsOsfModeFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfModeFooterComponent['default'];
        }
    });
});
define('ostp-files-ember-v2/components/osf-navbar/component', ['exports', 'ember-osf/components/osf-navbar/component'], function (exports, _emberOsfComponentsOsfNavbarComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsOsfNavbarComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/pagination-control/component', ['exports', 'ember-osf/components/pagination-control/component'], function (exports, _emberOsfComponentsPaginationControlComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsPaginationControlComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('ostp-files-ember-v2/components/researcher-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),

    //vars
    page: 'main',
    department: null,
    grantNumber: 123,

    init: function init() {
      this._super.apply(this, arguments);
    },
    actions: {

      selectDepartment: function selectDepartment(value) {
        console.log("SELECTED DEPARTMENT");
        this.set('department', value);
      },
      updateGrantNumber: function updateGrantNumber(value) {
        console.log("UPDATED NUMBER");
        this.set('grantNumber', value);
      },
      validateForm: function validateForm() {
        this.sendAction("validateForm");
      },
      submit: function submit() {
        //      var g = this.get('store').createRecord('grant', {
        this.get('store').createRecord('grant', {
          department: this.get('department'),
          number: this.get('grantNumber')
        });
        // g.save();
      }
    }
  });
});
define('ostp-files-ember-v2/components/researcher-status-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ostp-files-ember-v2/components/search-dropdown/component', ['exports', 'ember-osf/components/search-dropdown/component'], function (exports, _emberOsfComponentsSearchDropdownComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSearchDropdownComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/sign-up/component', ['exports', 'ember-osf/components/sign-up/component'], function (exports, _emberOsfComponentsSignUpComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSignUpComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/components/tags-widget/component', ['exports', 'ember-osf/components/tags-widget/component'], function (exports, _emberOsfComponentsTagsWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsTagsWidgetComponent['default'];
    }
  });
});
define('ostp-files-ember-v2/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/elem-id', ['exports', 'ember-osf/helpers/elem-id'], function (exports, _emberOsfHelpersElemId) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfHelpersElemId['default'];
    }
  });
  Object.defineProperty(exports, 'elemId', {
    enumerable: true,
    get: function get() {
      return _emberOsfHelpersElemId.elemId;
    }
  });
});
define('ostp-files-ember-v2/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/moment-calendar', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ostp-files-ember-v2/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('ostp-files-ember-v2/helpers/moment-format', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ostp-files-ember-v2/helpers/moment-from-now', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ostp-files-ember-v2/helpers/moment-to-now', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ostp-files-ember-v2/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('ostp-files-ember-v2/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ostp-files-ember-v2/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ostp-files-ember-v2/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('ostp-files-ember-v2/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('ostp-files-ember-v2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ostp-files-ember-v2/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ostpFilesEmberV2ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ostpFilesEmberV2ConfigEnvironment['default'].APP.name, _ostpFilesEmberV2ConfigEnvironment['default'].APP.version)
  };
});
define('ostp-files-ember-v2/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ostp-files-ember-v2/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ostp-files-ember-v2/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define("ostp-files-ember-v2/initializers/ember-i18n", ["exports", "ostp-files-ember-v2/instance-initializers/ember-i18n"], function (exports, _ostpFilesEmberV2InstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _ostpFilesEmberV2InstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _ostpFilesEmberV2InstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('ostp-files-ember-v2/initializers/ember-simple-auth', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _ostpFilesEmberV2ConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _ostpFilesEmberV2ConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('ostp-files-ember-v2/initializers/export-application-global', ['exports', 'ember', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ostpFilesEmberV2ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _ostpFilesEmberV2ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ostp-files-ember-v2/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ostp-files-ember-v2/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ostp-files-ember-v2/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'ostp-files-ember-v2/config/environment'], function (exports, _emberToastrInitializersToastr, _ostpFilesEmberV2ConfigEnvironment) {

  var toastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  var config = _ostpFilesEmberV2ConfigEnvironment['default']['ember-toastr'] || {
    injectAs: 'toast',
    toastrOptions: toastrOptions
  };

  exports['default'] = {
    name: 'ember-toastr',
    initialize: function initialize() {
      // support 1.x and 2.x
      var application = arguments[1] || arguments[0];

      if (!config.toastrOptions) {
        config.toastrOptions = toastrOptions;
      }

      if (!config.injectAs) {
        config.injectAs = 'toast';
      }

      (0, _emberToastrInitializersToastr.initialize)(application, config);
    }
  };
});
define('ostp-files-ember-v2/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ostp-files-ember-v2/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("ostp-files-ember-v2/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("ostp-files-ember-v2/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "ostp-files-ember-v2/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _ostpFilesEmberV2ConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
define('ostp-files-ember-v2/instance-initializers/ember-osf', ['exports', 'ember-osf/instance-initializers/ember-osf'], function (exports, _emberOsfInstanceInitializersEmberOsf) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfInstanceInitializersEmberOsf['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberOsfInstanceInitializersEmberOsf.initialize;
    }
  });
});
define('ostp-files-ember-v2/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('ostp-files-ember-v2/locales/en-us/config', ['exports', 'ember-osf/locales/en-us/config'], function (exports, _emberOsfLocalesEnUsConfig) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsConfig['default'];
    }
  });
});
define('ostp-files-ember-v2/locales/en-us/translations', ['exports', 'ember-osf/locales/en-us/translations'], function (exports, _emberOsfLocalesEnUsTranslations) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsTranslations['default'];
    }
  });
});
define('ostp-files-ember-v2/mixins/osf-login-controller', ['exports', 'ember-osf/mixins/osf-login-controller'], function (exports, _emberOsfMixinsOsfLoginController) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfLoginController['default'];
    }
  });
});
define('ostp-files-ember-v2/mixins/osf-login-route', ['exports', 'ember-osf/mixins/osf-login-route'], function (exports, _emberOsfMixinsOsfLoginRoute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfLoginRoute['default'];
    }
  });
});
define('ostp-files-ember-v2/models/collection', ['exports', 'ember-osf/models/collection'], function (exports, _emberOsfModelsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCollection['default'];
    }
  });
});
define('ostp-files-ember-v2/models/comment-report', ['exports', 'ember-osf/models/comment-report'], function (exports, _emberOsfModelsCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCommentReport['default'];
    }
  });
});
define('ostp-files-ember-v2/models/comment', ['exports', 'ember-osf/models/comment'], function (exports, _emberOsfModelsComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsComment['default'];
    }
  });
});
define('ostp-files-ember-v2/models/contributor', ['exports', 'ember-osf/models/contributor'], function (exports, _emberOsfModelsContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsContributor['default'];
    }
  });
});
define('ostp-files-ember-v2/models/department', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    name: (0, _emberDataAttr['default'])('string')
  });
});
define('ostp-files-ember-v2/models/draft-registration', ['exports', 'ember-osf/models/draft-registration'], function (exports, _emberOsfModelsDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsDraftRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/models/file-provider', ['exports', 'ember-osf/models/file-provider'], function (exports, _emberOsfModelsFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileProvider['default'];
    }
  });
});
define('ostp-files-ember-v2/models/file-version', ['exports', 'ember-osf/models/file-version'], function (exports, _emberOsfModelsFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileVersion['default'];
    }
  });
});
define('ostp-files-ember-v2/models/file', ['exports', 'ember-osf/models/file'], function (exports, _emberOsfModelsFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFile['default'];
    }
  });
});
define('ostp-files-ember-v2/models/grant', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    number: (0, _emberDataAttr['default'])('string'),
    department: (0, _emberDataAttr['default'])('string'),
    document: (0, _emberDataAttr['default'])('string')
  });
});
define('ostp-files-ember-v2/models/institution', ['exports', 'ember-osf/models/institution'], function (exports, _emberOsfModelsInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsInstitution['default'];
    }
  });
});
define('ostp-files-ember-v2/models/log', ['exports', 'ember-osf/models/log'], function (exports, _emberOsfModelsLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsLog['default'];
    }
  });
});
define('ostp-files-ember-v2/models/metaschema', ['exports', 'ember-osf/models/metaschema'], function (exports, _emberOsfModelsMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsMetaschema['default'];
    }
  });
});
define('ostp-files-ember-v2/models/node-link', ['exports', 'ember-osf/models/node-link'], function (exports, _emberOsfModelsNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNodeLink['default'];
    }
  });
});
define('ostp-files-ember-v2/models/node', ['exports', 'ember-osf/models/node'], function (exports, _emberOsfModelsNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNode['default'];
    }
  });
});
define('ostp-files-ember-v2/models/osf-model', ['exports', 'ember-osf/models/osf-model'], function (exports, _emberOsfModelsOsfModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsOsfModel['default'];
    }
  });
});
define('ostp-files-ember-v2/models/registration', ['exports', 'ember-osf/models/registration'], function (exports, _emberOsfModelsRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/models/user', ['exports', 'ember-osf/models/user'], function (exports, _emberOsfModelsUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsUser['default'];
    }
  });
});
define('ostp-files-ember-v2/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ostp-files-ember-v2/router', ['exports', 'ember', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ostpFilesEmberV2ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('researcher');
    this.route('admin');
    this.route('login');
    this.route('settings');
  });

  exports['default'] = Router;
});
define('ostp-files-ember-v2/routes/admin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ostp-files-ember-v2/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend();
});
define('ostp-files-ember-v2/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ostp-files-ember-v2/routes/researcher', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      validateForm: function validateForm() {
        //this.controller.get("isFileUploaded")
        this.controller.set("isFileUploaded", true);
      }
    },
    model: function model() {
      return _ember['default'].RSVP.hash({
        departments: this.get('store').findAll('department'),
        grants: this.get('store').findAll('grant')
      });
    },
    setupController: function setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', false);
    }
  });
});
define('ostp-files-ember-v2/routes/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ostp-files-ember-v2/serializers/collection', ['exports', 'ember-osf/serializers/collection'], function (exports, _emberOsfSerializersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCollection['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/comment-report', ['exports', 'ember-osf/serializers/comment-report'], function (exports, _emberOsfSerializersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCommentReport['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/comment', ['exports', 'ember-osf/serializers/comment'], function (exports, _emberOsfSerializersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersComment['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/contributor', ['exports', 'ember-osf/serializers/contributor'], function (exports, _emberOsfSerializersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersContributor['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/draft-registration', ['exports', 'ember-osf/serializers/draft-registration'], function (exports, _emberOsfSerializersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersDraftRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/file-contents', ['exports', 'ember-osf/serializers/file-contents'], function (exports, _emberOsfSerializersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileContents['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/file-provider', ['exports', 'ember-osf/serializers/file-provider'], function (exports, _emberOsfSerializersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileProvider['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/file-version', ['exports', 'ember-osf/serializers/file-version'], function (exports, _emberOsfSerializersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileVersion['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/file', ['exports', 'ember-osf/serializers/file'], function (exports, _emberOsfSerializersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFile['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/institution', ['exports', 'ember-osf/serializers/institution'], function (exports, _emberOsfSerializersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersInstitution['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/metaschema', ['exports', 'ember-osf/serializers/metaschema'], function (exports, _emberOsfSerializersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersMetaschema['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/node-link', ['exports', 'ember-osf/serializers/node-link'], function (exports, _emberOsfSerializersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNodeLink['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/node', ['exports', 'ember-osf/serializers/node'], function (exports, _emberOsfSerializersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNode['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/osf-serializer', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersOsfSerializer['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/registration', ['exports', 'ember-osf/serializers/registration'], function (exports, _emberOsfSerializersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersRegistration['default'];
    }
  });
});
define('ostp-files-ember-v2/serializers/user', ['exports', 'ember-osf/serializers/user'], function (exports, _emberOsfSerializersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersUser['default'];
    }
  });
});
define('ostp-files-ember-v2/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ostp-files-ember-v2/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _emberOsfServicesCurrentUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesCurrentUser['default'];
    }
  });
});
define('ostp-files-ember-v2/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _emberOsfServicesFileManager) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesFileManager['default'];
    }
  });
});
define('ostp-files-ember-v2/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('ostp-files-ember-v2/services/moment', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('ostp-files-ember-v2/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('ostp-files-ember-v2/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _emberToastrServicesToast) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberToastrServicesToast['default'];
    }
  });
});
define('ostp-files-ember-v2/services/validations', ['exports', 'ember'], function (exports, _ember) {

  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});
define('ostp-files-ember-v2/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("ostp-files-ember-v2/templates/admin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/admin.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", " btn btn-default admin-settings-button");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-cog");
          dom.setAttribute(el2, "aria-hidden", "true");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Settings");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 26
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/admin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Admin");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["block", "link-to", ["settings"], ["tagName", "span"], 0, null, ["loc", [null, [3, 0], [5, 12]]]], ["content", "department-file-viewer", ["loc", [null, [6, 0], [6, 26]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ostp-files-ember-v2/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "m-b-xl");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["content", "osf-navbar", ["loc", [null, [2, 2], [2, 16]]]], ["content", "outlet", ["loc", [null, [4, 2], [4, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/components/department-file-viewer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 109,
            "column": 8
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/department-file-viewer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "table tb-file-viewer-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        dom.setAttribute(el2, "class", "thead-default");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "width", "17%; padding-right:120px;");
        var el5 = dom.createTextNode("Grant Number");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "width", "7%");
        var el5 = dom.createTextNode("PI");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "width", "7%");
        var el5 = dom.createTextNode("Date Submitted");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "width", "10%");
        var el5 = dom.createTextNode("Date Published");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("PI Email");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "document-list");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "document");
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "less-info");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-file-text");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "grant-number");
        var el5 = dom.createTextNode("##########");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "pi");
        var el5 = dom.createTextNode("Leo Leo");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "date-submitted");
        var el5 = dom.createTextNode("99/99/99");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "date-published");
        var el5 = dom.createTextNode("1/1/1");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "pi-email");
        var el5 = dom.createTextNode("pi-email@email.email");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "action-buttons");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "more-info-button");
        var el5 = dom.createTextNode("More Info");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "caret");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "view-document-button");
        var el5 = dom.createTextNode("View Document");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "caret");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Download");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "more-info");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        dom.setAttribute(el7, "scope", "row");
        var el8 = dom.createTextNode("\n                    File Name\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        dom.setAttribute(el7, "class", "fileName");
        dom.setAttribute(el7, "colspan", "2");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("ul");
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("The Sythesis of Eicosanoyl-5-Hydroxytryptamide in Mammalian Tissue");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createElement("a");
        dom.setAttribute(el10, "href", "osf.io/federal/document/594fji");
        var el11 = dom.createTextNode("osf.io/federal/document/594fji");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        dom.setAttribute(el7, "scope", "row");
        var el8 = dom.createTextNode("\n                    Affiliation\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        dom.setAttribute(el7, "class", "affiliation");
        dom.setAttribute(el7, "colspan", "2");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("ul");
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("Publisher: CellPress");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("Institution: University of Virginia");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        dom.setAttribute(el7, "scope", "row");
        var el8 = dom.createTextNode("\n                    Status\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        dom.setAttribute(el7, "class", " ");
        dom.setAttribute(el7, "colspan", "2");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "btn-success");
        var el9 = dom.createTextNode("Approved");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        dom.setAttribute(el7, "scope", "row");
        var el8 = dom.createTextNode("\n                    Principal Investigator\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        dom.setAttribute(el7, "class", " ");
        dom.setAttribute(el7, "colspan", "2");
        var el8 = dom.createTextNode("\n                    Leo Leo - pi-email@email.email\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        dom.setAttribute(el7, "scope", "row");
        var el8 = dom.createTextNode("\n                    Author(s)\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        dom.setAttribute(el7, "class", " ");
        dom.setAttribute(el7, "colspan", "2");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("ul");
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("Cameron Blandford");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("Carolyn Stewart");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                      ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("li");
        var el10 = dom.createTextNode("Ryan Mason");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n           ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "view-document");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n\n\n\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["element", "action", ["moreInfo", ["get", "this", ["loc", [null, [29, 57], [29, 61]]]]], [], ["loc", [null, [29, 37], [29, 63]]]], ["element", "action", ["viewDocument", ["get", "this", ["loc", [null, [30, 65], [30, 69]]]]], [], ["loc", [null, [30, 41], [30, 71]]]], ["content", "file-renderer", ["loc", [null, [100, 8], [100, 25]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/components/dropzone-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/dropzone-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/components/f-login-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/components/f-login-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Submit\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 6
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/f-login-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("link");
        dom.setAttribute(el1, "href", "http://fonts.googleapis.com/css?family=Montserrat:400,700");
        dom.setAttribute(el1, "rel", "stylesheet");
        dom.setAttribute(el1, "type", "text/css");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login-block");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Login");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "value", "");
        dom.setAttribute(el2, "placeholder", "Username");
        dom.setAttribute(el2, "id", "username");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "password");
        dom.setAttribute(el2, "value", "");
        dom.setAttribute(el2, "placeholder", "Password");
        dom.setAttribute(el2, "id", "password");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 7, 7);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "link-to", ["admin"], ["tagName", "button"], 0, null, ["loc", [null, [10, 2], [12, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ostp-files-ember-v2/templates/components/meta-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 6
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/meta-data.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block meataData");
        var el3 = dom.createTextNode(" Submit Document ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createElementMorph(element1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "schema", ["loc", [null, [3, 24], [3, 30]]]]], [], []]], ["loc", [null, [3, 2], [3, 32]]]], ["element", "action", ["validateForm", ["get", "model", ["loc", [null, [4, 86], [4, 91]]]]], [], ["loc", [null, [4, 62], [4, 93]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/components/researcher-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 9,
              "column": 6
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'selected');
          morphs[1] = dom.createAttrMorph(element0, 'value');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "department", ["loc", [null, [8, 30], [8, 40]]]], ["get", "departmentChoice", ["loc", [null, [8, 41], [8, 57]]]]], [], ["loc", [null, [8, 25], [8, 59]]]]], ["attribute", "value", ["get", "departmentChoice", ["loc", [null, [8, 68], [8, 84]]]]], ["content", "departmentChoice.name", ["loc", [null, [8, 87], [8, 112]]]]],
        locals: ["departmentChoice"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dropdownHolder");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "class", "departmentSelect select");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-success addFunding");
        var el3 = dom.createTextNode("Submit Grant Information");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
        var el3 = dom.createTextNode(" Next ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element1, [9]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element3, 'onchange');
        morphs[2] = dom.createMorphAt(element3, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        morphs[4] = dom.createElementMorph(element4);
        morphs[5] = dom.createMorphAt(element1, 5, 5);
        morphs[6] = dom.createMorphAt(element1, 7, 7);
        morphs[7] = dom.createElementMorph(element5);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["attribute", "onchange", ["subexpr", "action", ["selectDepartment"], ["value", "target.value"], ["loc", [null, [6, 53], [6, 103]]]]], ["block", "each", [["get", "model.departments", ["loc", [null, [7, 14], [7, 31]]]]], [], 0, null, ["loc", [null, [7, 6], [9, 15]]]], ["inline", "input", [], ["type", "text", "name", "department", "class", "grantNumber", "placeholder", "Grant Number", "key-press", "updateGrantNumber"], ["loc", [null, [11, 4], [11, 132]]]], ["element", "action", ["submit"], [], ["loc", [null, [14, 45], [14, 64]]]], ["content", "file-chooser", ["loc", [null, [16, 2], [16, 18]]]], ["content", "file-renderer", ["loc", [null, [17, 2], [17, 19]]]], ["element", "action", ["validateForm", ["get", "model", ["loc", [null, [19, 86], [19, 91]]]]], [], ["loc", [null, [19, 62], [19, 93]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ostp-files-ember-v2/templates/components/researcher-status-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/researcher-status-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "statusHolder");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Researchers");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode(" 1 / 4");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary btn-lg btn-block");
          var el2 = dom.createTextNode("Upload Document");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 4
            },
            "end": {
              "line": 18,
              "column": 4
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-success");
          var el2 = dom.createTextNode("Review Submissions");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "researchers-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Researchers");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Upload your research projects to be reviewed.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "admin-table");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Administrators");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Login as Administrator to review submissions.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 7, 7);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["researcher"], ["tagName", "span"], 0, null, ["loc", [null, [6, 2], [8, 14]]]], ["block", "link-to", ["login"], ["tagName", "span"], 1, null, ["loc", [null, [16, 4], [18, 16]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ostp-files-ember-v2/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "f-login-form", ["loc", [null, [2, 0], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ostp-files-ember-v2/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 12
            },
            "end": {
              "line": 5,
              "column": 69
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/navbar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "");
          var el2 = dom.createTextNode("Dashboard");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 26
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/navbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el1, "id", "navbarScope");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "navbar-brand hidden-sm hidden-xs");
        dom.setAttribute(el2, "href", "/");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "https://osf.io/static/img/cos-white2.png");
        dom.setAttribute(el3, "class", "osf-navbar-logo");
        dom.setAttribute(el3, "width", "27");
        dom.setAttribute(el3, "alt", "COS logo");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Open Science Framework");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "collapse navbar-collapse");
        dom.setAttribute(el2, "id", "main-navbar");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "nav navbar-nav nav-dashboard");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "m-b-xl");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["tagName", "li"], 0, null, ["loc", [null, [5, 12], [5, 81]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ostp-files-ember-v2/templates/researcher", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/researcher.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "meta-data", ["loc", [null, [5, 2], [5, 16]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/researcher.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("showMetaData=(action 'validateForm' model)");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "researcher-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [7, 26], [7, 31]]]]], [], []], "data", ["subexpr", "@mut", [["get", "model", ["loc", [null, [7, 37], [7, 42]]]]], [], []], "validateForm", "validateForm"], ["loc", [null, [7, 2], [7, 72]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/researcher.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "researcher-status-header", ["loc", [null, [2, 0], [2, 28]]]], ["block", "if", [["get", "isFileUploaded", ["loc", [null, [4, 6], [4, 20]]]]], [], 0, 1, ["loc", [null, [4, 0], [9, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ostp-files-ember-v2/templates/settings", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/settings.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "settingsHolder");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "metadataJson");
        var el3 = dom.createTextNode("Meta Data (Json format)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("textarea");
        dom.setAttribute(el2, "id", "metadataJson");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "button");
        dom.setAttribute(el2, "class", "btn btn-primary");
        dom.setAttribute(el2, "style", "float:right;");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-floppy-o");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Save");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ostp-files-ember-v2/transforms/embed', ['exports', 'ember-osf/transforms/embed'], function (exports, _emberOsfTransformsEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsEmbed['default'];
    }
  });
});
define('ostp-files-ember-v2/transforms/links', ['exports', 'ember-osf/transforms/links'], function (exports, _emberOsfTransformsLinks) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsLinks['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/array-items-are-equal', ['exports', 'ember-osf/utils/array-items-are-equal'], function (exports, _emberOsfUtilsArrayItemsAreEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsArrayItemsAreEqual['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/auth', ['exports', 'ember-osf/utils/auth'], function (exports, _emberOsfUtilsAuth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAuth['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/load-relationship', ['exports', 'ember-osf/utils/load-relationship'], function (exports, _emberOsfUtilsLoadRelationship) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsLoadRelationship['default'];
    }
  });
});
define('ostp-files-ember-v2/utils/serialize-relationship', ['exports', 'ember-osf/utils/serialize-relationship'], function (exports, _emberOsfUtilsSerializeRelationship) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsSerializeRelationship['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _emberCpValidationsValidatorsAlias) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsAlias['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _emberCpValidationsValidatorsBelongsTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsBelongsTo['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _emberCpValidationsValidatorsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsCollection['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _emberCpValidationsValidatorsConfirmation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsConfirmation['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _emberCpValidationsValidatorsDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDate['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _emberCpValidationsValidatorsDependent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDependent['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _emberCpValidationsValidatorsDsError) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDsError['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _emberCpValidationsValidatorsExclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsExclusion['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _emberCpValidationsValidatorsFormat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsFormat['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _emberCpValidationsValidatorsHasMany) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsHasMany['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _emberCpValidationsValidatorsInclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsInclusion['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _emberCpValidationsValidatorsLength) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsLength['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _emberCpValidationsValidatorsMessages) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsMessages['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _emberCpValidationsValidatorsNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsNumber['default'];
    }
  });
});
define('ostp-files-ember-v2/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _emberCpValidationsValidatorsPresence) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsPresence['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ostp-files-ember-v2/config/environment', ['ember'], function(Ember) {
  var prefix = 'ostp-files-ember-v2';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ostp-files-ember-v2/app")["default"].create({"name":"ostp-files-ember-v2","version":"0.0.0+fd8461e5"});
}

/* jshint ignore:end */
//# sourceMappingURL=ostp-files-ember-v2.map