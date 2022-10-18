import { getAkun } from "../../../services/Api/akun";
import { GET_AKUN_FAILED, GET_AKUN_SUCCESS } from "../../Types";


export const successGetAkun = (payload) => ({
  type: GET_AKUN_SUCCESS,
  payload,
});

export const failedGetAkun = () => ({
  type: GET_AKUN_FAILED,
});

export const akunUser = (token) => async (dispatch) => {
  // dispatch(setLoading(true));
  await getAkun(token)
    .then((response) => {
      dispatch(successGetAkun(response.data.data.courier));
    })
    .catch((err) => {
      dispatch(failedGetAkun());
      console.log(err.message);
    });
};