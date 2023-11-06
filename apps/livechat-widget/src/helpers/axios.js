import axios from 'axios';

export const API = axios.create({ withCredentials: false });

export const setBaseURL = () => {
  if (import.meta.env.VITE_API_HOST) {
    API.defaults.baseURL = import.meta.env.VITE_API_HOST;
  }
};

export const setHeader = (value, key = 'X-Auth-Token') => {
  API.defaults.headers.common[key] = value;
};

export const removeHeader = key => {
  delete API.defaults.headers.common[key];
};
