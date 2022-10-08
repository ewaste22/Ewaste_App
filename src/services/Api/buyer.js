import axios from '../../utils/axios';

export const GetBuyerProduct = (url) => axios.get(`${url}`);