import React, { FC, ChangeEventHandler } from 'react';

import { LabeledInput, LabelStyled, LabeledTextArea } from './LabeledTextField.style';

interface LabeledTextFieldProps {
  id: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  label: string,
  multiline?: boolean,
  fullWidth?: boolean,
}

export const LabeledTextField: FC<LabeledTextFieldProps> = ({
  id,
  value,
  onChange,
  label,
  multiline = false,
  fullWidth = true,
}) => (
  <LabelStyled htmlFor={id} fullWidth={fullWidth}>
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
  fullWidth: true
};

export default LabeledTextField;
