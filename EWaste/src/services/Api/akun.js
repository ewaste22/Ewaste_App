import axios from '../../utils/axios';

export const getAkun = (token) => axios.get(`/auth/courier`, { 
  headers: {
    Authorization: 'Bearer ' + token,
  },
});

export const patchAkun = (id, payload, token) => axios.patch(`/auth/courier/${id}`, {payload}, {
  headers: {
    Authorization: 'Bearer ' + token,
  }
});

export const changePassword = (id, payload, token) => axios.patch(`/auth/courier/change-password/${id}`, payload, {
  headers: {
    Authorization: 'Bearer ' + token,
  }
});
