import { onClose } from './on-open-or-close-modal-menu.js';

const smoothScrollTo = element => {
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth',
  });
};

export const scrollToSection = element => {
  element.addEventListener('click', e => {
    e.preventDefault(); // Перехоплюємо поведінку за замовчуванням

    const targetId = element.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    // console.log(targetId);
    // console.log(targetElement);

    if (targetElement) {
      // console.log(1);
      smoothScrollTo(targetElement);
    }
  });
};

export const closeModalAndScrollToSection = element => {
  element.addEventListener('click', e => {
    e.preventDefault(); // Перехоплюємо поведінку за замовчуванням

    const targetId = element.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    // console.log(targetId);
    // console.log(targetElement);

    if (targetElement) {
      // console.log(1);
      onClose();
      setTimeout(() => {
        smoothScrollTo(targetElement);
      }, 300);
    }
  });
};
