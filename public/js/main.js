// NexusEstate — Main JavaScript

// Header scroll effect
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll animation observer
const animElements = document.querySelectorAll('[data-animate]');
if (animElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0) * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Stagger cards in grids
  document.querySelectorAll('.properties-grid, .agents-grid').forEach(grid => {
    grid.querySelectorAll('[data-animate]').forEach((el, i) => {
      el.dataset.delay = (i * 0.1).toFixed(1);
    });
  });

  animElements.forEach(el => observer.observe(el));
}

// Check for success param on contact page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
  const banner = document.querySelector('.success-banner');
  if (banner) {
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Smooth filter pill interactions
document.querySelectorAll('.filter-pills .pill').forEach(pill => {
  pill.addEventListener('click', function () {
    const group = this.closest('.filter-pills');
    group.querySelectorAll('.pill').forEach(p => p.classList.remove('pill--active'));
    this.classList.add('pill--active');
  });
});

console.log('🏢 NexusEstate loaded — Built with NestJS');
