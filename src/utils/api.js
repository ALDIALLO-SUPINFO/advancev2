import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    if (error.response?.status === 401) {
      // Rediriger vers login si non authentifié
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;