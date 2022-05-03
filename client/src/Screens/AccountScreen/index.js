import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible, change_side_menu } from '../../redux/actions/app';
import { appPutAccountsVK } from '../../redux/actions/api_vk';
import { change_visible_popup } from '../../redux/actions/users';
import { loader_switch } from '../../redux/actions/app';

import { manual_settings_friends } from '../../redux/actions/manual_settings';
import { side_menu, accounts_vk, popup_login, users } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import PopapLogin from '../../components/PopapLogin';
import VisualAccountsComponent from '../../components/VisualAccountsComponent';
import VisualSettingsComponent from '../../components/VisualSettingsComponent';
import VkApiServices from '../../services/VkApiServices'
import './style.css';

const filterSuggestionsFriends = async (task_id, accounts, account, dispatch) => { // возвращает количество возможных друзей

  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];
 
  let filterSuggestionsFriends = {
    "count": task.count,
    "suggestFriendsFilterType": task.suggestFriendsFilterType
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts])); 


  try {
    const resp = await VkApiServices.filterSuggestionsFriends(filterSuggestionsFriends,token); 
    account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  
    dispatch(manual_settings_friends(resp));
    
  } catch (error) {
    console.log(error,'error')
    account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  }
};

const autoresponderСonfirmFriends = async (task_id, accounts, account, dispatch) => { // пишет только что принятым друзьям и ставит лайки
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];

  let autoresponderСonfirmFriends = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 1,
    "welcomeCount": task.welcomeCount,
    "addToFriends": task.addToFriends.check,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }

  if (task.messageSettings.textMessages.length !== 0) {
    autoresponderСonfirmFriends.messageSettings = { 
      "conversationTypeEvent": task.messageSettings.conversationTypeEvent,   
      "textMessages": typeof(task.messageSettings.textMessages) !== 'string' ? task.messageSettings.textMessages : [task.messageSettings.textMessages],
    }
  }

  if (task.photoOrVideoSettings.photoFilesPath.length !== 0) {
    autoresponderСonfirmFriends.photoOrVideoSettings = {    
      "photoFilesPath": typeof(task.photoOrVideoSettings.photoFilesPath) !== 'string' ? task.photoOrVideoSettings.photoFilesPath : [task.photoOrVideoSettings.photoFilesPath],
    }
  }

  if (task.audioSettings.audioFilesPath.length !== 0) {
    autoresponderСonfirmFriends.audioSettings = {    
      "audioFilesPath": typeof(task.audioSettings.audioFilesPath) !== 'string' ? task.audioSettings.audioFilesPath : [task.audioSettings.audioFilesPath],
    }
  }


  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts]));
 
  try {
    const resp = await VkApiServices.autoResponderFriends(autoresponderСonfirmFriends,token); 
    account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  
    dispatch(manual_settings_friends(resp));
    
  } catch (error) {
    console.log(error,'error')
    account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  }

};

const autoresponderIncomingRequestsFriends = async (task_id, accounts, account, dispatch) => { // автоответчик на входящие заявки в друзья
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];

  let autoresponderСonfirmFriends = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 2,
    "welcomeCount": task.welcomeCount,
    "addToFriends": task.addToFriends.check,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }


  if (task.messageSettings.textMessages.length !== 0) {
    autoresponderСonfirmFriends.messageSettings = { 
      "conversationTypeEvent": task.messageSettings.conversationTypeEvent,   
      "textMessages": typeof(task.messageSettings.textMessages) !== 'string' ? task.messageSettings.textMessages : [task.messageSettings.textMessages],
    }
  }

  if (task.photoOrVideoSettings.photoFilesPath.length !== 0) {
    autoresponderСonfirmFriends.photoOrVideoSettings = {    
      "photoFilesPath": typeof(task.photoOrVideoSettings.photoFilesPath) !== 'string' ? task.photoOrVideoSettings.photoFilesPath : [task.photoOrVideoSettings.photoFilesPath],
    }
  }

  if (task.audioSettings.audioFilesPath.length !== 0) {
    autoresponderСonfirmFriends.audioSettings = {    
      "audioFilesPath": typeof(task.audioSettings.audioFilesPath) !== 'string' ? task.audioSettings.audioFilesPath : [task.audioSettings.audioFilesPath],
    }
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts])); 

  try {
    const resp = await VkApiServices.autoResponderFriends(autoresponderСonfirmFriends,token); 
    account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
    dispatch(manual_settings_friends(resp));
    
  } catch (error) {
    console.log(error,'error')
    account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  }

};

const likingViewingStories = async (task_id, accounts, account, dispatch) => { 
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];

  let likingViewingStories = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 1,
    "welcomeCount": task.welcomeCount,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts]));
 
  try {
    const resp = await VkApiServices.autoResponderFriends(likingViewingStories,token); 
    account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
    dispatch(manual_settings_friends(resp));
    
  } catch (error) {
    console.log(error,'error')
    account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  }
};

