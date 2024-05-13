import { API_URL } from '@/scripts/API';
import { cartStore } from '@/scripts/Store';

export const CartElem = ({ id, photoUrl, name, quantity, price }) => (
  <li class="cart__item" key={id}>
    <img src={`${API_URL}${photoUrl}`} alt={name} class="cart__image" />
    <h4 class="cart__item-title">{name}</h4>
    <div class="cart__counter">
      <button
        type="button"
        class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({ id, quantity: quantity - 1 });
        }}>
        -
      </button>
      <input type="number" class="cart__counter-input" min="0" max="99" value={quantity} />
      <button
        type="button"
        class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({ id, quantity: quantity + 1 });
        }}>
        +
      </button>
    </div>
    <p class="cart__price">{price * quantity}&nbsp;&#8381;</p>
  </li>
);
