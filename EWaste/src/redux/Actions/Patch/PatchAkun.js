import { PATCH_AKUN_FAILED, PATCH_AKUN_SUCCESS } from "../../Types";
import { patchAkun } from "../../../services/Api/akun";

export const successPutProfile = () => ({
  type: PATCH_AKUN_FAILED,
});

export const failedPutProfile = () => ({
  type: PATCH_AKUN_FAILED,
});

export const changeAkun = (id, payload) => async (dispatch) => {
  // dispatch(setLoading(true));
  await patchAkun(id, payload)
    .then((response) => {
      dispatch(successPutProfile());
      console.log(response.data.message);
      alert("Akun Berhasil Diubah");
    })
    .catch((err) => {
      dispatch(failedPutProfile());
      console.log(err);
      alert(err.message);
    });
};