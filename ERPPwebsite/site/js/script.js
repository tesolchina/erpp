// Minimal JS for small interactions
document.addEventListener('DOMContentLoaded',function(){
  // Smooth-scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    })
  })

  // Mobile menu toggle
  var toggles = document.querySelectorAll('.mobile-menu-toggle');
  toggles.forEach(function(toggle){
    toggle.addEventListener('click',function(){
      var menu = this.parentElement.querySelector('.nav-menu');
      if(menu){
        menu.classList.toggle('active');
      }
    });
  });
});
