import React from 'react';
import { useDispatch } from 'react-redux';
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

  const taskSettingPage = [];
  let titleTask = [
    "Выбрать задание из списка",
    "Автоответчик на подтвержденные заявки в друзья",
    "Лайкинг друзей",
    "Автоответчик на входящие заявки в друзья",
    "Отправка сообщение вКонтакте по списку пользователей",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    "Работа по целевой аудитории из списка",
    "Отправка сообщений в сообщества из списка",
  ]
  switch (task_id) {
    case 0:
      console.log(titleTask[task_id])
      break;
      case 1:
      // console.log(titleTask[task_id])
      // taskSettingPage.push(<SheduleSettingsPage key={task_id}  onClose={onClose} />) 
      // console.log(titleTask[task_id])
      // taskSettingPage.push(<AutoSecretarySettingsPage key={task_id}  onClose={onClose} />) 
      // console.log(titleTask[task_id])
      // taskSettingPage.push(<PublicHistorySettingsPage key={task_id}  onClose={onClose} />)  
      // console.log(titleTask[task_id])
      // taskSettingPage.push(<ParsingSettingsPage key={task_id}  onClose={onClose} />)  
      console.log(titleTask[task_id])
      taskSettingPage.push(<AnswerSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id} onClose={onClose} />)  
      break;
    case 2:
      console.log(titleTask[task_id])
      taskSettingPage.push(<LikingLookingSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 3:
      console.log(titleTask[task_id])
      taskSettingPage.push(<AnswerInFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 4:
      console.log(titleTask[task_id])
      taskSettingPage.push(<SendMessageListSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 5:
      console.log(titleTask[task_id])
      taskSettingPage.push(<PossibleFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />)  
      break;
    case 6:
      console.log(titleTask[task_id])
      taskSettingPage.push(<ManualSortFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id} onClose={onClose} />)  
      break;
    case 7:
      console.log(titleTask[task_id])
      taskSettingPage.push(<TargetGroupLIstSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 8:
      console.log(titleTask[task_id])
      taskSettingPage.push(<SendMessageGroupListSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />)  
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
