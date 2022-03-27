import React, { FC, ChangeEventHandler } from 'react';

import { StyledLabel, Indicator, StyledInput } from './Checkbox.style';

interface ICheckboxProps {
  checked: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>,
  name?: string,
  id: string,
  label?: string,
  value?: string
}

const Checkbox: FC<ICheckboxProps> = ({
  checked,
  onChange,
  name,
  id,
  label,
  value,
}) => (
  <StyledLabel
    htmlFor={id}
  >
    {label}
    <StyledInput
      id={id}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      value={value}
    />
    <Indicator />
  </StyledLabel>
);

Checkbox.defaultProps = {
  name: '',
  label: '',
  value: '',
};

export default Checkbox;
