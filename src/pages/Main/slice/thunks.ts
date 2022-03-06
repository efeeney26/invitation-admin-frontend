import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../services';
import { IGuest } from '../../../types';

export const getGuestsThunk = createAsyncThunk(
  'guests',
  async () => {
    const { data } = await apiClient.getGuests();
    return data;
  },
);

export const getGuestThunk = createAsyncThunk(
  'guest',
  async (id: string) => {
    const { data } = await apiClient.getGuest({ id });
    return data;
  },
);

export const deleteGuestThunk = createAsyncThunk(
  'deleteGuest',
  async (guest: IGuest) => {
    const { data } = await apiClient.deleteGuest({ guest });
    return data;
  },
);

export const updateGuestThunk = createAsyncThunk(
  'updateGuest',
  async (guest: IGuest) => {
    const { data } = await apiClient.updateGuest({ guest });
    return data;
  },
);

export const addGuestThunk = createAsyncThunk(
  'addGuest',
  async (guest: IGuest) => {
    const { data } = await apiClient.addGuest({ guest });
    return data;
  },
);
