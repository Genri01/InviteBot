import ActionTypes from '../constants';

export function appGetAccountsVK(accounts) {
  return {
    type: ActionTypes.APP_REQUEST_GET_ACCOUNTS_VK,
    payload: accounts
  }
}

export function appGetAccountsTG(accounts) {
  return {
    type: ActionTypes.APP_REQUEST_GET_ACCOUNTS_TG,
    accounts
  }
}

export function appGetAccountsINST(accounts) {
  return {
    type: ActionTypes.APP_REQUEST_GET_ACCOUNTS_INST,
    accounts
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

export function copyDataINST() {
  return {
    type: ActionTypes.COPY_DATA_RIG,
  }
}

export function copyDataTG() {
  return {
    type: ActionTypes.COPY_DATA_INFO,
  }
}
