import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TextArea from '../../TextArea';
import RadialBtnsComponent from '../../RadialBtnsComponent';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  manual_settings_count,
  manual_settings_filter
} from '../../../../redux/actions/manual_settings';

import { manual_settings } from '../../../../redux/selectors';

import './style.css';
async function onSave( count,suggestFriendsFilterType, accounts, id_acc, task_id, dispatch, onClose ) {

  let setings_response = accounts;
 
  setings_response[id_acc].task_settings.tasks[task_id-1].count = count;
  setings_response[id_acc].task_settings.tasks[task_id-1].suggestFriendsFilterType = suggestFriendsFilterType;

  dispatch(appPutAccountsVK(setings_response));
  onClose(false);

}

async function onSave(check_all,name_acc, anticapcha, proxy_ip, proxy_log, proxy_pass, select_option_city, accounts, id_acc, checked, dispatch, onClose) {

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

export default function ManualSortFriendsSettingsPage (props) {
 
  const { accounts, id_acc, onClose, task_id,titleTask } = props; 

  const dispatch = useDispatch(); 

  const count = useSelector(manual_settings.count);
  const suggestFriendsFilterType = useSelector(manual_settings.suggestFriendsFilterType);
  const friends = useSelector(manual_settings.friends);

  const [text_friends, setFriends] = useState('')

  const account = accounts[id_acc];

  useEffect(() => {
    if(friends.length !== 0) {
      let arrTemp = [];
      let string = '';
      arrTemp = friends.map((item) => (`id: ${item.userId} ??.??.??: ${item.firstName} ${item.lastName}`))
      string = arrTemp.join('\n');
      setFriends(string)
    }
  },[friends])

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="?????????????????? ??????????????:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="??????????????:" />
      <CountInput count={count} setCount={(counts) => {dispatch(manual_settings_count(counts))}} title="?????????????? ?????????????????????? ??????-???? ?????????????????? ????????????:"/>
      <TitleComponent title="?????????????????? ??????????????" />
      <RadialBtnsComponent 
        title={[
          "????????????????????????, ?? ???????????????? ?????????? ?????????? ????????????",
          "????????????????????????, ?????????????????????????????? ???? ??????????????????",
          "????????????????????????, ?????????????? ?????????????????????????? ???? ???? ????????????????, ?????? ?? ????"
        ]}
        Switching={type => { dispatch(manual_settings_filter(type)) }}
        checked={suggestFriendsFilterType}
      />
      <TitleComponent title={`?? ???????? ???????? ???????????????? ???????? ?????????????????? ????????????: ${friends.length}`}  />
      <TextArea text={ text_friends } onChange={(e) => {}} />
      <AccountSettingsCopy 
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave( count, suggestFriendsFilterType, accounts, id_acc, task_id, dispatch, onClose ) }
      >  
        {/* {
          accounts.map((item,key) => {
            return <ItemDisplayComponent 
              check_all={check_all}
              checked={item.id === key ? true : false} 
              key={key} 
              name={`${item.main_settings.name}`} 
              id={key} 
              onClick={(id) => { 
              let lock = false;
              if( id_check.length === 0 ) {
                id_check.push(id)x
                setIdCheck(id_check) 
              } else {
          
                id_check.map(item => {
                  if (item === id) {
                    lock = true
                  } 
                  return false
                })
                if(!lock) {
                  id_check.push(id)
                  setIdCheck(id_check) 
                } 
              }
                console.log(id_check)
              }} 
            />
          })
        } */}
      </AccountSettingsCopy>
    </div>
  );
}
