import styled from '@emotion/styled';
import { getColor } from '../../utils';
import { MODE } from '../../types';

export const ButtonStyled = styled.button<{ mode: MODE }>(
  {
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '3em',
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
  ({ mode }) => ({
    background: getColor(mode),
  }),
);
