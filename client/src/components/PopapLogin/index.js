import React, { useState } from 'react';
import './style.css';

export default function PopapLogin (props) {

  const [social_login,setSocialLogin] = useState('');
  const [social_password,setSocialPassword] = useState('');

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
            <div className='social_popup_button'>
              <div className='social_popup_button_text'>Сохранить</div>
            </div>
        </div>
      </div>
    </div>
  );

}

