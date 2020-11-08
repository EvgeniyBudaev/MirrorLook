import $ from 'jquery'
import 'ion-rangeslider'

// Форма отправки заявки

// Эффект с инпутом
$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
})

// На странице catalog форма aside input
$('.filter__item-drop').on('click', function () {
  $(this).toggleClass('active')
  $(this).next().slideToggle('200')
});

// На странице catalog форма aside range-slider
$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 100000,
});

