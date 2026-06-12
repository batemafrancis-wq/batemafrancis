/* =====================================================
   BATEMA FRANCIS — Essence | script.js
   Slideshow · Scroll spy · Products · Testimonials ·
   Contact form (sends to batemafrancis.com)
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Sticky header shadow ---------------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  /* ---------------- Scroll spy (page-like navigation) ---------------- */
  const sections = document.querySelectorAll('section[id]');
  const linkMap = {};
  document.querySelectorAll('.nav-link').forEach(l => {
    linkMap[l.getAttribute('href').slice(1)] = l;
  });

  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        if (linkMap[id]) linkMap[id].classList.add('active');
        history.replaceState(null, '', '#' + id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------------- Hero stat counters ---------------- */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur;
      }, 30);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  /* ---------------- Slideshow ---------------- */
  const slidesEl = document.getElementById('slides');
  const slideItems = slidesEl.querySelectorAll('.slide');
  const dotsBox = document.getElementById('sliderDots');
  let slideIndex = 0;
  let autoTimer = null;

  slideItems.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => { goToSlide(i); restartAuto(); });
    dotsBox.appendChild(dot);
  });
  const dots = dotsBox.querySelectorAll('button');

  function goToSlide(i) {
    slideIndex = (i + slideItems.length) % slideItems.length;
    slidesEl.style.transform = 'translateX(-' + slideIndex * 100 + '%)';
    dots.forEach((d, j) => d.classList.toggle('active', j === slideIndex));
  }
  function restartAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToSlide(slideIndex + 1), 5000);
  }

  document.getElementById('prevSlide').addEventListener('click', () => { goToSlide(slideIndex - 1); restartAuto(); });
  document.getElementById('nextSlide').addEventListener('click', () => { goToSlide(slideIndex + 1); restartAuto(); });

  // touch swipe support
  let touchStartX = 0;
  slidesEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slidesEl.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) { goToSlide(slideIndex + (diff < 0 ? 1 : -1)); restartAuto(); }
  }, { passive: true });

  goToSlide(0);
  restartAuto();

  /* ---------------- Products data ---------------- */
  const svgThumb = (emoji, label, c1, c2) =>
    'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
        </linearGradient></defs>
        <rect width="600" height="360" fill="url(#g)"/>
        <text x="300" y="160" font-size="90" text-anchor="middle">${emoji}</text>
        <text x="300" y="250" font-size="30" font-weight="bold" fill="white" text-anchor="middle" font-family="Inter,Arial">${label}</text>
      </svg>`);

  const products = [
    {
      tag: 'E-Commerce', title: 'KampalaMart — Online Store', emoji: '🛒', c1: '#2563eb', c2: '#7c3aed',
      img: 'images/products/ecommerce.jpg',
      desc: 'A complete online shop with cart, mobile money payments and delivery tracking.',
      features: ['Product catalogue & search', 'MTN/Airtel Money checkout', 'Order & delivery tracking', 'Admin sales dashboard'],
      impact: 'Boosted client sales by 65% in 6 months.'
    },
    {
      tag: 'Education', title: 'SchoolHub — School Management', emoji: '🏫', c1: '#0ea5e9', c2: '#2563eb',
      img: 'images/products/school.jpg',
      desc: 'Manages students, fees, report cards and parent communication in one place.',
      features: ['Student records & attendance', 'Fees billing & receipts', 'Auto report card generation', 'SMS alerts to parents'],
      impact: 'Cut admin paperwork by 70% for a 1,200-student school.'
    },
    {
      tag: 'Education', title: 'LibraSys — Library Management', emoji: '📚', c1: '#1e40af', c2: '#0891b2',
      img: 'images/products/library.jpg',
      desc: 'Tracks books, borrowers and returns with barcode scanning support.',
      features: ['Catalogue with barcode scan', 'Borrow/return tracking', 'Overdue reminders', 'Usage reports'],
      impact: 'Reduced lost books by 80% at a university library.'
    },
    {
      tag: 'Hospitality', title: 'DineEasy — Restaurant Website', emoji: '🍽️', c1: '#f59e0b', c2: '#dc2626',
      img: 'images/products/restaurant.jpg',
      desc: 'Digital menu, table reservations and online food ordering for restaurants.',
      features: ['QR digital menu', 'Table reservations', 'Online ordering', 'Customer reviews'],
      impact: 'Doubled weekend bookings for a Kampala restaurant.'
    },
    {
      tag: 'Wellness', title: 'SpaZen — Spa Booking System', emoji: '💆', c1: '#8b5cf6', c2: '#ec4899',
      img: 'images/products/spa.jpg',
      desc: 'Elegant spa site with treatment menus and automated appointment booking.',
      features: ['Service & price menus', 'Online appointment booking', 'Staff scheduling', 'SMS reminders'],
      impact: 'Cut no-shows by 45% with automatic reminders.'
    },
    {
      tag: 'Beauty', title: 'Rajat Beauty Parlour', emoji: '💄', c1: '#ec4899', c2: '#f43f5e',
      img: 'images/products/rajat.jpg',
      desc: 'A stylish salon website with gallery, services and instant WhatsApp booking.',
      features: ['Style gallery', 'Service price list', 'WhatsApp booking button', 'Google Maps directions'],
      impact: 'New client walk-ins up 50% from online discovery.'
    },
    {
      tag: 'Beauty', title: 'Uzuri Hair Salon', emoji: '💇', c1: '#a855f7', c2: '#6366f1',
      img: 'images/products/uzuri.jpg',
      desc: 'Modern salon platform with stylist profiles and loyalty rewards.',
      features: ['Stylist profiles & booking', 'Loyalty points system', 'Before/after gallery', 'Mobile-first design'],
      impact: 'Repeat bookings grew 40% with loyalty rewards.'
    },
    {
      tag: 'Fitness', title: 'FitPro — Gym Membership', emoji: '🏋️', c1: '#16a34a', c2: '#0d9488',
      img: 'images/products/gym.jpg',
      desc: 'Gym website with class timetables, membership signup and payments.',
      features: ['Class timetable', 'Online membership signup', 'Payment tracking', 'Trainer profiles'],
      impact: 'Automated 90% of membership renewals.'
    },
    {
      tag: 'Real Estate', title: 'HomeFinder — Property Listings', emoji: '🏠', c1: '#0284c7', c2: '#1d4ed8',
      img: 'images/products/realestate.jpg',
      desc: 'Property listing platform with photos, filters and agent contact.',
      features: ['Search by location & price', 'Photo galleries & maps', 'Agent inquiry forms', 'Featured listings'],
      impact: 'Generated 300+ qualified leads in the first quarter.'
    },
    {
      tag: 'Health', title: 'MediBook — Clinic Appointments', emoji: '🏥', c1: '#dc2626', c2: '#ea580c',
      img: 'images/products/clinic.jpg',
      desc: 'Clinic website where patients book appointments and get reminders.',
      features: ['Doctor schedules', 'Online appointment booking', 'Patient reminders', 'Secure records area'],
      impact: 'Reduced phone-booking workload by 60%.'
    }
  ];

  const grid = document.getElementById('productsGrid');
  products.forEach((p, i) => {
    const fallback = svgThumb(p.emoji, p.tag, p.c1, p.c2);
    const card = document.createElement('article');
    card.className = 'card product-card';
    card.innerHTML = `
      <div class="product-img">
        <img src="${p.img}" alt="${p.title} — website preview" loading="lazy"
             onerror="this.onerror=null;this.src='${fallback}'">
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="product-link">View case study →</span>
      </div>`;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });

  /* ---------------- Product modal ---------------- */
  const overlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');

  function openModal(i) {
    const p = products[i];
    const fallback = svgThumb(p.emoji, p.tag, p.c1, p.c2);
    modalBody.innerHTML = `
      <img src="${p.img}" alt="${p.title} — website preview"
           onerror="this.onerror=null;this.src='${fallback}'">
      <div class="modal-content">
        <span class="m-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p><strong>Key features:</strong></p>
        <ul>${p.features.map(f => `<li>✅ ${f}</li>`).join('')}</ul>
        <p><strong>Impact:</strong> ${p.impact}</p>
        <a href="#contact" class="btn btn-primary" id="modalCta">Build something like this →</a>
      </div>`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalCta').addEventListener('click', () => {
      closeModal();
      const msg = document.getElementById('message');
      if (msg) msg.value = `Hi Batema, I'm interested in a project similar to "${p.title}". `;
    });
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ---------------- Testimonials ---------------- */
  const testimonials = [
    {
      name: 'Kutesa Mark', role: 'CEO, KampalaMart', stars: 5,
      quote: 'Essence team has a strong attention to detail and a talented design and backend engineering team which helped build a product that was even better than I envisioned.'
    },
    {
      name: 'Rajat Sharma', role: 'Owner, Rajat Beauty Parlour', stars: 5,
      quote: 'Our salon website brought us so many new clients. Batema explained everything in simple terms and delivered on time. Highly recommended!'
    },
    {
      name: 'Sarah Namutebi', role: 'Manager, Uzuri Hair Salon', stars: 5,
      quote: 'The loyalty system Batema built keeps our customers coming back. Professional, patient and truly perfection-driven.'
    },
    {
      name: 'Dr. James Okello', role: 'Director, MediBook Clinic', stars: 4,
      quote: 'Patients now book online instead of calling all day. The system simply works — fast, secure and easy for our staff.'
    }
  ];

  const tGrid = document.getElementById('testimonialsGrid');
  testimonials.forEach(t => {
    const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2);
    const card = document.createElement('article');
    card.className = 'card testimonial-card';
    card.innerHTML = `
      <div class="stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testimonial-quote">“${t.quote}”</p>
      <div class="testimonial-author">
        <span class="avatar">${initials}</span>
        <span><strong>${t.name}</strong><small>${t.role}</small></span>
      </div>`;
    tGrid.appendChild(card);
  });

  /* ---------------- Contact form → thironaugstine@gmail.com ---------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const ptype = document.getElementById('ptype').value;
    const message = document.getElementById('message').value.trim();

    status.className = 'form-status';

    if (!name || !email || !message) {
      status.textContent = '⚠️ Please fill in all required fields.';
      status.classList.add('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = '⚠️ Please enter a valid email address.';
      status.classList.add('error');
      return;
    }

    submitBtn.textContent = 'Opening your email app...';
    submitBtn.disabled = true;

    const subject = encodeURIComponent('New Project Inquiry from ' + name);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Project Type: ' + ptype + '\n\n' +
      'Message:\n' + message
    );
    window.location.href = 'mailto:thironaugstine@gmail.com?subject=' + subject + '&body=' + body;

    setTimeout(() => {
      status.textContent = '✅ Your email app is opening — just press Send to deliver your message to thironaugstine@gmail.com.';
      status.classList.add('success');
      submitBtn.textContent = 'Send Message →';
      submitBtn.disabled = false;
      form.reset();
    }, 1200);
  });
});
