import React, { FC, useCallback, useState } from 'react';

import Button from '../Button/Button';
import LabeledTextField from '../LabeledTextField/LabeledTextField';
import Checkbox from '../Checkbox/Checkbox';
import { GuestFormStyled } from './GuestForm.style';

interface GuestFormProps {
  onSubmit: (data: Record<string, unknown>) => unknown
  name?: string
  invitation?: string
  accept?: boolean
  submitName?: string
}

export const GuestForm: FC<GuestFormProps> = ({
  onSubmit, name, invitation, accept, submitName = 'Добавить гостя',
}) => {
  const [data, setData] = useState<{ name: string, invitation: string, accept: boolean }>({ name: name || '', invitation: invitation || '', accept: accept || false });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit({
      ...data,
    });
  }, [data, onSubmit]);

  const handleChange = useCallback((e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.id === 'accept' ? e.target.checked : e.target.value,
    }));
  }, []);

  return (
    <GuestFormStyled onSubmit={handleSubmit}>
      <LabeledTextField
        id="name"
        value={data.name}
        label="Имя гостя"
        onChange={handleChange}
      />
      <LabeledTextField
        id="invitation"
        value={data.invitation}
        label="Приглашение"
        onChange={handleChange}
        multiline
      />
      <Checkbox
        onChange={handleChange}
        id="accept"
        checked={data.accept}
        label="Приглашение принято"
      />
      <Button label={submitName} type="submit" />
    </GuestFormStyled>
  );
};

GuestForm.defaultProps = {
  name: '',
  invitation: '',
  accept: false,
  submitName: 'Добавить гостя',
};

export default GuestForm;
