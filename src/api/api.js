import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'http://easy-shop-be.onrender.com/api',
});

export default api;
