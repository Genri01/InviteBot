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

export default function AutoSecretarySettingsPage (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);
  const [select_option_value, changeOption] = useState(0);
  const [shedule_task, pushSheduleTask] = useState([]);
  const [text,setTextAreaValue] = useState('privet');
  const [text_random,setTextRandom] = useState('{Привет!|Здравствуйте!|Приветствую!}');
  
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
      <MainTitle title_acc="Автосекретарь" text="Настройка задания:" />
      <MainTitle title_acc="234ацмуа" text="Аккаунт:" />
      <CountInput title="Количество автоответов"/>
      <TimeSetComponent title="Случайная задержка между действиями (от : до) секунды" />

      <TitleComponent title={`Первый вариант`} center/>
      <RandomizeComponentArea title={`Введите ключевые слова. (Каждое ключивое слово на новой строке) (Элементов: ${1})`} text={text} onChange={(e) => { setTextAreaValue(e) }} />
      <RandomizeComponentArea title={`Введите текст для рандомизации`} text={text_random} onChange={(e) => { setTextRandom(e) }} />
      <TitleComponent title={`Текст ответа для первого варианта ответов: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_text_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AnswerComponentArea styles={{ height: '140px',marginBottom: '20px' }} />
      </AddingComponent>
      <TitleComponent title={`Ссылка на фото или видео для первого варианта: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_photo_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <SelectComponentItem />
      </AddingComponent>
      <TitleComponent title={`Аудиозапись для первого варианта: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_audio_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AudioComponent />
      </AddingComponent>

      <TitleComponent title={`Второй вариант`} center/>
      <RandomizeComponentArea title={`Введите ключевые слова. (Каждое ключивое слово на новой строке) (Элементов: ${1})`} text={text} onChange={(e) => { setTextAreaValue(e) }} />
      <RandomizeComponentArea title={`Введите текст для рандомизации`} text={text_random} onChange={(e) => { setTextRandom(e) }} />
      <TitleComponent title={`Текст ответа для второго варианта ответов: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_text_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AnswerComponentArea styles={{ height: '140px',marginBottom: '20px' }} />
      </AddingComponent>
      <TitleComponent title={`Ссылка на фото или видео для второго варианта: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_photo_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <SelectComponentItem />
      </AddingComponent>
      <TitleComponent title={`Аудиозапись для второго варианта: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_audio_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AudioComponent />
      </AddingComponent>

      <TitleComponent title={`Третий вариант`} center/>
      <RandomizeComponentArea title={`Введите ключевые слова. (Каждое ключивое слово на новой строке) (Элементов: ${1})`} text={text} onChange={(e) => { setTextAreaValue(e) }} />
      <RandomizeComponentArea title={`Введите текст для рандомизации`} text={text_random} onChange={(e) => { setTextRandom(e) }} />
      <TitleComponent title={`Текст ответа для третьего варианта ответов: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_text_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <AnswerComponentArea styles={{ height: '140px',marginBottom: '20px' }} />
      </AddingComponent>
      <TitleComponent title={`Ссылка на фото или видео для третьего варианта: (Элементов: ${0} Выделено: ${0})`}/>
      <AddingComponent check_item={check_item_photo_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <SelectComponentItem />
      </AddingComponent>
      <TitleComponent title={`Аудиозапись для третьего варианта: (Элементов: ${0} Выделено: ${0})`}/>
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
