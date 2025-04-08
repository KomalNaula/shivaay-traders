// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Change background color of Property Page on Scroll or Interaction
const propertyPage = document.querySelector('.property-page');
if (propertyPage) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      propertyPage.style.backgroundColor = '#f0f0f0'; // Lighter color for scroll
    } else {
      propertyPage.style.backgroundColor = '#ffffff'; // Default color
    }
  });

  // For interactive hover effects
  propertyPage.addEventListener('mouseenter', () => {
    propertyPage.style.backgroundColor = '#e8e8e8'; // Lighter shade when hovered
  });
  propertyPage.addEventListener('mouseleave', () => {
    propertyPage.style.backgroundColor = '#ffffff'; // Default color on mouse leave
  });
}

// Smooth Scrolling for Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust scroll position if needed
      behavior: 'smooth'
    });
  });
});

// Dynamic Content Load Example (Optional)
document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.querySelector('.dynamic-content');
  if (contentArea) {
    // Example: Load content dynamically
    contentArea.innerHTML = "<p>Welcome to Shivaay Construction. Explore our latest properties!</p>";
  }
});
