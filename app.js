// // Toggle mobile menu
// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerButton = document.getElementById('hamburger-button');
//   const mobileMenu = document.getElementById('mobile-menu');
  
//   hamburgerButton.addEventListener('click', function() {
//       // Toggle the mobile menu
//       if (mobileMenu.classList.contains('hidden')) {
//           mobileMenu.classList.remove('hidden');
//           hamburgerButton.querySelector('img').src = './public/images/hamburgerClose.svg';
//       } else {
//           mobileMenu.classList.add('hidden');
//           // Switch back to open icon
//           hamburgerButton.querySelector('img').src = './public/images/hamburgerOpen.svg';
//       }
//   });
  
//   // Handle mobile menu item clicks
//   const mobileMenuLinks = mobileMenu.querySelectorAll('a');
//   mobileMenuLinks.forEach(link => {
//       link.addEventListener('click', function() {
//           // Hide the mobile menu when a link is clicked
//           mobileMenu.classList.add('hidden');
//           hamburgerButton.querySelector('img').src = './public/images/hamburgerOpen.svg';
          
//           // Show the corresponding section and hide others
//           const sectionId = this.getAttribute('href').substring(1);
//           showSection(sectionId);
//       });
//   });
  
//   // Handle desktop menu item clicks
//   const desktopMenuLinks = document.querySelectorAll('nav .md\\:flex a');
//   desktopMenuLinks.forEach(link => {
//       link.addEventListener('click', function(e) {
//           const sectionId = this.getAttribute('href').substring(1);
//           showSection(sectionId);
//       });
//   });
  
//   // Function to show a specific section and hide others
//   function showSection(sectionId) {
//       // Hide all sections first
//       const sections = document.querySelectorAll('section[id]');
//       sections.forEach(section => {
//           section.classList.add('hidden');
//       });
      
//       // Show the selected section
//       const selectedSection = document.getElementById(sectionId);
//       if (selectedSection) {
//           selectedSection.classList.remove('hidden');
          
//           // Scroll to the section
//           selectedSection.scrollIntoView({ behavior: 'smooth' });
//       }
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const homeContent = document.getElementById('home');
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backButtons = document.querySelectorAll('[id^="back-"]');
  
  // Toggle mobile menu
  hamburgerButton.addEventListener('click', function() {
          // Toggle the mobile menu
          if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              hamburgerButton.querySelector('img').src = './public/images/hamburgerClose.svg';
          } else {
              mobileMenu.classList.add('hidden');
              // Switch back to open icon
              hamburgerButton.querySelector('img').src = './public/images/hamburgerOpen.svg';
          }
      });
  
  // Handle all navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hide mobile menu if it's open
          mobileMenu.classList.add('hidden');
          
          const targetId = this.getAttribute('href').substring(1);
          
          if (targetId === 'home') {
              // Show home content, hide all sections
              homeContent.classList.remove('hidden');
              sections.forEach(section => {
                  section.classList.add('hidden');
              });
          } else {
              // Hide home content
              homeContent.classList.add('hidden');
              
              // Hide all sections, then show the target section
              sections.forEach(section => {
                  section.classList.add('hidden');
              });
              
              const targetSection = document.getElementById(targetId);
              if (targetSection) {
                  targetSection.classList.remove('hidden');
                  window.scrollTo(0, 0); // Scroll to top
              }
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
          
          window.scrollTo(0, 0); // Scroll to top
      });
  });
});