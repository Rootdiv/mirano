import { ListType } from '@/scripts/ListType';
import { store } from '@/scripts/Store';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filters__choices_type');
  const choicesBox = document.querySelector('.filters__choices-box_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();

    if (categories.size) {
      choicesBox.textContent = '';
      typeChoices.removeAttribute('style');
      const listType = ListType([...categories]);
      choicesBox.append(listType);
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
