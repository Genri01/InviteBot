import ActionTypes from '../constants';

const initialState = {
  oldDataAccountINST: {
    acc: [
      {
        id: 1,
        settingsAcc: {
          name:'instagramm acc',
          visibleSite: false,
          visibleImg: false,
          typeAcc: "inst",
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
        tasks: {
          shedule: {},
          likingNews:{},
          targetAudienceLikeSubscriptionsViewsStories:{},
          parserTargetAudience: {},
          greetingDirect:{},
          unsubscribing:{},
          sendingMessagesUserList: {},
        }
      }
    ]
  },
  newDataAccountINST: {acc:[]},
};

export default function accounts_inst(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.APP_REQUEST_GET_ACCOUNTS_INST:
      return {
        ...state,
        newDataAccountINST: {
          ...action.accounts
        }
      };
    case ActionTypes.COPY_DATA_ACCOUNTS_INST:
      return {
        ...state,
        oldDataAccountINST: {...state.newData}
      };
    default:
      return state;
  }
}