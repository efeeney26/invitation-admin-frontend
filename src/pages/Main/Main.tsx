import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';

import { IGuest, MODE } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  Banner, Button, GuestCard, GuestForm, LabeledTextField, Loader, Modal,
} from '../../components';

import {
  addGuestThunk, deleteGuestThunk, getGuestsThunk, getGuestThunk, updateGuestThunk,
} from './slice/thunks';
import {
  addGuestSelector,
  deleteGuestSelector,
  guestSelector,
  guestsSelector,
  updateGuestSelector,
} from './slice/selectors';
import { ContainerStyled, ContentStyled, HeaderStyled } from './Main.style';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: guests,
    loading: guestsLoading,
    error: guestsError,
  } = useAppSelector(guestsSelector);

  const {
    data: guestById,
  } = useAppSelector(guestSelector);

  const {
    data: updatedGuest,
  } = useAppSelector(updateGuestSelector);

  const {
    data: deleteGuestMessage,
  } = useAppSelector(deleteGuestSelector);

  const {
    data: addGuestMessage,
    error: addGuestError,
  } = useAppSelector(addGuestSelector);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isGetModalOpen, setGetModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(false);
  const [guestsItems, setGuestsItems] = useState<IGuest[] | null>(null);

  const filteredGuests = useMemo(() => {
    if (guests) {
      if (search || filter) {
        return guests.reduce((acc: IGuest[], current) => ([
          ...acc,
          ...(search && current.name.includes(search) ? [current] : []),
          ...(filter && current.accept ? [current] : []),
        ]), []);
      }
      return guests;
    }
    return null;
  }, [filter, guests, search]);

  useEffect(() => {
    if (filteredGuests) {
      setGuestsItems(filteredGuests);
    }
  }, [filteredGuests]);

  useEffect(() => {
    dispatch(getGuestsThunk());
  }, [dispatch, deleteGuestMessage, addGuestMessage, updatedGuest]);

  useEffect(() => {
    if (addGuestMessage && !addGuestError) {
      setModalOpen(false);
    }
  }, [addGuestError, addGuestMessage]);

  useEffect(() => {
    if (updatedGuest) {
      setGetModalOpen(false);
    }
  }, [updatedGuest]);

  useEffect(() => {
    if (guestById) {
      setGetModalOpen(true);
    }
  }, [guestById]);

  const handleDeleteGuest = useCallback((guest) => {
    if (window.confirm('?????????? ???????????????')) {
      dispatch(deleteGuestThunk(guest));
    }
  }, [dispatch]);

  const handleAddGuest = useCallback((guest) => {
    dispatch(addGuestThunk(guest));
  }, [dispatch]);

  const handleUpdateGuest = useCallback((guest) => {
    const guestAfterUpdate = {
      ...guestById,
      ...guest,
    };

    dispatch(updateGuestThunk(guestAfterUpdate));
  }, [dispatch, guestById]);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleCloseGetModal = useCallback(() => {
    setGetModalOpen(false);
  }, []);

  const handleGetGuest = useCallback((id) => {
    if (id) {
      dispatch(getGuestThunk(id));
    }
  }, [dispatch]);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleFilterGuests = useCallback(() => {
    setFilter((prev) => !prev);
  }, []);

  return (
    <ContainerStyled>
      {guestsLoading && <Loader text="????????????????..." />}
      {guestsError && <Banner mode={MODE.error} text="??????-???? ?????????? ???? ??????..." />}
      <HeaderStyled>
        <LabeledTextField
          id="search"
          value={search}
          label="?????????? ???? ??????????"
          onChange={handleSearchChange}
          fullWidth={false}
        />
        <Button
          label="????????????"
          onClick={handleFilterGuests}
          mode={MODE.info}
        />
        <Button
          label="???????????????? ??????????"
          onClick={handleOpenModal}
        />
      </HeaderStyled>
      <h4>{`?????????? ${filteredGuests?.length} ????????????`}</h4>
      {guestsItems
          && (
          <ContentStyled>
            {guestsItems.map((guest) => (
              <GuestCard
                key={guest.name}
                guest={guest}
                onDelete={handleDeleteGuest}
                onClick={handleGetGuest}
              />
            ))}
          </ContentStyled>
          )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <h3>???????????????? ??????????</h3>
        <GuestForm onSubmit={handleAddGuest} />
      </Modal>
      <Modal
        isOpen={isGetModalOpen}
        onClose={handleCloseGetModal}
      >
        <h3>??????????</h3>
        <GuestForm
          name={guestById?.name}
          invitation={guestById?.invitation}
          accept={guestById?.accept}
          submitName="???????????????? ???????????? ???? ??????????"
          onSubmit={handleUpdateGuest}
        />
      </Modal>
    </ContainerStyled>
  );
};

export default Main;
