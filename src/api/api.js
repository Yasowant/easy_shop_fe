import axios from 'axios';

const api = axios.create({
  baseURL: 'https://easy-shop-be.onrender.com/api',
   withCredentials: true,
});

export default api;
