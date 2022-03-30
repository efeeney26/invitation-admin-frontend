import axios from 'axios';

import { IApiClient } from './types';
import { IGuest } from '../types';

const LOCAL_BACKEND_URL = '/api';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `${process.env.BACKEND_URL}/api` : LOCAL_BACKEND_URL,
});

class ApiClient implements IApiClient {
  private client = axiosInstance;

  public auth = (payload: { secret: string }) => this.client
    .post('/auth', payload);

  public getGuests = () => this.client
    .get('/guests/');

  public getGuest = (payload: { id: string }) => this.client
    .get(`/guests/guest?id=${payload.id}`);

  public deleteGuest = (payload: { guest: IGuest }) => this.client
    .patch('/guests//deleteGuest', payload);

  public updateGuest = (payload: { guest: IGuest }) => this.client
    .patch('/guests//updateGuest', payload);

  public addGuest = (payload: { guest: IGuest }) => this.client
    .post('/guests/addGuest', payload);
}

const apiClient: IApiClient = new ApiClient();

export default apiClient;
