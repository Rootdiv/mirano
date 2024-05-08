import { fetchGoods } from '@/scripts/API';
import { debounce } from '@/scripts/debounce';

const filterType = (type, prices) => {
  fetchGoods({ type: type.value, ...prices });
};

export const filterGoods = () => {
  const filtersForm = document.querySelector('.filters__form');
  filtersForm.reset();

  const filtersPrice = {};

  filterType(filtersForm.type);

  const debouncedFilterType = debounce(() => {
    filterType(filtersForm.type, filtersPrice);
  }, 300);

  filtersForm.addEventListener('input', ({ target }) => {
    if (target.name === 'type') {
      filtersForm.minPrice.value = '';
      filtersForm.maxPrice.value = '';
      filterType(filtersForm.type);
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      target.value = target.value.replace(/[^[0-9]/g, '');
      if (target.value) {
        filtersPrice[target.name] = target.value;
      } else {
        delete filtersPrice[target.name];
      }
      debouncedFilterType();
    }
  });
};
