import React, { FC, ChangeEventHandler } from 'react';

import { LabeledInput, LabelStyled, LabeledTextArea } from './LabeledTextField.style';

interface LabeledTextFieldProps {
  id: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  label: string,
  multiline?: boolean
}

export const LabeledTextField: FC<LabeledTextFieldProps> = ({
  id,
  value,
  onChange,
  label,
  multiline = false,
}) => (
  <LabelStyled htmlFor={id}>
    {label}
    {multiline
      ? (
        <LabeledTextArea
          id={id}
          rows={10}
          value={value}
          onChange={onChange}
        />
      )
      : (
        <LabeledInput
          id={id}
          type="text"
          value={value}
          onChange={onChange}
        />
      )}
  </LabelStyled>
);

LabeledTextField.defaultProps = {
  multiline: false,
};

export default LabeledTextField;
