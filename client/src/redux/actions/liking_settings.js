import ActionTypes from '../constants';

export function liking_settings_welcomeCount(count) {
  return {
    type: ActionTypes.LIKING_SETTINGS_WELCOMECOUNT,
    payload: count
  }
}

export function liking_settings_delay(count) {
  return {
    type: ActionTypes.LIKING_SETTINGS_DELAY,
    payload: count
  }
}

export function liking_settings_setLikeToWall(count) {
  return {
    type: ActionTypes.LIKING_SETTINGS_LIKEWALL,
    payload: count
  }
}

export function liking_settings_setLikeToProfile(count) {
  return {
    type: ActionTypes.LIKING_SETTINGS_LIKEPROFILE,
    payload: count
  }
}

