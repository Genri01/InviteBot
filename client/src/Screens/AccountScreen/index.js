import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { appPutAccountsVK } from '../../redux/actions/api_vk';
import { change_visible_popup } from '../../redux/actions/users';
import { side_menu, accounts_vk, popup_login, users } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import PopapLogin from '../../components/PopapLogin';
import VisualAccountsComponent from '../../components/VisualAccountsComponent';
import VisualSettingsComponent from '../../components/VisualSettingsComponent';
import VkApiServices from '../../services/VkApiServices'
import './style.css';


const responsevk = async () => { 
  // const resp = await VkApiServices.filterSuggestionsFriends();
  // const resp = await VkApiServices.addSuggestionsFriends();
  // const resp = await VkApiServices.autoResponderFriends();
  // const resp = await VkApiServices.autoLikingFriendsOrGroups();
  // console.log(resp.data,"resp"); 
};

const delAccountsCard = async (newAccounts) => { 
  const vk_res = await VkApiServices.deletedCardVk(newAccounts); 
};

function eventButtonsWorker(accounts, info_account, openSettings , changeTypeSettings , dispatch) {

  let titleTask = [
    "Выбрать задание из списка",
    "Расписание",
    "Автоответчик на подтвержденные заявки в друзья",
    "Автосекретарь",
    "Лайкинг и просмотр Stories друзей",
    "Автоответчик на входящие заявки в друзья",
    "Отправка сообщение вКонтакте по списку пользователей",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    "Работа по целевой аудитории из списка",
    "Публикация историй",
    "Поиск целевой аудитории (парсер)",
    "Отправка сообщений в сообщества из списка",
  ]
  
  const accounts_id = Number(info_account.id)-1;
  const task_id = Number(info_account.task);
  const account = accounts[accounts_id];
  const isLogin = account?.isLogining;
  let newAccounts = []
  console.log(accounts);
  switch (info_account.event) {
    case "social":

      if (isLogin) {
        // window.location = `https://oauth.vk.com/token?grant_type=password&client_id=593510674&username=+79626339565&password=misha07072013&v=5.131&2fa_supported=1`;
        // window.open(`https://oauth.vk.com/token?grant_type=password&client_id=2274003&client_secret=hHbZxrka2uZ6jB1inYsH&username=+79626339565&password=misha07072013&redirect_uri=https://vk.com/feed&v=5.131`, '_blank');
        window.open(`https://vk.com/id${account.user_accounts_info.user_vk_id}`, '_blank');
      } else {
        dispatch(change_visible_popup({ state:true, id_acc: info_account.id }));
      }

      break;
    case "acc_settings":
      changeTypeSettings({ type:'main', id_acc: accounts_id });
      openSettings(true);
      break;
    case "deleted":
      console.log("deleted");
      newAccounts = accounts.filter(function(item) { return item.id != info_account.id })
      delAccountsCard({ accounts: newAccounts, user_id: account.user_accounts_info.user_id });
      dispatch(appPutAccountsVK(newAccounts));

      break;
    case "play":
      console.log("play");
      console.log(titleTask[task_id]);
      console.log(info_account);
      console.log(accounts[accounts_id],'accountss@');

      responsevk();

      break;
    case "task_settings":
      changeTypeSettings({ type:'task', id_acc: accounts_id });
      openSettings(true);
      break;
    case "help":
      console.log("help")
      break;
  
    default:
      break;
  }
}

export default function AccountScreen () {
  // useInvalidUrlAccess();
  const [settings_page_visisble, swichingSettingsPage] = useState(false);
  const [type_settings, swichingTypeSettings] = useState({ type:'main', id_acc: 0 });

  const type_side_menu = useSelector(side_menu.type_side_menu);
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  const popup_visisble = useSelector(popup_login.popup_visible);
  const user = useSelector(users.user); 
  const data_users_after_login_vk = useSelector(accounts_vk.data_users_after_login_vk);
  const accounts = newDataAccountVK.accounts;

  const dispatch = useDispatch();

  useEffect(() => {
    if(user.userId !== undefined) {
      VkApiServices.getAccountsData(user.userId)
      .then((res) => { 
        console.log(JSON.parse(res.data.accounts),'res.data.accounts')
        dispatch(appPutAccountsVK(JSON.parse(res.data.accounts))) 
      }).catch((e)=>{
        console.log(e)
      })
    }
  },[user.userId]);
 
  return (
    <div className="account_screen">
      {popup_visisble.state && <PopapLogin accounts={accounts} id_acc={popup_visisble.id_acc} user_id={user.userId} />}
      <SideMenu onClick={(e) => { dispatch(change_side_menu(e.target.id)) }} typeScreen={type_side_menu} />
      {
        settings_page_visisble ?
        <VisualSettingsComponent type_settings={type_settings} accounts={accounts} onClose={ swichingSettingsPage } /> : 
        <VisualAccountsComponent dataRegistredVK={data_users_after_login_vk} accounts={accounts} typeScreen={type_side_menu} onClick={(e) => eventButtonsWorker(accounts, e, swichingSettingsPage, swichingTypeSettings, dispatch)} />
      }
    </div>
  );
}