const sendingMessagesUserList = async (task_id, accounts, account, dispatch) => { 
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];

  let sendingMessagesUserList = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 3,
    "welcomeCount": task.welcomeCount,
    "userNamesOrIds": task.userNamesOrIds,
    "addToFriends": task.addToFriends.check,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }

  if (task.messageSettings.textMessages.length !== 0) {
    sendingMessagesUserList.messageSettings = { 
      "conversationTypeEvent": task.messageSettings.conversationTypeEvent,   
      "textMessages": typeof(task.messageSettings.textMessages) !== 'string' ? task.messageSettings.textMessages : [task.messageSettings.textMessages],
    }
  }

  if (task.photoOrVideoSettings.photoFilesPath.length !== 0) {
    sendingMessagesUserList.photoOrVideoSettings = {    
      "photoFilesPath": typeof(task.photoOrVideoSettings.photoFilesPath) !== 'string' ? task.photoOrVideoSettings.photoFilesPath : [task.photoOrVideoSettings.photoFilesPath],
    }
  }

  if (task.audioSettings.audioFilesPath.length !== 0) {
    sendingMessagesUserList.audioSettings = {    
      "audioFilesPath": typeof(task.audioSettings.audioFilesPath) !== 'string' ? task.audioSettings.audioFilesPath : [task.audioSettings.audioFilesPath],
    }
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts]));

try {
  const resp = await VkApiServices.autoResponderFriends(sendingMessagesUserList,token); 
  account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
  account.isLoadingTask = false;
  dispatch(appPutAccountsVK([...accounts]));

  dispatch(manual_settings_friends(resp));
} catch (error) {
  console.log(error,'error')
  account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
  account.isLoadingTask = false;
  dispatch(appPutAccountsVK([...accounts]));
}

};

const targetAudienceFromList = async (task_id, accounts, account, dispatch) => { 
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];
 
  let targetAudienceFromList = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 3,
    "welcomeCount": task.welcomeCount,
    "userNamesOrIds": task.userNamesOrIds,
    "addToFriends": task.addToFriends.check,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoaddingTask = true;

  dispatch(appPutAccountsVK(accounts));

  const resp = await VkApiServices.autoResponderFriends(targetAudienceFromList,token);

  account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
  account.isLoaddingTask = false;
  dispatch(appPutAccountsVK(accounts));

  dispatch(manual_settings_friends(resp));

};

const sendMessagesCommunityList = async (task_id, accounts, account, dispatch) => { 
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];

  let sendMessagesCommunityList = {
    "acountToken": token,
    "delay": task.delay.delay,
    "autoResponderEventType": 4,
    "welcomeCount": task.welcomeCount,
    "groupNamesOrIds": task.groupNamesOrIds,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
  }

  if (task.messageSettings.textMessages.length !== 0) {
    sendMessagesCommunityList.messageSettings = { 
      "conversationTypeEvent": task.messageSettings.conversationTypeEvent,   
      "textMessages": typeof(task.messageSettings.textMessages) !== 'string' ? task.messageSettings.textMessages : [task.messageSettings.textMessages],
    }
  }

  if (task.photoOrVideoSettings.photoFilesPath.length !== 0) {
    sendMessagesCommunityList.photoOrVideoSettings = {    
      "photoFilesPath": typeof(task.photoOrVideoSettings.photoFilesPath) !== 'string' ? task.photoOrVideoSettings.photoFilesPath : [task.photoOrVideoSettings.photoFilesPath],
    }
  }

  if (task.audioSettings.audioFilesPath.length !== 0) {
    sendMessagesCommunityList.audioSettings = {    
      "audioFilesPath": typeof(task.audioSettings.audioFilesPath) !== 'string' ? task.audioSettings.audioFilesPath : [task.audioSettings.audioFilesPath],
    }
  }

  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts]));
  
    try {
      const resp = await VkApiServices.autoResponderFriends(sendMessagesCommunityList,token); 
      account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
      account.isLoadingTask = false;
      dispatch(appPutAccountsVK([...accounts]));
    
      dispatch(manual_settings_friends(resp));
    } catch (error) {
      console.log(error,'error')
      account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
      account.isLoadingTask = false;
      dispatch(appPutAccountsVK([...accounts]));
    }

};

