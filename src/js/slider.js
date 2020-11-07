import $ from 'jquery'
import 'slick-carousel'

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
  // centerMode: false,
  // focusOnSelect: true,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});


// products-slider
$('.products-slider__inner').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});