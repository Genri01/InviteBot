import ActionTypes from '../constants';
import VkApiServices from '../../services/VkApiServices';

export function confirm_friends_settings_welcomeCount(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_WELCOMECOUNT,
    payload: count
  }
}

export function confirm_friends_settings_delay(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_DELAY,
    payload: count
  }
}

export function confirm_friends_settings_setLikeToWall(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_LIKEWALL,
    payload: count
  }
}

export function confirm_friends_settings_setLikeToProfile(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_LIKEPROFILE,
    payload: count
  }
}

export function confirm_friends_settings_conversationTypeEvent(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_CONVERSATIONTYPE,
    payload: count
  }
}

export function confirm_friends_settings_addingMessages(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_ADDINGMESSAGES,
    payload: count
  }
}

export function confirm_friends_settings_photoFilesPath(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_PHOTOFILEPATH,
    payload: count
  }
}

export function confirm_friends_settings_audioFilesPath(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_AUDIOFILEPATH,
    payload: count
  }
}

export function confirm_friends_settings_photoFilesMessages(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_PHOTOFILEMESSAGE,
    payload: count
  }
}

export function confirm_friends_settings_audioFilesMessages(count) {
  return {
    type: ActionTypes.CONFIRM_FRIENDS_SETTINGS_AUDIOFILEMESSAGE,
    payload: count
  }
}

export async function uploadeActionSave(params,dispatch) {
  try {
    const file = await VkApiServices.uploadFiles(params); 

  } catch (error) {
    console.log(error.response?.data?.message)
  }
}

