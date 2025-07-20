export const hoverAnimation = ({
  selector,
  className = 'hover',
  delay = 150,
}) => {
  const hoverTimeouts = new Map();

  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mouseover', e => {
      const target = e.target.closest(selector);
      if (!target) return;

      // Якщо вже був таймаут на видалення класу — скасовуємо його
      if (hoverTimeouts.has(target)) {
        clearTimeout(hoverTimeouts.get(target));
        hoverTimeouts.delete(target);
      }

      target.classList.add(className);
    });

    document.addEventListener('mouseout', e => {
      const target = e.target.closest(selector);
      if (!target) return;

      const timeoutId = setTimeout(() => {
        target.classList.remove(className);
        hoverTimeouts.delete(target); // очищаємо після виконання
      }, delay);

      // Записуємо таймаут для цього елемента
      hoverTimeouts.set(target, timeoutId);
    });
  } else {
    document.addEventListener('touchstart', e => {
      const target = e.target.closest(selector);
      if (!target) return;

      target.classList.add(className);

      // target.classList.remove(className);
      setTimeout(() => {
        target.classList.remove(className);
      }, delay);
    });
  }
};
