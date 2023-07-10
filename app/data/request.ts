// src/data/api.ts
import axios from 'axios';
import { baseUrl } from './constants';
import { API_KEY } from '../../secret';

export const fetchCars = async (modelName: string) => {
  const headers = {
    'X-Api-Key': API_KEY
  }
  try {
    const response = await axios.get(baseUrl+`/cars?limit=4&model=${modelName}`, {headers});
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cars');
  }
};
