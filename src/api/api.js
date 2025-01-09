import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://easy-shop-be.onrender.com',
});

export default api;
