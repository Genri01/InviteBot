import ActionTypes from '../constants';

const initialState = {
  popup_visible: false,
  dataRegistredVK: {}
};

export default function popup_login(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.POPUP_LOGIN_VISIBLE:
      return {
        ...state,
        popup_visible: payload,
      };
    case ActionTypes.POPUP_LOGIN_DATA_REGISTRATION_VK:
      return {
        ...state,
        dataRegistredVK: {
          accounts: payload
        }
      };
    default:
      return state;
  }
}