import ActionTypes from '../constants';

const initialState = {
  oldDataAccountVK: {
    accounts: [
      {
        id: 1,
        settingsAcc: {
          name:'vk acc',
          visibleSite: false,
          visibleImg: false,
          typeAcc: "vk",
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
    ]
  },
  newDataAccountVK: { accounts: [] }
};
export default function accounts_vk(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.APP_REQUEST_PUT_ACCOUNTS_VK:
      return {
        ...state,
        newDataAccountVK: {
          accounts: payload
        }
      };
    case ActionTypes.COPY_DATA_ACCOUNTS_VK:
      return {
        ...state,
        oldDataAccountVK: { ...state.newDataAccountTG }
      };
    default:
      return state;
  }
}