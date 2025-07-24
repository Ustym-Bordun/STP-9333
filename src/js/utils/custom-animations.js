import { activeAnimation } from './active-animation.js';
import { focusBlur } from './focus-blur.js';
import { hoverAnimation } from './hover-animation.js';

export const customAnimations = selectors => {
  selectors.forEach(selector => {
    console.log('1');
    // focusBlur({ selector, delay: 300 });
    // hoverAnimation({ selector, dataName = 'hover', delay: 300 });
    // activeAnimation({ selector, dataName = 'hover', delay: 300 });
    focusBlur({ selector });
    hoverAnimation({ selector });
    activeAnimation({ selector });
  });
};
