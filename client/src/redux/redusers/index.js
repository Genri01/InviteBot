import { combineReducers } from 'redux';
import users from './users';
import accounts_vk from './accounts_vk';
import pages from './pages';
import side_menu from './side_menu';
import popup_login from './popup_login';
import loader from './loader';
import confirm_friends from './confirm_friends';
import liking_settings from './liking_settings';
import incoming_friends_settings from './incoming_friends_settings';
import posible_friends_settings from './posible_friends_settings';
import group_list_settings from './group_list_settings';
import target_list_settings from './target_list_settings';
import user_list_settings from './user_list_settings';
import manual_settings from './manual_settings';

const rootReducer = combineReducers({
  users,
  accounts_vk,
  pages,
  side_menu,
  popup_login,
  loader,
  confirm_friends,
  liking_settings,
  incoming_friends_settings,
  posible_friends_settings,
  group_list_settings,
  target_list_settings,
  user_list_settings,
  manual_settings
});

export default rootReducer;