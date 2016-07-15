import Ember from 'ember';



export default Ember.Component.extend({

   actions: {
    moreInfo(){
        for(var i = 0; i <= Ember.$(".document").length; i++){
          if(Ember.$(".more-info-button").index(event.target) === i){
           Ember.$( ".document:eq("+i+")" ).removeClass( "document-view-document" );
           Ember.$( ".document:eq("+i+")" ).toggleClass( "document-more-info" );
           Ember.$( ".view-document:eq("+i+")" ).hide();
           Ember.$( ".more-info:eq("+i+")" ).toggle("fast");
            }
        }
      },
      viewDocument(){
        for(var i = 0; i <= Ember.$(".document").length; i++){
          if(Ember.$(".view-document-button").index(event.target) === i){
           Ember.$( ".document:eq("+i+")" ).removeClass( "document-more-info"  );
           Ember.$( ".document:eq("+i+")" ).toggleClass( "document-view-document" );
           Ember.$(".more-info:eq("+i+")").hide();
           Ember.$(".view-document:eq("+i+")").toggle("fast");
            }
        }
      }
   }
});

