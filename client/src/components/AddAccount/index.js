import React, { useState } from 'react';
import images from '../../assets/images';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { accounts_vk } from '../../redux/selectors';
import { appPutAccountsVK } from '../../redux/actions/api_vk';
import './style.css';

function sortIds (arr) {
  let ids = [];
  if(arr.length === 0) { return 0 }
  arr.map((item) => {
    ids.push(+item.id);
    return false
  });
  ids.sort((a, b) => a - b);
  return ids[ids.length-1]
}

export default function AddAccount (props) {

  const { type, accounts } = props;
  const { add } = images;

  const [name_account_card, changeNameCard] = useState('');



  console.log(accounts)

  const dispatch = useDispatch();

  const default_account_setting = {
    id: `${accounts.length === 0 ? accounts.length + 1 : sortIds(accounts) + 1}`,
    main_settings: {
      name: name_account_card,
      type_network: type,
      btn_state: [
        { 
          type: 'social', 
          disabled: false
        },
        { 
          type: 'acc_settings', 
          disabled: true
        },
        { 
          type: 'deleted', 
          disabled: false
        },
        { 
          type: 'play', 
          disabled: true
        },
        { 
          type: 'task_settings', 
          disabled: true
        },
        { 
          type: 'help', 
          disabled: true
        },
      ],
      anticapcha: "",
      network: {
        vpn: {
          country:"",
        },
        proxy: {
          ip:"",
          log:"",
          pass:""
        }
      }
    },
    task_settings: {
      tasks: [
        { // autoresponderСonfirmFriends:  
            welcomeCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 1,
            addingMessages: { 
              on: { title: "Включить", disabled: false, check: false }, 
              random: { title: "Случайный порядок", disabled: true, check: false }, 
              text_areas: [] 
            },
            messageSettings: {
              conversationTypeEvent: 1,
              textMessages: []
            },
            photoOrVideoSettings: {
              photoFilesPath: [],
              messages: [],
            },
            audioSettings: {
              audioFilesPath: [],
              messages: []
            },
            addToFriends: { title: "", disabled: false, check: false },
            setLikeToWall: { title: "", disabled: false, check: false },
            setLikeToProfile: { title: "", disabled: false, check: false }, 
        },
        { // likingViewingStories:
            welcomeCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 1,
            setLikeToWall: { title: "", disabled: false, check: false },
            setLikeToProfile: { title: "", disabled: false, check: false }, 
        },
        { // autoresponderIncomingRequestsFriends: 
            welcomeCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 2,
            messageSettings: {
              conversationTypeEvent: 1,
              textMessages: []
            },
            addingMessages: { 
              on: { title: "Включить", disabled: false, check: false }, 
              random: { title: "Случайный порядок", disabled: true, check: false }, 
              text_areas: [] 
            },
            photoOrVideoSettings: {
              photoFilesPath: [],
              messages: [],
            },
            audioSettings: {
              audioFilesPath: [],
              messages: []
            },
            addToFriends: { title: "", disabled: false, check: false },
            setLikeToWall: { title: "", disabled: false, check: false },
            setLikeToProfile: { title: "", disabled: false, check: false }, 
        },
        { //  sendingMessagesUserList: 
            welcomeCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 3,
            messageSettings: {
              conversationTypeEvent: 2,
              textMessages: []
            },
            addingMessages: { 
              on: { title: "Включить", disabled: false, check: false }, 
              random: { title: "Случайный порядок", disabled: true, check: false }, 
              text_areas: [] 
            },
            photoOrVideoSettings: {
              photoFilesPath: [],
              messages: [],
            },
            audioSettings: {
              audioFilesPath: [],
              messages: []
            },
            userNamesOrIds: [], 
        },
        { // possibleFriends: 
            requestCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 1,
            messageSettings: {
              conversationTypeEvent: 1,
              textMessages: []
            },
            addingMessages: { 
              on: { title: "Включить", disabled: false, check: false }, 
              random: { title: "Случайный порядок", disabled: true, check: false }, 
              text_areas: [] 
            },
            photoOrVideoSettings: {
              photoFilesPath: [],
              messages: [],
            },
            audioSettings: {
              audioFilesPath: [],
              messages: []
            },
            setLikeToWall: { title: "", disabled: false, check: false },
            setLikeToProfile: { title: "", disabled: false, check: false }, 
        },
        { // manualFilters: 
          count: 0,
          suggestFriendsFilterType: 0,
          friends: []
        },
        { // targetAudienceFromList: 
            welcomeCount: 0,
            delay: { to: 0, from: 0, delay: 0,check: false },
            autoResponderEventType: 3,
            addFriends: { title: "", disabled: false, check: false },
            setLikeToWall: { title: "", disabled: false, check: false },
            setLikeToProfile: { title: "", disabled: false, check: false }, 
            userNamesOrIds: [],
        },
        { // sendMessagesCommunityList: 
          welcomeCount: 0,
          delay: { to: 0, from: 0, delay: 0,check: false },
          autoResponderEventType: 4,
          addToFriends: { title: "", disabled: false, check: false },
          setLikeToWall: { title: "", disabled: false, check: false },
          setLikeToProfile: { title: "", disabled: false, check: false },
          groupNamesOrIds: [],
        }
      ],
      status_tasks: { initial_state: 'Задание не выбрано:', previous_launch: '' }
    },
    isLogining: false,
    user_accounts_info: {}
  }

  return (
    <div className="itemAddAccountWrapper">
      <div className='inputAddAccountWrapper'>
        <input className='inputAddAccount' onChange={(e)=>{changeNameCard(e.target.value)}} name="nameCard" placeholder='Введите название нового аккаунта' value={name_account_card} />
      </div>
      <div className='addBtnWrapper'>
        <Button icon={add} onClick={() => { 
            accounts.push(default_account_setting);
            dispatch(appPutAccountsVK(accounts));
            changeNameCard('');
          } } alt='add' />
      </div>
    </div>
  );
}

