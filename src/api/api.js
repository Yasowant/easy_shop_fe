import axios from 'axios';

const api = axios.create({
  baseURL: 'https://easy-shop-be.onrender.com/api',
});

export default api;
