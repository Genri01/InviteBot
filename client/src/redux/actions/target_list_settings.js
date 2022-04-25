import ActionTypes from '../constants';

export function target_list_settings_welcomeCount(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_WELCOMECOUNT,
    payload: count
  }
}

export function target_list_settings_delay(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_DELAY,
    payload: count
  }
}

export function target_list_settings_setLikeToWall(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_LIKEWALL,
    payload: count
  }
}

export function target_list_settings_setLikeToProfile(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_LIKEPROFILE,
    payload: count
  }
}

export function target_list_settings_setAddFriends(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_ADDFRIENDS,
    payload: count
  }
}

export function target_list_settings_setUserIds(count) {
  return {
    type: ActionTypes.TARGET_LIST_SETTINGS_USERSID,
    payload: count
  }
}

