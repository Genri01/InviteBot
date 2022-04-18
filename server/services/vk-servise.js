const DB = require('../db/index');
const ApiErr = require('../exeptions/api-error');
const api = require('../http/index');

const UserDto = require('../dtos/user-dto');

class VKService {

  async registration_accounts (type, user_id, email, password,  body) {
    try {
      const condidate = await DB.searchInTables(type,{ user_id });
      // let temp_acc = condidate.dataValues.accounts;
      // let temp_acc_parse = JSON.parse(condidate.dataValues.accounts);
      // console.log(temp_acc,'temp_acc')
      // console.log(temp_acc_parse,'temp_acc_parse')
      // console.log(typeof(temp_acc),'typeof(temp_acc)')
      // console.log(typeof(temp_acc_parse),'temp_acc_parse')
      // temp_acc_parse.push({
      //   "userId": 1,
      //   "id": 1,
      //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      // });
      // console.log(type, user_id, email, password,  body)
      // temp_acc.push({ user_id: body.user_id, access_token: body.access_token, expires_in: body.expires_in, card_id: body.card_id, email, password });

      const response = await DB.updateModelTables(condidate,{ user_id, vk_user_id: body.user_id, access_token: body.access_token, expires_in: body.expires_in, card_id: body.card_id, email, password });
      // const response = await DB.updateModelTables(condidate,{ user_id, accounts: temp_acc});
      // console.log(response,'response')
      // const response = await DB.updateModelTables(condidate,{ user_id, accounts: JSON.stringify(temp_acc)});
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async filterSuggestionsFriends (json, token, res) {
    const { count, suggestFriendsFilterType } = json;
    try {
      const friends = await api.post('/filterSuggestionsFriends',{ count, suggestFriendsFilterType }, { token });
      console.log(friends);
      return friends;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async sendMessages (json, token, res) {
    const {
      domain,
      title,
      message,
    } = json;
    try {
      const messageData = await api.post('/sendMessages',{ domain, title, message }, { token });
      console.log(messageData);
      return messageData;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async addSuggestionsFriends (json, token, res) {
    const {
      welcomeMessage,
      setLikeToWall,
      setLikeToProfilePhoto
    } = json;
    try {
      const response = await api.post('/addSuggestionsFriends',{ welcomeMessage, setLikeToWall, setLikeToProfilePhoto }, { token });
      console.log(response);
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async autoResponderFriends (json, token, res) {
    const {
      autoResponderEventType,
      welcomeCount,
      messageSettings
    } = json;
    try {
      const response = await api.post('/autoResponderFriends',{ autoResponderEventType, welcomeCount, messageSettings }, { token });
      console.log(response);
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async autoLikingFriendsOrGroups (json, token, res) {
    const {
      requestCount,
      setLikeToWall,
      setLikeToProfilePhoto
    } = json;
    try {
      const response = await api.post('/autoLikingFriendsOrGroups',{ requestCount, setLikeToWall, setLikeToProfilePhoto }, { token });
      console.log(response);
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }
}

module.exports = new VKService();
