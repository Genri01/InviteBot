import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TimeSetComponent from '../../TimeSetComponent';
import CheckComponent from '../../CheckComponent';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  target_list_settings_welcomeCount,
  target_list_settings_delay,
  target_list_settings_setLikeToWall,
  target_list_settings_setLikeToProfile
} from '../../../../redux/actions/target_list_settings';

import { target_list_settings } from '../../../../redux/selectors';

import './style.css';
async function onSave(welcomeCount, delay,setLikeToWall, setLikeToProfile, accounts, id_acc, task_id, dispatch, onClose ) {

  let setings_response = accounts;
 
  setings_response[id_acc].task_settings.tasks[task_id-1].welcomeCount = welcomeCount;
  setings_response[id_acc].task_settings.tasks[task_id-1].delay = delay;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToWall = setLikeToWall;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToProfile = setLikeToProfile;

  dispatch(appPutAccountsVK(accounts));
  onClose(false);

}
export default function TargetGroupLIstSettingsPage (props) {

  const { accounts, id_acc, onClose, task_id,titleTask } = props; 

  const welcomeCount = useSelector(target_list_settings.welcomeCount);
  const delay = useSelector(target_list_settings.delay);
  const setLikeToProfile = useSelector(target_list_settings.setLikeToProfile);
  const setLikeToWall = useSelector(target_list_settings.setLikeToWall);
  const addFriends = useSelector(target_list_settings.addFriends);
  const userNamesOrIds = useSelector(target_list_settings.userNamesOrIds);
  
  const dispatch = useDispatch();

  const account = accounts[id_acc];

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="Настройка задания:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="Аккаунт:" />
      <CountInput count={welcomeCount} setCount={(count) => {dispatch(target_list_settings_welcomeCount(count))}} title="Количество пользователей"/>
      <TimeSetComponent delay={delay} title="Случайная задержка между действиями (от : до) секунды" onChange={(del) => {dispatch(target_list_settings_delay(del))}} />
      <TitleComponent title="Ставить лайк на стену"/>
      <CheckComponent 
        check_item={[setLikeToWall]} 
        Switching={
          check => { 
            dispatch(target_list_settings_setLikeToWall({ ...setLikeToWall, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Ставить лайк на профиль"/>
      <CheckComponent 
        check_item={[setLikeToProfile]} 
        Switching={
          check => { 
            dispatch(target_list_settings_setLikeToProfile({ ...setLikeToProfile, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="Добавить в друзья"/>
      <CheckComponent 
        check_item={[addFriends]} 
        Switching={
          check => { 
            dispatch(target_list_settings_setLikeToProfile({ ...addFriends, check: check[0].check})) 
          }} 
      />
      <AccountSettingsCopy  
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave( welcomeCount, delay,setLikeToProfile, setLikeToWall, accounts, id_acc, task_id, dispatch, onClose ) }
      >  
        {
          // accounts.map((item,key) => {
          //   return <ItemDisplayComponent 
          //     check_all={check_all}
          //     checked={item.id === key ? true : false} 
          //     key={key} 
          //     name={`${item.main_settings.name}`} 
          //     id={key} 
          //     onClick={(id) => { 
          //     let lock = false;
          //     if( id_check.length === 0 ) {
          //       id_check.push(id)x
          //       setIdCheck(id_check) 
          //     } else {
          
          //       id_check.map(item => {
          //         if (item === id) {
          //           lock = true
          //         } 
          //         return false
          //       })
          //       if(!lock) {
          //         id_check.push(id)
          //         setIdCheck(id_check) 
          //       } 
          //     }
          //       console.log(id_check)
          //     }} 
          //   />
          // })
        }
      </AccountSettingsCopy>
    </div>
  );
}
