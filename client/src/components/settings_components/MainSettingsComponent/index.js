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

  const lable_network = ["Выключены","Vpn","Proxy"];
  const city_proxy = ["Выбирите страну","Нидерланды","Сингапур","Великобритания","США"];

  return (
    <div className="main_settings_wrapper" >
      <MainTitle  title_acc="" text="Настройки аккаунта:" />
      <TitleComponent title="Название аккаунта" />
      <div className='main_settings_name_input_container'>
        <Input placeholder="Введите название" />
      </div>
      <div className='main_settings_anticaptcha_title_container'>
        <TitleComponent title="AntiCaptcha" />
        <a target="parent" href="https://anti-captcha.com/ru">Сервис anti-captcha.com</a>
      </div>
      <div className='main_settings_anticaptcha_input_container'>
        <Input placeholder="Ключ учетной записи anti-captcha.com" />
      </div>
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Настройки сети" styles={{ width: '140px' }}>
        {
          lable_network.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      {
          (select_option_value === "1")  &&  <ManualSelect optionsState={select_option_city} onClick={(option) => { changeOptionCity(option) }} title="Настройки сети" styles={{ width: '140px' }}>
              {
                city_proxy.map((item,key) =>( 
                  <option key={key} value={key}>{item}</option>
                ))
              }
            </ManualSelect>
      }
      {
        (select_option_value === "2")  && (
          <div className='main_settings_proxy_container'>
          <div className='main_settings_proxy_title_container'>
            <TitleComponent title="Учетная запись прокси" />
            <a target="parent" href="https://proxy6.net/en/">Сервис proxy6.net</a>
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="193.203.105.114:53660" />
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="mvfzpqkUHC" />
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="l7iITN6Qmq" />
          </div>
          </div>
        )
      }
      <AccountSettingsCopy styles={{marginTop:'30px'}}>
        {
          lable_network.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}
