import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from "../Types";

const initialState = {
  userData: [],
  isLogin: false,
};

const LoginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userData: [],
        isLogin: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;