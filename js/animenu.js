(function(){
  var animenuToggle       = document.querySelector('.animenu__toggle'),
      animenuNav          = document.querySelector('.animenu__nav'),
      animenuBreakpoint   = 767;

  animenuToggle.addEventListener('click', function(){
    if(window.innerWidth < animenuBreakpoint){
        animenuNav.classList.toggle("animenu__nav--open");
    }
  });	
})()