import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { Card } from '../../components';

import { getGuestsThunk } from './slice/thunks';
import { ContainerStyled, ContentStyled } from './Main.style';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.guests);

  useEffect(() => {
    dispatch(getGuestsThunk());
  }, [dispatch]);

  return (
    <ContainerStyled>
      {data
        ? (
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
        )
        : null}
    </ContainerStyled>
  );
};

export default Main;
