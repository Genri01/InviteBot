import ActionTypes from '../constants';

const initialState = {
  type_side_menu: 'vk',
};

export default function side_menu(state = initialState, {type,payload}) {
  switch (type) {
    case ActionTypes.APP_SIDE_MENU:
      return {
        ...state,
        type_side_menu: payload,
      };
    default:
      return state;
  }
}