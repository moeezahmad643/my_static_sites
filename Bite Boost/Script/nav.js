// Add this JavaScript to handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');
  
  navToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
  
  // Close menu when clicking on nav items
  const navItems = document.querySelectorAll('#nav-element li');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
      }
    });
  });
});