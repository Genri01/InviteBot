import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popup_save_data,change_visible_popup } from '../../redux/actions/users'

import './style.css';

export default function PopapLogin () {

  const [social_login,setSocialLogin] = useState('');
  const [social_password,setSocialPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="social_popup_modal">
      <div className='social_popup_wrapper'>
        <div className='social_popup_text_container'>Введите данные аккаунта для работы:</div>
        <div className='social_popup_input_container'>
          <div className="social_popup_login_container">
            <div className="social_popup_text" >LOGIN</div>
            <input onChange={(e) => setSocialLogin(e.target.value)} value={social_login} name="social_login" placeholder='Введите почту' className="social_popup_login" />
          </div>
          <div className="social_popup_password_container">
            <div className="social_popup_text">PASSWORD</div>
            <input type="password" value={social_password} onChange={(e) => setSocialPassword(e.target.value)} name="social_password" placeholder='Введите пароль' className="social_popup_password" />
          </div>
        </div>
        <div className='social_popup_button_container'>
            <div onClick={async () => { 
              const response = await popup_save_data(social_login,social_password,dispatch);
              if (response != 401) {
                console.log(response);
                dispatch(change_visible_popup(false));
              }
             }}  className='social_popup_button'>
              <div className='social_popup_button_text'>Сохранить</div>
            </div>
        </div>
      </div>
    </div>
  );

}

