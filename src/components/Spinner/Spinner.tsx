import React, { FC } from 'react';

import { SpinnerStyled } from './Spinner.style';

interface SpinnerProps {
  text: string
}

export const Spinner: FC<SpinnerProps> = ({ text }) => (
  <SpinnerStyled>
    {text}
  </SpinnerStyled>
);

export default Spinner;
