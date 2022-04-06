import React, { useState } from 'react';
import images from '../../../assets/images';
import Button from '../../Button';
import TitleComponent from '../TitleComponent';

import './style.css';


export default function AccountSettingsCopy(props) {

  const { styles, children } = props
  const [check,Switching] = useState(false);

  return (
    <div style={
      styles
    } className='account_settings_copy_container'>
      <TitleComponent  styles={{marginBottom:'20px'}} title="Применить эти настройки к аккаунтам:" />
      <div className='account_settings_left_container'>
        <div className='account_settings_item_container'>
          {
            children
          }
        </div>
        <div className='account_settings_copy_btn_padding'>
          <Button icon={images.multicheck} />
          <Button icon={images.multiuncheck} />
        </div>
      </div>
      <div className='row_buttons_account_settings'>
        <div onClick={async () => {}} className="signinBtn">
          <div onClick={()=>{}} className="signinBtntext">Сохранить</div>
        </div>
        <div onClick={async () => {}} className="signinBtn">
          <div onClick={()=>{}} className="signinBtntext">Отмена</div>
        </div>
      </div>
    </div>
  );
}


