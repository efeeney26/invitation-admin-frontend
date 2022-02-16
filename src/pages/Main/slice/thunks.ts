import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../services';

export const getGuestsThunk = createAsyncThunk(
  'guests',
  async () => {
    const { data } = await apiClient.getGuests();
    return data;
  },
);
