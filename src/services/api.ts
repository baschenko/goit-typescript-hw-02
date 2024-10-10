import axios from 'axios';
import { APIResponse } from './api.types';

const API_KEY = 'Client-ID lFXn5av5ZsDCXi6o_mc9WHabuxYqEBNtnJrnxqLED2o';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  per_page: 15,
  order_by: 'latest',
  orientation: 'landscape',
};

export const fetchPhotos = async (
  query: string,
  page: number = 1
): Promise<APIResponse> => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return data;
};
