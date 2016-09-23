import Ember from 'ember';
//pull from  db
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
const error = {
    "schema": {
        "title": "Error: INVALID JSON",
        "description": "There is an Error in your Json.",
        "type": "object"

    }
};
const defaultJson = {
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
export default Ember.Component.extend({
 //shepard stuff

    didRender() {
        this._super(...arguments);
        var self = this;
        var fbTemplate = document.getElementById('fb-template');
        var options = {
            disableFields: [
                'autocomplete',
                'file',
                'date',
                'hidden',
                'checkbox',
                'checkbox-group',
                'paragraph',
                'number',
                'radio-group',
                'button',
                'header'
            ],
            notify: {
                success: function() {
                    var isEditing = (Ember.$("li").hasClass('editing'));
                    if (isEditing === false) {
                        self.send('updateFormBuilder');
                    }
                }
            }


        };
        $(fbTemplate).formBuilder(options);
       

        //Shepard
        Ember.$(".ui-sortable").css("min-height", "150px");


        let tour = new Shepherd.Tour({
              defaults: {
                classes: 'shepherd-theme-arrows'
              }
            });

            tour.addStep('example', {
              title: 'Create your form',
              text: 'Creating a form is easy! just drag and drop the form element you want.',
              attachTo: '.formBuilderHolder bottom',
              advanceOn: '.docs-link click'
            });

              tour.addStep('example', {
              title: 'Create your form',
              text: 'You can use the drag and drop builder or the json builder.',
              attachTo: '.form-button-holder right',
              advanceOn: '.docs-link click'
            });

             tour.addStep('example', {
              title: 'View your work',
              text: 'This will display a live preview of what you are working on.',
              attachTo: '.alpaca-container-label left',
              advanceOn: '.docs-link click'
            });
         tour.start();

    },



    _schemaList: [JSON.stringify(schema, null, 4)],

    metadataInputJson: JSON.stringify(schema, null, 4),
    schema: Ember.computed('metadataInputJson', function() {
        return JSON.parse(this.get("metadataInputJson"));
    }),
    schemaList: Ember.computed('_schemaList.@each', function() {
        return this.get('_schemaList');
    }),
    onSchemaChange: Ember.observer('metadataInputJson', function() {
        try {
            Ember.$(".settingsHolder, .form-table").css("border-top", " 5px solid #2e6da4");
            JSON.parse(this.get("metadataInputJson"));

        } catch (e) {
            this.get("_schemaList").unshiftObject(error);
            Ember.$(".settingsHolder, .form-table").css("border-top", " 5px solid #d43f3a");
            return false;
        }
        var data = JSON.parse(this.get("metadataInputJson"));
        data.options.focus = "";
        return this.get("_schemaList").unshiftObject(data);

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
        updateFormBuilder() {
            var propertiesArray = [];
            var optionsArray = [];
            var xml = Ember.$.parseXML(Ember.$("#fb-template").val());
            var $xml = Ember.$(xml);
            var $field = $xml.find('field');

            for (var i = 0; i <= $field.length; i++) {
                var type = $field.eq(i).attr("type");
                //subtype = $field.eq(i).attr("subtype"),
                var label = $field.eq(i).attr("label"),
                    name = $field.eq(i).attr("name"),
                    description = $field.eq(i).attr("description"),
                    placeholder = $field.eq(i).attr("placeholder"),
                    options = [],
                    optionValue = [];



                for (var n = 0; n <= $field.eq(i).children().length; n++) {
                    if ($field.eq(i).children().eq(n).val() !== undefined) {
                        options.push('"' + $field.eq(i).children().eq(n).text() + '"');
                        optionValue.push('"' + $field.eq(i).children().eq(n).attr("value") + '"');
                    }
                }
                options = "[" + options.toString() + "]";
                optionValue = "[" + optionValue.toString() + "]";

                //This is where the xml to JSON happens
                if (label !== undefined) {
                    if (type === "select") {
                        propertiesArray.push('"' + name + '": {"type":"string","title":"' + label + '","enum":' + optionValue + '}');
                        optionsArray.push('"' + name + '": {"type":"' + type + '", "helper": "' + description + '", "placeholder": "' + placeholder + '","optionLabels": ' + options + ' }');

                    } else {
                        propertiesArray.push('"' + name + '": {"type":"string","title":"' + label + '"}');
                        optionsArray.push('"' + name + '": {"type":"' + type + '","size": 256, "helper": "' + description + '", "placeholder": "' + placeholder + '" }');
                    }
                }
            }
            const schema = '{"schema":{"title":"Describe the document","description":"The meta data associated with the document that was uploaded.","type":"object","properties":{' + propertiesArray.toString() + '}},"options":{"helper":"The meta data associated with the document that was uploaded.","fields":{' + optionsArray.toString() + '}}}';
            var data = JSON.parse(schema);
            data.options.focus = "";
            this.get("_schemaList").unshiftObject(data);
            document.getElementById("metadataJson").value = JSON.stringify(data, null, 4);


        },
        setDefault() {
            var setTodefault = confirm("Are you sure you want to set your current work to the default Json array? You will lose your current Json array!");
            if (setTodefault === true) {
                document.getElementById("metadataJson").value = JSON.stringify(defaultJson, null, 4);
                Ember.$(".settingsHolder, .form-table").css("border-top", " 5px solid #2e6da4");
                this.get("_schemaList").unshiftObject(defaultJson);
                Ember.$.bootstrapGrowl("Successfully set to default json array!", {
                    type: 'info',
                    align: 'center',
                    width: 350,
                    hight: 40
                });
            } else {}
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
