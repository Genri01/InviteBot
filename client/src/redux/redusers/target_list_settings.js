import ActionTypes from '../constants';

const initialState = {
  welcomeCount: 0,
  delay: { to: 0, from: 0, delay: 0,check: false },
  autoResponderEventType: 3,
  userNamesOrIds: [],
  addFriends: { title: "", disabled: false, check: false },
  setLikeToWall: { title: "", disabled: false, check: false },
  setLikeToProfile: { title: "", disabled: false, check: false },
};

export default function target_list_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.TARGET_LIST_SETTINGS_WELCOMECOUNT:
      return {
        ...state,
        welcomeCount: payload,
      };
    case ActionTypes.TARGET_LIST_SETTINGS_DELAY:
     let delay = Math.floor(Math.random() * (payload.to - payload.from + 1) ) + payload.from
      return {
        ...state,
        delay: { ...payload, delay }
      };
    case ActionTypes.TARGET_LIST_SETTINGS_LIKEWALL:
      return {
        ...state,
        setLikeToWall: payload,
      };
    case ActionTypes.TARGET_LIST_SETTINGS_LIKEPROFILE:
      return {
        ...state,
        setLikeToProfile: payload,
      };
      case ActionTypes.TARGET_LIST_SETTINGS_USERSID:
        return {
          ...state,
          userNamesOrIds: payload,
        };
      case ActionTypes.TARGET_LIST_SETTINGS_ADDFRIENDS:
        return {
          ...state,
          addFriends: payload,
        };
    default:
      return state;
  }
}