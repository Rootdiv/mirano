import { fetchGoods } from '@/scripts/API';
import { ProductCard } from '@/scripts/ProductCard';

export const renderGoods = async () => {
  const goodsList = document.querySelector('.goods__list');
  const goods = await fetchGoods();
  goodsList.textContent = '';
  goods.forEach(product => {
    const productCard = ProductCard(product);
    goodsList.append(productCard);
  });
};
