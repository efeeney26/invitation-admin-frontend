import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Banner, Button, LabeledTextField } from '../../components';
import { GuestFormStyled } from '../../components/GuestForm/GuestForm.style';
import { AuthContainerStyled } from './Auth.style';
import apiClient from '../../services';
import { setCookie } from '../../utils';
import { MODE } from '../../types';

export const Auth: FC = () => {
  const navigate = useNavigate();

  const [secret, setSecret] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e) => {
    setSecret(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (secret) {
      try {
        const res = await apiClient.auth({ secret: btoa(secret) });
        if (res.data.status === 'OK') {
          setCookie('auth_inv', 'inv', 1);
          navigate('/main');
        }
      } catch (error: unknown) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setErrorMessage(error?.response?.data?.status);
      }
    }
  }, [navigate, secret]);

  return (
    <AuthContainerStyled>
      <GuestFormStyled onSubmit={handleSubmit}>
        <LabeledTextField
          label="Секретное слово"
          onChange={handleChange}
          value={secret}
          id="auth"
        />
        <Button label="Войти" type="submit" />
        {errorMessage && <Banner mode={MODE.error} text={errorMessage} />}
      </GuestFormStyled>
    </AuthContainerStyled>
  );
};

export default Auth;
