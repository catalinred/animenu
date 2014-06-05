(function(){
  var animenuToggle = document.querySelector('.animenu__toggle'),
      animenuNav    = document.querySelector('.animenu__nav'),
      animenuToggleNav =  function (){        
        animenuToggle.classList.toggle("animenu__toggle--active");
        animenuNav.classList.toggle("animenu__nav--open");        
      }

  if (!animenuToggle.addEventListener) {
      animenuToggle.attachEvent("onclick", animenuToggleNav);
  }
  else {
      animenuToggle.addEventListener('click', animenuToggleNav);
  }
})()