import ActionTypes from '../constants';

const initialState = {
  page: 'signin',
  header_visible: true
};

export default function pages(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.APP_PAGES_SCREEN:
      return {
        ...state,
        page: payload,
      };
    case ActionTypes.APP_HEADER_HIDDEN_CHANGE:
      return {
        ...state,
        header_visible: payload,
      };
    default:
      return state;
  }
}