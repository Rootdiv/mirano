import { API_URL } from '@/scripts/API';

class Store {
  constructor() {
    this.observers = [];
  }

  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer();
    });
  }
}

class GoodsStore extends Store {
  constructor() {
    super();
    this.goods = [];
    this.categories = new Set();
  }

  getGoods() {
    return this.goods;
  }

  setGoods(newGoods) {
    this.goods = newGoods;
    this.updateCategories(newGoods);
    this.notifyObservers();
  }

  getCategories() {
    return this.categories;
  }

  setCategoryGoods(newGoods) {
    this.goods = newGoods;
    this.notifyObservers();
  }

  updateCategories(goods) {
    this.categories.clear();
    goods.forEach(product => {
      if (product.categories) {
        product.categories.forEach(category => {
          this.categories.add(category);
        });
      }
    });
    this.notifyObservers();
  }
}

class CartStore extends Store {
  constructor() {
    super();
    this.cart = [];
  }

  async registerCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart/register`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Ошибка при отправке данных: ${error}`);
    }
  }

  getCart() {
    return this.cart;
  }

  async fetchCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.cart = await response.json();
      this.notifyObservers();
    } catch (error) {
      console.error(`Ошибка при получении данных: ${error}`);
    }
  }

  async postCart({ id, quantity }) {
    try {
      const response = await fetch(`${API_URL}/api/cart/items`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: id, quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.cart = await response.json();
      this.notifyObservers();
    } catch (error) {
      console.error(`Ошибка при отправке данных: ${error}`);
    }
  }

  async addProductCart(id) {
    await this.postCart({ id, quantity: 1 });
  }

  clearCart() {
    this.cart = [];
    this.notifyObservers();
  }

  async init() {
    await this.registerCart();
    await this.fetchCart();
  }
}

export const goodsStore = new GoodsStore();
export const cartStore = new CartStore();
