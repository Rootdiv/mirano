import '@/scss/index.scss';
import { initHeaderFixed } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderGoods } from '@/scripts/renderGoods';
import { initChoicesType } from '@/scripts/choicesType';
import { filterGoods } from '@/scripts/filterGoods';

const init = () => {
  initHeaderFixed();
  initChoices();
  initChoicesType();
  initCart();
  filterGoods();
  renderGoods();
};

document.addEventListener('DOMContentLoaded', init);
