import axios from 'axios';

import { IApiClient } from './types';

const LOCAL_BACKEND_URL = '/api/guests';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `${process.env.BACKEND_URL}/api/guests` : LOCAL_BACKEND_URL,
});

class ApiClient implements IApiClient {
  private client = axiosInstance;

  public getGuests = async () => {
    const config = {
      method: <const>'GET',
      url: '/',
    };
    return this.client(config);
  };
}

const apiClient: IApiClient = new ApiClient();

export default apiClient;
