
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const sections = document.querySelectorAll('.content-section');  
  const homeContent = document.getElementById('home');
  const navLinks = document.querySelectorAll('.nav-link');
  const backButtons = document.querySelectorAll('.back-button');
  const homeBG = document.body;
  
  // Toggle mobile menu
  hamburgerButton.addEventListener('click', function() {
          // Toggle the mobile menu
          if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              hamburgerButton.querySelector('img').src = '../public/images/hamburgerClose.svg';
          } else {
              mobileMenu.classList.add('hidden');
              // Switch back to open icon
              hamburgerButton.querySelector('img').src = '../public/images/hamburgerOpen.svg';
          }
      });
  
  // Handle all navigation links. I did this to avoid multiple page navigation.
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hide mobile menu if it's open
          mobileMenu.classList.add('hidden');
          // Switch back to open icon
          hamburgerButton.querySelector('img').src = '../public/images/hamburgerOpen.svg';
          
          const targetId = this.getAttribute('href').substring(1);
          
          // Hide home content
          homeContent.classList.add('hidden');
              
          // Hide all sections, then show the target section
          sections.forEach(section => {
          section.classList.add('hidden');
          });
              
          const targetSection = document.getElementById(targetId);
          
          // Change bg color in body to match section bg color
          if (targetSection.id === 'about') {
            homeBG.className = "bg-pinkMain"
          } else if (targetSection.id === 'experience') {
            homeBG.className = "bg-creamMain"
          } else if (targetSection.id === 'inquiry') {
            homeBG.className = "bg-tealMain"
          }

          // Display selected section
          if (targetSection) {
            targetSection.classList.remove('hidden');
            window.scrollTo(0, 0); // Scroll to top
          }
      });
  });
  
  // Handle back buttons
  backButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Show home content, hide all sections
          homeContent.classList.remove('hidden');
          sections.forEach(section => {
              section.classList.add('hidden');
          });

          // Change bg color in body to default
          homeBG.className = "bg-greenMain"

          mobileMenu.classList.add('hidden');
          hamburgerButton.querySelector('img').src = '../public/images/hamburgerOpen.svg';
          
          window.scrollTo(0, 0); // Scroll to top
      });
  });
});