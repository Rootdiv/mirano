import { ProductCard } from '@/scripts/ProductCard';
import { goodsStore } from '@/scripts/Store';

export const renderGoods = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const goods = goodsStore.getGoods();
    goodsList.textContent = '';

    if (goods.length === 0) {
      const messageItem = document.createElement('li');
      messageItem.className = 'goods__no-product';
      messageItem.textContent = 'Товары не найдены';
      goodsList.append(messageItem);
      return;
    }

    const productCards = goods.map(ProductCard);
    goodsList.append(...productCards);
  };

  goodsStore.subscribe(updateList);
  updateList();
};
