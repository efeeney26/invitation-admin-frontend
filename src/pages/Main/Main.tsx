import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import {
  Banner, Loader, Modal, MODE, GuestCard, GuestForm, Button,
} from '../../components';

import { addGuestThunk, deleteGuestThunk, getGuestsThunk } from './slice/thunks';
import { addGuestSelector, deleteGuestSelector, guestsSelector } from './slice/selectors';
import {
  ContainerStyled, InfoStyled, HeaderStyled, ContentStyled,
} from './Main.style';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: guests,
    loading: guestsLoading,
    error: guestsError,
  } = useAppSelector(guestsSelector);

  const {
    data: deleteGuestMessage,
  } = useAppSelector(deleteGuestSelector);

  const {
    data: addGuestMessage,
    error: addGuestError,
  } = useAppSelector(addGuestSelector);

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getGuestsThunk());
  }, [dispatch, deleteGuestMessage, addGuestMessage]);

  useEffect(() => {
    if (addGuestMessage && !addGuestError) {
      setModalOpen(false);
    }
  }, [addGuestError, addGuestMessage]);

  const handleDeleteGuest = useCallback((guest) => {
    dispatch(deleteGuestThunk(guest));
  }, [dispatch]);

  const handleAddGuest = useCallback((guest) => {
    dispatch(addGuestThunk(guest));
  }, [dispatch]);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <ContainerStyled>
      {guestsLoading && <Loader text="Загрузка..." />}
      {guestsError && <Banner mode={MODE.error} text="Что-то пошло не так..." />}
      {(deleteGuestMessage || addGuestMessage)
        && (
        <InfoStyled>
          <Banner
            mode={MODE.success}
            text={deleteGuestMessage?.message || addGuestMessage?.message}
            withCancel
          />
        </InfoStyled>
        )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <h3>Добавить гостя</h3>
        <GuestForm onSubmit={handleAddGuest} />
      </Modal>
      <HeaderStyled>
        <p>Здесь поиск</p>
        <Button
          label="Добавить гостя"
          onClick={handleOpenModal}
        />
      </HeaderStyled>
      {guests
          && (
          <ContentStyled>
            {guests.map((guest) => (
              <GuestCard
                key={guest.name}
                guest={guest}
                onDelete={handleDeleteGuest}
              />
            ))}
          </ContentStyled>
          )}
    </ContainerStyled>
  );
};

export default Main;
