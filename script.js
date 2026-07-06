// ========================================
// GRAND HARBOR HOTEL - COMPLETE SCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // 1. HAMBURGER MENU TOGGLE
  // ========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    if (navOverlay) {
      navOverlay.classList.toggle('active');
    }
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    if (navOverlay) {
      navOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Toggle menu on hamburger click
  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking overlay
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close menu on window resize (if going back to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && navLinks && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // ========================================
  // 2. BACK TO TOP BUTTON
  // ========================================
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================
  // 3. AOS INITIALIZATION
  // ========================================
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    offset: 80
  });

  // ========================================
  // 4. MENU TAB FUNCTIONALITY
  // ========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuPanels = document.querySelectorAll('.menu-panel');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      menuPanels.forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      const target = button.dataset.target;
      const panel = document.querySelector(`#${target}`);
      if (panel) {
        panel.classList.add('active');
        AOS.refresh();
      }
    });
  });

  // ========================================
  // 5. FAQ ACCORDION
  // ========================================
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });

  // ========================================
  // 6. YEAR UPDATE
  // ========================================
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ========================================
  // 7. FORM SUBMISSION
  // ========================================
  const reservationForm = document.querySelector('#reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.getElementById('form-message');
      if (message) {
        message.textContent = '✅ Thank you! We will contact you shortly to confirm your reservation.';
        message.style.color = '#22c55e';
        reservationForm.reset();
        setTimeout(() => {
          message.textContent = '';
          message.style.color = 'var(--accent-dark)';
        }, 5000);
      }
    });
  }

  // ========================================
  // 8. SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ========================================
  // 9. HEADER SCROLL EFFECT
  // ========================================
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 30px rgba(124, 58, 237, 0.15)';
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.82))';
    }
  });

});