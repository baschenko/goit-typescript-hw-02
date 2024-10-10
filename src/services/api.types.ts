import { Image } from '../components/App.types';

export interface APIResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
