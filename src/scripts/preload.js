export const callBackWithPreload = async (elem, cb, ...params) => {
  const preload = document.createElement('div');
  preload.className = 'preload';

  elem.append(preload);
  elem.style.position = 'relative';
  preload.style.display = 'flex';

  try {
    return await cb(...params);
  } finally {
    preload.style.display = 'none';
    elem.removeAttribute('style');
    preload.remove();
  }
};
