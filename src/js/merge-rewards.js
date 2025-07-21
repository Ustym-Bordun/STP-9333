import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('.merge-rewards-swiper-one', {
      modules: [Pagination, Keyboard],
      wrapperClass: 'merge-rewards-list-image',
      slideClass: 'merge-rewards-item',
      slideActiveClass: 'merge-rewards-swiper-slide-active',
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      preventClicks: true,
      grabCursor: true,
      pagination: {
        el: '.merge-rewards-swiper-pagination',
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
