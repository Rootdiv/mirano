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

export const store = new GoodsStore();
