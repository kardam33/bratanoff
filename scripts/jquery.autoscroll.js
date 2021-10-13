(function ($) {
  $.fn.autoscroll = function (options) {
    let settings = $.extend({}, $.fn.autoscroll.defaults, options);
    return this.each(function () {
      let $this = $(this);
      if ($this.length > 0 && $this[0].scrollHeight > $this[0].clientHeight) {
        let scrollTimer,
          scrollTop = 0;

        function scrollList() {
          var itemHeight = $this.children().eq(1).outerHeight(true);
          scrollTop++;
          if (scrollTop >= itemHeight) {
            $this.scrollTop(0).children().eq(0).appendTo($this);
            scrollTop = 0;
          } else {
            $this.scrollTop(scrollTop);
          }
        }

        $this
          .hover(
            function () {
              clearInterval(scrollTimer);
              $this.css("overflow-y", "auto");
              if (settings.hideScrollbar) {
                $this.addClass("hide-scrollbar");
              }
              if ($.type(settings.handlerIn) === "function") {
                settings.handlerIn();
              }
            },
            function () {
              $this.css("overflow-y", "hidden");
              scrollTimer = setInterval(function () {
                scrollList();
              }, settings.interval);
              if ($.type(settings.handlerOut) === "function") {
                settings.handlerOut();
              }
            }
          )
          .trigger("touchstart");
      }
    });
  };
  $.fn.autoscroll.defaults = {
    interval: 50,
    hideScrollbar: false,
    handlerIn: "touchstart",
    handlerOut: null,
  };

  $(function () {
    $("[data-autoscroll]").autoscroll();
  });
})(jQuery);
