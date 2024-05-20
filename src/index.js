import '@/scss/index.scss';
import { initHeaderFixed } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderGoods } from '@/scripts/renderGoods';
import { initChoicesType } from '@/scripts/choicesType';
import { filterGoods } from '@/scripts/filterGoods';
import { initSearchProducts } from '@/scripts/searchProdcts';
import { initOrder } from '@/scripts/orderController';

const init = () => {
  initHeaderFixed();
  initChoices();
  initChoicesType();
  initCart();
  initSearchProducts();
  filterGoods();
  renderGoods();
  initOrder();
};

document.addEventListener('DOMContentLoaded', init);
