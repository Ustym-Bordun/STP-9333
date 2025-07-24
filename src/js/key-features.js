import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { customAnimations } from './utils/custom-animations.js';

customAnimations(['[data-key-features-swiper-navigation-btn]']);

let swiperInstance = null;

function initSwiperKey() {
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper('[data-key-features-swiper-one]', {
    modules: [Pagination, Navigation, Keyboard, Mousewheel],
    wrapperClass: 'key-features-list-image',
    slideClass: 'key-features-item',
    slideActiveClass: 'key-features-swiper-slide-active',
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: true,
    loop: true,
    preventClicks: true,
    grabCursor: true,
    keyboard: {
      enabled: false,
      onlyInViewport: false,
    },
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '[data-key-features-swiper-pagination]',
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
        spaceBetween: -204,
        allowTouchMove: false,
        grabCursor: false,
        slideToClickedSlide: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          enabled: false,
        },
        navigation: {
          enabled: true,
          prevEl: '[data-key-features-swiper-prev]',
          nextEl: '[data-key-features-swiper-next]',
        },
      },
    },
  });
}

window.addEventListener('load', () => {
  initSwiperKey();
  prevView = swiperCurrentView();
});

const swiperCurrentView = () => {
  return window.innerWidth >= 1200 ? 'desc' : 'mob';
};

let prevView = swiperCurrentView();

window.addEventListener('resize', () => {
  const currentView = swiperCurrentView();
  if (currentView !== prevView) {
    initSwiperKey();
    prevView = currentView;
  }
});
