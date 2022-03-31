const TelegramBot = require('node-telegram-bot-api');
const { Telegraf } = require("telegraf");

const botAPITG = new TelegramBot(token_TG, { polling: true });
const TelegrafAPI = new Telegraf(token_TG);

const TGAPI = {
  initialBotListner: botStart
}
module.exports = {
  BotAPITG,
  TelegrafAPI
}