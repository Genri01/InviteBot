import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { side_menu,accounts_vk } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import AccCard from '../../components/AccCard';
import AddAccount from '../../components/AddAccount';
import PopapLogin from '../../components/PopapLogin';




export default function AccountScreen () {
  const type_side_menu = useSelector(side_menu.type_side_menu);
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  
  let AccountNetwork = [];
  
  if(newDataAccountVK.acc.length === 0) {
     AccountNetwork = []
  } else {
     AccountNetwork = type_side_menu === "vk" ? newDataAccountVK.acc : type_side_menu === "inst" ? newDataAccountVK.acc : newDataAccountVK.acc;
  }

  // useInvalidUrlAccess();

  const [form_login, setEmail] = useState('');
  const [form_password, setPassword] = useState('');
  const [err, setErrorInpusts] = useState(false);
  const [errText, setErrorText] = useState('Пользователь  не найден в базе данных');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="account_screen" >
    {/* <PopapLogin visible_popup={false} /> */}
    <SideMenu onClick={(e)=>{dispatch(change_side_menu(e.target.id))}} typeScreen={type_side_menu} />
    <div className='activeAcc'>
      <div className='titleAcc'>Активные:</div>
      <div className='accContainer'>
        <AddAccount type={type_side_menu} />
        {
          AccountNetwork.map((item,i) => (
            <AccCard key={i} accinfo={item} id={item.id} name={item.settingsAcc.name} type={type_side_menu} />
          ))
        }
      </div>
    </div>
    <div className='blockedAcc'>
      <div className='titleAcc'>Заблокированные:</div>
      <div className='accContainer'>
        <div className='blockedWrapper'>
          <div className='orderBlocked'>1</div>
          <div className='nameBlocked'>vk-inboxwhite</div>
        </div>
      </div>
    </div>
  </div>
  );
}

