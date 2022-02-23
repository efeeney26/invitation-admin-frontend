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

export const deleteGuestThunk = createAsyncThunk(
  'deleteGuest',
  async (guest: IGuest) => {
    const { data } = await apiClient.deleteGuest({ guest });
    return data;
  },
);
