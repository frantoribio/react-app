import axios from 'axios';

// Base URL de tu API Spring Boot
const API_BASE_URL = 'http://localhost:8080/api';

// Crear instancia de Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para añadir el token JWT automáticamente
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Interceptor para manejar errores globales (opcional)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      alert('Sesión expirada o no autorizada');
      // Redirigir al login si lo deseas
    }
    return Promise.reject(error);
  }
);

export default api;
