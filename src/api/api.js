import axios from 'axios';

const api = axios.create({
  baseURL: 'https://easy-shop-be.onrender.com/api',
  withCredentials: true, // Ensures cookies are sent
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
