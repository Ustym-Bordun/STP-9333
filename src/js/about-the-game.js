import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// const swiper = new Swiper('.about-the-game-swiper-one', {
//   modules: [Pagination, Keyboard],
//   containerModifierClass: 'about-the-game-swiper-one',
//   slideActiveClass: 'about-the-game-swiper-slide-active',
//   slidesPerView: 1,
//   allowTouchMove: true,
//   loop: false,
//   preventClicks: true,
//   grabCursor: true,
//   pagination: {
//     el: '.about-the-game-swiper-pagination',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     1200: {
//       slidesPerView: 0,
//     },
//   },
//   on: {
//     init: function () {
//       this.slideToLoop(1, 0);
//     },
//   },
// });

let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('.about-the-game-swiper-one', {
      modules: [Pagination, Keyboard],
      wrapperClass: 'about-the-game-list-image',
      slideClass: 'about-the-game-item',
      slideActiveClass: 'about-the-game-swiper-slide-active',
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      preventClicks: true,
      grabCursor: true,
      pagination: {
        el: '.about-the-game-swiper-pagination',
        clickable: true,
      },
      on: {
        init: function () {
          this.slideToLoop(1, 0);
        },
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
