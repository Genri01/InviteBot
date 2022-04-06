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
import CountInput from '../../CountInput';

import './style.css';

export default function PossibleFriendsSettingsPage (props) {

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
      <MainTitle title_acc="Работа по возможным друзьям:" text="Настройка задания:" />
      <MainTitle title_acc="234ацмуа" text="Аккаунт:" />
      <CountInput title="Количество заявок (добавлений в вдрузья)"/>
      <CountInput title="Максимальное допустимое значение исходящих заявок"/>
      <TimeSetComponent title="Случайная задержка между действиями (от : до) секунды" />
      <TitleComponent title="Ставить лайк на аватар пользователя"/>
      <CheckComponent />
      <TitleComponent title="Ставить лайк на стену пользователя"/>
      <CheckComponent />
      <AccountSettingsCopy styles={{marginTop:'30px'}}>
        {
          lable_network?.map((item,key) =>( <ItemDisplayComponent checked={id_check === key ? true : false} key={key} name='asdas' id={key} onClick={(id) => { setIdCheck(id) }} />))
        }
      </AccountSettingsCopy>
    </div>
  );
}
