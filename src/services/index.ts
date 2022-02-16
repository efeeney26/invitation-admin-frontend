import axios from 'axios';

import { IApiClient } from './types';

export const axiosInstance = axios.create({
  baseURL: '/api/guests',
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
