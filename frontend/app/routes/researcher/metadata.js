import Ember from 'ember';




const basicObject = {
  "schema": {
    "title":"User Feedback",
    "description":"What do you think about Alpaca?",
    "type":"object",
    "properties": {
      "name": {
        "type":"string",
        "title":"Name"
      },
      "feedback": {
        "type":"string",
        "title":"Feedback"
      },
      "ranking": {
        "type":"string",
        "title":"Ranking",
        "enum":['excellent','ok','so so']
      }
    }
  },
  "options": {
    "helper": "Tell us what you think about Alpaca!",
    "fields": {
      "name": {
        "size": 20,
        "helper": "Please enter your name.",
        "placeholder": "Enter your name"
      },
      "feedback" : {
        "type": "textarea",
        "rows": 5,
        "cols": 40,
        "helper": "Please enter your feedback."
      },
      "ranking": {
        "type": "select",
        "helper": "Select your ranking.",
        "optionLabels": ["Awesome!", "It's Ok", "Hmm..."]
      }
    }
  }
};

export default Ember.Route.extend({
model() {
  //var parentModel = schemaObject
  //this.modelFor('researcher');
  //const formActions = {
    //submit: function() {
      //var value = this.getValue();
      //parentModel.grant.set('answers',value);
      //console.log(value);
      //parentModel.grant.save();
      // Add transition to successful-upload.hbs
      //this.transitionTo();
    //},
  //};
  return basicObject
  //return { 
  //  schema: schemaObject, 
  //  formActions: formActions 
  //};
},
  actions: {



// transitionTo() {
//  var controller = this.controller;
//  this.transitionTo('researcher.success');
//  }

  }

});
