export const users = {
  user:(state) => state.users.user,
  isAuth:(state) => state.users.isAuth,
}

export const popup_login = {
  popup_visible:(state) => state.popup_login.popup_visible,
  login_data:(state) => state.popup_login.login_data,
}

export const pages = {
  page:(state) => state.pages.page,
  header_visible:(state) => state.pages.header_visible,
}

export const accounts_vk = {
  newDataAccountVK:(state) => state.accounts_vk.newDataAccountVK,
  oldDataAccountVK:(state) => state.accounts_vk.oldDataAccountVK,
  data_users_after_login_vk:(state) => state.accounts_vk.data_users_after_login_vk
}

export const side_menu = {
  type_side_menu:(state) => state.side_menu.type_side_menu,
}