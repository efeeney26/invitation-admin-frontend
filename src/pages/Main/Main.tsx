import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import {
  Banner, Card, MODE, Spinner,
} from '../../components';

import { getGuestsThunk } from './slice/thunks';
import { ContainerStyled, ContentStyled } from './Main.style';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.guests);

  useEffect(() => {
    dispatch(getGuestsThunk());
  }, [dispatch]);

  return (
    <ContainerStyled>
      {loading && <Spinner text="Загрузка..." />}
      {data
          && (
          <ContentStyled>
            {data.map(({ name, invitation, accept }) => (
              <Card
                key={name}
                name={name}
                invitation={invitation}
                accept={accept}
              />
            ))}
          </ContentStyled>
          )}
      {error && <Banner mode={MODE.error} text="Что-то пошло не так..." />}
    </ContainerStyled>
  );
};

export default Main;
