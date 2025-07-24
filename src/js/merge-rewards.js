import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-merge-rewards-swiper-one]', {
      modules: [Pagination, Keyboard, Mousewheel],
      wrapperClass: 'merge-rewards-list-image',
      slideClass: 'merge-rewards-item',
      slideActiveClass: 'merge-rewards-swiper-slide-active',
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      preventClicks: true,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: '[data-merge-rewards-swiper-pagination]',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
