import ActionTypes from '../constants';
 
export function manual_settings_count(count) {
  return {
    type: ActionTypes.MANUAL_SETTINGS_COUNT,
    payload: count
  }
}

export function manual_settings_filter(count) {
  return {
    type: ActionTypes.MANUAL_SETTINGS_TYPE,
    payload: count
  }
}

export function manual_settings_friends(count) {
  return {
    type: ActionTypes.MANUAL_SETTINGS_FRIENDS,
    payload: count
  }
}



