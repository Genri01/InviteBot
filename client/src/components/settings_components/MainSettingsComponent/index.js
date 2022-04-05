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
  const [select_option_value, changeOption] = useState(0);
  const [select_option_city, changeOptionCity] = useState("0");

  const [err, setErrorInpusts] = useState(false);
  const [errText, setErrorText] = useState('Пользователь  не найден в базе данных');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lable_network = ["none","Vpn","Proxy"];
  const city_proxy = ["","Нидерланды","Сингапур","Великобритания","США"];
  console.log(select_option_city)
  return (
    <div className="main_settings_wrapper" >
      <MainTitle title_acc={'123121232'} />
      <TitleComponent title="Название аккаунта" />
      <div className='main_settings_name_input_container'>
        <Input placeholder="Введите название" disabled={true} />
      </div>
      <div className='main_settings_anticaptcha_title_container'>
        <TitleComponent title="AntiCaptcha" />
        <a target="parent" href="https://anti-captcha.com/ru">anti-captcha.com</a>
      </div>
      <div className='main_settings_anticaptcha_input_container'>
        <Input placeholder="Ключ учетной записи anti-captcha.com" disabled={true} />
      </div>
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Настройки сети" styles={{ width: '140px' }}>
        {
          lable_network.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      {
          (select_option_value == 1)  &&  <ManualSelect optionsState={select_option_city} onClick={(option) => { changeOptionCity(option) }} title="Настройки сети" styles={{ width: '140px' }}>
              {
                city_proxy.map((item,key) =>( 
                  <option key={key} value={key}>{item}</option>
                ))
              }
            </ManualSelect>
      }
      <AccountSettingsCopy>
        {
          lable_network.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}

