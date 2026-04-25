/* Bandra Smile Studio — Main JS */

// ─── Navbar scroll behaviour ───────────────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (!navbar) return;
  if (window.scrollY > 24) {
    navbar.classList.add('bg-white', 'shadow-md', 'border-b', 'border-cream-200');
    navbar.classList.remove('py-3');
    navbar.classList.add('py-2');
  } else {
    navbar.classList.remove('bg-white', 'shadow-md', 'border-b', 'border-cream-200');
    navbar.classList.remove('py-2');
    navbar.classList.add('py-3');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ─── Mobile menu ────────────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon   = document.getElementById('menu-icon');
const closeIcon  = document.getElementById('close-icon');

menuBtn?.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  menuIcon?.classList.toggle('hidden', !isOpen);
  closeIcon?.classList.toggle('hidden', isOpen);
  menuBtn?.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    if (!navbar.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    }
  }
});

// ─── Scroll reveal animations ────────────────────────────────
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

animatedEls.forEach((el) => revealObserver.observe(el));

// ─── Gallery filter (gallery.html only) ──────────────────────
const filterBtns = document.querySelectorAll('[data-filter]');
const galleryItems = document.querySelectorAll('[data-category]');

if (filterBtns.length && galleryItems.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        b.classList.remove('bg-teal-500', 'text-white');
        b.classList.add('bg-white', 'text-navy-500');
      });
      btn.classList.remove('bg-white', 'text-navy-500');
      btn.classList.add('bg-teal-500', 'text-white');

      galleryItems.forEach((item) => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });
}

// ─── FAQ accordion (contact.html only) ───────────────────────
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon   = btn.querySelector('.faq-icon');
    const isOpen = !answer.classList.contains('hidden');

    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
    document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = '');

    if (!isOpen) {
      answer.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    }
  });
});

// ─── Contact form (basic) ─────────────────────────────────────
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Message sent! We\'ll be in touch soon.';
  btn.disabled = true;
  btn.classList.add('opacity-75');
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    btn.classList.remove('opacity-75');
    contactForm.reset();
  }, 4000);
});
