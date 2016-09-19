import Ember from 'ember';

export default Ember.Route.extend({



const schemaObject = {
    "schema": {
        "title": "Your Information",
        "type": "object",
        "properties": {
            "firstName": {
                "title": "First Name",
                "type": "string"
            },
            "lastName": {
                "title": "Last Name",
                "type": "string"
            },
            "age": {
                "title": "Age",
                "type": "integer",
                "minimum": 0,
                "maximum": 100
            }
        }
    },
    "options": {
        "focus":false,
        "form": {
            "attributes": {
                "action": "http://httpbin.org/post",
                "method": "post"
            },
            "buttons": {
                "noop": {
                    "type": "button",
                    "value": "Do Nothing",
                    "styles": "btn btn-primary"
                },
                "validate": {
                    "title": "Validate and view JSON!"
                },
                "submit": {
                    "id": "mySubmit",
                    "attributes": {
                        "data-test": "123"
                    }
                }
            }
        }
    }
};

model() {
  var parentModel = this.modelFor('researcher');
  const formActions = {
    submit: function() {
      var value = this.getValue();
      parentModel.grant.set('answers',value);
      console.log(value);
      parentModel.grant.save();
      // Add transition to successful-upload.hbs
      this.transitionTo();
    },
  };
  return { parentModel, formActions };
},
actions: {
 transitionTo() {
  var controller = this.controller;
  this.transitionTo('researcher.success');
  }

}

});
