import axios from 'axios';
import AuthServices from '../../services/AuthServices';
import VkApiServices from '../../services/VkApiServices';
import ActionTypes from '../constants';
import { API_URL } from '../../http';
import { appGetAccountsVK } from '../../redux/actions/api_vk';

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

export async function login_vk (social_login, social_password, id, id_acc, accounts, dispatch) {
  const url = `https://oauth.vk.com/token?grant_type=password&client_id=2274003&client_secret=hHbZxrka2uZ6jB1inYsH&username=${social_login}&password=${social_password}&v=5.131&2fa_supported=1`;
  try {
    const response = await axios.get(url);
    console.log(id_acc,'id_acc login')
    console.log(accounts,'accounts login')
    console.log(response,'response')

    const vk_res = await VkApiServices.writeCardsVk({ 
      type:'vk',
      user_id: id, 
      email:social_login, 
      password:social_password,
      acc_obj:{ 
        user_id: response.data.user_id, 
        access_token: response.data.access_token, 
        expires_in: response.data.expires_in, 
        card_id: id, 
        social_login, 
        social_password 
      } 
    })

    // dispatch(appGetAccountsVK(vk_res.data.accounts));
    // let temp_accounts = [];
    // if(localStorage.getItem('brtk')) {
    //   temp_accounts = JSON.parse(localStorage.getItem('brtk'));
    //   temp_accounts.push({brtk: response.data.access_token, i:id});
    //   let string = JSON.stringify(temp_accounts);
    //   localStorage.setItem('brtk',string)
    // } else {
    //   localStorage.setItem('brtk',JSON.stringify([{brtk: response.data.access_token, i:id}]));
    // }

    // temp_accounts = login_data.accounts;
    // temp_accounts.push({ login: social_login,password: social_password, id })
    // dispatch(set_popup_data(temp_accounts));
    // dispatch(setDataUserVk(response.data));
    return vk_res;
  } catch (error) {
    console.log(error)
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}