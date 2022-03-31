import getGlobalStyles from './styles/global.styles';
import { MODE } from '../types';

const getColor = (mode: MODE) => {
  switch (mode) {
    case MODE.error:
      return 'red';
    case MODE.gradient:
      return 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)';
    case MODE.success:
      return 'green';
    case MODE.info:
      return 'gray';
    default:
      return 'green';
  }
};

const getCookieValue = (name: string) => (
  document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || ''
);

const setCookie = (name: string, value: string, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};

export {
  getGlobalStyles,
  getColor,
  getCookieValue,
  setCookie,
};
