import axios from '../../utils/axios';

export const login = (email, password) => axios.post('/auth/login', { email, password });

export const register = (data) => axios.post('/auth/register', data, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});