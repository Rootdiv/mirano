import '@/scss/index.scss';

const header = document.querySelector('header');
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;

  if (scrollDistance > 200) {
    header.classList.add('header_fixed');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header_fixed');
    body.removeAttribute('style');
  }
});

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

const choices = document.querySelectorAll('.choices');

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

    adjustElementPosition(box);

    window.addEventListener('resize', () => {
      adjustElementPosition(box);
    });
  });
});

const headerCartButton = document.querySelector('.header__cart-button');
const cartClose = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');

headerCartButton.addEventListener('click', () => {
  cart.classList.toggle('cart_open');
});

cartClose.addEventListener('click', () => {
  cart.classList.remove('cart_open');
});
