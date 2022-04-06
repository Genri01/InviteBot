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

export default function PublicHistorySettingsPage (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);
  const [select_option_value, changeOption] = useState(0);
  const [shedule_task, pushSheduleTask] = useState([]);
  const [text,setTextAreaValue] = useState('{Привет!|Здравствуйте!|Приветствую!}');
  
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
  
  const weeks_day = ["Все","Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc="Публикация историй" text="Настройка задания:" />
      <MainTitle title_acc="234ацмуа" text="Аккаунт:" />
      <CountInput title="Количество публикаций"/>
      <TimeSetComponent title="Случайная задержка между публикациями (от : до) секунды" />
      <TitleComponent title={`Ссылка для кнопки подробнее вв истории ТОЛЬКО ВНУТРЕННИЕ ССЫЛКИ типа https:// vk.com`}/>
      <Input styles={{justifyContent: 'flex-start'}} />
      <TitleComponent title={`Материалы для истории: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_audio_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AudioComponent />
      </AddingComponent>
      <AccountSettingsCopy styles={{marginTop:'30px'}}>
        {
          lable_network?.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}
