'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VKs extends Model {
    get = function() {
      let accounts = JSON.parse(this.getDataValue('accounts'));
      let user_id = JSON.parse(this.getDataValue('user_id'));
      return { user_id, accounts };
    } 

    set = function({
      user_id,
      vk_user_id,
      access_token,
      expires_in,
      card_id,
      email,
      password
    }) {
      let accounts = JSON.parse(this.getDataValue('accounts'));
      let userId = JSON.parse(this.getDataValue('user_id'));

      let obj = {
        userId,
        vk_user_id,
        access_token,
        expires_in,
        card_id,
        email,
        password
      }

      accounts.push(obj);
      // this.setDataValue('accounts', JSON.stringify(accounts))
      // console.log(temp_accounts,'temp_accountspush');
      // console.log(val.user_id,'val.user_id');
        // return { id: 32, accounts: [] };
        // return {userId, accounts: this.getDataValue('accounts')};
    }
  };

  VKs.init({
    user_id: DataTypes.STRING,
    accounts:  DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'VKs',
  });
  return VKs;
};