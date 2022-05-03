import api from "../http";

export default class VkApiServices {
 
  static async addSuggestionsFriends(json,token) {
    let resp = await api.main_api.post('/addSuggestionsFriends', { json, token });
    return resp.status;
  }

  static async autoResponderFriends(json,token) {
    let resp = await api.main_api.post('/autoResponderFriends', { json, token });
    return resp.status;
  }

  static async filterSuggestionsFriends(json,token) {
    let resp = await api.main_api.post('/filterSuggestionsFriends', { json , token });
    return resp.data;
  }

  static async autoLikingFriendsOrGroups(json,token) {
    let resp = await api.main_api.post('/autoLikingFriendsOrGroups', { json, token })
    return resp.status;
  }

  static async writeCardsVk(body) {
    return await api.main_api.post('/writecardsvk', body )
  }

  static async saveaccvk(body) {
    return await api.main_api.post('/saveaccvk', body )
  }

  static async getAccountsData(body) {
    return await api.main_api.post('/userAccountsvk', { body } )
  }

  static async uploadFiles(body) {
    return await api.uploader.post('/uploader',  body )
  }

}
