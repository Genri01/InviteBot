import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accounts_vk } from '../../redux/selectors'
import { login_vk,change_visible_popup } from '../../redux/actions/users'

import './style.css';

export default function PopapLogin (props) {

  const [social_login,setSocialLogin] = useState('');
  const [social_password,setSocialPassword] = useState('');
  const [err,setErr] = useState(false);

  const dispatch = useDispatch();
  const newDataAccountVK = useSelector(accounts_vk.newDataAccountVK);
  const accounts = newDataAccountVK.accounts;

  const { id_acc,user_id } = props; 
  
  var error_timer = '';
  return (
    <div className="social_popup_modal">
      <div className='social_popup_wrapper'>
        <div style={{ color: `${err?'red': ''}`}} className='social_popup_text_container' > {`${err ? 'Неверная пара Логин/Пароль' : 'Введите данные аккаунта для работы:' }`}</div>
        <div className='social_popup_input_container'>
          <div className="social_popup_login_container">
            <div className="social_popup_text" >LOGIN</div>
            <input disabled={err} onChange={(e) => setSocialLogin(e.target.value)} value={social_login} name="social_login" placeholder='Введите почту' className="social_popup_login" />
          </div>
          <div className="social_popup_password_container">
            <div className="social_popup_text">PASSWORD</div>
            <input disabled={err} type="password" value={social_password} onChange={(e) => setSocialPassword(e.target.value)} name="social_password" placeholder='Введите пароль' className="social_popup_password" />
          </div>
        </div>
        <div className='social_popup_button_container'>
          <div onClick={async () => { 
            // const response = await login_vk('+79994650565','fhvbz170291',user_id,login_data,dispatch);
            const response = await login_vk(social_login,social_password,user_id,id_acc,accounts,dispatch);
            if (response !== 401) {
              dispatch(change_visible_popup({ state:false, id_acc: id_acc }));
            } else {
              setErr(true);
              clearTimeout(error_timer);
              error_timer = setTimeout(() => {
                setSocialLogin('')
                setSocialPassword('')
                setErr(false);
              },1600);
            }
            }}  className='social_popup_button'>
            <div className='social_popup_button_text'>Сохранить</div>
          </div>
          <div onClick={() => { 
              dispatch(change_visible_popup({ state:false, id_acc: id_acc }));
            }}  className='social_popup_button'>
            <div className='social_popup_button_text'>Отмена</div>
          </div>
        </div>
      </div>
    </div>
  );
}

