import { closeModalMenu } from './open-or-close-modal-menu.js';

const getHeaderHeight = () => {
  return window.innerWidth >= 1200 ? 70 : 57;
};

let headerHeight = getHeaderHeight(); // 70 або 57 при завантаженні

// Оновлюємо змінну при зміні розміру вікна
window.addEventListener('resize', () => {
  headerHeight = getHeaderHeight();
});

const smoothScrollTo = element => {
  // const offset = headerHeight; // динамічне значення
  const offset = element.id !== 'hero' ? headerHeight : 0; // динамічне значення

  // console.log('Ширина вікна: ', window.innerWidth);
  // console.log('Висота хедеру: ', headerHeight);
  // console.log('Потрібна різниця проскролу: ', offset);
  // console.log('Довжина проскролу: ', element.offsetTop - offset);

  // console.dir(element);
  // console.log('Ід елементу:', element.id);

  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: 'smooth',
  });
};

export const scrollToSection = element => {
  element.addEventListener('click', e => {
    e.preventDefault();

    const targetId = element.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    // console.log(targetId);
    // console.dir(targetElement);
    // console.log(targetElement);

    if (targetElement) {
      smoothScrollTo(targetElement);
    }
  });
};

export const closeModalAndScrollToSection = element => {
  element.addEventListener('click', e => {
    e.preventDefault();

    const targetId = element.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    // console.log(targetId);
    // console.dir(targetElement);
    // console.log(targetElement);

    if (targetElement) {
      closeModalMenu();

      setTimeout(() => {
        smoothScrollTo(targetElement);
      }, 300);
    }
  });
};
