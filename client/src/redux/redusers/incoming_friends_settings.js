import ActionTypes from '../constants';

const initialState = {
  welcomeCount: 0,
  delay: { to: 0, from: 0, delay: 0,check: false },
  autoResponderEventType: 2,
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
  addToFriends: { title: "", disabled: false, check: false },
  setLikeToWall: { title: "", disabled: false, check: false },
  setLikeToProfile: { title: "", disabled: false, check: false },
};

export default function incoming_friends_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_WELCOMECOUNT:
      return {
        ...state,
        welcomeCount: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_DELAY:
     let delay = Math.floor(Math.random() * (payload.to - payload.from + 1) ) + payload.from
      return {
        ...state,
        delay: { ...payload, delay }
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_LIKEWALL:
      return {
        ...state,
        setLikeToWall: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_LIKEPROFILE:
      return {
        ...state,
        setLikeToProfile: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_CONVERSATIONTYPE:
      return {
        ...state,
        messageSettings: { ...state.messageSettings, conversationTypeEvent: payload },
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_ADDINGMESSAGES:
      return {
        ...state,
        addingMessages: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_ADDFRIENDS:
      return {
        ...state,
        addToFriends: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_PHOTOFILEPATH:
      return {
        ...state,
        photoOrVideoSettings: payload,
      };
    case ActionTypes.INCOMING_FRIENDS_SETTINGS_AUDIOFILEPATH:
      return {
        ...state,
        audioSettings: payload,
      };
      
    default:
      return state;
  }
}