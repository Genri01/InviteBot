import React, { useState } from 'react';
import images from '../../assets/images';
import Button from '../../components/Button';
import TitleComponent from '../../components/settings_components/TitleComponent';

import './style.css';


export default function AccountSettingsCopy(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className='account_settings_copy_container'>
      <TitleComponent title="Применить эти настройки к аккаунтам:" />
      <div className='account_settings_left_container'>
        <div className='account_settings_copy_wrapper'>
          <div className='item_account_settings'>Аккаунт номер один:</div>
        </div>
        <div className='account_settings_copy_btn_padding'>
          <Button icon={images.multicheck} />
          <Button icon={images.multiuncheck} />
        </div>
      </div>
      <div className='row_buttons_account_settings'>
        <div onClick={async () => {}} className="signinBtn">
          <div onClick={()=>{}} className="signinBtntext">Сформировать</div>
        </div>
        <div onClick={async () => {}} className="signinBtn">
          <div onClick={()=>{}} className="signinBtntext">Отмена</div>
        </div>
      </div>
    </div>
  );
}


