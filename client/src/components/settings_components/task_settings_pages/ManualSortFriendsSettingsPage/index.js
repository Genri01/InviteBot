import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../Input';
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import ManualSelect from '../../ManualSelect';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import ItemDisplayComponent from '../../ItemDisplayComponent';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import SelectComponentItem from '../../SelectComponentItem';
import AnswerComponentArea from '../../AnswerComponentArea';
import CheckComponent from '../../CheckComponent';
import RadialBtnComponent from '../../RadialBtnComponent';
import RandomizeComponentArea from '../../RandomizeComponentArea';
import AudioComponent from '../../AudioComponent';

import './style.css';

export default function ManualSortFriendsSettingsPage (props) {

  const { accounts, typeScreen, onClose } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);
  const [select_option_value, changeOption] = useState(0);
  const [shedule_task, pushSheduleTask] = useState([]);
  const [text_random,setTextRandom] = useState('фраза 1\nфраза 2');
  const [list,setList] = useState('тут появится список');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lable_network = ["Ручной","Автоматический"];
  const check_item_text_arr = [
    { title: "Включить", disabled: false },
    { title: "Случайный порядок", disabled: false },
    { title: "Имя пользователя", disabled: false }
  ];

  const check_item_photo_arr = [
    { title: "Включить", disabled: false },
    { title: "Случайный порядок", disabled: false } 
  ];

  const check_item_audio_arr = [
    { title: "Включить", disabled: false },
    { title: "Случайный порядок", disabled: false } 
  ];

  return (
    <div className="shedule_settings_page_wrapper" >
      <TitleComponent title="Выбрать фильтр сортировки" />
      <RadialBtnComponent >
        <TitleComponent title="Пользователи, с которыми много общих друзей" />
      </RadialBtnComponent>
      <RadialBtnComponent >
        <TitleComponent title="Пользователи, найденные с помощью импорта контактов с телефона" />
      </RadialBtnComponent>
      <RadialBtnComponent >
        <TitleComponent title="Пользователи, которые импортировали те же контакты, что и текущий пользователь" />
      </RadialBtnComponent>
      <RandomizeComponentArea title={`Список возможных друзей будет отсортирован согласно настройкам задания!`} text={list} onChange={(e) => { setList(e) }} />
      <AccountSettingsCopy onClose={onClose} styles={{marginTop:'30px'}}>
        {
          lable_network?.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}
