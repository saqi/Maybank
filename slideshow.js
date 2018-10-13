(function () {
  'use strict';

  var
  index = 0;
  ;

  showSlides();

  function showSlides() {
    var
      i, slides = slideshow.getElementsByTagName('figure')
    ;

    for (var i=0; i<slides.length; i++) {
      slides[i].style.display = 'none';
    }
    index++;
    if (index > slides.length)
      index = 1;
    slides[index-1].style.display = 'block';
  };
})();
