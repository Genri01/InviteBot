import ActionTypes from '../constants';

const initialState = {
  oldDataAccountTG: {
    acc: [
      {
        id: 1,
        settingsAcc: {
          name:'telegramm acc',
          visibleSite: false,
          visibleImg: false,
          typeAcc: "tg",
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
          sendingMessagesUserList: {},
          parserTargetAudience: {},
          invitingGroups: {},
          autosecretary: {},
        }
      }
    ]
  },
  newDataAccountTG: { acc: []},
};

export default function accounts_tg(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.APP_REQUEST_GET_ACCOUNTS_TG:
      return {
        ...state,
        newDataAccountTG: {
          ...action.accounts
        }
      };
    case ActionTypes.COPY_DATA_ACCOUNTS_TG:
      return {
        ...state,
        oldDataAccountTG: {...state.newDataAccountINST}
      };
    default:
      return state;
  }
}