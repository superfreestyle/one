(function($){
  $.fn.extend({
    addClear: function(options) {
      var options =  $.extend({
        closeSymbol: "&#10006;",
        color: "#CCC",
        top: 1,
        right: 4,
        returnFocus: true,
        showOnLoad: false,
        onClear: null
      }, options);

      $(this).wrap("<span style='position:relative;' class='add-clear-span'>");
      $(this).after("<a href='#clear'>"+options.closeSymbol+"</a>");
      $("a[href='#clear']").css({
        color: options.color,
        'text-decoration': 'none',
        display: 'none',
        'line-height': 1,
        overflow: 'hidden',
        position: 'absolute',
        right: options.right,
        top: options.top
      }, this);

      if($(this).val().length >= 1 && options.showOnLoad === true) {
        $(this).siblings("a[href='#clear']").show();
      }

      $(this).keyup(function() {
        if($(this).val().length >= 1) {
          $(this).siblings("a[href='#clear']").show();
        } else {
          $(this).siblings("a[href='#clear']").hide();
        }
      });

      $("a[href='#clear']").click(function(){
        $(this).siblings("input").val("");
        $(this).hide();
        if(options.returnFocus === true){
          $(this).siblings("input").focus();
        }
        if (options.onClear){
          options.onClear($(this).siblings("input"));
        }
        return false;
      });
      return this;
    }
  });
})(jQuery);
