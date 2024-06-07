export const ListItem = category => (
  <li class="filters__type-item">
    <button type="button" class="filters__type-button" name="category">
      {category}
    </button>
  </li>
);

export const ListType = categories => (
  <ul class="filters__type-list">{categories.map(ListItem)}</ul>
);
