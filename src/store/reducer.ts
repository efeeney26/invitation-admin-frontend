import { combineReducers } from '@reduxjs/toolkit';
import { reducer as guestsReducer } from '../pages/Main/slice';

export const reducer = combineReducers({
  guests: guestsReducer,
});
