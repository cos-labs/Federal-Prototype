define('ember-osf/mixins/registration-actions', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Mixin.create({
        node: null,
        draft: null,
        model: null,
        _draft: _ember['default'].computed.or('draft', 'model'),
        /** Updates current registration metadata with new responses to questions.
         **/
        _updateMetadata: function _updateMetadata(currentMetadata, newMetadata) {
            var map = new Map(Object.entries(newMetadata));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = map.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var items = _step.value;

                    var key = items[0];
                    var value = items[1];
                    if (typeof value === 'object') {
                        var newValue = this._updateMetadata(currentMetadata[key] || {}, value);
                        currentMetadata[key] = newValue;
                    } else {
                        currentMetadata[key] = newMetadata[key];
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return currentMetadata;
        },
        _generateRegistrationPayload: function _generateRegistrationPayload(draft, registrationChoice, liftEmbargo) {
            var registrationPayload = {
                draftRegistration: draft.id,
                registrationChoice: registrationChoice
            };
            if (registrationChoice === 'embargo') {
                registrationPayload.liftEmbargo = liftEmbargo;
            }
            return registrationPayload;
        },
        actions: {
            createDraft: function createDraft(schemaId) {
                var node = this.get('node');
                var draft = this.store.createRecord('draft-registration', {
                    registrationSupplement: schemaId
                });
                node.get('draftRegistrations').pushObject(draft);
                return node.save();
            },
            deleteDraft: function deleteDraft(draft) {
                return draft.destroyRecord();
            },
            editDraft: function editDraft(updatedMetadata) {
                var draft = this.get('_draft');
                var metadataClone = JSON.parse(JSON.stringify(draft.get('registrationMetadata')));
                var updatedRegistrationMetadata = this._updateMetadata(metadataClone, updatedMetadata);
                draft.set('registrationMetadata', updatedRegistrationMetadata);
                return draft.save();
            },
            registerDraft: function registerDraft(updatedMetadata, registrationChoice, liftEmbargo) {
                var node = this.get('node');
                var draft = this.get('_draft');
                // May need to update metdata one last time
                if (Object.keys(updatedMetadata).length !== 0) {
                    this.send('editDraft', updatedMetadata, 'registration');
                }
                var registrationPayload = this._generateRegistrationPayload(draft, registrationChoice, liftEmbargo);
                var registration = this.store.createRecord('registration', registrationPayload);
                node.get('registrations').pushObject(registration);
                return node.save();
            }
        }
    });
});