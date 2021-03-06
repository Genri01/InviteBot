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
import RadialBtnComponent from '../../RadialBtnsComponent';
import RandomizeComponentArea from '../../RandomizeComponentArea';
import AudioComponent from '../../AudioComponent';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import './style.css';
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
export default function ParsingSettingsPage (props) {

  const { accounts, id_acc, onClose, task_id } = props;
  // useInvalidUrlAccess();
  const [id_check, setIdCheck] = useState([]);
  const [select_option_value, changeOption] = useState(0);
  const [select_option_city, changeOptionCity] = useState("0");
  const [name_acc, changeNameAcc] = useState("");
  const [anticapcha, changeAnticapcha] = useState("");
  const [proxy_ip, changeProxyIp] = useState("");
  const [proxy_log, changeProxyLog] = useState("");
  const [proxy_pass, changeProxyPass] = useState("");
  const [check_all, checkedAll] = useState(false);
  const [text_random,setTextRandom] = useState('?????????? 1\n?????????? 2');
  const [list,setList] = useState('?????? ???????????????? ????????????');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lable_network = ["????????????","????????????????????????????"];
  const check_item_text_arr = [
    { title: "????????????????", disabled: false },
    { title: "?????????????????? ??????????????", disabled: false },
    { title: "?????? ????????????????????????", disabled: false }
  ];

  const check_item_photo_arr = [
    { title: "????????????????", disabled: false },
    { title: "?????????????????? ??????????????", disabled: false } 
  ];

  const check_item_audio_arr = [
    { title: "????????????????", disabled: false },
    { title: "?????????????????? ??????????????", disabled: false } 
  ];
  
  const weeks_day = ["??????","????","????","????","????","????","????","????"];
  const account = accounts[id_acc];
  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc="?????????? ?????????????? ?????????????????? (????????????)" text="?????????????????? ??????????????:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="??????????????:" />
      <RandomizeComponentArea title={`???????????? ???????????? ???? ???????????????? ?????????????????????????? (???????????? ?????????? ?? ?????????? ???????????? ???? ?????????? 8)`} text={text_random} onChange={(e) => { setTextRandom(e) }} />
      <TitleComponent center title="????????????????????????"/>
      <TitleComponent title={`?????????????? ???????????? (??????????????????????????)`}/>
      <Input styles={{justifyContent: 'flex-start'}} />
      <TitleComponent title={`?????????????? ???????????? (??????????????????????????)`}/>
      <Input styles={{justifyContent: 'flex-start'}} />
      <RandomizeComponentArea title={`???????????? ?????????????? ?????????????????? ?????????? ???????????????? ?????????????????????????? ?????????? ???????????????????? ??????????????!`} text={list} onChange={(e) => { setList(e) }} />
      <AccountSettingsCopy onChecked={checkedAll} onClose={onClose} styles={{marginTop:'30px'}} onSave={() => onSave(check_all,name_acc, anticapcha, proxy_ip, proxy_log, proxy_pass, select_option_city, accounts, id_acc, id_check, dispatch,onClose) }>
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
              if( id_check.length == 0 ) {
                id_check.push(id)
                setIdCheck(id_check) 
              } else {
          
                id_check.map(item => {
                  if (item == id) {
                    lock = true
                  } 
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
