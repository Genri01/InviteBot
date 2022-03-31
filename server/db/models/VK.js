'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VK extends Model {};

  VK.init({
    account_id: DataTypes.STRING,
    account_name: DataTypes.STRING,
    account_date_conection: DataTypes.DATE,
    account_settings_visual: DataTypes.STRING,
    account_settings_schedule: DataTypes.STRING,
    account_settings_messagelist: DataTypes.STRING,
    account_settings_parser: DataTypes.STRING,
    account_settings_answering: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'VK',
  });
  return VK;
};