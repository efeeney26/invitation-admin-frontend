import styled from '@emotion/styled';

import { MODE } from './types';

export const getColor = (mode: MODE) => {
  switch (mode) {
    case MODE.error:
      return 'red';
    default:
      return 'green';
  }
};

export const BannerStyled = styled.div<{ mode: MODE }>(
  {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  ({ mode }) => ({
    backgroundColor: getColor(mode),
  }),
);
