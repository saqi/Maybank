(function () {
  'use strict';

  // what to do with controls?
  var
    prev = document.getElementById('prev')
  , next = document.getElementById('next')
  ;
  prev.addEventListener('click', function () { changeSlide(-1); });
  next.addEventListener('click', function () { changeSlide(1); });

  var index = 1;
  showSlides(index);

  function changeSlide(n) {
    showSlides(index += n);
  };

  function showSlides(n) {
    var slideshow = document.getElementById('slideshow');
    var slides = slideshow.getElementsByTagName('figure');
    if (n > slides.length)
      index = 1;
    if (n < 1)
      index = slides.length;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
  };
})();
