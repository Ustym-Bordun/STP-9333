export const getScrollbarWidth = () => {
  const scrollDiv = document.createElement('div');

  scrollDiv.style.visibility = 'hidden';
  scrollDiv.style.overflow = 'scroll'; // важливо: змушує з'явитись scrollbar
  scrollDiv.style.width = '100px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';

  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};
