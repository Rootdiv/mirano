import { fetchGoods } from '@/scripts/API';
import { debounce } from '@/scripts/debounce';

export const filterGoods = () => {
  const filtersForm = document.querySelector('.filters__form');
  const goodsTitle = document.querySelector('.goods__title');
  filtersForm.reset();

  const applyFilters = () => {
    const formData = new FormData(filtersForm);

    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {};

    if (type) {
      params.type = type;
    }
    if (minPrice) {
      params.minPrice = minPrice;
    }
    if (maxPrice) {
      params.maxPrice = maxPrice;
    }

    fetchGoods(params);
  };

  applyFilters();

  const applyPriceFilters = debounce(applyFilters, 300);

  filtersForm.addEventListener('input', ({ target }) => {
    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;
      filtersForm.minPrice.value = '';
      filtersForm.maxPrice.value = '';
      applyFilters();
      return;
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      target.value = target.value.replace(/[^[0-9]/g, '');
      if (target.value) {
        applyPriceFilters();
      }
    }
  });
};
