import styled from '@emotion/styled';

import { MODE } from '../../types';

import { getColor } from '../../utils';

export const BannerStyled = styled.div<{ mode: MODE }>(
  {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'relative',
  },
  ({ mode }) => ({
    backgroundColor: getColor(mode),
  }),
);

export const ImageStyled = styled.img({
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
});
