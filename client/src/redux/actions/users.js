import axios from 'axios';
import AuthServices from '../../services/AuthServices';
import VkApiServices from '../../services/VkApiServices';
import ActionTypes from '../constants';
import { API_URL } from '../../http';

export function set_user(user) {
  return {
    type: ActionTypes.USERS_PUT_USER,
    payload: user
  }
}

export function set_popup_data(data_popup_login) {
  return {
    type: ActionTypes.LOGIN_DATA_REGISTRATION_VK,
    payload: data_popup_login
  }
}

export function set_user_isauth(isAuth) {
  return {
    type: ActionTypes.USERS_PUT_ISAUTH,
    payload: isAuth
  }
}

export function change_visible_popup(visible) {
  return {
    type: ActionTypes.POPUP_LOGIN_VISIBLE,
    payload: visible
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
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials:true })
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

export async function login_vk (social_login, social_password, id, id_acc, accounts) {
  const account = accounts[id_acc - 1];
  let lock = false;
  try {
    accounts.map((item) => {
      if(item.user_accounts_info.social_login !== undefined) {
        if(item.user_accounts_info.social_login === social_login) { 
          lock = true
        }
      }
      return false
    })
    if(!lock) { 
      let temp = account;
      temp.user_accounts_info = { ...account.user_accounts_info, social_login, social_password, id_acc , user_id: id } 
      const vk_res = await VkApiServices.writeCardsVk(temp);
      return vk_res;
    } else {
      return 401;
    }

  } catch (error) {
    console.log(error)
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}