
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile navigation menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Toggle navigation'
    );

    // Change the menu icon
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close the menu when a navigation link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');

      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Toggle navigation');
      menuToggle.textContent = '☰';
    });
  });
}

// Automatically update the copyright year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
