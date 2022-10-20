import axios from '../../utils/axios';

export const getAkun = (token) => axios.get(`/auth/courier`, { 
  headers: {
    Authorization: 'Bearer ' + token,
  },
});
// https://ewaste-api.herokuapp.com/api/v1/auth/courier/update/3
export const patchAkun = (id, payload) => axios.patch(`/auth/courier/update/${id}`, payload, {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
});

export const changePassword = (id, payload, token) => axios.patch(`/auth/courier/change-password/${id}`, payload, {
  headers: {
    Authorization: 'Bearer ' + token,
  }
});

