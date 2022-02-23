import { combineReducers } from '@reduxjs/toolkit';
import { createGenericSlice } from '../../../store/genericSlice';
import { getGuestsThunk, deleteGuestThunk } from './thunks';

export const { reducer: list } = createGenericSlice({
  name: 'guests',
  reducers: {},
  asyncThunk: getGuestsThunk,
});

export const { reducer: deleteGuest } = createGenericSlice({
  name: 'deleteGuest',
  reducers: {},
  asyncThunk: deleteGuestThunk,
});

export const reducer = combineReducers({
  list,
  deleteGuest,
});
