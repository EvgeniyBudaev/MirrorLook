import 'slick-carousel'
import $ from 'jquery'
// Slider home page

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
});


// products-slider
$('.products-slider__inner').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
});