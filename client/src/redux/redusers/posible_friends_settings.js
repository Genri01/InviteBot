import ActionTypes from '../constants';

const initialState = {
  requestCount: 0,
  delay: { to: 0, from: 0, delay: 0,check: false },
  autoResponderEventType: 1,
  messageSettings: {
    conversationTypeEvent: 1,
    textMessages: []
  },
  addingMessages: { 
    on: { title: "Включить", disabled: false, check: false }, 
    random: { title: "Случайный порядок", disabled: true, check: false }, 
    text_areas: [] 
  },
  photoOrVideoSettings: {
    photoFilesPath: [],
    messages: [],
  },
  audioSettings: {
    audioFilesPath: [],
    messages: []
  },
  setLikeToWall: { title: "", disabled: false, check: false },
  setLikeToProfile: { title: "", disabled: false, check: false },
};

export default function posible_friends_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_REQUESTCOUNT:
      return {
        ...state,
        requestCount: payload,
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_DELAY:
     let delay = Math.floor(Math.random() * (payload.to - payload.from + 1) ) + payload.from
      return {
        ...state,
        delay: { ...payload, delay }
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_LIKEWALL:
      return {
        ...state,
        setLikeToWall: payload,
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_LIKEPROFILE:
      return {
        ...state,
        setLikeToProfile: payload,
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_PHOTOFILEPATH:
      return {
        ...state,
        photoOrVideoSettings: payload,
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_AUDIOFILEPATH:
      return {
        ...state,
        audioSettings: payload,
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_CONVERSATIONTYPE:
      return {
        ...state,
        messageSettings: { ...state.messageSettings, conversationTypeEvent: payload },
      };
    case ActionTypes.POSIBLE_FRIENDS_SETTINGS_ADDINGMESSAGES:
        return {
          ...state,
          addingMessages: payload,
        };
    default:
      return state;
  }
}