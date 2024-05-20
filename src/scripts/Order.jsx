const openSelect = () => {
  const selectWrapper = document.querySelector('.order__select-wrapper');
  selectWrapper.classList.add('order__select-wrapper_active');
};

const closeSelect = () => {
  const selectWrapper = document.querySelector('.order__select-wrapper');
  selectWrapper.classList.remove('order__select-wrapper_active');
};

export const Order = totalPriceValue => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const deliveryDate = `${day}.${month}`;

  return (
    <div class="order">
      <div class="order__wrapper">
        <h2 class="order__title">Оформить заказ</h2>
        <form class="order__form" id="order">
          <fieldset class="order__fieldset">
            <legend class="order__legend">Данные заказчика</legend>
            <div class="order__input-group">
              <input type="text" class="order__input" name="name-bayer" placeholder="Имя" />
              <input type="tel" class="order__input" name="phone-bayer" placeholder="Телефон" />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <legend class="order__legend">Данные получателя</legend>
            <div class="order__input-group">
              <input type="text" class="order__input" name="name-recipient" placeholder="Имя" />
              <input type="tel" class="order__input" name="phone-recipient" placeholder="Телефон" />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <legend class="order__legend">Адрес</legend>
            <div class="order__input-group">
              <input
                type="text"
                class="order__input order__input"
                name="street"
                placeholder="Улица"
              />
              <input
                type="text"
                class="order__input order__input_min"
                name="house"
                placeholder="Дом"
              />
              <input
                type="text"
                class="order__input order__input_min"
                name="flat"
                placeholder="Квартира"
              />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <div class="order__payment">
              <label class="order__label-radio">
                <input type="radio" class="order__radio" name="payment-online" checked />
                Оплата онлайн
              </label>
            </div>
            <div class="order__delivery">
              <label class="order__label" for="delivery">
                Доставка {deliveryDate}
              </label>
              <input type="hidden" name="delivery-date" value={deliveryDate} />
              <div class="order__select-wrapper">
                <select
                  id="delivery"
                  name="delivery-time"
                  class="order__select"
                  onFocus={openSelect}
                  onBlur={closeSelect}>
                  <option value="9-12">с 9:00 до 12:00</option>
                  <option value="12-15">с 12:00 до 15:00</option>
                  <option value="15-18">с 15:00 до 18:00</option>
                  <option value="18-21">с 18:00 до 21:00</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
        <div class="order__footer">
          <p class="order__price">{totalPriceValue}&nbsp;&#8381;</p>
          <button type="submit" form="order" class="order__button">
            Заказать
          </button>
        </div>
      </div>
      <button type="button" class="order__close">
        &times;
      </button>
    </div>
  );
};
