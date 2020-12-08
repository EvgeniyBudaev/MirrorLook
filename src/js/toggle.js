import $ from 'jquery'

$('.tabs__block-toggle').on('click', function(){
  $(this).next('.tabs__block-body').slideToggle();
})

$('.tabs__block-toggle').on('click', function(){
  $(this).toggleClass('active');
})