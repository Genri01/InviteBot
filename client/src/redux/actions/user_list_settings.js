import ActionTypes from '../constants';

export function user_list_settings_welcomeCount(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_WELCOMECOUNT,
    payload: count
  }
}

export function user_list_settings_delay(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_DELAY,
    payload: count
  }
}

export function user_list_settings_setLikeToWall(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_LIKEWALL,
    payload: count
  }
}

export function user_list_settings_setLikeToProfile(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_LIKEPROFILE,
    payload: count
  }
}

export function user_list_settings_setAddFriends(count) {
  return {
    type: ActionTypes.USERLIST_LIST_SETTINGS_ADDFRIENDS,
    payload: count
  }
}

export function user_list_settings_conversationTypeEvent(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_CONVERSATIONTYPE,
    payload: count
  }
}

export function user_list_settings_addingMessages(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_ADDINGMESSAGES,
    payload: count
  }
}

export function user_list_settings_photoFilesPath(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_PHOTOFILEPATH,
    payload: count
  }
}

export function user_list_settings_photoFilesMessages(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_PHOTOFILEMESSAGE,
    payload: count
  }
}

export function user_list_settings_audioFilesPath(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_AUDIOFILEPATH,
    payload: count
  }
}

export function user_list_settings_audioFilesMessages(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_AUDIOFILEMESSAGE,
    payload: count
  }
}

export function user_list_settings_userIds(count) {
  return {
    type: ActionTypes.USERLIST_SETTINGS_USERSID,
    payload: count
  }
}