import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-about-the-game-swiper-one]', {
      modules: [Pagination, Keyboard, Mousewheel],
      wrapperClass: 'about-the-game-list-image',
      slideClass: 'about-the-game-item',
      slideActiveClass: 'about-the-game-swiper-slide-active',
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      preventClicks: true,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: '[data-about-the-game-swiper-pagination]',
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
