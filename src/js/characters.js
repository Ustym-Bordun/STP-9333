import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { customAnimations } from './utils/custom-animations.js';

customAnimations(['[data-characters-swiper-navigation-btn]']);

let charactersSwiperInstance = null;

function initSwiperCharacters() {
  if (charactersSwiperInstance) charactersSwiperInstance.destroy(true, true);

  charactersSwiperInstance = new Swiper('[data-characters-swiper-one]', {
    modules: [Pagination, Navigation, Keyboard, Mousewheel],
    wrapperClass: 'characters-list-image',
    slideClass: 'characters-item',
    slideActiveClass: 'characters-swiper-slide-active',
    slidesPerView: 1,
    spaceBetween: 48,
    allowTouchMove: true,
    loop: true,
    preventClicks: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: false,
      onlyInViewport: false,
    },
    pagination: {
      el: '[data-characters-swiper-pagination]',
      clickable: true,
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        navigation: {
          enabled: false,
        },
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          enabled: false,
        },
        navigation: {
          enabled: true,
          prevEl: '[data-characters-swiper-prev]',
          nextEl: '[data-characters-swiper-next]',
        },
      },
    },
  });
}

window.addEventListener('load', () => {
  initSwiperCharacters();
  prevView = swiperCurrentView();
});

const swiperCurrentView = () => {
  return window.innerWidth >= 1200 ? 'desc' : 'mob';
};

let prevView = swiperCurrentView();

window.addEventListener('resize', () => {
  const currentView = swiperCurrentView();
  if (currentView !== prevView) {
    initSwiperCharacters();
    prevView = currentView;
  }
});
