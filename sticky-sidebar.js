(function ($) {
  'use strict'

  var defaults = {
    topMargin: 20,
    bottomMargin: 20,
    parent: false
  },
  pluginName = 'stickySidebar';

  function StickyDiv(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, defaults, options);
    var that = this;
    $(window).load(function() {
      that.init();
    });
  }

  StickyDiv.prototype = {
    stick: function($window, defaultPos, boundary) {
      var windowTop = $window.scrollTop(),
          currentPos = 0, freezeAt = 0;
      if ((windowTop > defaultPos) && (windowTop < boundary)) {
        currentPos = windowTop - defaultPos;
        this.$element.css({top: currentPos});
      } else if ((windowTop > defaultPos) && (windowTop >= boundary)) {
        freezeAt = this.$element.css('top');
        this.$element.css('top', freezeAt);
      }else {
        this.$element.css('top', 0);
      }
    },

    findParentEdge: function() {
      var $element = this.$element, 
          $parent = $(this.options.parent),
          pPadding = parseInt($parent.css('padding-top')) + parseInt($parent.css('padding-bottom')),
          ePadding = parseInt($element.css('padding-top')) + parseInt($element.css('padding-bottom')),
          parentEdge = ($parent.height() + pPadding + $parent.offset().top);
      
      return parentEdge - ($element.height() + ePadding + this.options.bottomMargin);
    },

    init: function() {
      var $window = $(window),
          defaultPos = this.$element.offset().top - this.options.topMargin,
          boundary = (this.options.parent) ? this.findParentEdge() : $(document).height(),
          that = this;

      this.$element.css('position', 'relative');

      $window.scroll(function() {
        that.stick($window, defaultPos, boundary);
      });
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, pluginName)) {
        $.data(this, pluginName, new StickyDiv(this, options));
      }
    });
  };

}(jQuery));