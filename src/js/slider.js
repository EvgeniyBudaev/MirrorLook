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
  centerMode: true,
  //focusOnSelect: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerMode: false,
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


// slider cardProduct
$('.card-product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card-product__slider-nav',
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: true
      }
    }
  ]
});

$('.card-product__slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.card-product__slider',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: false
});