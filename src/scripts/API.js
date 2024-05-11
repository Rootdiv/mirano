import { store } from '@/scripts/Store';

export const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://api.rootdiv.ru/mirano';

const formatQueryString = params => {
  if (Object.keys(params).length === 0) {
    return '';
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });

  return `?${searchParams.toString()}`;
};

export const fetchGoods = async (params = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/products${formatQueryString(params)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const goods = await response.json();

    if (params.category) {
      store.setCategoryGoods(goods);
      return;
    }

    store.setGoods(goods);
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};
