import { LOGIN_SUCCESS, LOGIN_FAILED } from "../Types";

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
    default:
      return state;
  }
};

export default LoginReducer;