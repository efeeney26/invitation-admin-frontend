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

  public deleteGuest = (payload: { guest: IGuest }) => this.client
    .patch('/deleteGuest', payload);
}

const apiClient: IApiClient = new ApiClient();

export default apiClient;
