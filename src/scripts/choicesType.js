import { FilterType } from '@/scripts/FilterType';
import { store } from '@/scripts/Store';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filters__choices_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();
    const filtersType = document.querySelector('.filters__type-list');

    if (categories.size) {
      filtersType.textContent = '';
      typeChoices.removeAttribute('style');
      categories.forEach(category => {
        filtersType.append(FilterType(category));
      });
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
