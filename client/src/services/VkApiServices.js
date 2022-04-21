import api from "../http";

export default class VkApiServices {
  

  // static async sendMessages(body) {
  //   let json = {
  //     "peerId": 12650819,
  //     "message": "ПТhug!"
  //   }
  //   // let json = {
  //   //   "domain": "agolowin",
  //   //   "title": "Приветствие",
  //   //   "message": "Приветствую тебя!",
  //   //   "attachments": [
  //   //     {
  //   //       "id": 0,
  //   //       "ownerId": 0,
  //   //       "accessKey": "string"
  //   //     }
  //   //   ],
  //   //   "replyTo": 0,
  //   //   "forwardMessages": [
  //   //     0
  //   //   ],
  //   //   "forward": {
  //   //     "ownerId": 0,
  //   //     "peerId": 0,
  //   //     "conversationMessageIds": [
  //   //       0
  //   //     ],
  //   //     "messageIds": [
  //   //       0
  //   //     ],
  //   //     "isReply": true
  //   //   },
  //   //   "keyboard": {
  //   //     "oneTime": true,
  //   //     "inline": true,
  //   //     "buttons": [
  //   //       [
  //   //         {
  //   //           "action": {
  //   //             "type": {},
  //   //             "payload": "string",
  //   //             "label": "string",
  //   //             "link": "string",
  //   //             "hash": "string",
  //   //             "appId": 0,
  //   //             "ownerId": 0,
  //   //             "peerId": 0,
  //   //             "intent": {},
  //   //             "subscribeId": 0
  //   //           },
  //   //           "color": {}
  //   //         }
  //   //       ]
  //   //     ]
  //   //   },
  //   //   "userId": 12650819,
  //   //   "randomId": 0,
  //   //   "peerId": 0,
  //   //   "chatId": 0,
  //   //   "userIds": [
  //   //     0
  //   //   ],
  //   //   "lat": 0,
  //   //   "longitude": 0,
  //   //   "stickerId": 0,
  //   //   "groupId": 0,
  //   //   "payload": "string",
  //   //   "contentSource": {
  //   //     "type": {},
  //   //     "ownerId": 0,
  //   //     "peerId": 0,
  //   //     "conversationMessageId": 0,
  //   //     "url": "string"
  //   //   },
  //   //   "dontParseLinks": true,
  //   //   "disableMentions": true,
  //   //   "intent": {},
  //   //   "subscribeId": 0,
  //   //   "template": {
  //   //     "type": {},
  //   //     "elements": [
  //   //       {
  //   //         "title": "string",
  //   //         "description": "string",
  //   //         "photoId": "string",
  //   //         "buttons": [
  //   //           {
  //   //             "action": {
  //   //               "type": {},
  //   //               "payload": "string",
  //   //               "label": "string",
  //   //               "link": "string",
  //   //               "hash": "string",
  //   //               "appId": 0,
  //   //               "ownerId": 0,
  //   //               "peerId": 0,
  //   //               "intent": {},
  //   //               "subscribeId": 0
  //   //             },
  //   //             "color": {}
  //   //           }
  //   //         ],
  //   //         "action": {
  //   //           "type": {},
  //   //           "link": "string"
  //   //         }
  //   //       }
  //   //     ]
  //   //   }
  //   // }
  //   let token = "82de61bf61c3c72f6e55c6d4f1687648b4777f830db71c8ef8991aaa120832162006b45e5b9e8bc274672";
  //   let messageStatus = await api.main_api.post('/sendMessages', { json, token });
  //   console.log(messageStatus)
  //   return messageStatus;
  // }

  static async addSuggestionsFriends(json,token) {
    console.log(json,token,"vkapiclient"); 
    try {
      // let resp = await api.main_api.post('/addSuggestionsFriends', { json , token })
      let resp =  await api.main_api.post('/addSuggestionsFriends', { test:'' });
    } catch (error) {
      console.log(error)
    }
 
  }

  static async autoResponderFriends(json,token) {
    let resp = await api.main_api.post('/autoResponderFriends', { json, token });
    return resp.status;
  }

  static async filterSuggestionsFriends(json,token) {
    let resp = await api.main_api.post('/filterSuggestionsFriends', { json, token });
    return resp.status;
  }

  static async autoLikingFriendsOrGroups(json,token) {
    let resp = await api.main_api.post('/autoLikingFriendsOrGroups', { json, token })
    return resp.status;
  }

  static async writeCardsVk(body) {
    return await api.main_api.post('/writecardsvk', body )
  }

  static async deletedCardVk(body) {
    return await api.main_api.post('/deletedcardvk', body )
  }

  static async getAccountsData(body) {
    return await api.main_api.post('/userAccountsvk', { body } )
  }

}
