import axios from 'axios';
import {clearSession, getSession} from '@utils/storage';
import useAuthStore from '@store/authStore';

const BASE_URL = 'https://pjsofttech.in:54443';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach token to every request
api.interceptors.request.use(
  config => {
    const {token} = getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor — catch session expiry
api.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status;

    // Session expired — backend returns 401
    if (status === 401) {
      clearSession();
      useAuthStore.getState().logout();
    }

    // Network error
    if (!error.response) {
      error.message = 'Network error. Please check your connection.';
    }

    return Promise.reject(error);
  },
);

export default api;