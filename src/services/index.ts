import axios from 'axios';

import { IApiClient } from './types';
import { IGuest } from '../types';

const LOCAL_BACKEND_URL = '/api/guests';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `${process.env.BACKEND_URL}/api/guests` : LOCAL_BACKEND_URL,
});

class ApiClient implements IApiClient {
  private client = axiosInstance;

  public getGuests = () => this.client
    .get('/');

  public getGuest = (payload: { id: string }) => this.client
    .get(`/guest?id=${payload.id}`);

  public deleteGuest = (payload: { guest: IGuest }) => this.client
    .patch('/deleteGuest', payload);

  public updateGuest = (payload: { guest: IGuest }) => this.client
    .patch('/updateGuest', payload);

  public addGuest = (payload: { guest: IGuest }) => this.client
    .post('/addGuest', payload);
}

const apiClient: IApiClient = new ApiClient();

export default apiClient;
