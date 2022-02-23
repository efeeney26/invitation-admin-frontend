import React, { FC, useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import {
  Banner, MODE, Spinner, GuestCard,
} from '../../components';

import { deleteGuestThunk, getGuestsThunk } from './slice/thunks';
import { deleteGuestSelector, guestsSelector } from './slice/selectors';
import { ContainerStyled, ContentStyled, InfoStyled } from './Main.style';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: guests,
    loading: guestsLoading,
    error: guestsError,
  } = useAppSelector(guestsSelector);

  const {
    data: deleteMessage,
  } = useAppSelector(deleteGuestSelector);

  useEffect(() => {
    dispatch(getGuestsThunk());
  }, [dispatch, deleteMessage]);

  const handleDelete = useCallback((guest) => {
    dispatch(deleteGuestThunk(guest));
  }, [dispatch]);

  return (
    <ContainerStyled>
      {guestsLoading && <Spinner text="Загрузка..." />}
      {guestsError && <Banner mode={MODE.error} text="Что-то пошло не так..." />}
      {deleteMessage
        && (
        <InfoStyled>
          <Banner mode={MODE.success} text={deleteMessage?.message} withCancel />
        </InfoStyled>
        )}
      {guests
          && (
          <ContentStyled>
            {guests.map((guest) => (
              <GuestCard
                key={guest.name}
                guest={guest}
                onDelete={handleDelete}
              />
            ))}
          </ContentStyled>
          )}
    </ContainerStyled>
  );
};

export default Main;
