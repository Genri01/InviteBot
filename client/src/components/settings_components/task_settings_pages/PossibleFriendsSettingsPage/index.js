import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import CheckComponent from '../../CheckComponent';
import RadialBtnsComponent from '../../RadialBtnsComponent';
import RandomizeComponentArea from '../../RandomizeComponentArea';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  posible_friends_settings_addingMessages,
  posible_friends_settings_conversationTypeEvent,
  posible_friends_settings_welcomeCount,
  posible_friends_settings_delay,
  posible_friends_settings_setLikeToWall,
  posible_friends_settings_setLikeToProfile
} from '../../../../redux/actions/posible_friends_settings';

import { posible_friends_settings } from '../../../../redux/selectors';

import './style.css';
async function onSave(  welcomeCount, conversationTypeEvent, delay, setLikeToProfile, setLikeToWall, addingMessages, photoOrVideoSettings, audioSettings, accounts, id_acc, task_id, dispatch, onClose   ) {

  let setings_response = accounts;
 
  setings_response[id_acc].task_settings.tasks[task_id-1].requestCount = welcomeCount;
  setings_response[id_acc].task_settings.tasks[task_id-1].delay = delay;
  accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.conversationTypeEvent = conversationTypeEvent + 1;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToWall = setLikeToWall;
  accounts[id_acc].task_settings.tasks[task_id-1].setLikeToProfile = setLikeToProfile;
  accounts[id_acc].task_settings.tasks[task_id-1].photoOrVideoSettings = photoOrVideoSettings ;
  accounts[id_acc].task_settings.tasks[task_id-1].audioSettings = audioSettings;
 
  if(addingMessages.on.check && addingMessages.text_areas.length !== 0 && !addingMessages.random.check) {
    for (let idx = 0; idx < addingMessages.text_areas.length; idx++) {
        if(addingMessages.text_areas[idx].check) {
          accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.textMessages = [addingMessages.text_areas[idx].text];
          break ;
        }  
    }
  } else if(addingMessages.on.check && addingMessages.text_areas.length !== 0 && addingMessages.random.check) {
    let arr = [];
    for (let idx = 0; idx < addingMessages.text_areas.length; idx++) {
      if(addingMessages.text_areas[idx].check) {
        arr.push(addingMessages.text_areas[idx].text); 
      }  
    }
    let ran =  Math.floor(Math.random() * (arr.length - 0 + 1) ) + 0;
      if(ran === 0) { ran = 1 }
    accounts[id_acc].task_settings.tasks[task_id-1].messageSettings.textMessages = arr[ran-1];
  }

  dispatch(appPutAccountsVK(accounts));
  onClose(false);

}

  if(check_all) {
    accounts.map(item => {
      if(name_acc !== '') {
        item.main_settings.name = name_acc;
      }

      if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        item.main_settings.network.proxy.ip = proxy_ip;
        item.main_settings.network.proxy.log = proxy_log;
        item.main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        item.main_settings.network.proxy.ip = proxy_ip;
        item.main_settings.network.proxy.log = proxy_log;
        item.main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
        item.main_settings.network.vpn.country = select_option_city;
      }

      item.main_settings.anticapcha = anticapcha;
    })
  } else {
    if(checked.length > 0) {
      checked.map(item => {
        if(name_acc !== '') {
          item.main_settings.name = name_acc;
        }
  
        if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
          item.main_settings.network.proxy.ip = proxy_ip;
          item.main_settings.network.proxy.log = proxy_log;
          item.main_settings.network.proxy.pass = proxy_pass;
        }
  
        if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
          item.main_settings.network.proxy.ip = proxy_ip;
          item.main_settings.network.proxy.log = proxy_log;
          item.main_settings.network.proxy.pass = proxy_pass;
        }
  
        if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
          item.main_settings.network.vpn.country = select_option_city;
        }

        item.main_settings.anticapcha = anticapcha;
      })
    } else {

      if(name_acc !== '') {
        accounts[id_acc].main_settings.name = name_acc;
      }

      if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        accounts[id_acc].main_settings.network.proxy.ip = proxy_ip;
        accounts[id_acc].main_settings.network.proxy.log = proxy_log;
        accounts[id_acc].main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        accounts[id_acc].main_settings.network.proxy.ip = proxy_ip;
        accounts[id_acc].main_settings.network.proxy.log = proxy_log;
        accounts[id_acc].main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
        accounts[id_acc].main_settings.network.vpn.country = select_option_city;
      }

      accounts[id_acc].main_settings.anticapcha = anticapcha;

    }
  }

  // let save = await 
  dispatch(appPutAccountsVK(accounts));
  onClose(false);

}
export default function PossibleFriendsSettingsPage (props) {

  const { accounts, id_acc, onClose, task_id,titleTask } = props;
  // useInvalidUrlAccess();

  const welcomeCount = useSelector(posible_friends_settings.requestCount);
  const messageSettings = useSelector(posible_friends_settings.messageSettings);
  const delay = useSelector(posible_friends_settings.delay);
  const setLikeToProfile = useSelector(posible_friends_settings.setLikeToProfile);
  const setLikeToWall = useSelector(posible_friends_settings.setLikeToWall);
  const addingMessages = useSelector(posible_friends_settings.addingMessages);
  const photoOrVideoSettings = useSelector(posible_friends_settings.photoOrVideoSettings);
  const audioSettings = useSelector(posible_friends_settings.audioSettings);

  const account = accounts[id_acc];
  const { conversationTypeEvent } = messageSettings;

  const dispatch = useDispatch();
  let counts = 0;

  addingMessages.text_areas.map(item => item.check ? counts++ : false)

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="?????????????????? ??????????????:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="??????????????:" />
      <CountInput count={welcomeCount} setCount={(count) => {dispatch(posible_friends_settings_welcomeCount(count))}} title="???????????????????? ?????????????????? ????????????"/>
      <TimeSetComponent delay={delay} title="?????????????????? ???????????????? ?????????? ???????????????????? (???? : ????) ??????????????" onChange={(del) => {dispatch(posible_friends_settings_delay(del))}} />
      <TitleComponent title="?????????????? ???????? ???? ??????????"/>
      <CheckComponent 
        check_item={[setLikeToWall]} 
        Switching={
          check => { 
            dispatch(posible_friends_settings_setLikeToWall({ ...setLikeToWall, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="?????????????? ???????? ???? ??????????????"/>
      <CheckComponent 
        check_item={[setLikeToProfile]} 
        Switching={
          check => { 
            dispatch(posible_friends_settings_setLikeToProfile({ ...setLikeToProfile, check: check[0].check})) 
          }} 
      />
      <TitleComponent title="?????????????????? ???????????????? ??????????????????" />
      <RadialBtnsComponent 
        title={[
          "???????????? ??????????????????, ???????????? ???????? ?????????????????? ?????????????????? ????????????",
          "???????????? ??????????????????, ?????????? ?????????????????? ?????????????????? ????????????, ?? ?????????? ?????????? ?????? ???????????????? ?? ???? ???? ????????????????",
          "???????????? ?? ?????????? ????????????"
        ]}
        Switching={type => { dispatch(posible_friends_settings_conversationTypeEvent(type)) }}
        checked={conversationTypeEvent}
      />
      <RandomizeComponentArea 
        textAreaMessages={addingMessages.text_areas} 
        title={`?????????????? ?????????? ?????? ????????????????????????`} 
        onFormText={message_area => { 
          dispatch(posible_friends_settings_addingMessages({ 
            on:addingMessages.on , 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
          dispatch(posible_friends_settings_addingMessages({ 
            on: { ...addingMessages.on, check: true}, 
            random:addingMessages.random , 
            text_areas: message_area 
          })) 
        }} 
      />
      <TitleComponent title={`?????????? ?????? ??????????????????????: (??????????????????: ${addingMessages.text_areas.length} ????????????????: ${counts})`}/>
      <AddingComponent 
        addingMessages={addingMessages} 
        setAddingMessages={posible_friends_settings_addingMessages} 
        dispatch={dispatch}
      />
      <AccountSettingsCopy 
        // onChecked={checkedAll} 
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave(  welcomeCount, conversationTypeEvent, delay, setLikeToProfile, setLikeToWall, addingMessages, photoOrVideoSettings, audioSettings, accounts, id_acc, task_id, dispatch, onClose  ) }
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
