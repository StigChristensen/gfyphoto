jQuery(document).ready(function($) {

  var winWidth = $(window).width(),
      winHeight = $(window).height(),
      options = {duration: 600, easing: 'easeInOutSine', delay: 500};

      var animateIn = function() {
        var img = $('.img-container');
        $(img).each(function(i, elem) {
          var duration = 100*i;

          $(elem).velocity({
            'opacity': 1
          }, {duration: duration, easing: 'easeInOutSine', display: 'block'});
        });
      };

      var addEventListeners = function() {
        var img = $('.img-container');
        $(img).each(function(i, elem) {

          $(elem).on('click', function() {
            var offset = elem.getBoundingClientRect(),
                top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0),
                height = ( $(window).height() - 40 ),
                winWidth = $(window).width();
                elementWidth = $(elem).width();

                console.log(elementWidth);

            if ( isNaN(top) ) {
              top = -80;
            } else {
              top = top-80;
            }

            if ( !$(elem).hasClass('large') ) {
              $(elem).velocity({
                'top': top + 'px',
                'height': height,
              }, {duration: 800, easing: 'easeInOutSine'});

              $('.overlay').velocity({
                'opacity': 1
              }, {duration: 1500, easing: 'easeInOutSine', display: 'block'});

              $(elem).addClass('large');

            } else {
              $(elem).velocity({
                'height': 200,
              }, {duration: 600, easing: 'easeInOutSine'});

              $(elem).removeClass('large');

              $('.overlay').velocity({
                'opacity': 0
              }, {duration: 1500, easing: 'easeInOutSine', display: 'none'});
            }
          });
        });
      };

      animateIn();
      addEventListeners();
});
