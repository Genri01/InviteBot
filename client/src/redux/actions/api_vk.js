import axios from 'axios';
import VkApiServices from '../../services/VkApiServices';
import ActionTypes from '../constants';
import { API_URL } from '../../http';

export function appGetAccountsVK(accounts) {
  return {
    type: ActionTypes.APP_REQUEST_GET_ACCOUNTS_VK,
    payload: accounts
  }
}

export async function sendMessages (dispatch) {
  try {
    const response = await VkApiServices.sendMessages();
    console.log(response,"посылает сообщения");
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function addSuggestionsFriends (dispatch) {
  try {
    const response = await VkApiServices.addSuggestionsFriends();
    console.log(response,"Добавляет в друзья");
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function autoResponderFriends (dispatch) {
  try {
    const response = await VkApiServices.autoResponderFriends();
    console.log(response,"посылает сообщения");
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function getSuggestionFriends (dispatch) {
  try {
    const response = await VkApiServices.filterSuggestionsFriends();
    console.log(response,"фильтр ввозможных друзей");
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function autoLikingFriendsOrGroups (dispatch) {
  try {
    const response = await VkApiServices.autoLikingFriendsOrGroups();
    console.log(response,"фильтр ввозможных друзей");
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function get_accounts_vk (id,dispatch) {
  try {
    console.log(id)
    const vk_accounts_data = await VkApiServices.getAccountsData(id);
    console.log(vk_accounts_data,'vk_accounts_data')
 
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
    // dispatch(setDataUserVk(vk_accounts_data.data))
    return false;
  } catch (error) {
    console.log(error)
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}
