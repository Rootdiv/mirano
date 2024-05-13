import { CartElem } from '@/scripts/CartElem';
import { cartStore } from '@/scripts/Store';

export const renderCart = () => {
  const cartList = document.querySelector('.cart__list');
  const cartPriceTotal = document.querySelector('.cart__price_total');

  const updateList = () => {
    const cart = cartStore.getCart();
    cartList.textContent = '';

    if (!cart.length) {
      const messageItem = document.createElement('li');
      messageItem.className = 'cart__no-product';
      messageItem.textContent = 'Козина пуста';
      cartList.append(messageItem);

      cartPriceTotal.innerHTML = `0&nbsp;&#8381;`;
      return;
    }

    const productCards = cart.map(CartElem);
    cartList.append(...productCards);

    const totalPriceValue = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
    cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;&#8381;`;
  };

  cartStore.subscribe(updateList);
  updateList();
};
