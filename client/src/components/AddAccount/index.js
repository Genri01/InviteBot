import React from 'react';
import images from '../../assets/images';
import Button from '../Button';
import { connect } from 'react-redux';
import './style.css';
import {
  appGetAccountsVK,
  appGetAccountsTG,
  appGetAccountsINST
} from '../../redux/actions/app.js';

class AddAccount extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      nameCard:""
    }
  }

  handleInputChange(event) {

    const {
      target: {
        type,
        name,
        checked,
        value
      }
    } = event
   
    
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

    render(){
      const {
        add,
      } = images;

      const {
        handleInputChange,
        state : { 
          nameCard
        },
        props: {
          type,
          putAccountsVK,
          acc
        }
      } =this;

      const objAcc = {
        id: `${acc.length + 1}`,
        settingsAcc: {
          name:nameCard,
          visibleSite: false,
          visibleImg: false,
          typeAcc: type,
          anticapcha: "",
          network: {
            statusON: true,
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
        tasks: [
          {shedule: {
            mode: {
              auto: {
                days: {
                  day:["mon","sut"],
                  all: false,
                },
                startShedule:"timestamp",
                stopShedule:"timestamp",
              },
              manual: {
                stopShedule:"timestamp",
              },
              task:["autoresponderСonfirmFriends"],
              errinTG: false
            }
          }},
          {autoresponderСonfirmFriends: {
            contGreeting: 0,
            delay: 30,
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
          }},
          {autosecretary: {
            countAnswer: 0,
            delay: 30,
            oneOption: {
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
            twoOption: {
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
          }},
          {likingViewingStories:{
            countUser: 0,
            delay:50,
            randdomLike: false
          }},
          {autoresponderIncomingRequestsFriends: {
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
          }},
          {sendingMessagesUserList: {
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
          }},
          {possibleFriends: {
            countFrendsReq: 0,
            inRequestMax: 200,
            delay: 30,
            likeAva: false,
            likeWall: false,
          }},
          {targetAudienceFromList: {
            countFrendsReq: 0,
            inRequestMax: 200,
            delay: 30,
            addFriends: true,
            lookStory: false,
            likeWall:true,
            likeAva:true,
            listLink:["",""]
          }},
          {publishingStories: {
            countPublish: 0,
            delay: 50,
            linkButtonMore:"",
            materialHistory:"",
          }},
          {parserTargetAudience: {
            phrases: [""],
            country:"",
            cityes: "",
            linkUserList:[""]
          }},
          {sendMessagesCommunityList: {
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
          }}
        ]
      }

      return (
        <div className="itemAddAccountWrapper">
          <div className='inputAddAccountWrapper'>
            <input className='inputAddAccount' onChange={handleInputChange} name="nameCard" placeholder='name' value={nameCard} />
          </div>
          <div className='addBtnWrapper'>
            <Button icon={add} onClick={() => { 
                acc.push(objAcc)
              putAccountsVK(acc); this.setState({nameCard:""}) 
              } } alt='add' />
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => {

  const { accounts_vk: { newDataAccountVK: { acc } } } = state

  return {
    acc
  }
}

const mapDispatchToProps = dispatch => {
  return {
    putAccountsVK: (data)=>dispatch(appGetAccountsVK(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAccount);

