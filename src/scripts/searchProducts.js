import { goodsStore } from '@/scripts/Store';
import { callBackWithPreload } from '@/scripts/preload';

export const initSearchProducts = () => {
  const headerForm = document.querySelector('.header__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  headerForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(headerForm);
    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      goodsTitle.textContent = 'Результат поиска';
      goodsTitle.scrollIntoView({ block: 'center', behavior: 'smooth' });
      callBackWithPreload(goodsSection, goodsStore.fetchGoods(), { search: searchQuery });
      headerForm.search.value = '';
    }
  });
};
