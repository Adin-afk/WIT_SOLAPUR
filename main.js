document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('site-header');
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 30);
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const navOverlay  = document.getElementById('nav-overlay');

  const openMenu = () => {
    mobileMenu?.classList.add('open');
    navOverlay?.classList.add('visible');
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    mobileMenu?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    navOverlay?.classList.remove('visible');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);
  navOverlay?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  const backToTop = document.getElementById('back-to-top');
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 900,
    autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
    navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' },
    pagination: { el: '.hero-swiper .hero-pagination', clickable: true, renderBullet: (i, c) => `<button class="${c}" role="tab" aria-label="Go to slide ${i+1}"></button>` },
    a11y: { enabled: true },
    keyboard: { enabled: true, onlyInViewport: true },
  });

  new Swiper('.success-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
    navigation: { nextEl: '.success-next', prevEl: '.success-prev' },
    pagination: { el: '.success-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 24 },
    },
    a11y: { enabled: true },
  });

  const programsSwiper = new Swiper('.programs-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: true,
    speed: 600,
    grabCursor: true,
    autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
    navigation: { nextEl: '.programs-next', prevEl: '.programs-prev' },
    pagination: { el: '.programs-pagination', clickable: true },
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: { enabled: true },
    breakpoints: {
      768:  { slidesPerView: 1, spaceBetween: 28 },
      1024: { slidesPerView: 2, spaceBetween: 32 },
    },
  });

  const programsContainer = document.querySelector('.programs-swiper-container');
  programsContainer?.addEventListener('mouseenter', () => programsSwiper.autoplay.stop());
  programsContainer?.addEventListener('mouseleave', () => programsSwiper.autoplay.start());

});
