import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import MainTitle from '../MainTitle';
import ManualSelect from '../ManualSelect';
import TitleComponent from '../TitleComponent';
import AccountSettingsCopy from '../AccountSettingsCopy';
import ItemDisplayComponent from '../ItemDisplayComponent';

import './style.css';

export default function MainSettingsComponent (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);
  const [select_option_value, changeOption] = useState("none");
  const [err, setErrorInpusts] = useState(false);
  const [errText, setErrorText] = useState('Пользователь  не найден в базе данных');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lable = ["none","vpn","proxy"]
  console.log(select_option_value)
  return (
    <div className="main_settings_wrapper" >
      <MainTitle title_acc={'123121232'} />
      <TitleComponent title="Название аккаунта" />
      <div className='main_settings_name_input_container'>
        <Input placeholder="Введите название" disabled={true} />
      </div>
      <div className='main_settings_anticaptcha_title_container'>
        <TitleComponent title="AntiCaptcha" />
        <a href="https://anti-captcha.com/ru">anti-captcha.com</a>
      </div>
      <div className='main_settings_anticaptcha_input_container'>
        <Input placeholder="Ключ учетной записи anti-captcha.com" disabled={true} />
      </div>
      {/* <ManualSelect optionsState={options_option} onClick={(option) => { changeOption(option) }} title="Настройки сети" styles={{ width: '140px' }}> */}
      <select onChange={(e) => { changeOption(e.target.value) }}  value={select_option_value} className='manual_select_component_task'>
        <option value={0}>{'option.label'}</option>
        <option value={0}>{'optio l'}</option>
        <option value={0}>{'opt bel'}</option>
        <option value={0}>{'option.l l'}</option>
        <option value={0}>{'o l'}</option>
      </select>
        {/* <option selected={options_option.value} value="none">Выключены</option>
        <option selected={options_option.value} value="vpn">VPN</option>
        <option selected={options_option.value} value="proxy">Proxy</option> */}

      {/* </ManualSelect> */}
      <AccountSettingsCopy>
        {
          lable.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}

