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

export const loader = {
  loading:(state) => state.loader.loading,
}

export const confirm_friends = {
  welcomeCount:(state) => state.confirm_friends.welcomeCount,
  delay:(state) => state.confirm_friends.delay,
  setLikeToWall:(state) => state.confirm_friends.setLikeToWall,
  setLikeToProfile:(state) => state.confirm_friends.setLikeToProfile,
  addToFriends:(state) => state.confirm_friends.addToFriends,
  messageSettings:(state) => state.confirm_friends.messageSettings,
  addingMessages:(state) => state.confirm_friends.addingMessages,
  photoOrVideoSettings:(state) => state.confirm_friends.photoOrVideoSettings,
  audioSettings:(state) => state.confirm_friends.audioSettings,
}

export const liking_settings = {
  welcomeCount:(state) => state.liking_settings.welcomeCount,
  delay:(state) => state.liking_settings.delay,
  setLikeToWall:(state) => state.liking_settings.setLikeToWall,
  setLikeToProfile:(state) => state.liking_settings.setLikeToProfile,
}

export const manual_settings = {
  count:(state) => state.manual_settings.count,
  suggestFriendsFilterType:(state) => state.manual_settings.suggestFriendsFilterType,
  friends:(state) => state.manual_settings.friends,
}

export const posible_friends_settings = {
  requestCount:(state) => state.posible_friends_settings.requestCount,
  delay:(state) => state.posible_friends_settings.delay,
  setLikeToWall:(state) => state.posible_friends_settings.setLikeToWall,
  setLikeToProfile:(state) => state.posible_friends_settings.setLikeToProfile,
  conversationTypeEvent:(state) => state.posible_friends_settings.conversationTypeEvent,
  addingMessages:(state) => state.posible_friends_settings.addingMessages,
  messageSettings:(state) => state.posible_friends_settings.messageSettings,
  photoOrVideoSettings:(state) => state.posible_friends_settings.photoOrVideoSettings,
  audioSettings:(state) => state.posible_friends_settings.audioSettings,
}

export const target_list_settings = {
  welcomeCount:(state) => state.target_list_settings.welcomeCount,
  delay:(state) => state.target_list_settings.delay,
  setLikeToWall:(state) => state.target_list_settings.setLikeToWall,
  setLikeToProfile:(state) => state.target_list_settings.setLikeToProfile,
  addFriends:(state) => state.target_list_settings.addFriends,
  userNamesOrIds:(state) => state.target_list_settings.userNamesOrIds,
}

export const incoming_friends_settings = {
  welcomeCount:(state) => state.incoming_friends_settings.welcomeCount,
  delay:(state) => state.incoming_friends_settings.delay,
  addToFriends:(state) => state.incoming_friends_settings.addToFriends,
  setLikeToWall:(state) => state.incoming_friends_settings.setLikeToWall,
  setLikeToProfile:(state) => state.incoming_friends_settings.setLikeToProfile,
  conversationTypeEvent:(state) => state.incoming_friends_settings.conversationTypeEvent,
  addingMessages:(state) => state.incoming_friends_settings.addingMessages,
  messageSettings:(state) => state.incoming_friends_settings.messageSettings,
  photoOrVideoSettings:(state) => state.incoming_friends_settings.photoOrVideoSettings,
  audioSettings:(state) => state.incoming_friends_settings.audioSettings,
}

export const user_list_settings = {
  welcomeCount:(state) => state.user_list_settings.welcomeCount,
  delay:(state) => state.user_list_settings.delay,
  addingMessages:(state) => state.user_list_settings.addingMessages,
  messageSettings:(state) => state.user_list_settings.messageSettings,
  photoOrVideoSettings:(state) => state.user_list_settings.photoOrVideoSettings,
  audioSettings:(state) => state.user_list_settings.audioSettings,
  userNamesOrIds:(state) => state.user_list_settings.userNamesOrIds,
}

export const group_list_settings = {
  welcomeCount:(state) => state.group_list_settings.welcomeCount,
  delay:(state) => state.group_list_settings.delay,
  addToFriends:(state) => state.group_list_settings.addToFriends,
  setLikeToWall:(state) => state.group_list_settings.setLikeToWall,
  setLikeToProfile:(state) => state.group_list_settings.setLikeToProfile,
}