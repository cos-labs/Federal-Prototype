"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('ostp-files-ember-v2/components/f-login-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
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
define('ostp-files-ember-v2/controllers/researcher', ['exports', 'ember', 'ember-validations'], function (exports, _ember, _emberValidations) {
  exports['default'] = _ember['default'].Controller.extend(_emberValidations['default'], {});
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
define('ostp-files-ember-v2/models/grant', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    grantDepartmentName: (0, _emberDataAttr['default'])('string'),
    grantNumber: (0, _emberDataAttr['default'])('string')
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
    model: function model() {
      return this.store.peekAll('grant');
    }
  });
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
            "line": 2,
            "column": 14
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
define("ostp-files-ember-v2/templates/components/researcher-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 10,
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
            morphs[0] = dom.createAttrMorph(element0, 'value');
            morphs[1] = dom.createAttrMorph(element0, 'selected');
            morphs[2] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "departmentChoice", ["loc", [null, [9, 24], [9, 40]]]]], ["attribute", "selected", ["subexpr", "eq", [["get", "department", ["loc", [null, [9, 57], [9, 67]]]], ["get", "departmentChoice", ["loc", [null, [9, 68], [9, 84]]]]], [], ["loc", [null, [9, 52], [9, 86]]]]], ["content", "departmentChoice", ["loc", [null, [9, 87], [9, 107]]]]],
          locals: ["departmentChoice"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("select");
          dom.setAttribute(el1, "class", "departmentSelect select");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", ["selectDepartment", ["get", "g", ["loc", [null, [7, 81], [7, 82]]]]], [], ["loc", [null, [7, 53], [7, 84]]]]], ["block", "each", [["get", "departments", ["loc", [null, [8, 14], [8, 25]]]]], [], 0, null, ["loc", [null, [8, 6], [10, 15]]]]],
        locals: ["g"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 8
              },
              "end": {
                "line": 23,
                "column": 8
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
            var el1 = dom.createTextNode("           ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "inline-block");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["content", "g.grantDepartmentName", ["loc", [null, [21, 36], [21, 61]]]], ["inline", "input", [], ["type", "text", "name", "department", "class", "grantNumber", "placeholder", "Grand Number", "value", ["subexpr", "@mut", [["get", "model.grantNumber", ["loc", [null, [22, 101], [22, 118]]]]], [], []]], ["loc", [null, [22, 10], [22, 121]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 24,
              "column": 8
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
        statements: [["block", "if", [["get", "g.grantDepartmentName", ["loc", [null, [20, 14], [20, 35]]]]], [], 0, null, ["loc", [null, [20, 8], [23, 15]]]]],
        locals: ["g"],
        templates: [child0]
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
            "line": 34,
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-success  addfunding");
        var el3 = dom.createTextNode("Add more Funding Options");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "grantNumberHolder");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "text-center grantNumber");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
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
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block meataData");
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
        var element2 = dom.childAt(fragment, [2]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element2, [11]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [5, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(element2, 7, 7);
        morphs[5] = dom.createMorphAt(element2, 9, 9);
        morphs[6] = dom.createElementMorph(element4);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "each", [["get", "model", ["loc", [null, [6, 12], [6, 17]]]]], [], 0, null, ["loc", [null, [6, 4], [12, 13]]]], ["element", "action", ["addDropDown"], [], ["loc", [null, [15, 46], [15, 71]]]], ["block", "each", [["get", "model", ["loc", [null, [19, 16], [19, 21]]]]], [], 1, null, ["loc", [null, [19, 8], [24, 17]]]], ["content", "file-chooser", ["loc", [null, [28, 2], [28, 18]]]], ["content", "file-renderer", ["loc", [null, [29, 2], [29, 19]]]], ["element", "action", ["validateForm", ["get", "model", ["loc", [null, [31, 87], [31, 92]]]]], [], ["loc", [null, [31, 63], [31, 94]]]]],
      locals: [],
      templates: [child0, child1]
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
            "line": 22,
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
        dom.setAttribute(el1, "class", "resarchers-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Resarchers");
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
        var el1 = dom.createTextNode("\n\n\n");
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
            "line": 4,
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "researcher-status-header", ["loc", [null, [2, 0], [2, 28]]]], ["inline", "researcher-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 24], [3, 29]]]]], [], []], "data", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 35], [3, 40]]]]], [], []]], ["loc", [null, [3, 0], [3, 42]]]]],
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
  require("ostp-files-ember-v2/app")["default"].create({"name":"ostp-files-ember-v2","version":"0.0.0+7114b564"});
}

/* jshint ignore:end */
//# sourceMappingURL=ostp-files-ember-v2.map