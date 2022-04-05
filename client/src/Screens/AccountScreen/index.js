import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { side_menu,accounts_vk } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import PopapLogin from '../../components/PopapLogin';
import VisualAccountsComponent from '../../components/VisualAccountsComponent';
import VisualSettingsComponent from '../../components/VisualSettingsComponent';
import './style.css';

export default function AccountScreen () {
  // useInvalidUrlAccess();
  const type_side_menu = useSelector(side_menu.type_side_menu);
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  
  let AccountNetwork = [];
  
  if(newDataAccountVK.acc.length === 0) {
     AccountNetwork = []
  } else {
     AccountNetwork = type_side_menu === "vk" ? newDataAccountVK.acc : type_side_menu === "inst" ? newDataAccountVK.acc : newDataAccountVK.acc;
  }

  const dispatch = useDispatch();

  return (
    <div className="account_screen" >
      {/* <PopapLogin visible_popup={false} /> */}
      <SideMenu onClick={(e)=>{dispatch(change_side_menu(e.target.id))}} typeScreen={type_side_menu} />
      {/* <VisualAccountsComponent accounts={AccountNetwork} typeScreen={type_side_menu} /> */}
      <VisualSettingsComponent accounts={AccountNetwork} typeScreen={type_side_menu} />
    </div>
  );
}

