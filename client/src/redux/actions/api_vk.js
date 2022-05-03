import axios from 'axios';
import VkApiServices from '../../services/VkApiServices';
import ActionTypes from '../constants';
import { API_URL } from '../../http';

export function appPutAccountsVK(accounts) {
  return {
    type: ActionTypes.APP_REQUEST_PUT_ACCOUNTS_VK,
    payload: accounts
  }
}

// export async function sendMessages (dispatch) {
//   try {
//     const response = await VkApiServices.sendMessages();
//     console.log(response,"посылает сообщения");
//     // dispatch(setDataUserVk({}));
//     // dispatch(set_user_isauth(false));
//   } catch (error) {
//     console.log(error.response?.data?.message)
//   }
// }

export async function addSuggestionsFriends (dispatch) {
  try {
    const response = await VkApiServices.addSuggestionsFriends();
 
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function autoResponderFriends (dispatch) {
  try {
    const response = await VkApiServices.autoResponderFriends(); 
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function getSuggestionFriends (dispatch) {
  try {
    const response = await VkApiServices.filterSuggestionsFriends(); 
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function autoLikingFriendsOrGroups (dispatch) {
  try {
    const response = await VkApiServices.autoLikingFriendsOrGroups(); 
    // dispatch(setDataUserVk({}));
    // dispatch(set_user_isauth(false));
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

export async function get_accounts_vk (id,dispatch) {
  try {
 
    const vk_accounts_data = await VkApiServices.getAccountsData(id); 
 
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
