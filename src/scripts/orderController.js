import { sendOrder } from '@/scripts/API';
import { Order } from '@/scripts/Order';
import { OrderSuccess } from '@/scripts/OrderSuccess';
import { cartStore } from '@/scripts/Store';

const cartOrderBtn = document.querySelector('.cart__order-btn');
const cartElem = document.querySelector('.cart');

const openOrder = () => {
  const cart = cartStore.getCart();
  const totalPriceValue = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const order = Order(totalPriceValue);
  document.body.append(order);

  order.addEventListener('click', ({ target }) => {
    if (target === order || target.closest('.order__close')) {
      order.remove();
    }
  });

  const form = order.querySelector('.order__form');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      buyer: {
        name: formData.get('name-bayer'),
        phone: formData.get('phone-bayer'),
      },
      recipient: {
        name: formData.get('name-recipient'),
        phone: formData.get('phone-recipient'),
      },
      address: `${formData.get('street')}, ${formData.get('house')}, ${formData.get('flat')}`,
      paymentOnline: `${formData.get('payment-online') === 'on'}`,
      deliveryDate: formData.get('delivery-date'),
      deliveryTime: formData.get('delivery-time'),
    };
    const result = await sendOrder(data);
    const orderSuccess = OrderSuccess(result.orderId);
    order.textContent = '';
    order.append(orderSuccess);
    cartStore.clearCart();
    cartElem.classList.remove('cart_open');
  });
};

export const initOrder = () => {
  const checkCart = () => {
    const cart = cartStore.getCart();
    cartOrderBtn.disabled = !cart.length;
  };

  cartStore.subscribe(checkCart);

  cartOrderBtn.addEventListener('click', openOrder);
};
