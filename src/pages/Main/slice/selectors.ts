import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

export const guestsSelector = createSelector(
  (state: RootState) => {
    const {
      guests: {
        list: {
          data, loading, error,
        },
      },
    } = state;
    return {
      data, loading, error,
    };
  },
  (search) => search,
);

export const deleteGuestSelector = createSelector(
  (state: RootState) => {
    const {
      guests: {
        deleteGuest: {
          data,
        },
      },
    } = state;
    return {
      data,
    };
  },
  (search) => search,
);
