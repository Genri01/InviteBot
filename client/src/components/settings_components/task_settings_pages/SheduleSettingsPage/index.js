import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../Input';
import MainTitle from '../../MainTitle';
import ManualSelect from '../../ManualSelect';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import ItemDisplayComponent from '../../ItemDisplayComponent';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import SelectComponentItem from '../../SelectComponentItem';
import CheckComponent from '../../CheckComponent';

import './style.css';

export default function SheduleSettingsPage (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);
  const [select_option_value, changeOption] = useState(0);
  const [shedule_task, pushSheduleTask] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lable_network = ["Ручной","Автоматический"];
  const check_item_arr = [];
  const weeks_day = ["Все","Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc="132312312" text="Расписание аккаунта:" />
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Режим расписания" styles={{ width: '140px' }}>
        {
          lable_network?.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      {
        (select_option_value === "1")  && (
          <div className=''>
            <TitleComponent title="Дни недели"/>
            <div className='shedule_settings_weeks_days'>
              {
                weeks_day?.map((item,key) => (
                  <CheckComponent key={key} >
                    <TitleComponent title={item} />
                  </CheckComponent>
                ))
              }
            </div>
            <TimeSetComponent title="Запуск расписания (часы:минуты)" />
          </div>
        )
      }
      <TimeSetComponent title="Остановка расписания (часы:минуты)" />
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Следующее задание" styles={{ width: '140px' }}>
        {
          shedule_task?.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      <AddingComponent check_item={check_item_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <SelectComponentItem />
      </AddingComponent>
      <TitleComponent title="Отправлять ошибки"/>
      <CheckComponent >
        <TitleComponent title="Telegram"/>
      </CheckComponent>
      <AccountSettingsCopy styles={{marginTop:'30px'}}>
        {
          lable_network?.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}
