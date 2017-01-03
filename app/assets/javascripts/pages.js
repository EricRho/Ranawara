$(document).ready(function() {
  $('.carousel').carousel({full_width: true});
  $('header')
});

$(window).scroll(function() {
  if (this.document.body.scrollTop < 64) {
    $('nav').css('background-color', 'grey');
  } else {
    $('nav').css('background-color', 'transparent');
  }
});
