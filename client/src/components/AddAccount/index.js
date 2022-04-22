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
        {
          shedule: {
            mode: {
              auto: {
                days: {
                  day:[],
                  all: false,
                },
                start_shedule: "timestamp",
                stop_shedule: "timestamp",
              },
              manual: {
                stop_shedule: "timestamp",
              },
              task:["autoresponderСonfirmFriends"],
              error_in_TG: false
            }
          }
        },
        {
          autoresponderСonfirmFriends: {
            welcomeCount: 0,
            delay: 30,
            messageSettings: {
              about: true,
              noanswer: false,
            },
            randomizeText:{
              on:false,
              text:[""],
              random: false,
              username: false
            },
            linkPhoto:{
              on:false,
              link:[""],
              random: false,
            },
            audio:{
              on:false,
              path:[""],
              random: false,
            },
          }
        },
        {
          autosecretary: {
            countAnswer: 0,
            delay: 30,
            oneOption: {
              text: "",
              randomizeText: {
                on:false,
                text:[""],
                random: false,
                username: false
              },
              linkPhoto: {
                on:false,
                link:[""],
                random: false,
              },
                audio: {
                on:false,
                path:[""],
                random: false,
              },
            },
            twoOption: {
              text: "",
              randomizeText: {
                on:false,
                text:[""],
                random: false,
                username: false
              },
              linkPhoto:{
                on:false,
                link:[""],
                random: false,
              },
              audio:{
                on:false,
                path:[""],
                random: false,
              },
            },
            threeOption: {
              text: "",
              randomizeText:{
                on:false,
                text:[""],
                random: false,
                username: false
              },
              linkPhoto:{
                on:false,
                link:[""],
                random: false,
              },
              audio:{
                on:false,
                path:[""],
                random: false,
              },
            },
          }
        },
        {
          likingViewingStories:{
            countUser: 0,
            delay:50,
            randdomLike: false
          }
        },
        {
          autoresponderIncomingRequestsFriends: {
            contGreeting: 0,
            delay: 30,
            likeAva: false,
            likeWall: false,
            messageSettings: {
              about: true,
              noanswer: false
            },
            randomizeText:{
              on:false,
              text:[""],
              random: false,
              username: false
            },
            linkPhoto:{
              on:false,
              link:[""],
              random: false,
            },
            audio:{
              on:false,
              path:[""],
              random: false,
            },
          }
        },
        {
          sendingMessagesUserList: {
            countMessage: 0,
            delay: 30,
            likeAva: false,
            likeWall: false,
            messageSettings: {
              anyСase: true,
              about: false
            },
            randomizeText:{
              on:false,
              text:[""],
              random: false,
              username: false
            },
            linkPhoto:{
              on:false,
              link:[""],
              random: false,
            },
            audio:{
              on:false,
              path:[""],
              random: false,
            },
            linkList: ["",""]
          }
        },
        {
          possibleFriends: {
            countFrendsReq: 0,
            inRequestMax: 200,
            delay: 30,
            likeAva: false,
            likeWall: false,
          }
        },
        {
          targetAudienceFromList: {
            countFrendsReq: 0,
            inRequestMax: 200,
            delay: 30,
            addFriends: true,
            lookStory: false,
            likeWall:true,
            likeAva:true,
            listLink:["",""]
          }
        },
        {
          publishingStories: {
            countPublish: 0,
            delay: 50,
            linkButtonMore:"",
            materialHistory:"",
          }
        },
        {
          parserTargetAudience: {
            phrases: [""],
            country:"",
            cityes: "",
            linkUserList:[""]
          }
        },
        {
          sendMessagesCommunityList: {
            countСommunities: 0,
            delay:50,
            messageSettings: {
              anyСase: true,
              about: false
            },
            randomizeText:{
              on:false,
              text:[""],
              random: false,
              username: false
            },
            linkPhoto:{
              on:false,
              link:[""],
              random: false,
            },
            audio:{
              on:false,
              path:[""],
              random: false,
            },
            linkListСommunities: ["",""]
          }
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

