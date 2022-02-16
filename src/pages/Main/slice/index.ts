import { createGenericSlice } from '../../../store/genericSlice';
import { getGuestsThunk } from './thunks';

export const { reducer } = createGenericSlice({
  name: 'guests',
  reducers: {},
  asyncThunk: getGuestsThunk,
});
