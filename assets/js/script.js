/* ============================================
   Imran Ahmed — Portfolio Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NAVBAR
  // ==========================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ==========================================
  // SCROLL SPY
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinkItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // TYPEWRITER
  // ==========================================
  const roles = ['DevOps Engineer', 'Cyber Security Expert', 'Cloud Architect', 'CI/CD Specialist'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriter = document.getElementById('typewriter');

  function typeEffect() {
    const current = roles[roleIndex];
    if (isDeleting) {
      typewriter.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriter.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // ==========================================
  // SCROLL REVEAL (Intersection Observer)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // SKILL BAR ANIMATION
  // ==========================================
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  // ==========================================
  // STAT COUNTER ANIMATION
  // ==========================================
  const statNums = document.querySelectorAll('.stat-num');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(num => counterObserver.observe(num));

  function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = current;
    }, 40);
  }

  // ==========================================
  // DYNAMIC YEAR
  // ==========================================
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================
  // CONTACT FORM (EmailJS)
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = this.querySelector('.btn-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      btn.disabled = true;

      emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');
      emailjs.sendForm('contact_service', 'template_contact', this)
        .then(() => {
          btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
          this.reset();
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
          }, 3000);
        })
        .catch(() => {
          btn.innerHTML = 'Failed! Try Again <i class="fas fa-exclamation-triangle"></i>';
          btn.disabled = false;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 3000);
        });
    });
  }

});
