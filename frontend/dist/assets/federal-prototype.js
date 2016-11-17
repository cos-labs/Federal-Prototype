"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('federal-prototype/adapters/application', ['exports', 'ember-data/adapters/json-api', 'federal-prototype/config/environment'], function (exports, _emberDataAdaptersJsonApi, _federalPrototypeConfigEnvironment) {
    exports['default'] = _emberDataAdaptersJsonApi['default'].extend({

        host: _federalPrototypeConfigEnvironment['default'].APP.GRANTS_BACKEND,

        buildURL: function buildURL(type, id, record) {
            //call the default buildURL and then append a slash
            // return this._super(type, id, record) + '/';
            return this._super(type, id, record);
        }

    });
});
define('federal-prototype/adapters/collection', ['exports', 'ember-osf/adapters/collection'], function (exports, _emberOsfAdaptersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCollection['default'];
    }
  });
});
define('federal-prototype/adapters/comment-report', ['exports', 'ember-osf/adapters/comment-report'], function (exports, _emberOsfAdaptersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCommentReport['default'];
    }
  });
});
define('federal-prototype/adapters/comment', ['exports', 'ember-osf/adapters/comment'], function (exports, _emberOsfAdaptersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersComment['default'];
    }
  });
});
define('federal-prototype/adapters/contributor', ['exports', 'ember-osf/adapters/contributor'], function (exports, _emberOsfAdaptersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersContributor['default'];
    }
  });
});
define('federal-prototype/adapters/draft-registration', ['exports', 'ember-osf/adapters/draft-registration'], function (exports, _emberOsfAdaptersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersDraftRegistration['default'];
    }
  });
});
define('federal-prototype/adapters/file-contents', ['exports', 'ember-osf/adapters/file-contents'], function (exports, _emberOsfAdaptersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileContents['default'];
    }
  });
});
define('federal-prototype/adapters/file-provider', ['exports', 'ember-osf/adapters/file-provider'], function (exports, _emberOsfAdaptersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileProvider['default'];
    }
  });
});
define('federal-prototype/adapters/file-version', ['exports', 'ember-osf/adapters/file-version'], function (exports, _emberOsfAdaptersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileVersion['default'];
    }
  });
});
define('federal-prototype/adapters/file', ['exports', 'ember-osf/adapters/file'], function (exports, _emberOsfAdaptersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFile['default'];
    }
  });
});
define('federal-prototype/adapters/institution', ['exports', 'ember-osf/adapters/institution'], function (exports, _emberOsfAdaptersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersInstitution['default'];
    }
  });
});
define('federal-prototype/adapters/log', ['exports', 'ember-osf/adapters/log'], function (exports, _emberOsfAdaptersLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersLog['default'];
    }
  });
});
define('federal-prototype/adapters/metaschema', ['exports', 'ember-osf/adapters/metaschema'], function (exports, _emberOsfAdaptersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersMetaschema['default'];
    }
  });
});
define('federal-prototype/adapters/node-link', ['exports', 'ember-osf/adapters/node-link'], function (exports, _emberOsfAdaptersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNodeLink['default'];
    }
  });
});
define('federal-prototype/adapters/node', ['exports', 'ember-osf/adapters/node'], function (exports, _emberOsfAdaptersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNode['default'];
    }
  });
});
define('federal-prototype/adapters/osf-adapter', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersOsfAdapter['default'];
    }
  });
});
define('federal-prototype/adapters/registration', ['exports', 'ember-osf/adapters/registration'], function (exports, _emberOsfAdaptersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersRegistration['default'];
    }
  });
});
define('federal-prototype/adapters/user', ['exports', 'ember-osf/adapters/user'], function (exports, _emberOsfAdaptersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersUser['default'];
    }
  });
});
define('federal-prototype/app', ['exports', 'ember', 'federal-prototype/resolver', 'ember-load-initializers', 'federal-prototype/config/environment'], function (exports, _ember, _federalPrototypeResolver, _emberLoadInitializers, _federalPrototypeConfigEnvironment) {

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = _ember['default'].Application.extend({
    modulePrefix: _federalPrototypeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _federalPrototypeConfigEnvironment['default'].podModulePrefix,
    Resolver: _federalPrototypeResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _federalPrototypeConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("federal-prototype/authenticators/oauth2", ["exports"], function (exports) {});
define('federal-prototype/authenticators/osf-cookie', ['exports', 'ember-osf/authenticators/osf-cookie'], function (exports, _emberOsfAuthenticatorsOsfCookie) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthenticatorsOsfCookie['default'];
    }
  });
});
define('federal-prototype/authenticators/osf-token', ['exports', 'ember-osf/authenticators/osf-token'], function (exports, _emberOsfAuthenticatorsOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthenticatorsOsfToken['default'];
    }
  });
});
define('federal-prototype/authorizers/osf-cookie', ['exports', 'ember-osf/authorizers/osf-cookie'], function (exports, _emberOsfAuthorizersOsfCookie) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthorizersOsfCookie['default'];
    }
  });
});
define('federal-prototype/authorizers/osf-token', ['exports', 'ember-osf/authorizers/osf-token'], function (exports, _emberOsfAuthorizersOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthorizersOsfToken['default'];
    }
  });
});
define('federal-prototype/components/analytics', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('federal-prototype/components/api-tab', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      this._super.apply(this, arguments);
    }
  });
});
define('federal-prototype/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'federal-prototype/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _federalPrototypeConfigEnvironment) {

  var name = _federalPrototypeConfigEnvironment['default'].APP.name;
  var version = _federalPrototypeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('federal-prototype/components/comment-detail/component', ['exports', 'ember-osf/components/comment-detail/component'], function (exports, _emberOsfComponentsCommentDetailComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentDetailComponent['default'];
    }
  });
});
define('federal-prototype/components/comment-form/component', ['exports', 'ember-osf/components/comment-form/component'], function (exports, _emberOsfComponentsCommentFormComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentFormComponent['default'];
    }
  });
});
define('federal-prototype/components/comment-pane/component', ['exports', 'ember-osf/components/comment-pane/component'], function (exports, _emberOsfComponentsCommentPaneComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentPaneComponent['default'];
    }
  });
});
define('federal-prototype/components/dropzone-widget', ['exports', 'ember', 'federal-prototype/components/template'], function (exports, _ember, _federalPrototypeComponentsTemplate) {
    exports['default'] = _ember['default'].Component.extend({
        layout: _federalPrototypeComponentsTemplate['default'],
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
define('federal-prototype/components/dropzone-widget/component', ['exports', 'ember-osf/components/dropzone-widget/component'], function (exports, _emberOsfComponentsDropzoneWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsDropzoneWidgetComponent['default'];
    }
  });
});
define('federal-prototype/components/dynamic-form', ['exports', 'ember-cli-dynamic-forms/components/dynamic-form'], function (exports, _emberCliDynamicFormsComponentsDynamicForm) {
  exports['default'] = _emberCliDynamicFormsComponentsDynamicForm['default'];
});
define('federal-prototype/components/eosf-project-nav/component', ['exports', 'ember-osf/components/eosf-project-nav/component'], function (exports, _emberOsfComponentsEosfProjectNavComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsEosfProjectNavComponent['default'];
    }
  });
});
define('federal-prototype/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('federal-prototype/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('federal-prototype/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('federal-prototype/components/file-browser-icon/component', ['exports', 'ember-osf/components/file-browser-icon/component'], function (exports, _emberOsfComponentsFileBrowserIconComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserIconComponent['default'];
    }
  });
});
define('federal-prototype/components/file-browser-item/component', ['exports', 'ember-osf/components/file-browser-item/component'], function (exports, _emberOsfComponentsFileBrowserItemComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserItemComponent['default'];
    }
  });
});
define('federal-prototype/components/file-browser-tree/component', ['exports', 'ember-osf/components/file-browser-tree/component'], function (exports, _emberOsfComponentsFileBrowserTreeComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserTreeComponent['default'];
    }
  });
});
define('federal-prototype/components/file-browser/component', ['exports', 'ember-osf/components/file-browser/component'], function (exports, _emberOsfComponentsFileBrowserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserComponent['default'];
    }
  });
});
define('federal-prototype/components/file-chooser/component', ['exports', 'ember-osf/components/file-chooser/component'], function (exports, _emberOsfComponentsFileChooserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileChooserComponent['default'];
    }
  });
});
define('federal-prototype/components/file-renderer/component', ['exports', 'ember-osf/components/file-renderer/component'], function (exports, _emberOsfComponentsFileRendererComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileRendererComponent['default'];
    }
  });
});
define('federal-prototype/components/file-version/component', ['exports', 'ember-osf/components/file-version/component'], function (exports, _emberOsfComponentsFileVersionComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileVersionComponent['default'];
    }
  });
});
define('federal-prototype/components/file-widget/component', ['exports', 'ember-osf/components/file-widget/component'], function (exports, _emberOsfComponentsFileWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileWidgetComponent['default'];
    }
  });
});
define('federal-prototype/components/form-builder', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('federal-prototype/components/grant-action-button', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        //pipeline: {
        //    'New': ['Request Metadata', 'Pending PI Response'],
        //    '.unread': ['Request Metadata', 'Pending PI Response'],
        //    'Pending PI Response': ['Resend Request', 'Pending PI Response'],
        //    'Metadata Complete': ['', 'Approval'],
        //    '': ['Send Message to Agency', 'Send Message to Agency'],
        //},

        availableactions: [],

        router: _ember['default'].inject.service('router'),

        didReceiveAttrs: function didReceiveAttrs() {
            function getAvailableActions(grant, role) {
                var options = [];
                if (grant.get('open')) {
                    if (!grant.get('pi') && role === 'institution') {
                        options.push('Assign to a PI');
                    }
                    if (["", undefined, "/dev/null"].indexOf(grant.get('document').get('path')) !== -1) {
                        if (role !== 'pi' && !grant.get('uploadrequested')) {
                            options.push('Request Upload');
                        }
                        if (role !== 'agency') {
                            options.push('Upload');
                        }
                    } else {
                        options.push('View Document');
                        console.log(grant.get('metadata'));
                        if (grant.get('metadata') === '{}') {
                            if (role !== 'pi' && !grant.get('metadatarequested')) {
                                options.push('Request Metadata');
                            }
                            if (role !== 'agency') {
                                options.push('Add Metadata');
                            }
                        } else {
                            options.push('View Metadata');
                        }
                    }
                }
                if (role !== 'pi' && grant.pi) {
                    options.push('Message PI');
                }
                if (role !== 'institution' && grant.institution) {
                    options.push('Message Institution');
                }
                if (role !== 'agency') {
                    options.push('Message Agency');
                    if (grant.open && ['Submitted', 'Completed'].indexOf(grant.status) !== -1) {
                        options.push('Edit');
                        if (!grant.institution || grant.institution && role === 'institution') {
                            options.push('Submit');
                        }
                    }
                } else {
                    if (grant.open) {
                        options.push('Completed');
                    } else {
                        options.push('Reopen');
                    }
                }
                return options;
            }
            this.set('availableactions', getAvailableActions(this.get('grant'), this.get('role')));
        },

        actions: {
            clickHandler: function clickHandler(action) {
                var self = this;
                var grant = this.get('grant');
                var role = this.get('role');
                var actions = {

                    "Upload": function Upload() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'File Uploaded');
                        });
                        grant.save().then(function () {
                            self.get('router').transitionTo('researcher.attach').then(function (route) {
                                _ember['default'].run.schedule('afterRender', self, function () {
                                    route.get('controller').set('grant', grant);
                                    grant.set('uploadrequested', false);
                                });
                            });
                        });
                    },

                    "Request Upload": function RequestUpload() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Pending Research Upload');
                        });
                        if (role === 'agency') {
                            ['status', 'pistatus', 'institutionstatus'].map(function (att) {
                                grant.set(att, 'Research Upload Requested');
                            });
                        }
                        if (role === 'institution') {
                            ['status', 'pistatus'].map(function (att) {
                                grant.set(att, 'Research Upload Requested');
                            });
                        }
                        grant.set('uploadrequested', true);
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("A request to upload the research for grant number " + grant.get('number') + ". has been sent", { type: 'info', align: 'center', width: 400, height: 40 });
                        });
                        grant.save();
                    },

                    "Add Metadata": function AddMetadata() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Metadata Added');
                        });
                        grant.set('metadatarequested', false);
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Metadata has been added to grant number " + grant.get('number') + ".", { type: 'success', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Request Metadata": function RequestMetadata() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Pending Research Upload');
                        });
                        if (role === 'agency') {
                            ['status', 'pistatus', 'institutionstatus'].map(function (att) {
                                grant.set(att, 'Research Upload Requested');
                            });
                        }
                        if (role === 'institution') {
                            ['status', 'pistatus'].map(function (att) {
                                grant.set(att, 'Research Upload Requested');
                            });
                        }
                        grant.set('metadatarequested', true);
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("A request for metadata to be added to grant number " + grant.get('number') + " has been sent.", { type: 'info', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Assign to a PI": function AssignToAPI() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'PI Assigned');
                        });
                        grant.set('pistatus', "New");
                        self.get('router').transitionTo('institution.assign').then(function (route) {
                            _ember['default'].run.schedule('afterRender', self, function () {
                                route.get('controller').set('grant', grant);
                            });
                        });
                    },
                    "View Metadata": function ViewMetadata() {
                        console.log('Displaying grant metadata...');
                    },
                    "View Document": function ViewDocument() {
                        console.log('Displaying document...');
                        self.get('router').transitionTo('preview').then(function (route) {
                            _ember['default'].run.schedule('afterRender', self, function () {
                                route.get('controller').set('back', grant.get('document.path'));
                                route.get('controller').send('fetch', grant);
                            });
                        });
                    },

                    "Message PI": function MessagePI() {
                        if (role === 'agency') {
                            grant.set('agencystatus', 'Pending PI Response');
                        }
                        if (role === 'institution') {
                            grant.set('institutionstatus', 'Pending PI Response');
                        }
                        grant.set('pistatus', 'Message Waiting');
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("A message regarding " + grant.get('number') + " has been sent to the primary investigator.", { type: 'info', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Message Institution": function MessageInstitution() {
                        if (role === 'pi') {
                            grant.set('pistatus', 'Pending Institution Response');
                        }
                        if (role === 'agency') {
                            grant.set('agencystatus', 'Pending Institution Response');
                        }
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("A message regarding " + grant.get('number') + " has been sent to the institution.", { type: 'info', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Message Agency": function MessageAgency() {
                        grant.set('status', 'Pending Agency Response');
                        if (role === 'pi') {
                            grant.set('pistatus', 'Pending Agency Response');
                        }
                        if (role === 'institution') {
                            grant.set('institutionstatus', 'Pending Agency Response');
                        }
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("A message regarding grant number " + grant.get('number') + " has been sent to the agency.", { type: 'info', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Reopen": function Reopen() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Reopened');
                        });
                        grant.set('status', 'Reopened');
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Grant number " + grant.get('number') + " has been reopened by the agency.", { type: 'warning', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Submit": function Submit() {
                        ['status', 'pistatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Submitted');
                        });
                        grant.set('agencystatus', 'Ready for Review');
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Succesfully submitted grant number " + grant.get('number') + " for agency approval.", { type: 'success', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Completed": function Completed() {
                        ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map(function (att) {
                            grant.set(att, 'Completed');
                        });
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Agency has accepted and approved grant number " + grant.get('number') + ".", { type: 'success', align: 'center', width: 400, height: 40 });
                        });
                    },

                    "Edit": function Edit() {
                        if (role === 'pi') {
                            grant.set('pistatus', 'Grant Information Updated');
                        }
                        if (role === 'institution') {
                            grant.set('institutionstatus', 'Grant Information Updated');
                        }
                        if (role === 'agency') {
                            grant.set('agencystatus', 'Grant Information Updated');
                        }
                        grant.set('status', 'Grant Information Updated');
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Succesfully updated grant information for grant number " + grant.get('number') + ".", { type: 'success', align: 'center', width: 400, height: 40 });
                        });
                    }

                };
                actions[action]();
            }
        }

    });
});
define('federal-prototype/components/grant-viewer', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        datepublished: '',
        pi: '',
        piemail: '',
        currentPage: 1,
        notlastpage: true,
        notfirstpage: false,
        roleIsInstitution: _ember['default'].computed('role', function () {
            return this.get('role') === 'institution';
        }),
        roleIsAgency: _ember['default'].computed('role', function () {
            return this.get('role') === 'agency';
        }),
        roleIsPI: _ember['default'].computed('role', function () {
            return this.get('role') === 'pi';
        }),
        didInsertElement: function didInsertElement() {
            /*var answers = this.grant.get('answers');
            this.set('pi', answers['pi']);
            this.set('datepublished', answers['date-published']);
            this.set('piemail', answers['pi-email']);
            var moreInfoHTML = '<table> <tbody>';
            var moreInfoHTML =  $(".more-info-buttons").html();
              for (var prop in answers) {
                moreInfoHTML += '<tr> <th scope="row"> '+prop+' </th> <td class="affiliation" colspan="2">'+ answers[prop]+' </td> </tr>';
            }
            moreInfoHTML += ' </tbody> </table>';
            jsonArray.push(moreInfoHTML);
             console.log(jsonArray.length, jsonArray)
            for(var k = 0; k <= jsonArray.length; k++){
                $(".more-info-content").eq(k).html(jsonArray[k]);
             }*/

        },

        //afterModel() {
        //    this._super(...arguments);
        //    this.set('answers', this.grant.get('answers'));
        //    this.set('pi', this.get('answers')['pi']);
        //},

        actions: {
            updateStatus: function updateStatus(arg) {
                console.log(arg);
            },
            jumpToPage: function jumpToPage(page_number) {
                console.log(page_number);
                this.attrs.getGrantsPage(page_number);
            },
            nextPageHook: function nextPageHook() {
                var pagination = this.get('model').get('meta.pagination');
                console.log(pagination);
                var next_page = pagination.page + 1;
                if (next_page > pagination.pages) {
                    return;
                }
                this.send('jumpToPage', next_page);
            },
            prevPageHook: function prevPageHook() {
                var pagination = this.get('model').get('meta.pagination');
                console.log(pagination);
                var prev_page = pagination.page - 1;
                if (prev_page < 1) {
                    return;
                }
                this.send('jumpToPage', prev_page);
            },
            createGrantHook: function createGrantHook(dept_id, grant_id, pi_name) {
                this.attrs.createGrantHook(dept_id, grant_id, pi_name);
            }
            //moreInfo() {
            //    for (var i = 0; i <= Ember.$(".document").length; i++) {
            //        if (Ember.$(".more-info-button").index(event.target) === i) {
            //            Ember.$(".document:eq("+i+")").removeClass("document-view-document");
            //            Ember.$(".document:eq("+i+")").toggleClass("document-more-info");
            //            Ember.$(".view-document:eq("+i+")").hide();
            //            Ember.$(".more-info:eq("+i+")").toggle("fast");
            //        }
            //    }

            //},
            //viewDocument() {
            //    for (var i = 0; i <= Ember.$(".document").length; i++) {
            //        if (Ember.$(".view-document-button").index(event.target) === i) {
            //            Ember.$(".document:eq("+i+")").removeClass("document-more-info");
            //            Ember.$(".document:eq("+i+")").toggleClass("document-view-document");
            //            Ember.$(".more-info:eq("+i+")").hide();
            //            Ember.$(".view-document:eq("+i+")").toggle("fast");
            //       }
            //    }
            //},
            //setDocumentStatus(status , color, buttonType){
            //    var thisParents = Ember.$(event.target).parents().eq(6);
            //    var thisParentSiblings = Ember.$(event.target).parent().siblings();
            //    thisParents.data('item', status);
            //    thisParents.attr('data-item', status);
            //    thisParents.css("border-left", "5px solid "+color+"");
            //    thisParentSiblings.text(Ember.$(event.target).text());
            //    thisParentSiblings.removeClass( );
            //    thisParentSiblings.toggleClass( buttonType);
            //    if (Ember.$(".active").data("filter") !== ".read, .unread, .archived") {
            //        if (Ember.$(".active").data("filter") !== status) {
            //            Ember.$(event.target).parents().eq(6).hide("slide");
            //            Ember.$.bootstrapGrowl("Successfully changed document status to " + Ember.$(event.target).text() + "!", { type: 'success', align: 'center' , width: 400, hight: 40 });
            //        }
            //    } else {
            //        Ember.$.bootstrapGrowl("Successfully changed document status to " + Ember.$(event.target).text() + "!", { type: 'success', align: 'center' , width: 400, hight: 40 });
            //    }
            //    console.log("update database to archive");
            //}

        }
    });
});
define("federal-prototype/components/meta-data", ["exports", "ember"], function (exports, _ember) {

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
    schema: schema,
    actions: {
      submit: function submit() {

        this.sendAction("validateForm", "meta-data");
      }
    }
  });
});
define('federal-prototype/components/moderator-file-view', ['exports', 'ember'], function (exports, _ember) {

  var jsonArray = [];
  exports['default'] = _ember['default'].Component.extend({
    datepublished: '',
    pi: '',
    piemail: '',

    afterModel: function afterModel() {
      this._super.apply(this, arguments);
      this.set('answers', this.grant.get('answers'));
      this.set('pi', this.get('answers')['pi']);
    },
    didInsertElement: function didInsertElement() {
      var answers = this.grant.get('answers');
      this.set('pi', answers['pi']);
      this.set('datepublished', answers['date-published']);
      this.set('piemail', answers['pi-email']);
      var moreInfoHTML = _ember['default'].$(".more-info-buttons").html();

      for (var prop in answers) {
        moreInfoHTML += '<tr> <th scope="row"> ' + prop + ' </th> <td class="affiliation" colspan="2">' + answers[prop] + ' </td> </tr>';
      }
      moreInfoHTML += ' </tbody> </table>';
      jsonArray.push(moreInfoHTML);

      console.log(jsonArray.length, jsonArray);
      for (var k = 0; k <= jsonArray.length; k++) {
        _ember['default'].$(".more-info-content").eq(k).html(jsonArray[k]);
      }
    },
    actions: {
      moreInfo: function moreInfo() {

        for (var i = 0; i <= _ember['default'].$(".document").length; i++) {
          if (_ember['default'].$(".more-info-button").index(event.target) === i) {
            _ember['default'].$(".document:eq(" + i + ")").removeClass("document-view-document");
            _ember['default'].$(".document:eq(" + i + ")").toggleClass("document-more-info");
            _ember['default'].$(".view-document:eq(" + i + ")").hide();
            _ember['default'].$(".more-info:eq(" + i + ")").toggle("fast");
          }
        }
      },
      viewDocument: function viewDocument() {
        for (var i = 0; i <= _ember['default'].$(".document").length; i++) {
          if (_ember['default'].$(".view-document-button").index(event.target) === i) {
            _ember['default'].$(".document:eq(" + i + ")").removeClass("document-more-info");
            _ember['default'].$(".document:eq(" + i + ")").toggleClass("document-view-document");
            _ember['default'].$(".more-info:eq(" + i + ")").hide();
            _ember['default'].$(".view-document:eq(" + i + ")").toggle("fast");
          }
        }
      },
      setDocumentStatus: function setDocumentStatus(status, color, buttonType) {
        var thisParents = _ember['default'].$(event.target).parents().eq(7);
        var thisParentSiblings = _ember['default'].$(event.target).parent().siblings();
        thisParents.data('item', status);
        thisParents.attr('data-item', status);
        thisParents.css("border-left", "5px solid " + color + "");
        thisParentSiblings.text(_ember['default'].$(event.target).text());
        thisParentSiblings.removeClass();
        thisParentSiblings.toggleClass(buttonType);
        if (_ember['default'].$(".active").data("filter") !== ".read, .unread, .archived") {
          if (_ember['default'].$(".active").data("filter") !== status) {
            _ember['default'].$(event.target).parents().eq(7).hide("slide");
            _ember['default'].$.bootstrapGrowl("Successfully changed document status to " + _ember['default'].$(event.target).text() + "!", { type: 'success', align: 'center', width: 400, hight: 40 });
          }
        } else {
          _ember['default'].$.bootstrapGrowl("Successfully changed document status to " + _ember['default'].$(event.target).text() + "!", { type: 'success', align: 'center', width: 400, hight: 40 });
        }
      }
    }
  });
});
define('federal-prototype/components/oauth-popup/component', ['exports', 'ember-osf/components/oauth-popup/component'], function (exports, _emberOsfComponentsOauthPopupComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOauthPopupComponent['default'];
        }
    });
});
define('federal-prototype/components/osf-copyright/component', ['exports', 'ember-osf/components/osf-copyright/component'], function (exports, _emberOsfComponentsOsfCopyrightComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfCopyrightComponent['default'];
        }
    });
});
define('federal-prototype/components/osf-footer/component', ['exports', 'ember-osf/components/osf-footer/component'], function (exports, _emberOsfComponentsOsfFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfFooterComponent['default'];
        }
    });
});
define('federal-prototype/components/osf-mode-footer/component', ['exports', 'ember-osf/components/osf-mode-footer/component'], function (exports, _emberOsfComponentsOsfModeFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfModeFooterComponent['default'];
        }
    });
});
define('federal-prototype/components/osf-navbar/component', ['exports', 'ember-osf/components/osf-navbar/component'], function (exports, _emberOsfComponentsOsfNavbarComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsOsfNavbarComponent['default'];
    }
  });
});
define('federal-prototype/components/osf-paginator/component', ['exports', 'ember-osf/components/osf-paginator/component'], function (exports, _emberOsfComponentsOsfPaginatorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsOsfPaginatorComponent['default'];
    }
  });
});
define('federal-prototype/components/pagination-control/component', ['exports', 'ember-osf/components/pagination-control/component'], function (exports, _emberOsfComponentsPaginationControlComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsPaginationControlComponent['default'];
    }
  });
});
define('federal-prototype/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('federal-prototype/components/researcher-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    //vars
    page: 'main',
    departmentId: -1,
    actions: {

      buttonClicked: function buttonClicked(param1, param2, param3, param4) {
        this.sendAction('action', param1, param2, param3, param4);
      }

    }
  });
});
define('federal-prototype/components/researcher-status-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('federal-prototype/components/search-dropdown/component', ['exports', 'ember-osf/components/search-dropdown/component'], function (exports, _emberOsfComponentsSearchDropdownComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSearchDropdownComponent['default'];
    }
  });
});
define('federal-prototype/components/settings-back', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {}
  });
});
define("federal-prototype/components/settings-side-by-side", ["exports", "ember"], function (exports, _ember) {
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
                    "placeholder": "documents name",
                    "focus": false
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

        //updateting the alpcaha useing json input on page
        metadataInputJson: JSON.stringify(schema, null, 4),
        schema: _ember["default"].computed('metadataInputJson', function () {
            try {
                _ember["default"].$(".settingsHolder, .form-table").css("border-top", " 5px solid #2e6da4");
                var data = JSON.parse(this.get("metadataInputJson"));
                data.options.focus = "";
            } catch (e) {
                _ember["default"].$(".settingsHolder, .form-table").css("border-top", " 5px solid #d43f3a");
                data = {
                    "schema": {
                        "title": "Error: INVALID JSON",
                        "description": "There is an Error in your Json.",
                        "type": "object"
                    }
                };
            }
            return data;
        }),

        actions: {
            save: function save() {
                try {
                    JSON.parse(this.get("metadataInputJson"));
                } catch (e) {
                    console.log("Error in json");
                    _ember["default"].$.bootstrapGrowl("Error: Did not saved, there is an error in your Json!", {
                        type: 'danger',
                        align: 'center',
                        width: 450,
                        hight: 40
                    });
                    return false;
                }
                console.log("Send to DB");
                _ember["default"].$.bootstrapGrowl("Successfully saved!", {
                    type: 'success',
                    align: 'center',
                    width: 200,
                    hight: 40
                });

                return true;
            },

            SetBuilderTo: function SetBuilderTo(typeofForm) {
                if (typeofForm === "wiziwig") {
                    _ember["default"].$(".metaDataHolder").css("display", "none");
                    _ember["default"].$(".formBuilderHolder").css("display", "block");
                } else {
                    _ember["default"].$(".formBuilderHolder").css("display", "none");
                    _ember["default"].$(".metaDataHolder").css("display", "block");
                }
            }

        }
    });
});
define('federal-prototype/components/sign-up/component', ['exports', 'ember-osf/components/sign-up/component'], function (exports, _emberOsfComponentsSignUpComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSignUpComponent['default'];
    }
  });
});
define('federal-prototype/components/status-filter', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      this._super.apply(this, arguments);
    },
    didRender: function didRender() {
      this._super.apply(this, arguments);
      _ember['default'].$('div[ data-item=".read"]').css("border-left", "5px solid #5cb85c");
      _ember['default'].$('span[ data-filter=".read"] i').css({ "color": "#5cb85c" });

      _ember['default'].$('div[ data-item=".unread"]').css("border-left", "5px solid #eea236");
      _ember['default'].$('span[ data-filter=".unread"] i').css({ "color": "#eea236" });

      _ember['default'].$('div[ data-item=".archived"]').css("border-left", "5px solid #337ab7");
      _ember['default'].$('span[ data-filter=".archived"] i').css({ "color": "#337ab1" });
      _ember['default'].$('.No-documents-error').hide();
    },
    actions: {
      getSelectedStatusFilter: function getSelectedStatusFilter() {
        _ember['default'].$(".filter").removeClass("active");
        _ember['default'].$(event.target).addClass("active");
        var sel = _ember['default'].$(event.target).data('filter');
        _ember['default'].$('div.document-list div.document').hide();

        if (sel !== ".read, .unread, .archived" && sel !== undefined) {
          _ember['default'].$('div[ data-item="' + sel + '"]').show();

          if (_ember['default'].$('div.document').css("display") === "block") {
            _ember['default'].$('.No-documents-error').hide();
          } else {
            _ember['default'].$('.No-documents-error').show();
          }
        } else {
          _ember['default'].$('.No-documents-error').hide();
          _ember['default'].$('div.document-list div.document').show();
        }
      }
    }
  });
});
define('federal-prototype/components/successful-upload', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('federal-prototype/components/tags-widget/component', ['exports', 'ember-osf/components/tags-widget/component'], function (exports, _emberOsfComponentsTagsWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsTagsWidgetComponent['default'];
    }
  });
});
define('federal-prototype/controllers/agency/addgrant', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        institution: true,
        agency: false,
        //active_grant: null,
        //document: {},
        agencies: {},
        actions: {
            addGrant: function addGrant(agency_id, grant_number, pi_name) {
                var _this = this;

                this.get('store').findRecord('agency', 4).then(function (agency) {
                    var grant = _this.get('store').createRecord('grant');
                    grant.set('number', grant_number);
                    grant.set('agency', agency);
                    grant.set('pi', pi_name);
                    grant.set('schema', dep.toJSON().schema);
                    grant.set('institution', true);
                    _this.store.findRecord('document', 125).then(function (r) {
                        grant.set('document', r);
                        grant.save().then(function () {
                            _ember['default'].$.bootstrapGrowl("Succesfully created grant number " + grant_number + ".", { type: 'success', align: 'center', width: 400, hight: 40 });
                            _this.transitionToRoute('agency.overview');
                        });
                    });
                });
            }
        }
    });
});
define('federal-prototype/controllers/agency/overview', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        agency: true,
        institution: false,
        role: 'agency',
        //active_grant: null,
        //document: {},
        agencies: {},
        actions: {
            createGrant: function createGrant(agency_id, grant_number, pi_name) {
                var _this = this;

                var grant = this.get('store').createRecord('grant');
                this.get('store').findRecord('agency', 4).then(function (agency) {
                    grant.set('number', grant_number);
                    grant.set('agency', agency);
                    grant.set('pi', pi_name);
                    grant.set('schema', dep.toJSON().schema);
                    grant.set('institution', true);
                    _this.store.findRecord('document', 125).then(function (r) {
                        grant.set('document', r);
                        grant.save();
                        //this.set('active_grant', grant)
                        //var grants = this.get('grants');
                        //grants.push(grant);
                        //this.set('grants', grants.slice());
                    });
                });
            },
            getGrantsPage: function getGrantsPage(page_number) {
                var _this2 = this;

                console.log('getting grants');
                console.log(page_number);
                this.get('store').query('grant', {
                    'agency': 4,
                    'page': page_number
                }).then(function (grants) {
                    _this2.set('grants', grants);
                });
            }
        }
    });
});
define('federal-prototype/controllers/agency/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('federal-prototype/controllers/application', ['exports', 'ember', 'ember-osf/mixins/osf-agnostic-auth-controller', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfMixinsOsfAgnosticAuthController, _emberOsfUtilsAuth) {
    exports['default'] = _ember['default'].Controller.extend(_emberOsfMixinsOsfAgnosticAuthController['default'], {
        toast: _ember['default'].inject.service(),
        authUrl: (0, _emberOsfUtilsAuth.getAuthUrl)(),
        actions: {
            loginSuccess: function loginSuccess() {
                this.transitionToRoute('researcher.grant');
            },
            loginFail: function loginFail() /* err */{
                this.get('toast').error('Login failed');
            }
        }
    });
});
define('federal-prototype/controllers/institution/addgrant', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        institution: true,
        agency: false,
        agencies: {},
        actions: {
            createGrant: function createGrant(agency_id, grant_number, pi_name) {
                var _this = this;

                var agency = this.get('store').peekRecord('agency', agency_id);
                var doc = this.get('store').createRecord('document');
                doc.set('name', 'Not Uploaded');
                doc.set('path', '/dev/null');
                doc.set('datesubmitted', 'Thursday, 1 January 1970');
                doc.save().then(function (doc) {
                    var grant = _this.get('store').createRecord('grant');
                    grant.set('number', grant_number);
                    grant.set('agency', agency);
                    grant.set('pi', pi_name);
                    grant.set('schema', dep.toJSON().schema);
                    grant.set('institution', true);
                    grant.set('document', doc);
                    grant.save().then(function () {
                        _ember['default'].$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center', width: 400, hight: 40 });
                        _this.transitionToRoute('institution.overview');
                    });
                });
            }
        }
    });
});
define('federal-prototype/controllers/institution/overview', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        institution: true,
        agency: false,
        role: 'institution',
        //active_grant: null,
        //document: {},
        agencies: {},
        actions: {
            getGrantsPage: function getGrantsPage(page_number) {
                var _this = this;

                console.log('getting grants');
                console.log(page_number);
                this.get('store').query('grant', {
                    'institution': true,
                    'page': page_number
                }).then(function (grants) {
                    _this.set('grants', grants);
                });
            },

            createGrant: function createGrant(agency_id, grant_number, pi_name) {
                var _this2 = this;

                var agency = this.get('store').peekRecord('agency', agency_id);
                var grant = this.get('store').createRecord('grant');
                grant.set('number', grant_number);
                grant.set('agency', agency);
                grant.set('pi', pi_name);
                grant.set('schema', agency.toJSON().schema);
                grant.set('institution', true);
                this.store.findRecord('document', 125).then(function (r) {
                    grant.set('document', r);
                    grant.save();
                    //this.set('active_grant', grant)
                    var grants = _this2.get('grants');
                    grants.push(grant);
                    _this2.set('grants', grants.slice());
                });
            }
        }
    });
});
define('federal-prototype/controllers/preview', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        filename: undefined,
        path: undefined,

        actions: {
            fetch: function fetch(grant) {
                this.set('path', "https://staging-files.osf.io/v1/resources/s5mvu/providers/osfstorage" + grant.get('document').get('path'));
                this.set('filename', grant.get('document').get('name'));
            }
        }

    });
});
define('federal-prototype/controllers/researcher/grant', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        active_grant: null,
        session: _ember['default'].inject.service('session'),
        currentUser: _ember['default'].inject.service(),
        user: {},
        document: {},
        agencies: {},
        actions: {
            submit: function submit() {
                console.log('done');
                this.transitionToRoute('researcher.overview');
            },
            addGrant: function addGrant(grant_id, agency_id, grantNumber) {
                var _this = this;

                var agency = this.get('store').peekRecord('agency', agency_id);
                var grant = this.get('store').createRecord('grant');
                grant.set('agency', agency);
                grant.set('document', this.get('document'));
                grant.set('schema', dep.toJSON().schema);
                grant.set('number', grantNumber);
                this.get('currentUser').load().then(function (c) {
                    _this.set('user', c);
                    grant.set('pi', c.get('fullName'));
                    grant.save();
                    _this.set('active_grant', grant);
                    var grants = _this.get('grants');
                    grants.push(grant);
                    _this.set('grants', grants.slice());
                    _this.transitionToRoute('researcher.metadata');
                });
            }
        }
    });
});
define('federal-prototype/controllers/researcher/overview', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        grants: [],
        actions: {
            getGrantsPage: function getGrantsPage(page_number) {
                var _this = this;

                console.log('getting grants');
                console.log(page_number);
                this.get('store').query('grant', {
                    'pi': 'Jeff Spies',
                    'page': page_number
                }).then(function (grants) {
                    _this.set('grants', grants);
                });
            }
        }
    });
});
define('federal-prototype/dynamic-forms/renderers/alpaca', ['exports', 'ember-cli-dynamic-forms/dynamic-forms/renderers/alpaca'], function (exports, _emberCliDynamicFormsDynamicFormsRenderersAlpaca) {
  exports['default'] = _emberCliDynamicFormsDynamicFormsRenderersAlpaca['default'];
});
define('federal-prototype/ember-cli-dynamic-forms/tests/modules/ember-cli-dynamic-forms/components/dynamic-form.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-dynamic-forms/components/dynamic-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-cli-dynamic-forms/components/dynamic-form.js should pass jshint.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 48, col 23, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 50, col 7, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 51, col 7, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 52, col 7, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 53, col 7, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 54, col 7, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 70, col 12, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 79, col 21, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 126, col 12, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 140, col 21, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 148, col 8, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 164, col 23, \'_\' is not defined.\nmodules/ember-cli-dynamic-forms/components/dynamic-form.js: line 169, col 13, \'_\' is not defined.\n\n13 errors');
  });
});
define('federal-prototype/ember-cli-dynamic-forms/tests/modules/ember-cli-dynamic-forms/dynamic-forms/renderers/alpaca.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-dynamic-forms/dynamic-forms/renderers/alpaca.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dynamic-forms/dynamic-forms/renderers/alpaca.js should pass jshint.');
  });
});
define('federal-prototype/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/elem-id', ['exports', 'ember-osf/helpers/elem-id'], function (exports, _emberOsfHelpersElemId) {
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
define('federal-prototype/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/get-api', ['exports', 'ember'], function (exports, _ember) {
    exports.getApi = getApi;

    // Take in doc id as params[0]

    function getApi(params /*, hash*/) {
        var link = '/documents/';
        return link + params[0];
    }

    exports['default'] = _ember['default'].Helper.helper(getApi);
});
define('federal-prototype/helpers/get-download', ['exports', 'ember'], function (exports, _ember) {
    exports.getDownload = getDownload;

    // Take in file path as params[0]

    function getDownload(params /*, hash*/) {
        var download = 'https://staging-files.osf.io/v1/resources/zr5mn/providers/osfstorage';
        return download + params[0];
    }

    exports['default'] = _ember['default'].Helper.helper(getDownload);
});
define('federal-prototype/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/moment-calendar', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_federalPrototypeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('federal-prototype/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('federal-prototype/helpers/moment-format', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_federalPrototypeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('federal-prototype/helpers/moment-from-now', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_federalPrototypeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('federal-prototype/helpers/moment-to-now', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_federalPrototypeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('federal-prototype/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('federal-prototype/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('federal-prototype/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('federal-prototype/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('federal-prototype/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('federal-prototype/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'federal-prototype/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _federalPrototypeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_federalPrototypeConfigEnvironment['default'].APP.name, _federalPrototypeConfigEnvironment['default'].APP.version)
  };
});
define('federal-prototype/initializers/component-routes', ['exports'], function (exports) {
    exports.initialize = initialize;

    function initialize(application) {
        application.inject('component', 'router', 'router:main');
    }

    exports['default'] = {
        name: 'component-routes',
        initialize: initialize
    };
});
define('federal-prototype/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('federal-prototype/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

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
define('federal-prototype/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

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
define("federal-prototype/initializers/ember-i18n", ["exports", "federal-prototype/instance-initializers/ember-i18n"], function (exports, _federalPrototypeInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _federalPrototypeInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _federalPrototypeInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('federal-prototype/initializers/ember-simple-auth', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _federalPrototypeConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _federalPrototypeConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('federal-prototype/initializers/export-application-global', ['exports', 'ember', 'federal-prototype/config/environment'], function (exports, _ember, _federalPrototypeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_federalPrototypeConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _federalPrototypeConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_federalPrototypeConfigEnvironment['default'].modulePrefix);
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
define('federal-prototype/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

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
define('federal-prototype/initializers/store', ['exports', 'ember'], function (exports, _ember) {

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
define('federal-prototype/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'federal-prototype/config/environment'], function (exports, _emberToastrInitializersToastr, _federalPrototypeConfigEnvironment) {

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
  var config = _federalPrototypeConfigEnvironment['default']['ember-toastr'] || {
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
define('federal-prototype/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

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
define('federal-prototype/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
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
define("federal-prototype/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("federal-prototype/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "federal-prototype/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _federalPrototypeConfigEnvironment) {
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
define('federal-prototype/instance-initializers/ember-osf', ['exports', 'ember-osf/instance-initializers/ember-osf'], function (exports, _emberOsfInstanceInitializersEmberOsf) {
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
define('federal-prototype/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('federal-prototype/locales/en-us/config', ['exports', 'ember-osf/locales/en-us/config'], function (exports, _emberOsfLocalesEnUsConfig) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsConfig['default'];
    }
  });
});
define('federal-prototype/locales/en-us/translations', ['exports', 'ember-osf/locales/en-us/translations'], function (exports, _emberOsfLocalesEnUsTranslations) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsTranslations['default'];
    }
  });
});
define('federal-prototype/mixins/commentable', ['exports', 'ember-osf/mixins/commentable'], function (exports, _emberOsfMixinsCommentable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsCommentable['default'];
    }
  });
});
define('federal-prototype/mixins/osf-token-login-controller', ['exports', 'ember-osf/mixins/osf-token-login-controller'], function (exports, _emberOsfMixinsOsfTokenLoginController) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfTokenLoginController['default'];
    }
  });
});
define('federal-prototype/mixins/osf-token-login-route', ['exports', 'ember-osf/mixins/osf-token-login-route'], function (exports, _emberOsfMixinsOsfTokenLoginRoute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfTokenLoginRoute['default'];
    }
  });
});
define('federal-prototype/models/agency', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    name: (0, _emberDataAttr['default'])('string'),
    schema: (0, _emberDataAttr['default'])('string'),
    grants: (0, _emberDataRelationships.hasMany)('grant')
  });
});
define('federal-prototype/models/collection', ['exports', 'ember-osf/models/collection'], function (exports, _emberOsfModelsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCollection['default'];
    }
  });
});
define('federal-prototype/models/comment-report', ['exports', 'ember-osf/models/comment-report'], function (exports, _emberOsfModelsCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCommentReport['default'];
    }
  });
});
define('federal-prototype/models/comment', ['exports', 'ember-osf/models/comment'], function (exports, _emberOsfModelsComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsComment['default'];
    }
  });
});
define('federal-prototype/models/contributor', ['exports', 'ember-osf/models/contributor'], function (exports, _emberOsfModelsContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsContributor['default'];
    }
  });
});
define('federal-prototype/models/document', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    datesubmitted: (0, _emberDataAttr['default'])('string'),
    name: (0, _emberDataAttr['default'])('string', { defaultValue: 'Untitled' }),
    path: (0, _emberDataAttr['default'])('string'),
    grants: (0, _emberDataRelationships.hasMany)('grant')
  });
});
define('federal-prototype/models/draft-registration', ['exports', 'ember-osf/models/draft-registration'], function (exports, _emberOsfModelsDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsDraftRegistration['default'];
    }
  });
});
define('federal-prototype/models/dynamic-form', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    schema: (0, _emberDataAttr['default'])('string'),
    metadata: (0, _emberDataAttr['default'])('string'),
    grant: (0, _emberDataRelationships.belongsTo)('grant')
  });
});
define('federal-prototype/models/file-provider', ['exports', 'ember-osf/models/file-provider'], function (exports, _emberOsfModelsFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileProvider['default'];
    }
  });
});
define('federal-prototype/models/file-version', ['exports', 'ember-osf/models/file-version'], function (exports, _emberOsfModelsFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileVersion['default'];
    }
  });
});
define('federal-prototype/models/file', ['exports', 'ember-osf/models/file'], function (exports, _emberOsfModelsFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFile['default'];
    }
  });
});
define('federal-prototype/models/grant', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
    exports['default'] = _emberDataModel['default'].extend({
        agency: (0, _emberDataRelationships.belongsTo)('agency'),
        agencystatus: (0, _emberDataAttr['default'])('string', { defaultValue: 'New' }),
        document: (0, _emberDataRelationships.belongsTo)('document'),
        institution: (0, _emberDataAttr['default'])('boolean', { defaultValue: false }),
        institutionstatus: (0, _emberDataAttr['default'])('string', { defaultValue: 'New' }),
        metadata: (0, _emberDataAttr['default'])('json-transform', { defaultValue: '{}' }),
        metadatarequested: (0, _emberDataAttr['default'])('boolean', { defaultValue: false }),
        number: (0, _emberDataAttr['default'])('string'),
        open: (0, _emberDataAttr['default'])('boolean', { defaultValue: true }),
        pi: (0, _emberDataAttr['default'])('string', { defaultValue: 'anonymous' }),
        pistatus: (0, _emberDataAttr['default'])('string', { defaultValue: 'New' }),
        schema: (0, _emberDataAttr['default'])('string'),
        status: (0, _emberDataAttr['default'])('string', { defaultValue: 'New' }),
        uploadrequested: (0, _emberDataAttr['default'])('boolean', { defaultValue: false })
    });
});
define('federal-prototype/models/institution', ['exports', 'ember-osf/models/institution'], function (exports, _emberOsfModelsInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsInstitution['default'];
    }
  });
});
define('federal-prototype/models/log', ['exports', 'ember-osf/models/log'], function (exports, _emberOsfModelsLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsLog['default'];
    }
  });
});
define('federal-prototype/models/metaschema', ['exports', 'ember-osf/models/metaschema'], function (exports, _emberOsfModelsMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsMetaschema['default'];
    }
  });
});
define('federal-prototype/models/node-link', ['exports', 'ember-osf/models/node-link'], function (exports, _emberOsfModelsNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNodeLink['default'];
    }
  });
});
define('federal-prototype/models/node', ['exports', 'ember-osf/models/node'], function (exports, _emberOsfModelsNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNode['default'];
    }
  });
});
define('federal-prototype/models/osf-model', ['exports', 'ember-osf/models/osf-model'], function (exports, _emberOsfModelsOsfModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsOsfModel['default'];
    }
  });
});
define('federal-prototype/models/registration', ['exports', 'ember-osf/models/registration'], function (exports, _emberOsfModelsRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsRegistration['default'];
    }
  });
});
define('federal-prototype/models/user', ['exports', 'ember-osf/models/user'], function (exports, _emberOsfModelsUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsUser['default'];
    }
  });
});
define('federal-prototype/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('federal-prototype/router', ['exports', 'ember', 'federal-prototype/config/environment'], function (exports, _ember, _federalPrototypeConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _federalPrototypeConfigEnvironment['default'].locationType
    });

    Router.map(function () {

        this.route('grants', function () {
            this.route('create');
        });
        this.route('documents', function () {
            this.route('create');
        });

        this.route('researcher', function () {
            this.route('metadata');
            this.route('upload');
            this.route('attach');
            this.route('grant');
            this.route('success');
            this.route('status');
            this.route('overview');
        });

        this.route('institution', function () {
            this.route('overview');
            this.route('analytics');
            this.route('addgrant');
            this.route('assign');
        });

        this.route('agency', function () {
            this.route('overview');
            this.route('analytics');
            this.route('addgrant');
            this.route('settings', function () {
                this.route('metadata');
                this.route('api');
            });
        });

        this.route('preview');
        this.route('signup');
    });

    exports['default'] = Router;
});
define('federal-prototype/routes/agency', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').findAll('grant'),
                documents: this.get('store').findAll('document'),
                institutions: ['UVA', 'HARVARD', 'CALTECH', 'MIT']
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('agency', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants);
            controller.set('documents', model.documents);
            controller.set('institutions', model.institutions);
        }

    });
});
define('federal-prototype/routes/agency/addgrant', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').findAll('grant'),
                agencies: this.get('store').findAll('agency'),
                institutions: ['UVA', 'HARVARD', 'CALTECH', 'MIT']
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institutions', model.institutions);
            controller.set('institution', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants.filter(function (grant) {
                return grant.get('institution');
            }));
            //controller.set('document', model.document)
            controller.set('agencies', model.agencies);
        }

    });
});
define('federal-prototype/routes/agency/analytics', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            return _ember['default'].RSVP.hash({
                agencies: this.get('store').findAll('agency'),
                grants: this.get('store').findAll('grant')
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants.filter(function (grant) {
                return grant.get('institution');
            }));
            //controller.set('document', model.document)
            controller.set('agencies', model.agencies);
        }

    });
});
define('federal-prototype/routes/agency/overview', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            var agency = this.get('store').query('agency', {
                filter: {
                    name: "Department of Open Science"
                }
            });
            this.set('agency', agency.get('firstObject'));
            return _ember['default'].RSVP.hash({
                grants: this.get('store').query('grant', {
                    filter: {
                        agency: agency.get('firstObject')
                    }
                })
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants);
            //controller.set('document', model.document)
        }

    });
});
define('federal-prototype/routes/agency/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('federal-prototype/routes/agency/settings/api', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("federal-prototype/routes/agency/settings/metadata", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    didRender: function didRender() {
      this._super.apply(this, arguments);
      console.log("hry");
    }
  });
});
define('federal-prototype/routes/application', ['exports', 'ember', 'ember-osf/mixins/osf-agnostic-auth-route'], function (exports, _ember, _emberOsfMixinsOsfAgnosticAuthRoute) {
    exports['default'] = _ember['default'].Route.extend(_emberOsfMixinsOsfAgnosticAuthRoute['default'], {

        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),
        model: function model() {
            if (this.get('session.isAuthenticated')) {
                return this.get('store').findRecord('user', 'me');
            }
            return null;
        }
    });
});
define('federal-prototype/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('federal-prototype/routes/institution', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service()

    });
});
define('federal-prototype/routes/institution/addgrant', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').findAll('grant'),
                agencies: this.get('store').findAll('agency')
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants.filter(function (grant) {
                return grant.get('institution');
            }));
            //controller.set('document', model.document)
            controller.set('agencies', model.agencies);
        }

    });
});
define('federal-prototype/routes/institution/analytics', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').findAll('grant'),
                agencies: this.get('store').findAll('agency')
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants.filter(function (grant) {
                return grant.get('institution');
            }));
            //controller.set('document', model.document)
            controller.set('agencies', model.agencies);
        }

    });
});
define('federal-prototype/routes/institution/assign', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').findAll('grant')
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            },

            assignGrant: function assignGrant(grant, name) {
                var _this = this;

                grant.set('pi', name);
                grant.save().then(function () {
                    _this.transitionTo('institution.overview');
                });
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('grants', model.grants);
        }

    });
});
define('federal-prototype/routes/institution/overview', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

        model: function model() {
            return _ember['default'].RSVP.hash({
                grants: this.get('store').query('grant', { institution: true }),
                agencies: this.get('store').findAll('agency')
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('institution', true);
            controller.set('role', 'institution');
            controller.set('isFileUploaded', "researcher-form");
            // debugger;
            controller.set('grants', model.grants);
            //controller.set('document', model.document)
            controller.set('agencies', model.agencies);
        }

    });
});
define('federal-prototype/routes/preview', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {});
});
define('federal-prototype/routes/researcher', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    store: _ember['default'].inject.service(),
    session: _ember['default'].inject.service(),
    model: function model() {
      return _ember['default'].RSVP.hash({
        agencies: this.get('store').findAll('agency'),
        document: this.get('store').createRecord('document')
      });
    }
  });
});
define('federal-prototype/routes/researcher/attach', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        fileManager: _ember['default'].inject.service(),
        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),

        actions: {
            submit: function submit(files, grant) {

                var store = this.get('store');
                var folderid = "57e6cdae0dc31001c9a9f41a";
                var controller = this.controller;
                var fm = this.get('fileManager');

                store.findRecord('file', folderid).then(function (folder) {
                    return fm.uploadFile(folder, files[0].name, files[0]).then(function (file) {
                        return file;
                    });
                }).then(function (newFile) {
                    var name = newFile.get('name');
                    var path = newFile.get('path');
                    grant.get('document');
                    grant.set('document.name', name);
                    grant.set('document.path', path);
                    grant.save().then(function () {
                        controller.transitionToRoute('researcher.overview');
                    });
                }).then(function () {}, function (error) {
                    console.log("Oops: " + error.message);
                });
            }
        }

    });
});
define('federal-prototype/routes/researcher/grant', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),

        actions: {
            agencySelected: function agencySelected(agencyId) {
                this.get('store').getRecord('agency', agencyId);
            }
        },

        model: function model() {
            var researcher = this.modelFor('researcher');
            return _ember['default'].RSVP.hash({
                document: researcher.document,
                agency: researcher.agencies,
                grants: this.get('store').findAll('grant')
            });
        },

        setupController: function setupController(controller, model) {
            this._super(controller, model);
            controller.set('isFileUploaded', "researcher-form");
            var grants = model.grants.reduce(function (r, n) {
                if (n.get('document').get('id') === model.document.get('id')) {
                    r.push(n);
                }
                return r;
            }, []);
            controller.set('grants', grants);
            controller.set('document', model.document);
            controller.set('agencies', model.agencies);
        }
    });
});
define('federal-prototype/routes/researcher/metadata', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({

        store: _ember['default'].inject.service(),

        model: function model() {
            var grantController = this.controllerFor('researcher.grant');
            var schema = JSON.parse(grantController.active_grant.get('schema'));
            schema.options.form.buttons.addGrant = {
                "id": 'addGrant',
                'title': 'Connect another grant'
            };
            grantController.active_grant.set('schema', JSON.stringify(schema));
            return { grant: grantController.active_grant };
        },

        setupController: function setupController(controller, model) {
            var formActions = {
                submit: function submit() {
                    var value = this.getValue();
                    model.grant.set('metadata', value);
                    model.grant.save();
                    model.grant.save().then(function () {
                        controller.transitionToRoute('researcher.overview');
                    });
                },
                addGrant: function addGrant() {
                    var value = this.getValue();
                    model.grant.set('metadata', value);
                    model.grant.save().then(function () {
                        controller.transitionToRoute('researcher.grant');
                    });
                }
            };
            model.formActions = formActions;
            controller.set('model', model);
            controller.set('grant', model.grant);
            controller.set('formActions', formActions);
        }
    });
});
define('federal-prototype/routes/researcher/overview', ['exports', 'ember'], function (exports, _ember) {
    //add this and the AuthenticatedRouteMixin to the extend rout to protect it unless logged in

    exports['default'] = _ember['default'].Route.extend({
        currentUser: _ember['default'].inject.service(),
        model: function model() {
            return _ember['default'].RSVP.hash({
                // grants: this.get('store').query('grant', { pi: this.get('currentUser').load().then((x) => x.get('fullName') )}),
                grants: this.get('store').query('grant', { pi: 'Jeff Spies', page: 1 }),
                documents: this.get('store').findAll('document'),
                institutions: ['UVA', 'HARVARD', 'CALTECH', 'MIT']
            });
        },

        actions: {
            didTransition: function didTransition() {
                _ember['default'].$(".moderatorHolder").show();
            },
            didRender: function didRender() {

                //let tour = new Shepherd.Tour({ // jshint ignore:line
                //    defaults: {
                //        classes: 'shepherd-theme-arrows'
                //    }
                //});

                //var step = tour.addStep('upload', {
                //    title: 'Upload your research.',
                //    text: 'Use our upload tool to upload and connect your research to existing grants or a new grant, and add metadata about the grant.',
                //    attachTo: '#uploadhere left',
                //    advanceOn: '.docs-link click'
                //});

                //tour.start();

                //setTimeout((e) => {
                //    if (step.isOpen()) {
                //        Shepherd.activeTour.next();
                //    }
                //}, 6000);

            }
        },

        setupController: function setupController(controller, model) {
            controller.set('agency', true);
            controller.set('role', 'pi');
            controller.set('isFileUploaded', "researcher-form");
            controller.set('grants', model.grants);
            controller.set('documents', model.documents);
            controller.set('institutions', model.institutions);
        }

    });
});
define('federal-prototype/routes/researcher/status', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('federal-prototype/routes/researcher/success', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('federal-prototype/routes/researcher/upload', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    fileManager: _ember['default'].inject.service(),
    store: _ember['default'].inject.service(),
    session: _ember['default'].inject.service(),

    actions: {
      submit: function submit(fileList, doc) {

        //this.store.findRecord('document', 125).then((r) => {
        //    grant.set('document', r);
        //   grant.save().then(() => {
        //        controller.transitionToRoute('researcher.grant');
        //    });
        //});

        var store = this.get('store');
        var folderid = "57e6cdae0dc31001c9a9f41a";
        var fm = this.get('fileManager');
        var controller = this.controller;

        store.findRecord('file', folderid).then(function (folder) {
          var file = fileList.pop();
          var nf = fm.uploadFile(folder, file.name, file);
          return nf.then(function (file) {
            return file;
          });
        }).then(function (newFile) {
          var name = newFile.get('name');
          var path = newFile.get('path');
          doc.set('name', name);
          doc.set('path', path);
          doc.save().then(function () {
            controller.transitionToRoute('researcher.grant');
          });
        }).then(function () {}, function (error) {
          console.log("Oops: " + error.message);
        });
      }
    }

  });
});
//model() {
//  return this.modelFor('researcher');
//},
//setupController(controller, model) {

