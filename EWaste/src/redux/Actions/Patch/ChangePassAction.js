import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from "../../Types";
import { changePassword } from "../../../services/Api/akun";

export const successPatchPassword = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
});

export const failedPatchPassword = () => ({
  type: CHANGE_PASSWORD_FAILED,
});

export const changePasswordUser = (id, payload, token) => async (dispatch) => {
  // dispatch(setLoading(true));
  await changePassword(id, payload, token)
    .then((response) => {
      dispatch(successPatchPassword());
      console.log(response.data.message);
      alert("Password Berhasil Diubah");
    })
    .catch((err) => {
      dispatch(failedPatchPassword());
      console.log(err);
      alert(err.message);
    });
};