import axios from '../../utils/axios';

export const getAkun = (token) => axios.get(`/auth/courier`, { 
  headers: {
    token: token,
  },
});