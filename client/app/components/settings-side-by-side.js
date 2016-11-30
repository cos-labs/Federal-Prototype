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
    //didRender() {
    //    this._super(...arguments);
    //    var self = this;
    //    var options = {
    //        dataType: 'json', 
    //        disableFields: [
    //            'autocomplete',
    //            'file',
    //           'date',
    //            'hidden',
    //            'checkbox',
    //            'checkbox-group',
    //            'paragraph',
   //             'number',
    //            'radio-group',
    //            'button',
    //            'header',
    //            'select'
    //        ], 
    //        notify: {
    //            success: function() {
    //                var isEditing = (Ember.$("li").hasClass('editing'));
    //                if (isEditing === false) {
    //                    self.send('updateFormBuilder');
    //                }
    //            }
    //        }
//
//
//        };
//        $('.build-wrap').formBuilder(options);
//    },

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

        },
        updateFormBuilder() {
            console.log("UPDATE Form Builder")
            var propertiesArray = [];
            var optionsArray = [];
            var xml = Ember.$.parseXML(Ember.$(".build-wrap").val());
            var $xml = Ember.$(xml);
            var $field = $xml.find('field');
            console.log($field);
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


        }

   }
});
