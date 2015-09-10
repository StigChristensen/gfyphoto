jQuery(document).ready(function($) {

  var winWidth = $(window).width(),
      winHeight = $(window).height(),
      options = {duration: 600, easing: 'easeInOutSine', delay: 500};

      var animateIn = function() {
        var img = $('.img-container');
        $(img).each(function(i, elem) {
          var duration = 400*i;

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

              setTimeout(treD(elem, height, top), 900);
            } else {

              $(elem).velocity({
                'height': 200,
              }, {duration: 600, easing: 'easeInOutSine'});

              $(elem).removeClass('large');
              hideTreD(elem);

              $('.overlay').velocity({
                'opacity': 0
              }, {duration: 1500, easing: 'easeInOutSine', display: 'none'});
            }
          });
        });

        function treD(elem, height, top) {
          var child = $(elem).find('img.child'),
              btn = $('body').find('.threed-btn'),
              treDimg = $(elem).find('img.threed-img');
              btnPos = ((height/6) + top);

          if ( $(treDimg).length ) {
            $(btn).velocity({
              'opacity': 1,
              'top': btnPos
            }, {duration: 1000, easing: 'easeInOutSine', display: 'block'});
          }

          $(btn).on('click', function() {

            if ( !$(child).hasClass('tre-d') ) {

              $(child).velocity({
                'opacity': 0
              }, {duration: 200, easing: 'easeInOutSine', display: 'none'});

              $(treDimg).velocity({
                'opacity': 1
              }, {duration: 200, easing: 'easeInOutSine', display: 'block'});

              $(child).addClass('tre-d');

            } else {

              $(child).removeClass('tre-d');

              $(treDimg).velocity({
                'opacity': 0
              }, {duration: 200, easing: 'easeInOutSine', display: 'none'});

              $(child).velocity({
                'opacity': 1
              }, {duration: 200, easing: 'easeInOutSine', display: 'block'});
            }
          });
        }

        function hideTreD(elem) {
          var btn = $('body').find('.threed-btn');
          var child = $(elem).find('img.child'),
              btn = $('body').find('.threed-btn'),
              treDimg = $(elem).find('img.threed-img');

          $(btn).velocity({
            'opacity': 0,
            'top': -500
          }, {duration: 1000, easing: 'easeInOutSine', display: 'none'});

          $(treDimg).velocity({
            'opacity': 0
          }, {duration: 500, easing: 'easeInOutSine', display: 'none'});

          $(child).velocity({
            'opacity': 1
          }, {duration: 500, easing: 'easeInOutSine', display: 'block'});

          $('.overlay').velocity({
            'opacity': 0
          }, {duration: 1500, easing: 'easeInOutSine', display: 'none'});
        }
      };

      animateIn();
      addEventListeners();
});
