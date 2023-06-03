'use strict';

function swiperFunc() {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  return swiper;
}

swiperFunc();

const overlay = document.querySelector('.overlay');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    overlay.style.display = 'block';
  } else {
    document.body.classList.remove('page__body--with-menu');
    overlay.style.display = 'none';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
