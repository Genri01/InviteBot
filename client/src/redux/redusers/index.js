import { combineReducers } from 'redux';
import users from './users';
import accounts_vk from './accounts_vk';
import accounts_tg from './accounts_tg';
import accounts_inst from './accounts_inst';
import pages from './pages';
import side_menu from './side_menu';
import popup_login from './popup_login';

const rootReducer = combineReducers({
  users,
  accounts_vk,
  accounts_tg,
  accounts_inst,
  pages,
  side_menu,
  popup_login
});

export default rootReducer;