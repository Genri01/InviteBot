const DB = require('../db/index');
const ApiErr = require('../exeptions/api-error');
const api = require('../http/index');

const UserDto = require('../dtos/user-dto');

class VKService {
  // async sendMessages (json, token) {
  //   const {
  //     peerId,
  //     message,
  //   } = json;
  //   try {
  //     const messageData = await api.post('/sendMessages',{ peerId, message }, { token });
  //     return messageData.statusCode;
  //   } catch(e) {
  //     console.log(e)
  //     throw ApiErr.BadRequest(e.message)
  //   }
  // }

  async registration_accounts (type_network, user_id, body, res) {
    try {
      const condidate = await DB.searchInTables(type_network,{ id: user_id });
      let temp_acc = condidate.dataValues.accounts;
      let temp_acc_parse = JSON.parse(condidate.dataValues.accounts);
      // console.log(condidate,'condidate')
      // console.log(temp_acc_parse,'temp_acc_parse')
      // console.log(typeof(temp_acc),'typeof(temp_acc)')
      // console.log(typeof(temp_acc_parse),'temp_acc_parse')
      temp_acc_parse.push(body);
      // console.log(temp_acc_parse,'@#!@#')
      // temp_acc.push({ user_id: body.user_id, access_token: body.access_token, expires_in: body.expires_in, card_id: body.card_id, email, password });

      const response = await DB.updateModelTables(condidate,{ accounts: JSON.stringify(temp_acc_parse)});
      // const response = await DB.updateModelTables(condidate,{ user_id, accounts: temp_acc});
      // console.log(response,'response')
      // const response = await DB.updateModelTables(condidate,{ user_id, accounts: JSON.stringify(temp_acc)});
      return response;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async deleted_accounts (type_network, user_id, body, res) {
    try {
      const condidate = await DB.searchInTables(type_network,{ id: user_id });
      // let temp_acc = condidate.dataValues.accounts;
      // let temp_acc_parse = JSON.parse(condidate.dataValues.accounts);
      // console.log(condidate,'condidate')
      // console.log(temp_acc_parse,'temp_acc_parse')
      // console.log(typeof(temp_acc),'typeof(temp_acc)')
      // console.log(typeof(temp_acc_parse),'temp_acc_parse')
      // temp_acc_parse.push(body);
      // console.log(temp_acc_parse,'@#!@#')
      // temp_acc.push({ user_id: body.user_id, access_token: body.access_token, expires_in: body.expires_in, card_id: body.card_id, email, password });

      // const response = await DB.updateModelTables(condidate,{ accounts: JSON.stringify(temp_acc_parse)});
      // const response = await DB.updateModelTables(condidate,{ user_id, accounts: temp_acc});
      // console.log(response,'response')
      const response = await DB.updateModelTables(condidate,{ user_id, accounts: JSON.stringify(body)});
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

  async addSuggestionsFriends (json, token, res) {
    const {
      acсountToken,
      delay,
      requestCount,
      welcomeMessage,
      setLikeToWall,
      setLikeToProfilePhoto
    } = json;
    try {
      const response = await api.post('/addSuggestionsFriends',
      {
        acсountToken,
        delay,
        requestCount,
        welcomeMessage,
        setLikeToWall,
        setLikeToProfilePhoto
      }
      , { token });
      return response.status;
    } catch(e) {
      console.log(e)
      throw ApiErr.BadRequest(e.message)
    }
  }

  async autoResponderFriends (json, token, res) {
    const {
      acountToken,
      delay,
      autoResponderEventType,
      welcomeCount,
      messageSettings,
      photoOrVideoSettings,
      audioSettings,
      userNamesOrIds,
      groupNamesOrIds,
      addToFriends,
      setLikeToWall,
      setLikeToProfile
    } = json;
    try {
      const response = await api.post('/autoResponderFriends',
      {
        acountToken,
        delay,
        autoResponderEventType,
        welcomeCount,
        messageSettings,
        photoOrVideoSettings,
        audioSettings,
        userNamesOrIds,
        groupNamesOrIds,
        addToFriends,
        setLikeToWall,
        setLikeToProfile 
      }, { token });
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
