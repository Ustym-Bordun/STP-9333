export const hoverAnimation = ({
  selector,
  dataName = 'hover',
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

      target.dataset[dataName] = '';
    });

    document.addEventListener('mouseout', e => {
      const target = e.target.closest(selector);
      if (!target) return;

      const timeoutId = setTimeout(() => {
        target.removeAttribute(`data-${dataName}`);

        hoverTimeouts.delete(target); // очищаємо після виконання
      }, delay);

      // Записуємо таймаут для цього елемента
      hoverTimeouts.set(target, timeoutId);
    });
  } else {
    document.addEventListener('touchstart', e => {
      const target = e.target.closest(selector);
      if (!target) return;

      target.dataset[dataName] = '';
      setTimeout(() => {
        target.removeAttribute(`data-${dataName}`);
      }, delay);
    });
  }
};
