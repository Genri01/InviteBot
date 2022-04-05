import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_header_visible,change_page,change_side_menu } from '../../redux/actions/app';
import { side_menu,accounts_vk } from '../../redux/selectors/index';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import AccCard from '../AccCard';
import AddAccount from '../AddAccount';
import './style.css';

export default function VisualAccountsComponent (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [form_login, setEmail] = useState('');
  const [form_password, setPassword] = useState('');
  const [err, setErrorInpusts] = useState(false);
  const [errText, setErrorText] = useState('Пользователь  не найден в базе данных');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="account_wrapper" >
      <div className='account_active_wrapper'>
        <div className='account_title'>Активные:</div>
        <div className='account_active_container'>
          <AddAccount type={typeScreen} />
          {
            accounts.map((item,i) => (
              <AccCard key={i} accinfo={item} id={item.id} name={item.settingsAcc.name} type={typeScreen} />
            ))
          }
        </div>
      </div>
      <div className='account_blocked_wrapper'>
        <div className='account_title'>Заблокированные:</div>
          <div className='account_blocked_container'>
            <div className='account_blocked_item'>
              <div className='account_blocked_oreder'>1</div>
              <div className='account_blocked_name'>vk-inboxwhite</div>
            </div>
          </div>
      </div>
    </div>
  );
}