//  this._super(controller, model);
//  controller.set('isFileUploaded', "researcher-form");
//}
define('federal-prototype/routes/signup', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('federal-prototype/serializers/collection', ['exports', 'ember-osf/serializers/collection'], function (exports, _emberOsfSerializersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCollection['default'];
    }
  });
});
define('federal-prototype/serializers/comment-report', ['exports', 'ember-osf/serializers/comment-report'], function (exports, _emberOsfSerializersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCommentReport['default'];
    }
  });
});
define('federal-prototype/serializers/comment', ['exports', 'ember-osf/serializers/comment'], function (exports, _emberOsfSerializersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersComment['default'];
    }
  });
});
define('federal-prototype/serializers/contributor', ['exports', 'ember-osf/serializers/contributor'], function (exports, _emberOsfSerializersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersContributor['default'];
    }
  });
});
define('federal-prototype/serializers/draft-registration', ['exports', 'ember-osf/serializers/draft-registration'], function (exports, _emberOsfSerializersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersDraftRegistration['default'];
    }
  });
});
define('federal-prototype/serializers/file-contents', ['exports', 'ember-osf/serializers/file-contents'], function (exports, _emberOsfSerializersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileContents['default'];
    }
  });
});
define('federal-prototype/serializers/file-provider', ['exports', 'ember-osf/serializers/file-provider'], function (exports, _emberOsfSerializersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileProvider['default'];
    }
  });
});
define('federal-prototype/serializers/file-version', ['exports', 'ember-osf/serializers/file-version'], function (exports, _emberOsfSerializersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileVersion['default'];
    }
  });
});
define('federal-prototype/serializers/file', ['exports', 'ember-osf/serializers/file'], function (exports, _emberOsfSerializersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFile['default'];
    }
  });
});
define('federal-prototype/serializers/institution', ['exports', 'ember-osf/serializers/institution'], function (exports, _emberOsfSerializersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersInstitution['default'];
    }
  });
});
define('federal-prototype/serializers/linked-node', ['exports', 'ember-osf/serializers/linked-node'], function (exports, _emberOsfSerializersLinkedNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersLinkedNode['default'];
    }
  });
});
define('federal-prototype/serializers/metaschema', ['exports', 'ember-osf/serializers/metaschema'], function (exports, _emberOsfSerializersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersMetaschema['default'];
    }
  });
});
define('federal-prototype/serializers/node-link', ['exports', 'ember-osf/serializers/node-link'], function (exports, _emberOsfSerializersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNodeLink['default'];
    }
  });
});
define('federal-prototype/serializers/node', ['exports', 'ember-osf/serializers/node'], function (exports, _emberOsfSerializersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNode['default'];
    }
  });
});
define('federal-prototype/serializers/osf-serializer', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersOsfSerializer['default'];
    }
  });
});
define('federal-prototype/serializers/registration', ['exports', 'ember-osf/serializers/registration'], function (exports, _emberOsfSerializersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersRegistration['default'];
    }
  });
});
define('federal-prototype/serializers/user', ['exports', 'ember-osf/serializers/user'], function (exports, _emberOsfSerializersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersUser['default'];
    }
  });
});
define('federal-prototype/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('federal-prototype/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _emberOsfServicesCurrentUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesCurrentUser['default'];
    }
  });
});
define('federal-prototype/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _emberOsfServicesFileManager) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesFileManager['default'];
    }
  });
});
define('federal-prototype/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('federal-prototype/services/moment', ['exports', 'ember', 'federal-prototype/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _federalPrototypeConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_federalPrototypeConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('federal-prototype/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('federal-prototype/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _emberToastrServicesToast) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberToastrServicesToast['default'];
    }
  });
});
define('federal-prototype/services/tour', ['exports', 'ember-shepherd/services/tour'], function (exports, _emberShepherdServicesTour) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberShepherdServicesTour['default'];
    }
  });
});
define('federal-prototype/session-stores/application', ['exports', 'ember-simple-auth/session-stores/cookie'], function (exports, _emberSimpleAuthSessionStoresCookie) {
  exports['default'] = _emberSimpleAuthSessionStoresCookie['default'].extend();
});
define("federal-prototype/templates/agency", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 116
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary left");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-bars fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Menu");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 8,
              "column": 139
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-cog fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Settings");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 138
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-bar-chart fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Analytics");
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
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 142
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-institution fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Create Grant");
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
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 11,
              "column": 132
            }
          },
          "moduleName": "federal-prototype/templates/agency.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-globe fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Overview");
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
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/agency.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "moderatorHolder");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "custom");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Department of Open Science");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 5, 5);
        morphs[4] = dom.createMorphAt(element1, 7, 7);
        morphs[5] = dom.createMorphAt(element1, 9, 9);
        morphs[6] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["agency.settings"], ["tagName", "span"], 0, null, ["loc", [null, [3, 4], [5, 16]]]], ["block", "link-to", ["index"], [], 1, null, ["loc", [null, [7, 8], [7, 128]]]], ["block", "link-to", ["agency.settings.metadata"], [], 2, null, ["loc", [null, [8, 8], [8, 151]]]], ["block", "link-to", ["agency.analytics"], [], 3, null, ["loc", [null, [9, 8], [9, 150]]]], ["block", "link-to", ["agency.addgrant"], [], 4, null, ["loc", [null, [10, 8], [10, 154]]]], ["block", "link-to", ["agency.overview"], [], 5, null, ["loc", [null, [11, 8], [11, 144]]]], ["content", "outlet", ["loc", [null, [15, 0], [15, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("federal-prototype/templates/agency/addgrant", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "federal-prototype/templates/agency/addgrant.hbs"
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
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "inst", ["loc", [null, [22, 30], [22, 34]]]], ["get", "institutionChoice", ["loc", [null, [22, 35], [22, 52]]]]], [], ["loc", [null, [22, 25], [22, 54]]]]], ["attribute", "value", ["get", "inst", ["loc", [null, [22, 63], [22, 67]]]]], ["content", "inst", ["loc", [null, [22, 70], [22, 78]]]]],
        locals: ["inst"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/agency/addgrant.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.addgrant {\n    background-color: rgba(250,250,250,0.3);\n    padding: 30px;\n    text-align: center;\n}\n\n.addgrant .container {\n    max-width: 600px;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "addgrant");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "class", "institutionSelect form-control input-lg select");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("option");
        var el5 = dom.createTextNode("Select an Institution");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "class", "form-control input-lg");
        dom.setAttribute(el3, "placeholder", "Grant Number");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "btn btn-primary btn-lg button-pos");
        var el4 = dom.createTextNode("Add this grant");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [3, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [5]);
        var element4 = dom.childAt(element1, [9]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element2, 'onchange');
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createAttrMorph(element3, 'value');
        morphs[3] = dom.createAttrMorph(element3, 'onchange');
        morphs[4] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "institutionId", ["loc", [null, [19, 90], [19, 103]]]]], [], ["loc", [null, [19, 85], [19, 104]]]]], ["value", "target.value"], ["loc", [null, [19, 76], [19, 127]]]]], ["block", "each", [["get", "institutions", ["loc", [null, [21, 16], [21, 28]]]]], [], 0, null, ["loc", [null, [21, 8], [23, 17]]]], ["attribute", "value", ["get", "grant_number", ["loc", [null, [26, 49], [26, 61]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_number", ["loc", [null, [26, 87], [26, 99]]]]], [], ["loc", [null, [26, 82], [26, 100]]]]], ["value", "target.value"], ["loc", [null, [26, 73], [26, 123]]]]], ["element", "action", ["addGrant", ["get", "agencyId", ["loc", [null, [28, 88], [28, 96]]]], ["get", "grant_number", ["loc", [null, [28, 97], [28, 109]]]], ["get", "grant_pi", ["loc", [null, [28, 110], [28, 118]]]]], [], ["loc", [null, [28, 68], [28, 120]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/agency/analytics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/agency/analytics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("analytics");
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
  })());
});
define("federal-prototype/templates/agency/overview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/agency/overview.hbs"
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
      statements: [["inline", "grant-viewer", [], ["role", "agency", "model", ["subexpr", "@mut", [["get", "grants", ["loc", [null, [1, 37], [1, 43]]]]], [], []], "createGrantHook", ["subexpr", "action", ["createGrant"], [], ["loc", [null, [1, 60], [1, 82]]]], "institution", ["subexpr", "@mut", [["get", "institution", ["loc", [null, [1, 95], [1, 106]]]]], [], []], "agency", ["subexpr", "@mut", [["get", "agency", ["loc", [null, [1, 114], [1, 120]]]]], [], []], "getGrantsPage", ["subexpr", "action", ["getGrantsPage"], [], ["loc", [null, [1, 135], [1, 159]]]]], ["loc", [null, [1, 2], [1, 161]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/agency/settings", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/agency/settings.hbs"
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
define("federal-prototype/templates/agency/settings/api", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 11
          }
        },
        "moduleName": "federal-prototype/templates/agency/settings/api.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "api-tab", ["loc", [null, [3, 0], [3, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/agency/settings/metadata", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 25
          }
        },
        "moduleName": "federal-prototype/templates/agency/settings/metadata.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "settings-side-by-side", ["loc", [null, [3, 0], [3, 25]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.fedhead {\n    position: relative;\n}\n.navbar-fixed-top {\n    position: relative;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "display: flex; min-height:100vh; flex-direction: column;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "flex: 1;");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["inline", "osf-navbar", [], ["class", "fedhead", "loginAction", ["subexpr", "action", ["login"], [], ["loc", [null, [11, 41], [11, 57]]]]], ["loc", [null, [11, 0], [11, 59]]]], ["content", "outlet", ["loc", [null, [13, 1], [13, 11]]]], ["content", "osf-footer", ["loc", [null, [16, 0], [16, 14]]]], ["content", "osf-copyright", ["loc", [null, [17, 0], [17, 17]]]], ["content", "osf-mode-footer", ["loc", [null, [18, 0], [18, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/components/analytics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/analytics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("analytics");
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
  })());
});
define("federal-prototype/templates/components/api-tab", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 6
          }
        },
        "moduleName": "federal-prototype/templates/components/api-tab.hbs"
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
        dom.setAttribute(el1, "class", "settings-body");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "settingsHolder");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("How to get a individual file through the api");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("instructions on how to get the file plus exaple url");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("https://osf.io/api/federal/documents/{file-id}");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("How to get multiple files through the api");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("instructions on how to get all the files plus exaple url");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("https://osf.io/api/federal/documents/");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
