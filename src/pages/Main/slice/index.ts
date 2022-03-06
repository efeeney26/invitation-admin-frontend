import { combineReducers } from '@reduxjs/toolkit';
import { createGenericSlice } from '../../../store/genericSlice';
import {
  getGuestsThunk, deleteGuestThunk, addGuestThunk, getGuestThunk, updateGuestThunk,
} from './thunks';

export const { reducer: list } = createGenericSlice({
  name: 'guests',
  reducers: {},
  asyncThunk: getGuestsThunk,
});

export const { reducer: guest } = createGenericSlice({
  name: 'guest',
  reducers: {},
  asyncThunk: getGuestThunk,
});

export const { reducer: deleteGuest } = createGenericSlice({
  name: 'deleteGuest',
  reducers: {},
  asyncThunk: deleteGuestThunk,
});

export const { reducer: updateGuest } = createGenericSlice({
  name: 'updateGuest',
  reducers: {},
  asyncThunk: updateGuestThunk,
});

export const { reducer: addGuest } = createGenericSlice({
  name: 'addGuest',
  reducers: {},
  asyncThunk: addGuestThunk,
});

export const reducer = combineReducers({
  list,
  deleteGuest,
  addGuest,
  guest,
  updateGuest,
});
