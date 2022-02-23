import React, { FC, useCallback, useState } from 'react';

import Button from '../Button/Button';
import LabeledTextField from '../LabeledTextField/LabeledTextField';
import { DEFAULT_INVITATION } from './constants';
import { GuestFormStyled } from './GuestForm.style';

interface GuestFormProps {
  onSubmit: (data: Record<string, unknown>) => unknown
}

export const GuestForm: FC<GuestFormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<{ name: string, invitation: string }>({ name: '', invitation: DEFAULT_INVITATION });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit({
      ...data,
      accept: false,
    });
  }, [data, onSubmit]);

  const handleChange = useCallback((e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
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
      <Button label="Добавить гостя" type="submit" />
    </GuestFormStyled>
  );
};

export default GuestForm;
