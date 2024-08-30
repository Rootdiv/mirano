export const OrderSuccess = id => (
  <div class="order">
    <div class="order__wrapper">
      <h2 class="order__title">Заказ оформлен</h2>
      <p className="order__id">Ваш номер заказа: {id}</p>
      <button type="button" class="order__close">
        &times;
      </button>
    </div>
  </div>
);
