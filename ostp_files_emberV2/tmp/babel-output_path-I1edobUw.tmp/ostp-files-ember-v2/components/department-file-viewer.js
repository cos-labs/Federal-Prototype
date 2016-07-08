define("ostp-files-ember-v2/components/department-file-viewer", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      moreInfo: function moreInfo() {
        for (var i = 0; i <= _ember["default"].$(".document").length; i++) {
          if (_ember["default"].$(".more-info-button").index(event.target) === i) {
            _ember["default"].$(".document:eq(" + i + ")").removeClass("document-view-document");
            _ember["default"].$(".document:eq(" + i + ")").toggleClass("document-more-info");
            _ember["default"].$(".view-document:eq(" + i + ")").hide();
            _ember["default"].$(".more-info:eq(" + i + ")").toggle("fast");
          }
        }
      },
      viewDocument: function viewDocument() {
        for (var i = 0; i <= _ember["default"].$(".document").length; i++) {
          if (_ember["default"].$(".view-document-button").index(event.target) === i) {
            _ember["default"].$(".document:eq(" + i + ")").removeClass("document-more-info");
            _ember["default"].$(".document:eq(" + i + ")").toggleClass("document-view-document");
            _ember["default"].$(".more-info:eq(" + i + ")").hide();
            _ember["default"].$(".view-document:eq(" + i + ")").toggle("fast");
          }
        }
      }
    }
  });
});