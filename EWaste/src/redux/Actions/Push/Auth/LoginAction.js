import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../../Types";
import { login } from "../../../../services/Api";
import Auth from "../../../../services/Storage/Auth";

export const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});

export const loginUser = (email, password, navigation) => async (dispatch) => {
  // dispatch(setLoading(true));
  await login(email, password)
    .then((response) => {
      dispatch(successLogin(response.data));
      Auth.setAccount(response.data)
      navigation.replace('MainApp');
    })
    .catch((err) => {
      dispatch(failedLogin());
      console.log(err.message);
    });
};