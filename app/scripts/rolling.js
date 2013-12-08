'use strict';
(function ($) {
  $(document).ready(function(){
    var width = $( document ).width();
    var height = $( document ).height();
    var minTimeRange = 1000*60;
    var maxTimeRange = 1000*60*10;

    setInterval(function() {
        if (!isInjected()){
          inject('IAISUDbjXj0', width, height);
        }
      }, randomise(minTimeRange,maxTimeRange));
  });

  function inject(id,width,height) {
    $('<iframe>', {
      src: 'https://www.youtube.com/embed/' + id + '?autoplay=1',
      id: 'player',
      type: 'text/html',
      width: width,
      height: height
    }).insertBefore($('body'));
  }

  function isInjected() {
    return $('#player').length;
  }

  function randomise(max,min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})(jQuery);
