
import Ember from 'ember';

export default Ember.Component.extend({

    datepublished: '',
    pi: '',
    piemail: '',
    currentPage: 1,
    notlastpage: true,
    notfirstpage: false,
    roleIsInstitution: Ember.computed('role', function() {
        return this.get('role') === 'institution';
    }),
    roleIsAgency: Ember.computed('role', function() {
        return this.get('role') === 'agency';
    }),
    roleIsPI: Ember.computed('role', function() {
        return this.get('role') === 'pi';
    }),
    didInsertElement(){
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
        updateStatus(arg) {
            console.log(arg);
        }, 
        jumpToPage(page_number) {
            console.log(page_number);
            this.attrs.getGrantsPage(page_number);
        },
        nextPageHook() {
            var pagination = this.get('model').get('meta.pagination');
            console.log(pagination);
            var next_page = pagination.page + 1;
            if (next_page > pagination.pages) { return; }
            this.send('jumpToPage', next_page);
        },
        prevPageHook() {
            var pagination = this.get('model').get('meta.pagination');
            console.log(pagination);
            var prev_page = pagination.page - 1;
            if (prev_page < 1) { return; }
            this.send('jumpToPage', prev_page);
        },
        createGrantHook(dept_id, grant_id, pi_name) {
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
