import '@/scss/index.scss';
import { initHeaderFixed } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderGoods } from '@/scripts/renderGoods';

const init = () => {
  initHeaderFixed();
  initChoices();
  initCart();
  renderGoods();
};

document.addEventListener('DOMContentLoaded', init);
