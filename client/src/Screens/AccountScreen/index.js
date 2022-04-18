import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { appGetAccountsVK } from '../../redux/actions/api_vk';
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


function eventButtonsWorker(info_account, openSettings , authontificationVk, dispatch) {

  switch (info_account.event) {
    case "social":

      if(authontificationVk) {

      } else {
        console.log(info_account, openSettings , authontificationVk, dispatch)
        dispatch(change_visible_popup({ state:true, id_acc: info_account.id }));
      }
      break;
    case "acc_settings":
      openSettings(true);
      break;
    case "deleted":
      console.log("deleted");
      break;
    case "play":
      console.log("play");
      let responsevk = async () => { 
        // const resp = await VkApiServices.filterSuggestionsFriends();
        const resp = await VkApiServices.sendMessages();
        // const resp = await VkApiServices.addSuggestionsFriends();
        // const resp = await VkApiServices.autoResponderFriends();
        // const resp = await VkApiServices.autoLikingFriendsOrGroups();
        console.log(resp.data,"resp"); 
      };
      responsevk();

      break;
    case "task_settings":
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
  const [account_information, workerInformation] = useState({});

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
        console.log(res.data,'res.data')
        console.log(res.data.accounts,'res.data.accounts')
        dispatch(appGetAccountsVK(res.data.accounts)) 
      }).catch((e)=>{
        console.log(e)
      })
    }
  },[user.userId]);

  // let AccountsNetwork = [];
  let AccountsNetwork = accounts;
  // let string_accounts = typeof(accounts) == 'string' ? JSON.parse(accounts) : accounts ;
  

  // if(string_accounts.length === 0) {
  //   AccountsNetwork = []
  // } else {
  //   AccountsNetwork = type_side_menu === "vk" ? string_accounts : type_side_menu === "inst" ? string_accounts : string_accounts;
  // }

// console.log(popup_visisble)
  return (
    <div className="account_screen">
      {popup_visisble.state && <PopapLogin id_acc={popup_visisble.id_acc} user_id={user.userId} />}
      <SideMenu onClick={(e) => { dispatch(change_side_menu(e.target.id)) }} typeScreen={type_side_menu} />
      {
        settings_page_visisble ?
        <VisualSettingsComponent accounts={AccountsNetwork} typeScreen={type_side_menu} /> : 
        <VisualAccountsComponent dataRegistredVK={data_users_after_login_vk} accounts={AccountsNetwork} typeScreen={type_side_menu} onClick={(e) => eventButtonsWorker(e,swichingSettingsPage,false,dispatch)} />
      }
    </div>
  );
}


