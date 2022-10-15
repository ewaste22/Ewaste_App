import { GET_BUYER_SUCCESS } from "../../../Types";
import { GetBuyerProduct } from "../../../../services/Api"

export const getBuyerProduct = (payload) => ({
    type: GET_BUYER_SUCCESS,
    payload,
});

export const getBuyer = (payload) => async (dispatch) => {
    dispatch(setLoading(true));
    await GetBuyerProduct(payload)
        .then((value) => {
            dispatch(successGetBanner(value.data));
            dispatch(setLoading(false));
            console.log('Get Banner data berhasil');
        })
        .catch((err) => {
            dispatch(failedGetBanner());
            dispatch(setLoading(false));
            console.log(err.message);
        });
};
