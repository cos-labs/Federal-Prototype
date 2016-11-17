import Ember from 'ember';
const schema = {
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
export default Ember.Component.extend({


    //updateting the alpcaha useing json input on page
    metadataInputJson: JSON.stringify(schema, null, 4),
    schema: Ember.computed('metadataInputJson', function() {  
          try {
            Ember.$(".settingsHolder, .form-table").css("border-top", " 5px solid #2e6da4");
            var data = JSON.parse(this.get("metadataInputJson"));
            data.options.focus = "";  

        } catch (e) {
            Ember.$(".settingsHolder, .form-table").css("border-top", " 5px solid #d43f3a");
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
        save() {
                try {
                    JSON.parse(this.get("metadataInputJson"));
                } catch (e) {
                    console.log("Error in json");
                    Ember.$.bootstrapGrowl("Error: Did not saved, there is an error in your Json!", {
                        type: 'danger',
                        align: 'center',
                        width: 450,
                        hight: 40
                    });
                    return false;
                }
                console.log("Send to DB");
                Ember.$.bootstrapGrowl("Successfully saved!", {
                    type: 'success',
                    align: 'center',
                    width: 200,
                    hight: 40
                });

                return true;

        },

        SetBuilderTo(typeofForm) {
            if (typeofForm === "wiziwig") {
                Ember.$(".metaDataHolder").css("display", "none");
                Ember.$(".formBuilderHolder").css("display", "block");
            } else {
                Ember.$(".formBuilderHolder").css("display", "none");
                Ember.$(".metaDataHolder").css("display", "block");
            }

        }

   }
});
