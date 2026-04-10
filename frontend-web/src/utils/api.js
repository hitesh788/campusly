import axios from 'axios';
import { API_URL } from '../config';

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((req) => {
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user && user.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
      }
    }
  } catch (error) {
    console.error('Error parsing user from localStorage', error);
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});

export default API;
