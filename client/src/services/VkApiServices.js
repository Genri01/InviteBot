import api from "../http";

export default class VkApiServices {

  static async sendMessages(body) {
    let json = {
      "domain": "aspektpak",
      "title": "Приветствие",
      "message": "Приветствую тебя!",
      "attachments": [
        {
          "id": 0,
          "ownerId": 0,
          "accessKey": "string"
        }
      ],
      "replyTo": 0,
      "forwardMessages": [
        0
      ],
      "forward": {
        "ownerId": 0,
        "peerId": 0,
        "conversationMessageIds": [
          0
        ],
        "messageIds": [
          0
        ],
        "isReply": true
      },
      "keyboard": {
        "oneTime": true,
        "inline": true,
        "buttons": [
          [
            {
              "action": {
                "type": {},
                "payload": "string",
                "label": "string",
                "link": "string",
                "hash": "string",
                "appId": 0,
                "ownerId": 0,
                "peerId": 0,
                "intent": {},
                "subscribeId": 0
              },
              "color": {}
            }
          ]
        ]
      },
      "userId": 0,
      "randomId": 0,
      "peerId": 0,
      "chatId": 0,
      "userIds": [
        0
      ],
      "lat": 0,
      "longitude": 0,
      "stickerId": 0,
      "groupId": 0,
      "payload": "string",
      "contentSource": {
        "type": {},
        "ownerId": 0,
        "peerId": 0,
        "conversationMessageId": 0,
        "url": "string"
      },
      "dontParseLinks": true,
      "disableMentions": true,
      "intent": {},
      "subscribeId": 0,
      "template": {
        "type": {},
        "elements": [
          {
            "title": "string",
            "description": "string",
            "photoId": "string",
            "buttons": [
              {
                "action": {
                  "type": {},
                  "payload": "string",
                  "label": "string",
                  "link": "string",
                  "hash": "string",
                  "appId": 0,
                  "ownerId": 0,
                  "peerId": 0,
                  "intent": {},
                  "subscribeId": 0
                },
                "color": {}
              }
            ],
            "action": {
              "type": {},
              "link": "string"
            }
          }
        ]
      }
    }
    let token = "7a175db6d9fd58435ab4d9018a85edab5f4c76ddde05896d2a06e8d9d979dadbb1f34bd25a516d334eb55";
    return api.vk_api.post('/sendMessages', { json, token })
    // return api.vk_api.post('/sendMessages', { body })
  }

  static async addSuggestionsFriends(body) {
    let json = {
      "acountTokens": [
        "string"
      ],
      "delay": 0,
      "requestCount": 0,
      "welcomeMessage": "string",
      "setLikeToWall": true,
      "setLikeToProfilePhoto": true
    }
    let token = "7a175db6d9fd58435ab4d9018a85edab5f4c76ddde05896d2a06e8d9d979dadbb1f34bd25a516d334eb55";
    return api.vk_api.post('/addSuggestionsFriends', { json, token })
    // return api.vk_api.post('/addSuggestionsFriends', { body })
  }

  static async autoResponderFriends(body) {
    let json = {
      "acountTokens": [
        "string"
      ],
      "delay": 0,
      "autoResponderEventType": 1,
      "welcomeCount": 0,
      "messageSettings": {
        "conversationTypeEvent": 1,
        "textMessages": [
          "string"
        ]
      },
      "photoOrVideoSettings": {
        "photoFilesPath": [
          "string"
        ],
        "messages": [
          "string"
        ]
      },
      "audioSettings": {
        "audioFilesPath": [
          "string"
        ]
      },
      "userIds": [
        0
      ],
      "groupsIds": [
        0
      ],
      "addToFriends": true,
      "setLikeToWall": true,
      "setLikeToProfile": true
    }
    let token = "7a175db6d9fd58435ab4d9018a85edab5f4c76ddde05896d2a06e8d9d979dadbb1f34bd25a516d334eb55";
    return api.vk_api.post('/autoResponderFriends', { json, token })
    // return api.vk_api.post('/autoResponderFriends', { body })
  }

  static async filterSuggestionsFriends(body) {
    let json = {
      "count": 5,
      "suggestFriendsFilterType": 0
    }
    let token = "7a175db6d9fd58435ab4d9018a85edab5f4c76ddde05896d2a06e8d9d979dadbb1f34bd25a516d334eb55";
    let resp = await api.main_api.post('/filterSuggestionsFriends', { json, token });
    console.log(resp)
    return resp;
    // return api.vk_api.post('/filterSuggestionsFriends', { body })
  }

  static async autoLikingFriendsOrGroups(body) {
    let json = {
      "acountTokens": [
        "string"
      ],
      "delay": 0,
      "requestCount": 0,
      "userIds": [
        0
      ],
      "groupIds": [
        0
      ],
      "setLikeToWall": true,
      "setLikeToProfilePhoto": true
    }
    
    let token = "7a175db6d9fd58435ab4d9018a85edab5f4c76ddde05896d2a06e8d9d979dadbb1f34bd25a516d334eb55";
    return api.vk_api.post('/autoLikingFriendsOrGroups', { json, token })
    // return api.vk_api.post('/autoLikingFriendsOrGroups', { body })
  }

  static async writeCardsVk(body) {
    return api.main_api.post('/writecardsvk', body )
  }

  static async getAccountsData(body) {
    return api.main_api.post('/userAccountsvk', { body } )
  }

}