define("federal-prototype/templates/components/dropzone-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/components/dropzone-widget.hbs"
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
define("federal-prototype/templates/components/form-builder", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/form-builder.hbs"
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
define("federal-prototype/templates/components/grant-action-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 8
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "federal-prototype/templates/components/grant-action-button.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "item", ["loc", [null, [5, 28], [5, 32]]]]], ["content", "item", ["loc", [null, [5, 35], [5, 43]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/components/grant-action-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "class", "form-control");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("option");
        dom.setAttribute(el2, "disabled", "");
        dom.setAttribute(el2, "selected", "");
        var el3 = dom.createTextNode("Actions");
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
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["clickHandler"], ["value", "target.value"], ["loc", [null, [2, 38], [2, 84]]]]], ["block", "each", [["get", "this.availableactions", ["loc", [null, [4, 16], [4, 37]]]]], [], 0, null, ["loc", [null, [4, 8], [6, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/components/grant-viewer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 4
            },
            "end": {
              "line": 48,
              "column": 4
            }
          },
          "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [9]);
          var morphs = new Array(8);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
          morphs[4] = dom.createMorphAt(element1, 1, 1);
          morphs[5] = dom.createMorphAt(element1, 3, 3);
          morphs[6] = dom.createMorphAt(element1, 5, 5);
          morphs[7] = dom.createMorphAt(dom.childAt(element0, [11]), 0, 0);
          return morphs;
        },
        statements: [["content", "grant.number", ["loc", [null, [37, 16], [37, 32]]]], ["content", "grant.agency.name", ["loc", [null, [38, 16], [38, 37]]]], ["content", "grant.document.name", ["loc", [null, [39, 16], [39, 39]]]], ["content", "grant.pi", ["loc", [null, [40, 16], [40, 28]]]], ["inline", "if", [["get", "roleIsPI", ["loc", [null, [42, 21], [42, 29]]]], ["get", "grant.pistatus", ["loc", [null, [42, 30], [42, 44]]]]], [], ["loc", [null, [42, 16], [42, 46]]]], ["inline", "if", [["get", "roleIsAgency", ["loc", [null, [43, 21], [43, 33]]]], ["get", "grant.agencystatus", ["loc", [null, [43, 34], [43, 52]]]]], [], ["loc", [null, [43, 16], [43, 54]]]], ["inline", "if", [["get", "roleIsInstitution", ["loc", [null, [44, 21], [44, 38]]]], ["get", "grant.institutionstatus", ["loc", [null, [44, 39], [44, 62]]]]], [], ["loc", [null, [44, 16], [44, 64]]]], ["inline", "grant-action-button", [], ["grant", ["subexpr", "@mut", [["get", "grant", ["loc", [null, [46, 44], [46, 49]]]]], [], []], "role", ["subexpr", "@mut", [["get", "role", ["loc", [null, [46, 55], [46, 59]]]]], [], []], "clickHandler", ["subexpr", "action", ["updateStatus"], [], ["loc", [null, [46, 73], [46, 96]]]]], ["loc", [null, [46, 16], [46, 98]]]]],
        locals: ["grant"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 8
              },
              "end": {
                "line": 54,
                "column": 8
              }
            },
            "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createElement("td");
            dom.setAttribute(el2, "colspan", "7");
            dom.setAttribute(el2, "class", "no-grants-error");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h2");
            var el4 = dom.createTextNode("This institution has not been associated with any grants yet.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createTextNode("To create a grant, press the 'Add a grant' button. Once created, the grant will appear in this table.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
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
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 55,
                  "column": 12
                },
                "end": {
                  "line": 60,
                  "column": 12
                }
              },
              "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createElement("td");
              dom.setAttribute(el2, "colspan", "7");
              dom.setAttribute(el2, "class", "no-grants-error");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("h2");
              var el4 = dom.createTextNode("This agency has not awarded any grants yet.");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("p");
              var el4 = dom.createTextNode("To create a grant, press the 'Add a grant' button. Once created, the grant will appear in this table.");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
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
              "revision": "Ember@2.6.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 12
                },
                "end": {
                  "line": 66,
                  "column": 12
                }
              },
              "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createElement("td");
              dom.setAttribute(el2, "colspan", "7");
              dom.setAttribute(el2, "class", "no-grants-error");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("h2");
              var el4 = dom.createTextNode("There are no grants.");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("p");
              var el4 = dom.createTextNode("To create a grant, press the 'Add a grant' button. Once created, the grant will appear in this table.");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                \n");
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
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 8
              },
              "end": {
                "line": 67,
                "column": 8
              }
            },
            "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
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
          statements: [["block", "if", [["get", "agency", ["loc", [null, [55, 18], [55, 24]]]]], [], 0, 1, ["loc", [null, [55, 12], [66, 19]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 4
            },
            "end": {
              "line": 68,
              "column": 4
            }
          },
          "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
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
        statements: [["block", "if", [["get", "institution", ["loc", [null, [49, 14], [49, 25]]]]], [], 0, 1, ["loc", [null, [49, 8], [67, 15]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 82,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/grant-viewer.hbs"
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
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.navfooter {\n    background-color: rgba(250,250,250,0.3);\n    padding: 16px;\n    -webkit-box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    -moz-box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    text-align: center;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "agency-header");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "table table-bordered table-hover");
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        dom.setAttribute(el3, "class", "thead-default thead-grants");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "thead-default-tr-th grant-number-header");
        var el6 = dom.createTextNode("Grant Number");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "thead-default-tr-th");
        var el6 = dom.createTextNode("Granting Agency");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "thead-default-tr-th");
        var el6 = dom.createTextNode("Title");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "thead-default-tr-th");
        var el6 = dom.createTextNode("PI");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "thead-default-tr-th");
        var el6 = dom.createTextNode("Status");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "navfooter");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-chevron-left");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-chevron-right");
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
        var element2 = dom.childAt(fragment, [6]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3]), 1, 1);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createElementMorph(element4);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "each", [["get", "model", ["loc", [null, [35, 12], [35, 17]]]]], [], 0, 1, ["loc", [null, [35, 4], [68, 13]]]], ["element", "action", ["prevPageHook"], [], ["loc", [null, [79, 32], [79, 57]]]], ["element", "action", ["nextPageHook"], [], ["loc", [null, [80, 32], [80, 57]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("federal-prototype/templates/components/meta-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/meta-data.hbs"
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
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
        var el3 = dom.createTextNode(" Submit Document ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "model.grant.schema", ["loc", [null, [2, 46], [2, 64]]]]], [], []]], ["loc", [null, [2, 24], [2, 66]]]], ["element", "action", ["submit", ["get", "model", ["loc", [null, [3, 79], [3, 84]]]]], [], ["loc", [null, [3, 61], [3, 86]]]], ["content", "model.grant.schema", ["loc", [null, [5, 0], [5, 22]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/components/researcher-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/components/researcher-form.hbs"
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
define("federal-prototype/templates/components/researcher-status-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/researcher-status-header.hbs"
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
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "custom");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("-Researchers-");
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/components/settings-back", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "federal-prototype/templates/components/settings-back.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-default back-button");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-chevron-left");
          dom.setAttribute(el2, "aria-hidden", "true");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Back");
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
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/components/settings-back.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["agency.overview"], ["tagName", "span"], 0, null, ["loc", [null, [2, 0], [4, 12]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/components/settings-side-by-side", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 6
            },
            "end": {
              "line": 12,
              "column": 63
            }
          },
          "moduleName": "federal-prototype/templates/components/settings-side-by-side.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
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
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/components/settings-side-by-side.hbs"
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
        dom.setAttribute(el1, "class", "settings-body");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "settingsHolder");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-button-holder");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("       <button type=\"button\" class=\"btn btn-default formBuilderButtons\" {{action \"SetBuilderTo\"  \"wiziwig\"}}>Form Builder</button>\n      <button type=\"button\" class=\"btn btn-default formBuilderButtons\" {{action \"SetBuilderTo\" \"json\"}}>Json From Builder</button> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "metaDataHolder");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "metadataJson");
        var el5 = dom.createTextNode("Meta Data (Json format)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n       ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-warning ");
        dom.setAttribute(el4, "style", "float:left;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "fa fa-repeat fa-rotate-270");
        dom.setAttribute(el5, "aria-hidden", "true");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Reset to Default");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "formBuilderHolder");
        dom.setAttribute(el3, "style", "display:none");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createTextNode("Drag and Drop Builder");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "build-wrap");
        dom.setAttribute(el4, "value", "onFormChange");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "btn btn-primary save-button-1");
        dom.setAttribute(el3, "style", "float:right;");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-floppy-o");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Save");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-table");
        var el3 = dom.createTextNode(" \n\n\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [5]);
        var element3 = dom.childAt(element2, [5]);
        var element4 = dom.childAt(element1, [9]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "textarea", [], ["id", "metadataJson", "value", ["subexpr", "@mut", [["get", "metadataInputJson", ["loc", [null, [12, 42], [12, 59]]]]], [], []]], 0, null, ["loc", [null, [12, 6], [12, 76]]]], ["element", "action", ["setDefault"], [], ["loc", [null, [13, 74], [13, 98]]]], ["element", "action", ["save"], [], ["loc", [null, [22, 85], [22, 103]]]], ["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "schema", ["loc", [null, [29, 27], [29, 33]]]]], [], []]], ["loc", [null, [29, 5], [29, 35]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/components/status-filter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 5
          }
        },
        "moduleName": "federal-prototype/templates/components/status-filter.hbs"
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
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "id", "filters");
        dom.setAttribute(el1, "class", "clearfix");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "filter active");
        dom.setAttribute(el3, "data-filter", ".read, .unread, .archived");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-circle");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" All");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "filter");
        dom.setAttribute(el3, "data-filter", ".read");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-circle");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Read");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "filter");
        dom.setAttribute(el3, "data-filter", ".unread");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-circle");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Unread");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "filter");
        dom.setAttribute(el3, "data-filter", ".archived");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-circle");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Archived");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["element", "action", ["getSelectedStatusFilter"], [], ["loc", [null, [2, 34], [2, 70]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/components/successful-upload", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "federal-prototype/templates/components/successful-upload.hbs"
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
          var el2 = dom.createTextNode(" Done! ");
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
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "federal-prototype/templates/components/successful-upload.hbs"
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
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "text-center");
        var el3 = dom.createTextNode("Document Successfully Uploaded!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 5, 5);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "link-to", ["index"], ["tagName", "span"], 0, null, ["loc", [null, [5, 2], [7, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/grant", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "federal-prototype/templates/grant.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element5, 'selected');
          morphs[1] = dom.createAttrMorph(element5, 'value');
          morphs[2] = dom.createMorphAt(element5, 0, 0);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "inst", ["loc", [null, [4, 26], [4, 30]]]], ["get", "institutionChoice", ["loc", [null, [4, 31], [4, 48]]]]], [], ["loc", [null, [4, 21], [4, 50]]]]], ["attribute", "value", ["get", "inst", ["loc", [null, [4, 59], [4, 63]]]]], ["content", "inst", ["loc", [null, [4, 66], [4, 74]]]]],
        locals: ["inst"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 16
              },
              "end": {
                "line": 17,
                "column": 16
              }
            },
            "moduleName": "federal-prototype/templates/grant.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
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
          statements: [["attribute", "selected", ["subexpr", "eq", [["get", "agency", ["loc", [null, [16, 38], [16, 44]]]], ["get", "agencyChoice", ["loc", [null, [16, 45], [16, 57]]]]], [], ["loc", [null, [16, 33], [16, 59]]]]], ["attribute", "value", ["get", "agencyChoice.id", ["loc", [null, [16, 68], [16, 83]]]]], ["content", "agencyChoice.name", ["loc", [null, [16, 86], [16, 107]]]]],
          locals: ["agencyChoice"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 22,
              "column": 8
            }
          },
          "moduleName": "federal-prototype/templates/grant.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("select");
          dom.setAttribute(el1, "class", "agencySelect input-lg select");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("option");
          var el3 = dom.createTextNode("Select an Agency");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "class", "input input-lg");
          dom.setAttribute(el1, "placeholder", "Grant Number");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "class", "input input-lg");
          dom.setAttribute(el1, "placeholder", "Principal Investigator");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "btn btn-primary");
          var el2 = dom.createTextNode("Add a grant");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var element3 = dom.childAt(fragment, [5]);
          var element4 = dom.childAt(fragment, [7]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          morphs[2] = dom.createAttrMorph(element2, 'value');
          morphs[3] = dom.createAttrMorph(element2, 'onchange');
          morphs[4] = dom.createAttrMorph(element3, 'value');
          morphs[5] = dom.createAttrMorph(element3, 'onchange');
          morphs[6] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "agencyId", ["loc", [null, [13, 80], [13, 88]]]]], [], ["loc", [null, [13, 75], [13, 89]]]]], ["value", "target.value"], ["loc", [null, [13, 66], [13, 112]]]]], ["block", "each", [["get", "agecies", ["loc", [null, [15, 24], [15, 31]]]]], [], 0, null, ["loc", [null, [15, 16], [17, 25]]]], ["attribute", "value", ["get", "grant_number", ["loc", [null, [19, 50], [19, 62]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_number", ["loc", [null, [19, 88], [19, 100]]]]], [], ["loc", [null, [19, 83], [19, 101]]]]], ["value", "target.value"], ["loc", [null, [19, 74], [19, 124]]]]], ["attribute", "value", ["get", "grant_pi", ["loc", [null, [20, 50], [20, 58]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_pi", ["loc", [null, [20, 84], [20, 92]]]]], [], ["loc", [null, [20, 79], [20, 93]]]]], ["value", "target.value"], ["loc", [null, [20, 70], [20, 116]]]]], ["element", "action", ["createGrantHook", ["get", "agencyId", ["loc", [null, [21, 86], [21, 94]]]], ["get", "grant_number", ["loc", [null, [21, 95], [21, 107]]]], ["get", "grant_pi", ["loc", [null, [21, 108], [21, 116]]]]], [], ["loc", [null, [21, 59], [21, 118]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/grant.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "class", "institutionSelect input-lg select");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("option");
        var el3 = dom.createTextNode("Select an Institution");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1, "class", "input input-lg");
        dom.setAttribute(el1, "placeholder", "Grant Number");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-primary btn-lg button-pos");
        var el2 = dom.createTextNode("Add a grant");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0]);
        var element7 = dom.childAt(fragment, [2]);
        var element8 = dom.childAt(fragment, [4]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element6, 'onchange');
        morphs[1] = dom.createMorphAt(element6, 3, 3);
        morphs[2] = dom.createAttrMorph(element7, 'value');
        morphs[3] = dom.createAttrMorph(element7, 'onchange');
        morphs[4] = dom.createElementMorph(element8);
        morphs[5] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "institutionId", ["loc", [null, [1, 73], [1, 86]]]]], [], ["loc", [null, [1, 68], [1, 87]]]]], ["value", "target.value"], ["loc", [null, [1, 59], [1, 110]]]]], ["block", "each", [["get", "institutions", ["loc", [null, [3, 12], [3, 24]]]]], [], 0, null, ["loc", [null, [3, 4], [5, 13]]]], ["attribute", "value", ["get", "grant_number", ["loc", [null, [7, 38], [7, 50]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_number", ["loc", [null, [7, 76], [7, 88]]]]], [], ["loc", [null, [7, 71], [7, 89]]]]], ["value", "target.value"], ["loc", [null, [7, 62], [7, 112]]]]], ["element", "action", ["createGrantHook", ["get", "agencyId", ["loc", [null, [8, 91], [8, 99]]]], ["get", "grant_number", ["loc", [null, [8, 100], [8, 112]]]], ["get", "grant_pi", ["loc", [null, [8, 113], [8, 121]]]]], [], ["loc", [null, [8, 64], [8, 123]]]], ["block", "if", [["get", "institution", ["loc", [null, [12, 14], [12, 25]]]]], [], 1, null, ["loc", [null, [12, 8], [22, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("federal-prototype/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 133,
              "column": 2
            },
            "end": {
              "line": 135,
              "column": 2
            }
          },
          "moduleName": "federal-prototype/templates/index.hbs"
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
          var el2 = dom.createTextNode("Assigned Grants");
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
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 148,
              "column": 4
            },
            "end": {
              "line": 150,
              "column": 4
            }
          },
          "moduleName": "federal-prototype/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary btn-lg btn-block");
          var el2 = dom.createTextNode("Review Grants");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 164,
              "column": 2
            },
            "end": {
              "line": 166,
              "column": 2
            }
          },
          "moduleName": "federal-prototype/templates/index.hbs"
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
          var el2 = dom.createTextNode("Administer Grants");
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
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 169,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.container.row {\n}\n\n.row {\n    max-width: 1170px;\n    margin: 0 auto;\n}\n\n.col {\n  overflow: hidden;\n  height: initial;\n  margin: 100px auto;\n  border-top: 5px solid #2e6da4;\n  background: rgba(255, 255, 255, .49);\n  padding: 15px 15px;\n  border-radius: 2px;\n  margin: 0 auto;\n  margin-top: 80px;\n}\n\n.bens {\n  background-color: #eeeeee;\n  border-radius: 2px;\n  padding: 20px 30px;\n  margin-bottom: 30px;\n  min-height: 175px;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "custom");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("OSF Grants");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.flexbox-parent {\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-content: space-between;\n    -ms-flex-line-pack: space-between;\n    align-content: space-between;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    }\n\n.flexboxparenta {\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-content: space-arount;\n    -ms-flex-line-pack: space-between;\n    align-content: justify;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center; \n}\n\n.flexbox-child > i.fa {\n    display: block;\n    margin: 5px auto;\n    text-align: center;\n    color: rgba(60,65,90,0.4);\n    text-shadow: 0 1px 4px rgba(250,250,250, 0.7);\n}\n\n.flexbox-childa {\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-align-self: stretch;\n    -ms-flex-item-align: stretch;\n    align-self: stretch;\n \n\n}\n\n.flexbox-child {\n\n    padding: 10px;\n    background-color: rgba(250,250,250,0.3);\n    width: 330px;\n    margin: 20px;\n     -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 0 0 auto;\n    -webkit-align-self: stretch;\n    -ms-flex-item-align: stretch;\n    align-self: stretch;\n   }\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flexbox-parent");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flexbox-child flexbox-parenta");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-group fa-3x");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Researchers");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Convenient compliance");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "bens");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Submit your research");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Review the status of submitted research");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Respond to discussion pertaining your research");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Check the status of a paper");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flexbox-child");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-building fa-3x");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Institutions");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Coordinated funding tools");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "bens flexbox-childa");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Request materials be submitted by your researchers");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Review submitted research");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Coordinate the submission and review of research performed with grants by your institution");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flexbox-child");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-institution fa-3x");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Granting Agencies");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Grant accountability simplified");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "bens");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Manage the requirements of research you provide grants to.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Review submitted research");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Communicate with the research's authors ranting agency to.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Track information on all the grants awarded.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
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
        var element0 = dom.childAt(fragment, [6]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 11, 11);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 11, 11);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 11, 11);
        return morphs;
      },
      statements: [["block", "link-to", ["researcher.overview"], ["tagName", "span"], 0, null, ["loc", [null, [133, 2], [135, 14]]]], ["block", "link-to", ["institution.overview"], ["tagName", "span"], 1, null, ["loc", [null, [148, 4], [150, 16]]]], ["block", "link-to", ["agency.overview"], ["tagName", "span"], 2, null, ["loc", [null, [164, 2], [166, 14]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("federal-prototype/templates/institution", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 112
            }
          },
          "moduleName": "federal-prototype/templates/institution.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary left");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-bars fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Menu");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 139
            }
          },
          "moduleName": "federal-prototype/templates/institution.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-bar-chart fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Analytics");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 143
            }
          },
          "moduleName": "federal-prototype/templates/institution.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-institution fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Create Grant");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 133
            }
          },
          "moduleName": "federal-prototype/templates/institution.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-globe fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Overview");
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
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/institution.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "moderatorHolder");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "custom");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Institution Overview");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element1, 5, 5);
        morphs[3] = dom.createMorphAt(element1, 7, 7);
        morphs[4] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [4, 4], [4, 124]]]], ["block", "link-to", ["institution.analytics"], [], 1, null, ["loc", [null, [5, 4], [5, 151]]]], ["block", "link-to", ["institution.addgrant"], [], 2, null, ["loc", [null, [6, 4], [6, 155]]]], ["block", "link-to", ["institution.overview"], [], 3, null, ["loc", [null, [7, 4], [7, 145]]]], ["content", "outlet", ["loc", [null, [10, 0], [10, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("federal-prototype/templates/institution/addgrant", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 12
            },
            "end": {
              "line": 22,
              "column": 12
            }
          },
          "moduleName": "federal-prototype/templates/institution/addgrant.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
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
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "agency", ["loc", [null, [21, 34], [21, 40]]]], ["get", "agencyChoice", ["loc", [null, [21, 41], [21, 53]]]]], [], ["loc", [null, [21, 29], [21, 55]]]]], ["attribute", "value", ["get", "agencyChoice.id", ["loc", [null, [21, 64], [21, 79]]]]], ["content", "agencyChoice.name", ["loc", [null, [21, 82], [21, 103]]]]],
        locals: ["agencyChoice"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/institution/addgrant.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.addgrant {\n    background-color: rgba(250,250,250,0.3);\n    padding: 30px;\n    text-align: center;\n}\n\n.addgrant .container {\n    max-width: 600px;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "addgrant");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "class", "agencySelect form-control input-lg select");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("option");
        var el5 = dom.createTextNode("Select an Agency");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "class", "form-control input-lg");
        dom.setAttribute(el3, "placeholder", "Grant Number");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "class", "form-control input-lg");
        dom.setAttribute(el3, "placeholder", "Principal Investigator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "btn btn-primary btn-lg button-pos");
        var el4 = dom.createTextNode("Add this grant");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [3, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [5]);
        var element4 = dom.childAt(element1, [9]);
        var element5 = dom.childAt(element1, [13]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element2, 'onchange');
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createAttrMorph(element3, 'value');
        morphs[3] = dom.createAttrMorph(element3, 'onchange');
        morphs[4] = dom.createAttrMorph(element4, 'value');
        morphs[5] = dom.createAttrMorph(element4, 'onchange');
        morphs[6] = dom.createElementMorph(element5);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "agencyId", ["loc", [null, [18, 89], [18, 97]]]]], [], ["loc", [null, [18, 84], [18, 98]]]]], ["value", "target.value"], ["loc", [null, [18, 75], [18, 121]]]]], ["block", "each", [["get", "agencies", ["loc", [null, [20, 20], [20, 28]]]]], [], 0, null, ["loc", [null, [20, 12], [22, 21]]]], ["attribute", "value", ["get", "grant_number", ["loc", [null, [25, 53], [25, 65]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_number", ["loc", [null, [25, 91], [25, 103]]]]], [], ["loc", [null, [25, 86], [25, 104]]]]], ["value", "target.value"], ["loc", [null, [25, 77], [25, 127]]]]], ["attribute", "value", ["get", "grant_pi", ["loc", [null, [27, 53], [27, 61]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_pi", ["loc", [null, [27, 87], [27, 95]]]]], [], ["loc", [null, [27, 82], [27, 96]]]]], ["value", "target.value"], ["loc", [null, [27, 73], [27, 119]]]]], ["element", "action", ["createGrant", ["get", "agencyId", ["loc", [null, [29, 95], [29, 103]]]], ["get", "grant_number", ["loc", [null, [29, 104], [29, 116]]]], ["get", "grant_pi", ["loc", [null, [29, 117], [29, 125]]]]], [], ["loc", [null, [29, 72], [29, 127]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("federal-prototype/templates/institution/analytics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/institution/analytics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("analytics");
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
  })());
});
define("federal-prototype/templates/institution/assign", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/institution/assign.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.addgrant {\n    background-color: rgba(250,250,250,0.3);\n    padding: 30px;\n    text-align: center;\n}\n\n.addgrant .container {\n    max-width: 600px;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "addgrant");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Assign a PR to grant ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "class", "form-control input-lg");
        dom.setAttribute(el3, "placeholder", "Principal Investigator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "btn btn-primary btn-lg button-pos");
        var el4 = dom.createTextNode("Assign");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createAttrMorph(element1, 'value');
        morphs[2] = dom.createAttrMorph(element1, 'onchange');
        morphs[3] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["content", "grant.number", ["loc", [null, [18, 33], [18, 49]]]], ["attribute", "value", ["get", "grant_pi", ["loc", [null, [19, 53], [19, 61]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "grant_pi", ["loc", [null, [19, 87], [19, 95]]]]], [], ["loc", [null, [19, 82], [19, 96]]]]], ["value", "target.value"], ["loc", [null, [19, 73], [19, 119]]]]], ["element", "action", ["assignGrant", ["get", "grant", ["loc", [null, [21, 95], [21, 100]]]], ["get", "grant_pi", ["loc", [null, [21, 101], [21, 109]]]]], [], ["loc", [null, [21, 72], [21, 111]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/institution/overview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/institution/overview.hbs"
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
      statements: [["inline", "grant-viewer", [], ["role", "institution", "model", ["subexpr", "@mut", [["get", "grants", ["loc", [null, [1, 42], [1, 48]]]]], [], []], "agency", ["subexpr", "@mut", [["get", "agency", ["loc", [null, [1, 56], [1, 62]]]]], [], []], "createGrantHook", ["subexpr", "action", ["createGrant"], [], ["loc", [null, [1, 79], [1, 101]]]], "institution", ["subexpr", "@mut", [["get", "institution", ["loc", [null, [1, 114], [1, 125]]]]], [], []], "agency", ["subexpr", "@mut", [["get", "agency", ["loc", [null, [1, 133], [1, 139]]]]], [], []], "getGrantsPage", ["subexpr", "action", ["getGrantsPage"], [], ["loc", [null, [1, 154], [1, 178]]]]], ["loc", [null, [1, 2], [1, 180]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
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
          "moduleName": "federal-prototype/templates/navbar.hbs"
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
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/navbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-inverse");
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
        var el1 = dom.createTextNode("\n");
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
define("federal-prototype/templates/preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\nh1.preview {\n    background-color: #777;\n    color: #fff;\n    padding: 20px 0;\n    margin: 0;\n    -webkit-box-shadow: inset 0px -84px 5px -84px rgba(0,0,0,0.75), inset 0px 82px 59px -84px rgba(0,0,0,0.75);\n    -moz-box-shadow:  inset 0px -84px 5px -84px rgba(0,0,0,0.75), inset 0px 82px 59px -84px rgba(0,0,0,0.75);\n    box-shadow: inset 0px -84px 5px -84px rgba(0,0,0,0.75), inset 0px 82px 59px -84px rgba(0,0,0,0.75);adding: 20px 0 10px 0;\n}\n\n.mfr--wrapper-wrapper {\n    padding: 20px;\n    background-color: rgba(250,250,250,0.3);\n    text-align: center;\n    -webkit-box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    -moz-box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    box-shadow: inset 0px 122px 10px -122px rgba(0,0,0,0.75);\n    text-align: center;\n}\n.mfr--wrapper {\n    display: inline-block;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "preview");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mfr--wrapper-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "mfr--wrapper");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["content", "filename", ["loc", [null, [25, 20], [25, 32]]]], ["inline", "file-renderer", [], ["download", ["subexpr", "@mut", [["get", "path", ["loc", [null, [28, 25], [28, 29]]]]], [], []], "width", "800", "height", "1000", "allowfullscreen", true], ["loc", [null, [28, 0], [28, 78]]]], ["content", "outlet", ["loc", [null, [31, 0], [31, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/researcher", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 112
            }
          },
          "moduleName": "federal-prototype/templates/researcher.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary left");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-bars fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Menu");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 145
            }
          },
          "moduleName": "federal-prototype/templates/researcher.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "id", "uploadhere");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-upload fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Upload");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 138
            }
          },
          "moduleName": "federal-prototype/templates/researcher.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary right");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-institution fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Requests");
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
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/researcher.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "custom");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Researcher");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 3, 3);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        morphs[2] = dom.createMorphAt(element0, 7, 7);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [3, 4], [3, 124]]]], ["block", "link-to", ["researcher.upload"], [], 1, null, ["loc", [null, [4, 4], [4, 157]]]], ["block", "link-to", ["researcher.overview"], [], 2, null, ["loc", [null, [5, 4], [5, 150]]]], ["content", "outlet", ["loc", [null, [7, 0], [7, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("federal-prototype/templates/researcher/attach", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/researcher/attach.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Connect Research to a Grant");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("         \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Connect Research to Grant ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" by uploading your research to a non-paywalled provider.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
        var el3 = dom.createTextNode(" Upload ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "upload-container");
        var el3 = dom.createTextNode("You can also: \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createTextNode("Import from OSF");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-github");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Import from Github");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-dropbox");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Import from Dropbox");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [7]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        morphs[2] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["content", "grant.number", ["loc", [null, [3, 33], [3, 49]]]], ["inline", "file-chooser", [], ["multiple", true, "files", ["subexpr", "@mut", [["get", "files", ["loc", [null, [5, 39], [5, 44]]]]], [], []]], ["loc", [null, [5, 4], [5, 46]]]], ["element", "action", ["submit", ["get", "files", ["loc", [null, [6, 82], [6, 87]]]], ["get", "grant", ["loc", [null, [6, 88], [6, 93]]]]], [], ["loc", [null, [6, 63], [6, 95]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/researcher/grant", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "federal-prototype/templates/researcher/grant.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-10");
          var el3 = dom.createElement("h4");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" - ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-2");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn col-md-5 btn-primary btn-lg btn-block");
          var el4 = dom.createTextNode("Edit");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1, 0]);
          var element3 = dom.childAt(element1, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element2, 0, 0);
          morphs[1] = dom.createMorphAt(element2, 2, 2);
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["content", "grant.agency.name", ["loc", [null, [8, 31], [8, 52]]]], ["content", "grant.number", ["loc", [null, [8, 55], [8, 71]]]], ["element", "action", ["edit", ["get", "model.grant", ["loc", [null, [10, 80], [10, 91]]]], ["get", "agencyId", ["loc", [null, [10, 92], [10, 100]]]], ["get", "fileList", ["loc", [null, [10, 101], [10, 109]]]], ["get", "model.document", ["loc", [null, [10, 110], [10, 124]]]]], [], ["loc", [null, [10, 64], [10, 126]]]]],
        locals: ["grant"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "federal-prototype/templates/researcher/grant.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n    No grants currently apply to this document. To connect a grant, Use the drop-down menu to select the agency that awarded the grant, type in your grant number, then press the 'Add a grant' button below.\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 8
            },
            "end": {
              "line": 31,
              "column": 8
            }
          },
          "moduleName": "federal-prototype/templates/researcher/grant.hbs"
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
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "agency", ["loc", [null, [30, 30], [30, 36]]]], ["get", "agencyChoice", ["loc", [null, [30, 37], [30, 49]]]]], [], ["loc", [null, [30, 25], [30, 51]]]]], ["attribute", "value", ["get", "agencyChoice.id", ["loc", [null, [30, 60], [30, 75]]]]], ["content", "agencyChoice.name", ["loc", [null, [30, 78], [30, 99]]]]],
        locals: ["agencyChoice"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/researcher/grant.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Connect Grants");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" Add a grant entry for each grant that was awarded to fund this research\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dropdownHolder col-md-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "class", "agencySelect input-lg select");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        var el6 = dom.createTextNode("Select an Agency");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" grant number for new grant");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-success");
        var el5 = dom.createTextNode("Add a grant");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
        var el3 = dom.createTextNode("Finish");
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
        var element4 = dom.childAt(fragment, [0]);
        var element5 = dom.childAt(element4, [9, 1, 1]);
        var element6 = dom.childAt(element4, [11]);
        var element7 = dom.childAt(element6, [5, 1]);
        var element8 = dom.childAt(element4, [13]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element4, 5, 5);
        morphs[1] = dom.createAttrMorph(element5, 'onchange');
        morphs[2] = dom.createMorphAt(element5, 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [3]), 1, 1);
        morphs[4] = dom.createElementMorph(element7);
        morphs[5] = dom.createElementMorph(element8);
        return morphs;
      },
      statements: [["block", "each", [["get", "grants", ["loc", [null, [5, 10], [5, 16]]]]], [], 0, 1, ["loc", [null, [5, 2], [20, 11]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "agencyId", ["loc", [null, [27, 74], [27, 82]]]]], [], ["loc", [null, [27, 69], [27, 83]]]]], ["value", "target.value"], ["loc", [null, [27, 60], [27, 107]]]]], ["block", "each", [["get", "agencies", ["loc", [null, [29, 16], [29, 24]]]]], [], 2, null, ["loc", [null, [29, 8], [31, 17]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "grantNumber", ["loc", [null, [38, 32], [38, 43]]]]], [], []]], ["loc", [null, [38, 6], [38, 45]]]], ["element", "action", ["addGrant", ["get", "model.grants", ["loc", [null, [41, 58], [41, 70]]]], ["get", "agencyId", ["loc", [null, [41, 71], [41, 79]]]], ["get", "grantNumber", ["loc", [null, [41, 80], [41, 91]]]]], [], ["loc", [null, [41, 38], [41, 93]]]], ["element", "action", ["submit", ["get", "model.grant", ["loc", [null, [44, 78], [44, 89]]]], ["get", "agencyId", ["loc", [null, [44, 90], [44, 98]]]], ["get", "fileList", ["loc", [null, [44, 99], [44, 107]]]], ["get", "model.document", ["loc", [null, [44, 108], [44, 122]]]]], [], ["loc", [null, [44, 60], [44, 124]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("federal-prototype/templates/researcher/metadata", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/researcher/metadata.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "dynamic-form", [], ["schema", ["subexpr", "@mut", [["get", "grant.schema", ["loc", [null, [2, 24], [2, 36]]]]], [], []], "formActions", ["subexpr", "@mut", [["get", "formActions", ["loc", [null, [2, 49], [2, 60]]]]], [], []]], ["loc", [null, [2, 2], [2, 62]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/researcher/overview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
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
        "moduleName": "federal-prototype/templates/researcher/overview.hbs"
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["inline", "grant-viewer", [], ["role", "pi", "model", ["subexpr", "@mut", [["get", "grants", ["loc", [null, [3, 31], [3, 37]]]]], [], []], "agencies", ["subexpr", "@mut", [["get", "agencies", ["loc", [null, [3, 47], [3, 55]]]]], [], []], "institution", ["subexpr", "@mut", [["get", "institution", ["loc", [null, [3, 68], [3, 79]]]]], [], []], "institutions", ["subexpr", "@mut", [["get", "institutions", ["loc", [null, [3, 93], [3, 105]]]]], [], []], "agency", ["subexpr", "@mut", [["get", "agency", ["loc", [null, [3, 113], [3, 119]]]]], [], []], "getGrantsPage", ["subexpr", "action", ["getGrantsPage"], [], ["loc", [null, [3, 134], [3, 158]]]]], ["loc", [null, [3, 0], [3, 160]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/researcher/status", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/researcher/status.hbs"
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "top-buffer");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "span5 center-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Document Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Grant #");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Staus");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n   		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        dom.setAttribute(el3, "class", "researcher-file-view");
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("The paper about stuff");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("234567890");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Approved");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "bottom-buffer");
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
define("federal-prototype/templates/researcher/success", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 21
          }
        },
        "moduleName": "federal-prototype/templates/researcher/success.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "successful-upload", ["loc", [null, [2, 0], [2, 21]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/researcher/upload", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/researcher/upload.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Notify your pertinent institutions and Granting agencies of research in two simple steps.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ol");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Upload your research to a non-paywalled provider.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Connect grants to your research");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
        var el3 = dom.createTextNode(" Upload ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "upload-container");
        var el3 = dom.createTextNode("You can also: \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createTextNode("Import from OSF");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-github");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Import from Github");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-dropbox");
        dom.setAttribute(el4, "aria-hidden", "true");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Import from Dropbox");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [7]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 5, 5);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "file-chooser", [], ["multiple", false, "files", ["subexpr", "@mut", [["get", "fileList", ["loc", [null, [8, 40], [8, 48]]]]], [], []]], ["loc", [null, [8, 4], [8, 50]]]], ["element", "action", ["submit", ["get", "fileList", ["loc", [null, [9, 81], [9, 89]]]], ["get", "model.document", ["loc", [null, [9, 90], [9, 104]]]]], [], ["loc", [null, [9, 63], [9, 106]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("federal-prototype/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 73,
            "column": 0
          }
        },
        "moduleName": "federal-prototype/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n\n.flexbox-parent {\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-content: space-between;\n    -ms-flex-line-pack: space-between;\n    align-content: space-between;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    }\n\n.flexbox-child > i.fa {\n    display: block;\n    margin: 5px auto;\n    text-align: center;\n    color: rgba(60,65,90,0.4);\n    text-shadow: 0 1px 4px rgba(250,250,250, 0.7);\n}\n\n.flexbox-child {\n\n    padding: 10px;\n    background-color: rgba(250,250,250,0.3);\n    width: 500px;\n    margin: 20px;\n     -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 0 0 auto;\n    -webkit-align-self: stretch;\n    -ms-flex-item-align: stretch;\n    align-self: stretch;\n   }\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "signup flexbox-parent");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flexbox-child");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Already enrolled?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Sign In");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flexbox-child");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Enroll");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Researchers");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Just sign in with an OSF account!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Enroll an Institution or Agency");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
        var element0 = dom.childAt(fragment, [3, 3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element0, 9, 9);
        morphs[1] = dom.createMorphAt(element0, 13, 13);
        morphs[2] = dom.createMorphAt(element0, 17, 17);
        morphs[3] = dom.createMorphAt(element0, 21, 21);
        morphs[4] = dom.createMorphAt(element0, 25, 25);
        return morphs;
      },
      statements: [["inline", "input", [], ["class", "form-control input-lg", "placeholder", "Contact Name"], ["loc", [null, [62, 8], [62, 74]]]], ["inline", "input", [], ["class", "form-control input-lg", "placeholder", "phone number"], ["loc", [null, [64, 8], [64, 74]]]], ["inline", "input", [], ["class", "form-control input-lg", "placeholder", "email Address"], ["loc", [null, [66, 8], [66, 75]]]], ["inline", "input", [], ["class", "form-control input-lg", "placeholder", "Institution or Agency name"], ["loc", [null, [68, 8], [68, 88]]]], ["inline", "input", [], ["class", "form-control input-lg", "placeholder", "Institution of Agencymailing address"], ["loc", [null, [70, 8], [70, 98]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('federal-prototype/transforms/embed', ['exports', 'ember-osf/transforms/embed'], function (exports, _emberOsfTransformsEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsEmbed['default'];
    }
  });
});
define("federal-prototype/transforms/json-transform", ["exports", "ember-data"], function (exports, _emberData) {
  exports["default"] = _emberData["default"].Transform.extend({
    serialize: function serialize(deserialized) {
      console.log("serialize", deserialized);
      return JSON.stringify(deserialized);
    },
    deserialize: function deserialize(serialized) {
      console.log("deserialize", serialized);
      return JSON.parse(serialized);
    }

  });
});
define('federal-prototype/transforms/links', ['exports', 'ember-osf/transforms/links'], function (exports, _emberOsfTransformsLinks) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsLinks['default'];
    }
  });
});
define('federal-prototype/utils/ajax-helpers', ['exports', 'ember-osf/utils/ajax-helper'], function (exports, _emberOsfUtilsAjaxHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper['default'];
    }
  });
  Object.defineProperty(exports, 'authenticatedAJAX', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper.authenticatedAJAX;
    }
  });
});
define('federal-prototype/utils/auth', ['exports', 'ember-osf/utils/auth'], function (exports, _emberOsfUtilsAuth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAuth['default'];
    }
  });
});
define('federal-prototype/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('federal-prototype/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('federal-prototype/utils/load-relationship', ['exports', 'ember-osf/utils/load-relationship'], function (exports, _emberOsfUtilsLoadRelationship) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsLoadRelationship['default'];
    }
  });
});
define('federal-prototype/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _emberCpValidationsValidatorsAlias) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsAlias['default'];
    }
  });
});
define('federal-prototype/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _emberCpValidationsValidatorsBelongsTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsBelongsTo['default'];
    }
  });
});
define('federal-prototype/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _emberCpValidationsValidatorsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsCollection['default'];
    }
  });
});
define('federal-prototype/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _emberCpValidationsValidatorsConfirmation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsConfirmation['default'];
    }
  });
});
define('federal-prototype/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _emberCpValidationsValidatorsDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDate['default'];
    }
  });
});
define('federal-prototype/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _emberCpValidationsValidatorsDependent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDependent['default'];
    }
  });
});
define('federal-prototype/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _emberCpValidationsValidatorsDsError) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDsError['default'];
    }
  });
});
define('federal-prototype/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _emberCpValidationsValidatorsExclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsExclusion['default'];
    }
  });
});
define('federal-prototype/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _emberCpValidationsValidatorsFormat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsFormat['default'];
    }
  });
});
define('federal-prototype/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _emberCpValidationsValidatorsHasMany) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsHasMany['default'];
    }
  });
});
define('federal-prototype/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _emberCpValidationsValidatorsInclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsInclusion['default'];
    }
  });
});
define('federal-prototype/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _emberCpValidationsValidatorsLength) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsLength['default'];
    }
  });
});
define('federal-prototype/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _emberCpValidationsValidatorsMessages) {
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
define('federal-prototype/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _emberCpValidationsValidatorsNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsNumber['default'];
    }
  });
});
define('federal-prototype/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _emberCpValidationsValidatorsPresence) {
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

define('federal-prototype/config/environment', ['ember'], function(Ember) {
  var prefix = 'federal-prototype';
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
  require("federal-prototype/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"GRANTS_BACKEND":"http://localhost:8001/api","name":"federal-prototype","version":"0.0.1+a9429df5"});
}

/* jshint ignore:end */
//# sourceMappingURL=federal-prototype.map
