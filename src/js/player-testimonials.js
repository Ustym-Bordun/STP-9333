import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let playerTestimonialsSwiperInstance = null;

function initSwiperPlayerTestimonials() {
  if (playerTestimonialsSwiperInstance)
    playerTestimonialsSwiperInstance.destroy(true, true);

  playerTestimonialsSwiperInstance = new Swiper(
    '.player-testimonials-swiper-one',
    {
      modules: [Pagination, Navigation, Keyboard, Mousewheel],
      wrapperClass: 'player-testimonials-list',
      slideClass: 'player-testimonials-item',
      slideActiveClass: 'player-testimonials-swiper-slide-active',
      slidesPerView: 1,
      spaceBetween: 10,
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
        el: '.player-testimonials-swiper-pagination',
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
          centeredSlides: true,
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          pagination: {
            enabled: false,
          },
          navigation: {
            enabled: true,
            nextEl: '.player-testimonials-swiper-next',
            prevEl: '.player-testimonials-swiper-prev',
          },
        },
      },
    }
  );
}

window.addEventListener('load', () => {
  initSwiperPlayerTestimonials();
  prevView = swiperCurrentView();
});

const swiperCurrentView = () => {
  return window.innerWidth >= 1200 ? 'desc' : 'mob';
};

let prevView = swiperCurrentView();

window.addEventListener('resize', () => {
  const currentView = swiperCurrentView();
  if (currentView !== prevView) {
    initSwiperPlayerTestimonials();
    prevView = currentView;
  }
});
