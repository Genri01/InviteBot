import ActionTypes from '../constants';

const initialState = {
  welcomeCount: 0,
  delay: { to: 0, from: 0, delay: 0,check: false },
  autoResponderEventType: 4,
  addToFriends: { title: "", disabled: false, check: false },
  setLikeToWall: { title: "", disabled: false, check: false },
  setLikeToProfile: { title: "", disabled: false, check: false },
  messageSettings: {
    conversationTypeEvent: 2,
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
  groupNamesOrIds: [],
};

export default function group_list_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.GROUPLIST_SETTINGS_WELCOMECOUNT:
      return {
        ...state,
        welcomeCount: payload,
      };
    case ActionTypes.GROUPLIST_SETTINGS_DELAY:
     let delay = Math.floor(Math.random() * (payload.to - payload.from + 1) ) + payload.from
      return {
        ...state,
        delay: { ...payload, delay }
      };
    case ActionTypes.GROUPLIST_SETTINGS_LIKEWALL:
      return {
        ...state,
        setLikeToWall: payload,
      };
    case ActionTypes.GROUPLIST_SETTINGS_LIKEPROFILE:
      return {
        ...state,
        setLikeToProfile: payload,
      };
      case ActionTypes.GROUPLIST_SETTINGS_CONVERSATIONTYPE:
        return {
          ...state,
          messageSettings: { ...state.messageSettings, conversationTypeEvent: payload },
        };
      case ActionTypes.GROUPLIST_SETTINGS_ADDINGMESSAGES:
        return {
          ...state,
          addingMessages: payload,
        };
      case ActionTypes.GROUPLIST_SETTINGS_PHOTOFILEPATH:
        return {
          ...state,
          photoOrVideoSettings: { ...state.photoOrVideoSettings, photoFilesPath: payload },
        }; 
      case ActionTypes.GROUPLIST_SETTINGS_AUDIOFILEPATH:
        return {
          ...state,
          audioSettings: { ...state.audioSettings, audioFilesPath: payload },
        }; 
    case ActionTypes.GROUPLIST_SETTINGS_USERSID:
      return {
        ...state,
        groupNamesOrIds: payload,
      };
      
    default:
      return state;
  }
}