$(document).ready(function() {
  let slides = $(".slider img");
  let currentIndex = 0;

  slides.hide();
  slides.eq(currentIndex).show();

  setInterval(function() {
    slides.eq(currentIndex).fadeOut(1000).removeClass("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides.eq(currentIndex).fadeIn(1000).addClass("active");
  }, 4000);
});