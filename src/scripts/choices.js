import { debounce } from '@/scripts/debounce';

const adjustElementPosition = (element, count = 0) => {
  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  if (rect.left < 0) {
    element.style.left = '0';
    element.style.right = 'auto';
    element.style.transform = 'translateX(0)';
  } else if (rect.right > viewportWidth) {
    element.style.left = 'auto';
    element.style.right = '0';
    element.style.transform = 'translateX(0)';
  } else {
    element.removeAttribute('style');
  }

  const postRect = element.getBoundingClientRect();
  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(element, count);
  }
};

export const initChoices = () => {
  const choices = document.querySelectorAll('.choices');

  const closeAllChoices = ({ target }) => {
    const clickInside = target.closest('.choices');
    if (!clickInside) {
      choices.forEach(choice => {
        choice.querySelector('.choices__btn').classList.remove('filters__select_active');
        choice.querySelector('.choices__box').classList.remove('choices__box_open');
      });
      document.removeEventListener('click', closeAllChoices);
    }
  };

  choices.forEach(choice => {
    const btn = choice.querySelector('.choices__btn');
    const box = choice.querySelector('.choices__box');

    btn.addEventListener('click', () => {
      if (!btn.classList.contains('filters__select_active')) {
        choices.forEach(otherChoice => {
          otherChoice.querySelector('.choices__btn').classList.remove('filters__select_active');
          otherChoice.querySelector('.choices__box').classList.remove('choices__box_open');
        });
      }
      btn.classList.toggle('filters__select_active');
      box.classList.toggle('choices__box_open');

      if (box.classList.contains('choices__box_open')) {
        document.addEventListener('click', closeAllChoices);
      } else {
        document.removeEventListener('click', closeAllChoices);
      }

      adjustElementPosition(box);
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        adjustElementPosition(box);
      }, 100),
    );
  });
};
