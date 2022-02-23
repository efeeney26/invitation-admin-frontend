import { AxiosResponse } from 'axios';

import { IGuest } from '../types';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

export interface IApiClient {
  getGuests(): ApiResponse<IGuest[]>
  deleteGuest(payload: { guest: IGuest }): ApiResponse<{ message: string }>
  addGuest(payload: { guest: IGuest }): ApiResponse<{ message: string }>
}
