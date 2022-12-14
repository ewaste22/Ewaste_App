import {GET_AKUN_SUCCESS, GET_AKUN_FAILED, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED, PATCH_AKUN_SUCCESS, PATCH_AKUN_FAILED} from '../Types';

const initialState = {
  userAkun: [],
};

const AkunReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_AKUN_SUCCESS:
      return {
        ...state,
        userAkun: action.payload,
      };
    case GET_AKUN_FAILED:
      return {
        ...state,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case CHANGE_PASSWORD_FAILED:
      return {
        ...state,
      };
    case PATCH_AKUN_SUCCESS:
      return {
        ...state,
      };
    case PATCH_AKUN_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AkunReducer;