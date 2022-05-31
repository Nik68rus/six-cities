import axios, {AxiosInstance} from 'axios';

const REQUEST_TIMEOUT = 5000;
const BACKEND_URL = 'https://9.react.pages.academy/six-cities';

export const createAPI = ():AxiosInstance => axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
