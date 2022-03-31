'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('INST', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account_id: {
        type: Sequelize.STRING
      },
      account_name: {
        type: Sequelize.STRING
      },
      account_settings_visual: {
        type: Sequelize.STRING
      },
      account_settings_schedule: {
        type: Sequelize.STRING
      },
      account_settings_messagelist: {
        type: Sequelize.STRING
      },
      account_settings_answering: {
        type: Sequelize.STRING
      },
      account_settings_parser: {
        type: Sequelize.STRING
      },
      account_date_conection: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('INST');
  }
};