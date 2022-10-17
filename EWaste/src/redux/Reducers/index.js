import { combineReducers } from 'redux';
import AkunReducer from './AkunReducer';
import LoginReducer from "./LoginReducer";

const AllReducers = combineReducers({
  login: LoginReducer,
  akun: AkunReducer
});

export default AllReducers;