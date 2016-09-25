import Ember from 'ember';


export default Ember.Component.extend({

    //pipeline: {
    //    'New': ['Request Metadata', 'Pending PI Response'],
    //    '.unread': ['Request Metadata', 'Pending PI Response'],
    //    'Pending PI Response': ['Resend Request', 'Pending PI Response'],
    //    'Metadata Complete': ['', 'Approval'],
    //    '': ['Send Message to Agency', 'Send Message to Agency'],
    //},

    availableactions: [],


    didReceiveAttrs() {
        function getAvailableActions(grant, role) {
            var nulldocument = {
                id: 3,
            }
            var options = [];
            if (grant.open) {
                if (!grant.get('document') || (grant.get('document').get('id') == 125)) {
                    if ((role !== 'pi') && !grant.get('upload_requested')) {
                        options.push('Request Upload');
                    }
                    if (role !== 'agency') {
                        options.push('Upload');
                    }
                } else {
                    options.push('View Document');
                    if (!grant.get('answers') || (grant.get('document').get('id') == 125)) {
                        if ((role !== 'pi') && !grant.get('metadata_requested')) {
                            options.push('Request Metadata'); }
                        if (role !== 'agency') {
                            options.push('Add Metadata');
                        }
                    } else {
                        options.push('View Metadata');
                    }
                }
            }
            if ((role != 'pi') && grant.pi) {
                options.push('Message PI');
            }
            if (role != 'institution' && grant.institution) {
                options.push('Message Institution');
            }
            if (role != 'agency') {
                options.push('Message Agency');
                if (grant.open && ['Submitted', 'Completed'].indexOf(grant.status) != -1) {
                    options.push('Edit');
                    if (!grant.institution || (grant.institution && (role == 'institution'))) {
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
        clickHandler(action) {
            var grant = this.get('grant');
            var role = this.get('role')
            var actions = {
                
                "Upload": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'File Uploaded');
                    });
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Successfully attached file to grant number " + grant.get('number') + ".", { type: 'success', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Request Upload": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Pending Research Upload');
                    });
                    if (role == 'agency') ['status', 'pistatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Research Upload Requested');
                    });
                    if (role == 'institution') ['status', 'pistatus'].map((att) => {
                        grant.set(att, 'Research Upload Requested');
                    });
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("A request to upload the research for grant number " + grant.get('number') + ". has been sent", { type: 'info', align: 'center' , width: 400, height: 40 });
                    })
                    grant.save()
                },
                
                "Add Metadata": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Metadata Added');
                    });
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Metadata has been added to grant number " + grant.get('number') + ".", { type: 'success', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Request Metadata": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Pending Research Upload');
                    });
                    if (role == 'agency') ['status', 'pistatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Research Upload Requested');
                    });
                    if (role == 'institution') ['status', 'pistatus'].map((att) => {
                        grant.set(att, 'Research Upload Requested');
                    });
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("A request for metadata to be added to grant number " + grant.get('number') + " has been sent.", { type: 'info', align: 'center' , width: 400, height: 40 });
                    })
                    grant.save()
                },
                
                "View Metadata": function() {
                    console.log('Displaying grant metadata...');
                },
                
                "Message PI": function() {
                    if (role == 'agency') grant.set('agencystatus', 'Pending PI Response');
                    if (role == 'institution') grant.set('institutionstatus', 'Pending PI Response');
                    grant.set('pistatus', 'Message Waiting');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("A message regarding " + grant.get('number') + " has been sent to the primary investigator.", { type: 'info', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Message Institution": function() {
                    if (role == 'pi') grant.set('pistatus', 'Pending Institution Response');
                    if (role == 'agency') grant.set('agencystatus', 'Pending Institution Response');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("A message regarding " + grant.get('number') + " has been sent to the institution.", { type: 'info', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Message Agency": function() {
                    grant.set('status', 'Pending Agency Response');
                    if (role == 'pi') grant.set('pistatus', 'Pending Agency Response');
                    if (role == 'institution') grant.set('institutionstatus', 'Pending Agency Response');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("A message regarding grant number " + grant.get('number') + " has been sent to the agency.", { type: 'info', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Reopen": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Reopened');
                    });
                    grant.set('status', 'Reopened');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Grant number " + grant.get('number') + " has been reopened by the agency.", { type: 'warning', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Submit": function() {
                    ['status', 'pistatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Submitted');
                    });
                    grant.set('agencystatus', 'Ready for Review');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Succesfully submitted grant number " + grant.get('number') + " for agency approval.", { type: 'success', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Completed": function() {
                    ['status', 'pistatus', 'agencystatus', 'institutionstatus'].map((att) => {
                        grant.set(att, 'Completed');
                    });
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Agency has accepted and approved grant number " + grant.get('number') + ".", { type: 'success', align: 'center' , width: 400, height: 40 });
                    })
                },
                
                "Edit": function() {
                    if (role == 'pi') grant.set('pistatus', 'Grant Information Updated');
                    if (role == 'institution') grant.set('institutionstatus', 'Grant Information Updated');
                    if (role == 'agency') grant.set('agencystatus', 'Grant Information Updated');
                    grant.set('status', 'Grant Information Updated');
                    grant.save().then(function() {
                        Ember.$.bootstrapGrowl("Succesfully updated grant information for grant number " + grant.get('number') + ".", { type: 'success', align: 'center' , width: 400, height: 40 });
                    })
                }


            }
            actions[action]();
        },
    },
    

});
