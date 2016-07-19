import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

  },
   didRender() {
    this._super(...arguments);
     Ember.$('div[ data-item=".read"]').css("border-left", "5px solid #5cb85c");
     Ember.$('span[ data-filter=".read"] i').css({"color" : "#5cb85c"});

     Ember.$('div[ data-item=".unread"]').css("border-left", "5px solid #eea236");
     Ember.$('span[ data-filter=".unread"] i').css({"color" : "#eea236"});

     Ember.$('div[ data-item=".archived"]').css("border-left", "5px solid #337ab7");
     Ember.$('span[ data-filter=".archived"] i').css({"color" : "#337ab1"});


  },
  actions: {
    getSelectedStatusFilter() {
      Ember.$(".filter").removeClass("active");
       Ember.$(event.target).addClass( "active" );
       var sel =  Ember.$(event.target).data('filter');
       Ember.$('div.document-list div.document').hide();
          if(sel !== ".read, .unread, .archived" && sel !== undefined){
              Ember.$('div[ data-item="'+sel+'"]').show();
          }
          else {
              Ember.$('div.document-list div.document').show();
          }
    }
  }
});
