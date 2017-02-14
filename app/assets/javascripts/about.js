// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var ready;
ready = function() {
  var $cont = document.querySelector('.cont');

  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(function() {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(function($el) {
    console.log('run');
    $el.addEventListener('click', function() {
      console.log($el);
      if (this.classList.contains('s--active')) return;
      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
      console.log('good');
    });
  });

  $closeBtnsArr.forEach(function($btn) {
    $btn.addEventListener('click', function(e) {
      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);




// $(document).ready(function() {
//   console.log('good');
//   var $cont = document.querySelector('.cont');
//
//   var $elsArr = [].slice.call(document.querySelectorAll('.el'));
//   var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
//
//   setTimeout(function() {
//     $cont.classList.remove('s--inactive');
//   }, 200);
//
//   $elsArr.forEach(function($el) {
//     console.log('run');
//     $el.addEventListener('click', function() {
//       console.log($el);
//       if (this.classList.contains('s--active')) return;
//       $cont.classList.add('s--el-active');
//       this.classList.add('s--active');
//       console.log('good');
//     });
//   });
//
//   $closeBtnsArr.forEach(function($btn) {
//     $btn.addEventListener('click', function(e) {
//       e.stopPropagation();
//       $cont.classList.remove('s--el-active');
//       document.querySelector('.el.s--active').classList.remove('s--active');
//     });
//   });
//
// });
