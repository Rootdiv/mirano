import { API_URL } from '@/scripts/API';
import { cartStore } from '@/scripts/Store';

export const ProductCard = ({ id, photoUrl, name, price }) => (
  <li class="goods__item" key={id}>
    <article class="goods__card card">
      <img src={`${API_URL}${photoUrl}`} alt={name} class="card__image" />
      <div class="card__content">
        <h3 class="card__title">{name}</h3>
        <div class="card__footer">
          <p class="card__date-delivery">сегодня&nbsp;в&nbsp;14:00</p>
          <button
            type="button"
            class="card__button"
            onMouseEnter={({ target }) => {
              target.innerHTML = 'в&nbsp;корзину';
            }}
            onMouseLeave={({ target }) => {
              target.innerHTML = `${price}&nbsp;&#8381`;
            }}
            onClick={() => {
              cartStore.addProductCart(id);
            }}>
            {price}&nbsp;&#8381;
          </button>
        </div>
      </div>
    </article>
  </li>
);
