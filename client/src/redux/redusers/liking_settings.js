import ActionTypes from '../constants';

const initialState = {
  welcomeCount: 0,
  delay: { to: 0, from: 0, delay: 0,check: false },
  autoResponderEventType: 1,
  setLikeToWall: { title: "", disabled: false, check: false },
  setLikeToProfile: { title: "", disabled: false, check: false },
};

export default function liking_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.LIKING_SETTINGS_WELCOMECOUNT:
      return {
        ...state,
        welcomeCount: payload,
      };
    case ActionTypes.LIKING_SETTINGS_DELAY:
     let delay = Math.floor(Math.random() * (payload.to - payload.from + 1) ) + payload.from
      return {
        ...state,
        delay: { ...payload, delay }
      };
    case ActionTypes.LIKING_SETTINGS_LIKEWALL:
      return {
        ...state,
        setLikeToWall: payload,
      };
    case ActionTypes.LIKING_SETTINGS_LIKEPROFILE:
      return {
        ...state,
        setLikeToProfile: payload,
      };
    default:
      return state;
  }
}