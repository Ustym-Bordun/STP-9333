import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.key-features-swiper-one', {
  modules: [Pagination, Navigation, Keyboard],
  wrapperClass: 'key-features-list-image',
  slideClass: 'key-features-item',
  slideActiveClass: 'key-features-swiper-slide-active',
  slidesPerView: 1,
  allowTouchMove: true,
  loop: true,
  preventClicks: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.key-features-swiper-pagination',
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
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
        nextEl: '.key-features-swiper-next',
        prevEl: '.key-features-swiper-prev',
      },
    },
  },
});
