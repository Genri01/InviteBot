import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SheduleSettingsPage from '../task_settings_pages/SheduleSettingsPage';
import AnswerSettingsPage from '../task_settings_pages/AnswerSettingsPage';
import AutoSecretarySettingsPage from '../task_settings_pages/AutoSecretarySettingsPage';
import LikingLookingSettingsPage from '../task_settings_pages/LikingLookingSettingsPage';
import AnswerInFriendsSettingsPage from '../task_settings_pages/AnswerInFriendsSettingsPage';
import SendMessageListSettingsPage from '../task_settings_pages/SendMessageListSettingsPage';
import PossibleFriendsSettingsPage from '../task_settings_pages/PossibleFriendsSettingsPage';
import TargetGroupLIstSettingsPage from '../task_settings_pages/TargetGroupLIstSettingsPage';
import PublicHistorySettingsPage from '../task_settings_pages/PublicHistorySettingsPage';
import ParsingSettingsPage from '../task_settings_pages/ParsingSettingsPage';
import SendMessageGroupListSettingsPage from '../task_settings_pages/SendMessageGroupListSettingsPage';
import ManualSortFriendsSettingsPage from '../task_settings_pages/ManualSortFriendsSettingsPage';

import './style.css';

export default function TaskSettingsComponent (props) {

  const { accounts, id_acc, onClose, task_id } = props;
  // useInvalidUrlAccess();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(accounts)
  console.log(id_acc)
  console.log(task_id)
  const taskSettingPage = [];
  let titleTask = [
    "Выбрать задание из списка",
    "Расписание",
    "Автоответчик на подтвержденные заявки в друзья",
    "Автосекретарь",
    "Лайкинг и просмотр Stories друзей",
    "Автоответчик на входящие заявки в друзья",
    "Отправка сообщение вКонтакте по списку пользователей",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    "Работа по целевой аудитории из списка",
    "Публикация историй",
    "Поиск целевой аудитории (парсер)",
    "Отправка сообщений в сообщества из списка",
  ]
  switch (task_id) {
    case 0:
      console.log(titleTask[task_id])
      break;
      case 1:
      console.log(titleTask[task_id])
      taskSettingPage.push(<SheduleSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 2:
      console.log(titleTask[task_id])
      taskSettingPage.push(<AnswerSettingsPage key={task_id} onClose={onClose} />)  
      break;
    case 3:
      console.log(titleTask[task_id])
      taskSettingPage.push(<AutoSecretarySettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 4:
      console.log(titleTask[task_id])
      taskSettingPage.push(<LikingLookingSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 5:
      console.log(titleTask[task_id])
      taskSettingPage.push(<AnswerInFriendsSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 6:
      console.log(titleTask[task_id])
      taskSettingPage.push(<SendMessageListSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 7:
      console.log(titleTask[task_id])
      taskSettingPage.push(<PossibleFriendsSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 8:
      console.log(titleTask[task_id])
      taskSettingPage.push(<TargetGroupLIstSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 9:
      console.log(titleTask[task_id])
      taskSettingPage.push(<PublicHistorySettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 10:
      console.log(titleTask[task_id])
      taskSettingPage.push(<ParsingSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 11:
      console.log(titleTask[task_id])
      taskSettingPage.push(<SendMessageGroupListSettingsPage key={task_id}  onClose={onClose} />)  
      break;
    case 12:
      console.log(titleTask[task_id])
      taskSettingPage.push(<ManualSortFriendsSettingsPage key={task_id} onClose={onClose} />)  
      break;
  
    default:
      break;
  }
  return (
    <div className="task_settings_component_wrapper" >
      {
        taskSettingPage.map((item) => (item))
      }
    </div>
  );
}
