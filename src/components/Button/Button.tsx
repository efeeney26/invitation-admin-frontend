import React, { FC, MouseEventHandler } from 'react';

import { ButtonStyled } from './Button.style';
import { MODE } from '../../types';

interface ButtonProps {
  label: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: 'submit' | 'reset' | 'button' | undefined;
  mode?: MODE
}

export const Button: FC<ButtonProps> = ({
  label, onClick, type = 'button', mode = MODE.gradient,
}) => (
  <ButtonStyled
    type={type}
    onClick={onClick}
    mode={mode}
  >
    {label}
  </ButtonStyled>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  mode: MODE.gradient,
};

export default Button;
