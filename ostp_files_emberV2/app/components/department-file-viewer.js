import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
    moreInfo(){

        for(var i = 0; i <= $(".document").length; i++){
          if($(".more-info-button").index(event.target) == i){
              $( ".document:eq("+i+")" ).removeClass( "document-view-document" );
              $( ".document:eq("+i+")" ).toggleClass( "document-more-info" );
              $( ".view-document:eq("+i+")" ).hide();
              $( ".more-info:eq("+i+")" ).toggle("fast");
            }
        }

      },
      viewDocument(){

        for(var i = 0; i <= $(".document").length; i++){
          if($(".view-document-button").index(event.target) == i){
            $( ".document:eq("+i+")" ).removeClass( "document-more-info"  );
            $( ".document:eq("+i+")" ).toggleClass( "document-view-document" );
            $(".more-info:eq("+i+")").hide();
            $(".view-document:eq("+i+")").toggle("fast");
            }
        }

      }
   }
});

