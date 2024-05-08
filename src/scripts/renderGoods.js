import { ProductCard } from '@/scripts/ProductCard';
import { store } from '@/scripts/Store';

export const renderGoods = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const goods = store.getGoods();
    goodsList.textContent = '';
    goods.forEach(product => {
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  };

  store.subscribe(updateList);
  updateList();
};
