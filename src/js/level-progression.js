import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

const initializeSwiper = () => {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('.level-progression-swiper', {
      modules: [Pagination, Keyboard, Mousewheel],
      wrapperClass: 'level-progression-swiper-wrapper',
      slideClass: 'level-progression-swiper-slide',
      slideActiveClass: 'level-progression-swiper-slide-active',
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      preventClicks: true,
      grabCursor: true,

      mousewheel: {
        forceToAxis: true,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      pagination: {
        el: '.level-progression-swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
};

window.addEventListener('load', initializeSwiper);
window.addEventListener('resize', initializeSwiper);

// const swiperCurrentView = () => {
//   return window.innerWidth >= 1200 ? 'desc' : 'mob';
// };

// let swiperInitialized = swiperCurrentView();

// window.addEventListener('load', () => {
//   initializeSwiper();
//   prevView = swiperCurrentView();
// });

// window.addEventListener('resize', () => {
//   const currentView = swiperCurrentView();
//   if (currentView !== prevView) {
//     initializeSwiper();
//     prevView = currentView;
//   }
// });
