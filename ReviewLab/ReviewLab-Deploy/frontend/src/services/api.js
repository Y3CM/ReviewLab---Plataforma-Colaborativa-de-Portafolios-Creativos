import axios from 'axios';

// En producción (Vercel) define VITE_API_URL con la URL del backend, p. ej.
// https://reviewlab-backend.onrender.com/api
// En desarrollo local el backend corre en http://localhost:3000
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
