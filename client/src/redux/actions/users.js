import axios from 'axios';
import AuthServices from '../../services/AuthServices';
import ActionTypes from '../constants';
import { API_URL } from '../../http';

export function set_user(user) {
  return {
    type: ActionTypes.USERS_PUT_USER,
    payload: user
  }
}

export function set_user_isauth(isAuth) {
  return {
    type: ActionTypes.USERS_PUT_ISAUTH,
    payload: isAuth
  }
}

export async function login (email,password,dispatch) {
  try {
    const response = await AuthServices.login(email,password);
    localStorage.setItem('token',response.data.accessToken);
    dispatch(set_user(response.data.user));
    dispatch(set_user_isauth(true));
    return response
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}


export async function registration (email,password,dispatch) {
  try {
    const response = await AuthServices.registration(email,password);
    localStorage.setItem('token',response.data.accessToken);
    dispatch(set_user(response.data.user));
    dispatch(set_user_isauth(true));
  } catch (error) {
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}

export async function checkAuth (dispatch) {
    try {
      const response = await axios.get(`${API_URL}/refresh`,{ withCredentials:true });
      localStorage.setItem('token',response.data.accessToken);
      dispatch(set_user(response.data.user));
      dispatch(set_user_isauth(true));
    } catch (error) {
      console.log(error.response?.data?.message)
      return error.response?.status;
    }
}

export async function logout (dispatch) {
    try {
      const response = await AuthServices.logout();
      console.log(response,"response logout")
      localStorage.removeItem('token');
      dispatch(set_user({}));
      dispatch(set_user_isauth(false));
    } catch (error) {
      console.log(error.response?.data?.message)
    }
}