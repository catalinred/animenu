// ES6
// a.k.a unicorns everywhere 🙂
(() => {
  let $ = el => document.querySelector(el);
  
  $(".animenu__btn").addEventListener("click", function(){
    this.classList.toggle("animenu__btn--active")
    $(".animenu__nav").classList.toggle("animenu__nav--active")
  });
})()

// ---

// IE 10
// https://caniuse.com/#search=classlist

// (function(){
//   var $ = function(el) { 
//     return document.querySelector(el); 
//   }
  
//   $('.animenu__btn').addEventListener('click', function() {
//     this.classList.toggle("animenu__btn--active")
//     $('.animenu__nav').classList.toggle("animenu__nav--active")
//   });
// })();

// ---

// IE9 / IE8
// https://caniuse.com/#search=querySelector

// (function(){
//   var animenuToggle = document.querySelector('.animenu__btn'),
//       animenuNav    = document.querySelector('.animenu__nav'),
//       hasClass = function( elem, className ) {
//         return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
//       },
//       toggleClass = function( elem, className ) {
//         var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
//         if( hasClass(elem, className ) ) {
//           while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
//             newClass = newClass.replace( ' ' + className + ' ' , ' ' );
//           }
//           elem.className = newClass.replace( /^\s+|\s+$/g, '' );
//         } else {
//           elem.className += ' ' + className;
//         }
//       },           
//       animenuToggleNav =  function (){        
//         toggleClass(animenuToggle, "animenu__btn--active");
//         toggleClass(animenuNav, "animenu__nav--active");        
//       }

//   if (!animenuToggle.addEventListener) {
//     animenuToggle.attachEvent("onclick", animenuToggleNav);
//   }
//   else {
//     animenuToggle.addEventListener('click', animenuToggleNav);
//   }
// })()