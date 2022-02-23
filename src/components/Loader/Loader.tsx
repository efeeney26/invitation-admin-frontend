import React, { FC } from 'react';

import { SpinnerStyled } from './Loader.style';

interface SpinnerProps {
  text: string
}

export const Loader: FC<SpinnerProps> = ({ text }) => (
  <SpinnerStyled>
    {text}
  </SpinnerStyled>
);

export default Loader;
