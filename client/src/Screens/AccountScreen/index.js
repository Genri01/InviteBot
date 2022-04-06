import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { change_visible_popup } from '../../redux/actions/users';
import { side_menu, accounts_vk, popup_login } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import PopapLogin from '../../components/PopapLogin';
import VisualAccountsComponent from '../../components/VisualAccountsComponent';
import VisualSettingsComponent from '../../components/VisualSettingsComponent';
import './style.css';


function eventButtonsWorker(info_account, openSettings , authontificationVk, dispatch) {

  switch (info_account.event) {
    case "social":
      console.log("social");
      if(authontificationVk) {

      } else {
        dispatch(change_visible_popup(true));
      }
      break;
    case "acc_settings":
      openSettings(true);
      break;
    case "deleted":
      console.log("deleted")
      break;
    case "play":
      console.log("play")
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
  // useInvalidUrlAccess(); getTokenVk()
  // const [visible_popup, swichingPopup] = useState(false);
  const [settings_page_visisble, swichingSettingsPage] = useState(false);
  const [account_information, workerInformation] = useState({});

  const type_side_menu = useSelector(side_menu.type_side_menu);
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  const popup_visisble = useSelector(popup_login.popup_visible);
  const dataRegistredVK = useSelector(popup_login.dataRegistredVK);

  const dispatch = useDispatch();

  let AccountsNetwork = [];
  
  if(newDataAccountVK.accounts.length === 0) {
    AccountsNetwork = []
  } else {
    AccountsNetwork = type_side_menu === "vk" ? newDataAccountVK.accounts : type_side_menu === "inst" ? newDataAccountVK.accounts : newDataAccountVK.accounts;
  }

console.log(dataRegistredVK)

  return (
    <div className="account_screen" >
      {popup_visisble && <PopapLogin />}
      <SideMenu onClick={(e) => { dispatch(change_side_menu(e.target.id)) }} typeScreen={type_side_menu} />
      {
        settings_page_visisble ?
        <VisualSettingsComponent accounts={AccountsNetwork} typeScreen={type_side_menu} /> : 
        <VisualAccountsComponent dataRegistredVK={dataRegistredVK} accounts={AccountsNetwork} typeScreen={type_side_menu} onClick={(e) =>  eventButtonsWorker(e,swichingSettingsPage,false,dispatch)} />
      }
    </div>
  );
}

