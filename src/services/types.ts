import { AxiosResponse } from 'axios';

import { IGuest } from '../types';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

export interface IApiClient {
  auth(payload: { secret: string }): ApiResponse<{ status: string }>
  getGuests(): ApiResponse<IGuest[]>
  deleteGuest(payload: { guest: IGuest }): ApiResponse<{ message: string }>
  addGuest(payload: { guest: IGuest }): ApiResponse<{ message: string }>
  getGuest(payload: { id: string }): ApiResponse<IGuest>
  updateGuest(payload: { guest: IGuest }): ApiResponse<{ message: string }>
}
