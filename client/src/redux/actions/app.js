import ActionTypes from '../constants';

export function loader_switch(state) {
  return {
    type: ActionTypes.APP_LOADING,
    payload: state
  }
}

export function change_page(page) {
  return {
    type: ActionTypes.APP_PAGES_SCREEN,
    payload: page
  }
}

export function change_side_menu(item) {
  return {
    type: ActionTypes.APP_SIDE_MENU,
    payload: item
  }
}

export function change_header_visible(visible) {
  return {
    type: ActionTypes.APP_HEADER_HIDDEN_CHANGE,
    payload: visible
  }
}

export function copyDataVK() {
  return {
    type: ActionTypes.COPY_DATA_TEMP,
  }
}

