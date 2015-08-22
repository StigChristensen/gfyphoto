jQuery(document).ready(function($) {

  var height = window.innerHeight,
      width = window.innerWidth,
      imgContainer = $('body').find('.img-container.small');
      images = $(imgContainer).find('img');

      imgContainer.each(function(i, elem) {
        var imgWidth = (width / (imgContainer.length+1));

        $(elem).css({
          'left': (imgWidth * i) + 'px',
          'height': height,
          'width': imgWidth
        }, 600);
      });


  $(imgContainer).on('click', function() {
    self = this;

    if ( !$(self).hasClass('wide') ) {
      $(self).addClass('wide');
      $(self).css({
        'width': '100%',
        'left': 0
      });
    } else {
      $(self).removeClass('wide');

      imgContainer.each(function(i, elem) {
        var imgWidth = (width / (imgContainer.length+1));

        $(elem).css({
          'left': (imgWidth * i) + 'px',
          'height': height,
          'width': imgWidth
        }, 600);
      });
    }

  });

  $(window).on('resize', function() {

    var height = window.innerHeight;
    var width = window.innerWidth;

    imgContainer.each(function(i, elem) {
        var imgWidth = (width / (imgContainer.length+1));

        $(elem).css({
          'left': (imgWidth * i) + 'px',
          'height': height,
          'width': imgWidth
        }, 600);
      });

  });

});
