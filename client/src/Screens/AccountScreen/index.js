import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { appPutAccountsVK } from '../../redux/actions/api_vk';
import { change_visible_popup } from '../../redux/actions/users';
import { loader_switch } from '../../redux/actions/app';
import { side_menu, accounts_vk, popup_login, users } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import PopapLogin from '../../components/PopapLogin';
import VisualAccountsComponent from '../../components/VisualAccountsComponent';
import VisualSettingsComponent from '../../components/VisualSettingsComponent';
import VkApiServices from '../../services/VkApiServices'
import './style.css';

const filterSuggestionsFriends = async (task_id,account) => { // возвращает количество возможных друзей

const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let filterSuggestionsFriends = {
    "count": 4,
    "suggestFriendsFilterType": 0
  }

  const resp_8 =  await VkApiServices.filterSuggestionsFriends(filterSuggestionsFriends,token);
  console.log(resp_8,"resp"); 

};

const autoresponderСonfirmFriends = async (task_id,account) => { // пишет только что принятым друзьям и ставит лайки
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let autoresponderСonfirmFriends = {
    "acountToken": token,
    "delay": 5,
    "autoResponderEventType": 1,
    "welcomeCount": 5,
    "messageSettings": {
      "conversationTypeEvent": 1,
      "textMessages": [
        "Гавно!"
      ]
    },
    "addToFriends": true,
    "setLikeToWall": true,
    "setLikeToProfile": true
  }

  const resp = await VkApiServices.autoResponderFriends(autoresponderСonfirmFriends,token);
  console.log(resp,"resp"); 

};

const autoresponderIncomingRequestsFriends = async (task_id,account) => { // автоответчик на входящие заявки в друзья
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let autoresponderСonfirmFriends = {
    "acountToken": token,
    "delay": 0,
    "autoResponderEventType": 2,
    "welcomeCount": 5,
    "addToFriends": true,
    "setLikeToWall": true,
    "setLikeToProfile": true
  }

  const resp = await VkApiServices.autoResponderFriends(autoresponderСonfirmFriends,token);
  console.log(resp,"resp!@!"); 

};

const likingViewingStories = async (task_id,account) => { 
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  // let likingViewingStories = {
  //   "acountToken": token,
  //   "delay": 5,
  //   "requestCount": 5,
  //   "userIds": [
  //     0
  //   ],
  //   "groupIds": [
  //     0
  //   ],
  //   "setLikeToWall": true,
  //   "setLikeToProfilePhoto": true
  // }

  // const resp = await VkApiServices.autoLikingFriendsOrGroups(likingViewingStories,token);
  // console.log(resp,"resp"); 
  let sendingMessagesUserList = {
    "acountToken": token,
    "delay": 5,
    "autoResponderEventType": 3,
    "welcomeCount": 10,
  }

  const resp = await VkApiServices.autoResponderFriends(sendingMessagesUserList,token);
};

const sendingMessagesUserList = async (task_id,account) => { 
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let sendingMessagesUserList = {
    "acountToken": token,
    "delay": 5,
    "autoResponderEventType": 3,
    "welcomeCount": 10,
    "messageSettings": {
      "conversationTypeEvent": 3,
      "textMessages": [
        "goodbye "
      ]
    },
    "userNamesOrIds": [
      "agolowin"
    ]
  }

  const resp = await VkApiServices.autoResponderFriends(sendingMessagesUserList,token);
  console.log(resp,"resp"); 

};

const targetAudienceFromList = async (task_id,account) => { 
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let targetAudienceFromList = {
    "acountToken": token,
    "delay": 0,
    "autoResponderEventType": 3,
    "welcomeCount": 10,
    "userNamesOrIds": [
      "aspektpak","agolowin"
    ],
    "addToFriends": true,
    "setLikeToWall": true,
    "setLikeToProfile": true
  }

  const resp = await VkApiServices.autoResponderFriends(targetAudienceFromList,token);
  console.log(resp,"resp"); 

};

const sendMessagesCommunityList = async (task_id,account) => { 
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let sendMessagesCommunityList = {
    "acountToken": token,
    "delay": 0,
    "autoResponderEventType": 3,
    "welcomeCount": 10,
    "userNamesOrIds": [
      "aspektpak","agolowin"
    ],
    "addToFriends": true,
    "setLikeToWall": true,
    "setLikeToProfile": true
  }

  const resp = await VkApiServices.autoResponderFriends(sendMessagesCommunityList,token);
  console.log(resp,"resp"); 

};

const possibleFriends = async (task_id,account) => { 
const token = account.user_accounts_info.access_token_vk;
const task = account.task_settings;
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
  let possibleFriends = {
    "acсountToken":token,
    "delay":5,
    "requestCount":4,
    "welcomeMessage":"Приветствую",
    "setLikeToWall":true,
    "setLikeToProfilePhoto":true
    }

  const resp = await VkApiServices.addSuggestionsFriends(possibleFriends,token);
  console.log(resp,"resp"); 

};

const delAccountsCard = async (newAccounts) => { 
  const vk_res = await VkApiServices.deletedCardVk(newAccounts); 
};

function eventButtonsWorker(accounts, info_account, openSettings , changeTypeSettings , dispatch) {

  let titleTask = [
    "Выбрать задание из списка", 
    "Автоответчик на подтвержденные заявки в друзья", 
    "Лайкинг друзей",
    "Автоответчик на входящие заявки в друзья",
    "Отправка сообщение вКонтакте по списку пользователей",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    "Работа по целевой аудитории из списка",  
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

      if(task_id === 1) {
        console.log("Автоответчик на подтвержденные заявки в друзья");
        // autoresponderСonfirmFriends(info_account.task,account);
      }

      if(task_id === 2) {
        console.log("Лайкинг и просмотр Stories друзей");
        // likingViewingStories(info_account.task,account);
      }

      if(task_id === 3) {
        console.log("Автоответчик на входящие заявки в друзья");
        // autoresponderIncomingRequestsFriends(info_account.task,account);
      }

      if(task_id === 4) {
        console.log("Отправка сообщение вКонтакте по списку пользователей");
        // sendingMessagesUserList(info_account.task,account);
      }

      if(task_id === 5) {
        console.log("Работа по возможным друзьям");
        // possibleFriends(info_account.task,account);
      }

      if(task_id === 6) {
        console.log("Ручная сортировка возможных друзей");
        // filterSuggestionsFriends(info_account.task,account);
      }

      if(task_id === 7) {
        console.log("Работа по целевой аудитории из списка");
        // targetAudienceFromList(info_account.task,account);
      }

      if(task_id === 8) {
        console.log("Отправка сообщений в сообщества из списка");
        // sendMessagesCommunityList(info_account.task,account);
      }

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
      dispatch(loader_switch(true));
      VkApiServices.getAccountsData(user.userId)
      .then((res) => { 
        dispatch(loader_switch(false));
        console.log(JSON.parse(res.data.accounts),'res.data.accounts')
        dispatch(appPutAccountsVK(JSON.parse(res.data.accounts))) 
      }).catch((e)=>{
        dispatch(loader_switch(false));
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


