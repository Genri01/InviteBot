import ActionTypes from '../constants';

const initialState = {
  popup_visisble: true
};

export default function popup_login(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.POPUP_LOGIN_VISIBLE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
}