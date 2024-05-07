import { debounce } from '@/scripts/debounce';

export const initHeaderFixed = () => {
  const header = document.querySelector('header');
  const body = document.body;
  let headerHeight = header.offsetHeight;

  const updateHeaderHeight = () => {
    headerHeight = header.offsetHeight;
  };

  const handleScroll = () => {
    const scrollDistance = window.scrollY;

    if (scrollDistance > 200) {
      header.classList.add('header_fixed');
      body.style.paddingTop = `${headerHeight}px`;
    } else {
      header.classList.remove('header_fixed');
      body.removeAttribute('style');
    }
  };

  window.addEventListener('resize', debounce(updateHeaderHeight, 100));

  window.addEventListener('scroll', debounce(handleScroll, 100));
};
