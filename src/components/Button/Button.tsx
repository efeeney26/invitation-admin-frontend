import React, { FC } from 'react';

import { ButtonStyled } from './Button.style';

interface ButtonProps {
  label: string,
  onClick?: () => unknown,
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: FC<ButtonProps> = ({ label, onClick, type = 'button' }) => (
  <ButtonStyled
    type={type}
    onClick={onClick}
  >
    {label}
  </ButtonStyled>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;
