import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

  },
   didRender() {
    this._super(...arguments);
    $('div[ data-item=".read"]').css("border-left", "5px solid #5cb85c");
    $('div[ data-item=".unread"]').css("border-left", "5px solid #eea236");
    $('div[ data-item=".archived"]').css("border-left", "5px solid #337ab7");
  },
  actions: {
    getSelectedStatusFilter() {
      $(".filter").removeClass("active");
      $(event.target).addClass( "active" );
      console.log($(event.target).data('filter'));
      var sel = $(event.target).data('filter');
      $('div.document-list div.document').hide();
          if(sel != ".read, .unread, .archived"){
             $('div[ data-item="'+sel+'"]').show();
          }
          else {
             $('div.document-list div.document').show();
          }
    }
  }
});
