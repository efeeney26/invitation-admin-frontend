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

export {
  getGlobalStyles,
  getColor,
};
