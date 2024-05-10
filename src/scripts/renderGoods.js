import { ProductCard } from '@/scripts/ProductCard';
import { store } from '@/scripts/Store';

export const renderGoods = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const goods = store.getGoods();
    goodsList.textContent = '';
    const productCards = goods.map(ProductCard);
    goodsList.append(...productCards);
  };

  store.subscribe(updateList);
  updateList();
};
