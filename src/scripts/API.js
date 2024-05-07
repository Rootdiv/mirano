export const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://api.rootdiv.ru/mirano';

export const fetchGoods = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};
