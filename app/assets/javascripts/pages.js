// var ready;
// ready = function() {
//   $('.carousel').carousel({full_width: true});
//   // $('nav').css('background-color', 'transparent');
//   checkTop();
// };

console.log('LOAD SCROLL FOR NAV');
isFirefox = (/Firefox/i.test(navigator.userAgent));

$(window).scroll(function() {
                  /* Firefox */
  if (isFirefox) {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop < 64) {
      $('nav').css('background-color', 'transparent');
    } else {
      $('nav').css('background-color', 'grey');
    }
  } else if (this.document.body.scrollTop < 64) {
    $('nav').css('background-color', 'transparent');
  } else {
    $('nav').css('background-color', 'grey');
    console.log('Change');
  }

  // if (this.document.body.scrollTop < 64) {
  //   $('nav').css('background-color', 'transparent');
  // } else {
  //   $('nav').css('background-color', 'grey');
  // }
});
