var ready;
ready = function() {
  $('.carousel').carousel({full_width: true});
  console.log('run good');
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);

$(window).scroll(function() {
  if (this.document.body.scrollTop < 64) {
    $('nav').css('background-color', 'grey');
  } else {
    $('nav').css('background-color', 'transparent');
  }
});
