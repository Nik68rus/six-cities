import { getToken } from './token';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const REQUEST_TIMEOUT = 5000;
const BACKEND_URL = 'https://9.react.pages.academy/six-cities';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      config.headers['X-Token'] = token;
      return config;
    },
  );
  return api;
};
