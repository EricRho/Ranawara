// var ready;
// ready = function() {
//   $('.carousel').carousel({full_width: true});
//   // $('nav').css('background-color', 'transparent');
//   checkTop();
// };

$(window).scroll(function() {
  if (this.document.body.scrollTop < 64) {
    $('nav').css('background-color', 'transparent');
  } else {
    $('nav').css('background-color', 'grey');
  }
});
