export const users = {
  user:(state) => state.users.user,
  isAuth:(state) => state.users.isAuth,
}

export const pages = {
  page:(state) => state.pages.page,
  header_visible:(state) => state.pages.header_visible,
}

export const accounts_vk = {
  newDataAccountVK:(state) => state.accounts_vk.newDataAccountVK,
  oldDataAccountVK:(state) => state.accounts_vk.oldDataAccountVK,
}

export const side_menu = {
  type_side_menu:(state) => state.side_menu.type_side_menu,
}