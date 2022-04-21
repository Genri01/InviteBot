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


const responsevk = async (task_id,account) => { 

const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;

let json = {
  "acсountToken": token,
  "delay": 10,
  "requestCount": 2,
  "welcomeMessage": "Приветствую",
  "setLikeToWall": true,
  "setLikeToProfilePhoto": true
}

const tests =  await VkApiServices.addSuggestionsFriends(json,token);
console.log(tests,"tests"); 


// const shedule = task.tasks[task_id-1].shedule
// const autoresponderСonfirmFriends = task.tasks[task_id-1].autoresponderСonfirmFriends
// const autosecretary = task.tasks[task_id-1].autosecretary
// const likingViewingStories = task.tasks[task_id-1].likingViewingStories
// const autoresponderIncomingRequestsFriends = task.tasks[task_id-1].autoresponderIncomingRequestsFriends
// const sendingMessagesUserList = task.tasks[task_id-1].sendingMessagesUserList
// const possibleFriends = task.tasks[task_id-1].possibleFriends
// const targetAudienceFromList = task.tasks[task_id-1].targetAudienceFromList
// const publishingStories = task.tasks[task_id-1].publishingStories
// const parserTargetAudience = task.tasks[task_id-1].parserTargetAudience
// const sendMessagesCommunityList = task.tasks[task_id-1].sendMessagesCommunityList

// switch (task_id) {
//   case 1:


//     // let resp_1 = await VkApiServices.autoResponderFriends(json);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_1.data,"resp"); 
//     break;
//   case 2:

//     // let resp_2 = await VkApiServices.autoResponderFriends(json,token);
//   // const resp = await VkApiServices.filterSuggestionsFriends();

//   // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//     // console.log(resp_2.data,"resp"); 
//     break;
//   case 3:
//     // let resp_3 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_3.data,"resp"); 
//     break;
//   case 4:
//     // let resp_4 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_4.data,"resp"); 
//     break;
//   case 5:
//     // json = {
//     //   "count": 5,
//     //   "suggestFriendsFilterType": 0
//     // }
//     // let resp_5 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_5.data,"resp"); 
//     break;
//   case 6:
//     let jsdon = {
//       "acountTokens": [
//         "string"
//       ],
//       "delay": 0,
//       "requestCount": 0,
//       "userIds": [
//         0
//       ],
//       "groupIds": [
//         0
//       ],
//       "setLikeToWall": true,
//       "setLikeToProfilePhoto": true
//     }
//     // let resp_6 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_6.data,"resp"); 
//     break;
//   case 7:


//     break;
//   case 8:
//     // let resp_8 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_8.data,"resp"); 
//     break;
//   case 9:
//     // let resp_9 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_9.data,"resp"); 
//     break;
//   case 10:
//     // let resp_10 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_10.data,"resp"); 
//     break;
//   case 11:
//     // let resp_11 = await VkApiServices.autoResponderFriends(json,token);
//     // const resp = await VkApiServices.filterSuggestionsFriends();
//     // const resp = await VkApiServices.addSuggestionsFriends();
//     // const resp = await VkApiServices.autoLikingFriendsOrGroups();
//       // console.log(resp_11.data,"resp"); 
//     break;
//   default:
//     break;
// }

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
        window.open(`https://vk.com/id${account.user_accounts_info.user_vk_id}`, '_blank');
      } else {
        dispatch(change_visible_popup({ state:true, id_acc: info_account.id }));
      }

      break;
    case "acc_settings":
      changeTypeSettings({ type:'main', id_acc: accounts_id, task_id });
      openSettings(true);
      break;
    case "deleted":
      console.log("deleted");
      newAccounts = accounts.filter(function(item) { return item.id != info_account.id });
      console.log(newAccounts)
      delAccountsCard({ accounts: newAccounts, user_id: account.user_accounts_info.user_id });
      dispatch(appPutAccountsVK(newAccounts));

      break;
    case "play":
      console.log("play");
      console.log(titleTask[task_id]);
      console.log(info_account);
      console.log(accounts[accounts_id],'accounts@');

      responsevk(info_account.task,account);

      break;
    case "task_settings":
      changeTypeSettings({ type:'task', id_acc: accounts_id, task_id });
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
  const [task, swichingTask] = useState({ task_id: 0, id_acc: 0 });
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
        <VisualSettingsComponent task_id={task.task_id} type_settings={type_settings} accounts={accounts} onClose={ swichingSettingsPage } /> : 
        <VisualAccountsComponent task={task} onChangeTaskId={swichingTask} dataRegistredVK={data_users_after_login_vk} accounts={accounts} typeScreen={type_side_menu} onClick={(e) => eventButtonsWorker(accounts, e, swichingSettingsPage, swichingTypeSettings, dispatch)} />
      }
    </div>
  );
}


