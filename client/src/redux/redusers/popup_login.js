import ActionTypes from '../constants';

const initialState = {
  popup_visible: { state:false, id_acc: 0 },
  login_data: { accounts: [] }
};

export default function popup_login(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.POPUP_LOGIN_VISIBLE:
      return {
        ...state,
        popup_visible: payload,
      };
    case ActionTypes.LOGIN_DATA_REGISTRATION_VK:
      return {
        ...state,
        login_data: {
          accounts: payload
        }
      };
    default:
      return state;
  }
}