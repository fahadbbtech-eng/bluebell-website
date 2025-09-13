// main.js - event pushes for GTM testing
window.dataLayer = window.dataLayer || [];
document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('form[action="https://formspree.io/f/movnyllz"]');
  if(form){ form.addEventListener('submit', function(){ window.dataLayer.push({event:'form_submit'}); }); }
  document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach(function(a){
    a.addEventListener('click', function(){ window.dataLayer.push({event:'whatsapp_click'}); });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){
    a.addEventListener('click', function(){ window.dataLayer.push({event:'call_click'}); });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('#main-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle a class to control the menu's visibility with CSS
      navMenu.classList.toggle('is-open');
    });
  }
});