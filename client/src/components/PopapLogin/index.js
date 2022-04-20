import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login_vk, change_visible_popup } from '../../redux/actions/users'

import './style.css';

export default function PopapLogin (props) {

  const [social_login,setSocialLogin] = useState('');
  const [social_password,setSocialPassword] = useState('');
  const [err,setErr] = useState(false);
  const [duble_acc,setDduble] = useState(false);

  const dispatch = useDispatch();

  const { accounts, id_acc, user_id } = props; 
  
  var error_timer = '';
  return (
    <div className="social_popup_modal">
      <div className='social_popup_wrapper'>
        <div style={{ color: `${err?'red': ''}`}} className='social_popup_text_container' > {`${err ?  duble_acc ? 'Вы уже вошли в этот акканут': 'Неверная пара Логин/Пароль' : 'Введите данные аккаунта для работы:' }`}</div>
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
            // const response = await login_vk('+79626339565','misha07072013',user_id,id_acc,accounts);
            const response = await login_vk(social_login,social_password,user_id,id_acc,accounts);
            if (response !== 401) {
              dispatch(change_visible_popup({ state:false, id_acc: id_acc }));
            } else {
              setErr(true);
              // setDduble(true);
              clearTimeout(error_timer);
              error_timer = setTimeout(() => {
                setSocialLogin('')
                setSocialPassword('')
                setDduble(false);
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

