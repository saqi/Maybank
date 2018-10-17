'use strict';

var
  index = 0
, timeNextSlide = 2 // in seconds
, slides = $('#slideshow figure')
, prev = $('#prev')
, next = $('#next')
, timerID = null
;

function showSlides() {
  console.log(slides.length, index);
  for (var i=0; i<slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (index > (slides.length - 1))
    index = 0;
  if (index < 0)
    index = slides.length - 1;
  slides[index].style.display = 'block';
};

$( window ).on('load', function () {
  showSlides();
  next.click(function () { index++; showSlides(); });
  prev.click(function () { index--; showSlides(); });

  window.setTimeout(function () {
    index = index + 1;
    showSlides();
  }, 1000);
});
