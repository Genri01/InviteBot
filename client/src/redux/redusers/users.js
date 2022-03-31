import ActionTypes from '../constants';

const initialState = {
  form_login: '',
  form_password: '',
  login: 'admin',
  password: 'admin',
  forgot_email: ''
};

export default function admin(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.APP_REQUEST_GET_USER:
      return {
        ...state,
          login: action.user.login,
          password: action.user.password
      };
    case ActionTypes.APP_REQUEST_PUT_USER:
      return {
        ...state,
          form_login: action.payload === null ? "" : action.payload.form_login,
          form_password: action.payload === null ? "" : action.payload.form_password,
      };
    case ActionTypes.APP_REQUEST_PUT_MAIL:
      return {
        ...state,
          forgot_email: action.payload,
      };
    default:
      return state;
  }
}