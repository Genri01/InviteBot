import ActionTypes from '../constants';

const initialState = {
  count: 0,
  suggestFriendsFilterType: 0,
  friends:[]
};

export default function manual_settings(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.MANUAL_SETTINGS_COUNT:
      return {
        ...state,
        count: payload,
      };
    case ActionTypes.MANUAL_SETTINGS_TYPE:
      return {
        ...state,
        suggestFriendsFilterType: payload,
      };
    case ActionTypes.MANUAL_SETTINGS_FRIENDS:
      return {
        ...state,
        friends: payload,
      };
    default:
      return state;
  }
}