const possibleFriends = async (task_id, accounts, account, dispatch)=> { 
 
  const token = account.user_accounts_info.access_token_vk;
  const task = account.task_settings.tasks[task_id-1];
 
  let possibleFriends = {
    "acсountToken":token,
    "delay": task.delay.delay,
    "requestCount":task.requestCount,
    "setLikeToWall": task.setLikeToWall.check,
    "setLikeToProfile": task.setLikeToProfile.check,
    }

    if (task.messageSettings.textMessages.length !== 0) {
      possibleFriends.welcomeMessage = { 
        "conversationTypeEvent": task.messageSettings.conversationTypeEvent,   
        "textMessages": typeof(task.messageSettings.textMessages) !== 'string' ? task.messageSettings.textMessages : [task.messageSettings.textMessages],
      }
    }
  
    if (task.photoOrVideoSettings.photoFilesPath.length !== 0) {
      possibleFriends.photoOrVideoSettings = {    
        "photoFilesPath": typeof(task.photoOrVideoSettings.photoFilesPath) !== 'string' ? task.photoOrVideoSettings.photoFilesPath : [task.photoOrVideoSettings.photoFilesPath],
      }
    }
  
    if (task.audioSettings.audioFilesPath.length !== 0) {
      possibleFriends.audioSettings = {    
        "audioFilesPath": typeof(task.audioSettings.audioFilesPath) !== 'string' ? task.audioSettings.audioFilesPath : [task.audioSettings.audioFilesPath],
      }
    }
 
  account.task_settings.status_tasks.initial_state = 'Задание запущено и выполняется:';
  account.isLoadingTask = true;
  dispatch(appPutAccountsVK([...accounts]));
  
  try {
    const resp = await VkApiServices.addSuggestionsFriends(possibleFriends,token); 
    account.task_settings.status_tasks.initial_state = 'Задание выполнено:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));

  } catch (error) {
    console.log(error,'error')
    account.task_settings.status_tasks.initial_state = 'Задание не выполнено,проверьте правильность настроек:';
    account.isLoadingTask = false;
    dispatch(appPutAccountsVK([...accounts]));
  }
};

const delAccountsCard = async (newAccounts) => { 
  await VkApiServices.saveaccvk(newAccounts); 
};

function eventButtonsWorker(accounts, info_account, openSettings , changeTypeSettings , dispatch) {

  let titleTask = [
    "Выбрать задание из списка", 
    "Автоответчик на подтвержденные заявки в друзья", 
    "Лайкинг друзей",
    "Автоответчик на входящие заявки в друзья",
    "Работа по целевой аудитории из списка",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    "Отправка сообщений в сообщества из списка",
    // "Работа по целевой аудитории из списка",  
  ]
//
  const accounts_id = Number(info_account.id)-1;
  const task_id = info_account.task;
  const account = accounts.filter(function(item) { return item.id === info_account.id })[0];
  const isLogin = account?.isLogining;

  let newAccounts = [];
 
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
      newAccounts = accounts.filter(function(item) { return item.id !== info_account.id });
      dispatch(appPutAccountsVK(newAccounts));
      if(account.user_accounts_info.user_id !== undefined) { 
        delAccountsCard({ accounts: newAccounts, user_id: account.user_accounts_info.user_id });
      }
      break;
    case "play":
      console.log("play");

      if(task_id === 1) {
        console.log("Автоответчик на подтвержденные заявки в друзья");
        autoresponderСonfirmFriends(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 2) {
        console.log("Лайкинг друзей");
        likingViewingStories(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 3) {
        console.log("Автоответчик на входящие заявки в друзья");
        autoresponderIncomingRequestsFriends(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 4) {
        console.log("Отправка сообщение вКонтакте по списку пользователей");
        sendingMessagesUserList(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 5) {
        console.log("Работа по возможным друзьям");
        possibleFriends(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 6) {
        console.log("Ручная сортировка возможных друзей");
        filterSuggestionsFriends(info_account.task, accounts, account, dispatch);
      }

      if(task_id === 7) {
        console.log("Отправка сообщений в сообщества из списка");
        sendMessagesCommunityList(info_account.task, accounts, account, dispatch);
      }
      // if(task_id === 7) {
      //   console.log("Работа по целевой аудитории из списка");
      //   targetAudienceFromList(info_account.task, accounts, accounts_id, dispatch);
      // }

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

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(change_header_visible(true))
  },[])

  const [settings_page_visisble, swichingSettingsPage] = useState(false);
  const [type_settings, swichingTypeSettings] = useState({ type:'main', id_acc: 0 });
  const [task, swichingTask] = useState({ task_id: 0, id_acc: 0 });
  const type_side_menu = useSelector(side_menu.type_side_menu);
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  const popup_visisble = useSelector(popup_login.popup_visible);
  const user = useSelector(users.user); 
  const data_users_after_login_vk = useSelector(accounts_vk.data_users_after_login_vk);
  const accounts = newDataAccountVK.accounts;

  useEffect(() => {
    if(user.userId !== undefined) {
      dispatch(loader_switch(true));
      VkApiServices.getAccountsData(user.userId)
      .then((res) => { 
        dispatch(loader_switch(false));
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
        <VisualSettingsComponent type_settings={type_settings} accounts={accounts} onClose={ swichingSettingsPage } /> : 
        <VisualAccountsComponent onChangeTaskId={(acc) => { dispatch(appPutAccountsVK(acc)); }} dataRegistredVK={data_users_after_login_vk} accounts={accounts} typeScreen={type_side_menu} onClick={(e) => eventButtonsWorker(accounts, e, swichingSettingsPage, swichingTypeSettings, dispatch)} />
      }
    </div>
  );
}


