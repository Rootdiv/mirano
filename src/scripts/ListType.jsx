export const ListType = categories => (
  <ul class="filters__type-list">
    {categories.map(category => (
      <li class="filters__type-item">
        <button type="button" class="filters__type-button">
          {category}
        </button>
      </li>
    ))}
  </ul>
);
