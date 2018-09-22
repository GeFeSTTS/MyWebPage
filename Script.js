$(function(){
 var topPos = $('.primary-nav').offset().top; //topPos - это значение от верха блока до окна браузера
 $(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top > topPos) $('.primary-nav').addClass('fixed');
  else $('.primary-nav').removeClass('fixed');
 });
});
