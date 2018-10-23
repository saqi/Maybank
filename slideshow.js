'use strict';

var
  index = 0
, timeNextSlide = 7 // in seconds
, slides = $('#slideshow figure')
, prev = $('#prev')
, next = $('#next')
, paused = false
, paused10 = false
;

function showSlides() {
  for (var i=0; i<slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (index > (slides.length - 1))
    index = 0;
  if (index < 0)
    index = slides.length - 1;
  slides[index].style.display = 'block';

  setTimeout(function () {
    if (false === paused) {
      ++index;
      showSlides();
    }
  }, timeNextSlide * 1000);
};

function pauseFor10seconds() {
  if (paused10 === true) return;
  paused10 = true;
  setTimeout(function () {
    paused = false;
    ++index;
    showSlides();
    paused10 = false;
  }, 10000);
};

$( window ).on('load', function () {
  showSlides();
  next.click(function () { paused = true; index++; showSlides(); pauseFor10seconds(); });
  prev.click(function () { paused = true; index--; showSlides(); pauseFor10seconds(); });
});
