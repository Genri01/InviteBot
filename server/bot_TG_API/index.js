const TelegramBot = require('node-telegram-bot-api');
var token_TG = '';
var bot = '';
var Pages = {};
const SESSION = require('../db/index');
var ADMINSETTINGS = {};

const TGAPI = {
  initialBotListner: botStart
}

var active_page = 'main';

function botStart () {
  ADMINSETTINGS = require('../index');
  Pages = require('./pages');
  Pages.changePageMain(ADMINSETTINGS,Pages.main);
  Pages.changePageNotifications(ADMINSETTINGS,Pages.notifications);
  Pages.changePageFighterSearch(ADMINSETTINGS,Pages.fighter_search);
  Pages.changePageTeamSearch(ADMINSETTINGS,Pages.team_search);
  Pages.changePagePurchase(ADMINSETTINGS,Pages.purchase);
  Pages.changePageVerification(ADMINSETTINGS,Pages.verification);
  token_TG = JSON.parse(ADMINSETTINGS.tokens).tg_tokens[0];
  bot = new TelegramBot(token_TG, { polling: true });

  bot.on('message', async (msg) => {
    const { text, message_id, chat: { id, type, username }, from: { is_bot, last_name, first_name} } = msg;
    console.log(msg);

    await bot.sendMessage(id,username + ': ' + text,{
      parse_mode: 'Markdown',
    });

    if (text === `/reboot ${ADMINSETTINGS.password}` ) {
      await bot.sendMessage(id,'Бот будет перезагружен в течении минуты ...',{
        parse_mode: 'Markdown',
      });
    }

    if (text === `/help` ) {
      await bot.sendMessage(id,'По вопросам / предложениям работы бота просим писать @iZykAlex',{
        parse_mode: 'Markdown',
      });
    }

    if (text === '/start') {      
      const uniqm = await SESSION.isUniqmUser(id);
      if(!uniqm){ Pages.changePageMainAgain(ADMINSETTINGS,Pages.main) }
        await bot.sendMessage(id,`${uniqm ? Pages.main.text : `*С возвращением ${first_name}!*\n` + Pages.main.text}`,{
          reply_markup: {
            keyboard: Pages.main.buttons,
            resize_keyboard: true
          },
          parse_mode: 'Markdown',
        });
  
        SESSION.initionalLocal(msg);
        SESSION.initionalGlobal(msg);
    }
    
    if (text === 'Продажа') {
      await bot.sendMessage(id,Pages.sale.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.sale.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'sales';
    }

    if (text === 'Купля') {
      await bot.sendMessage(id,Pages.purchase.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.purchase.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'purchase';
    }

    if (text === 'Рекрутинг') {
      await bot.sendMessage(id,Pages.recruiting.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.recruiting.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'recruting';
    }

    if (text === 'Назад') {
      await bot.sendMessage(id,Pages.recruiting.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.recruiting.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'recruting';
    }

    if (text === 'Проверка') {
      await bot.sendMessage(id,Pages.verification.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.verification.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'verification';
    }

    if (text === 'Уведомления') {
      await bot.sendMessage(id,Pages.notifications.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.notifications.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'notifications';
    }

    if (text === 'Помощь') {
      await bot.sendMessage(id,Pages.main.text,{
      // await bot.sendMessage(id,Pages.help.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.main.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'help';
    }

    if (text === 'Главное меню') {
      await bot.sendMessage(id,Pages.main.text,{
      // await bot.sendMessage(id,Pages.help.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.main.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'main';
    }

    if (text === 'Поиск команды') {
      await bot.sendMessage(id,Pages.team_search.text,{
      // await bot.sendMessage(id,Pages.help.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.team_search.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'team_search';
    }

    if (text === 'Поиск бойца') {
      await bot.sendMessage(id,Pages.fighter_search.text,{
      // await bot.sendMessage(id,Pages.help.text,{
        reply_markup: {
          // inline_keyboard: Pages.main.buttons,
          keyboard: Pages.fighter_search.buttons,
          resize_keyboard: true
        },
        parse_mode: 'Markdown',
      });
      active_page = 'fighter_search';
    }    
    
    if (text === 'Все категории') {

    }
    
    if (text === 'Привода') {

    }

    if (text === 'Аксессуары и защита') {

    }

    if (text === 'Снаряжение') {

    }

    if (text === 'Включить уведомление') {
      await bot.sendMessage(id,'Пожалуйста введите запрос для включения уведомления...',{
          reply_markup: JSON.stringify({
            inline_keyboard: Pages.keyboard_notifications_btn_msg,
            // keyboard: Pages.main.buttons,
            resize_keyboard: true
          }),
          parse_mode: 'Markdown',
      });
    }
  });

  bot.on('callback_query', async (query) => {
    // console.log(query)
    const { data, message: { chat: { id } },from: { username } } = query;
  
    // let img = '';
  
    // if (query.data === 'moreKeks') { // если кот
    //   img = 'keks.png';
    // }
  
    // if (query.data === 'morePes') { // если пёс
    //   img = 'pes.png';
    // }
  
    // if (img) {
    //   bot.sendPhoto(chatId, img, { // прикрутим клаву
    //     reply_markup: {
    //       inline_keyboard: keyboard
    //     }
    //   });
    // } else {
    //   bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
    //     // прикрутим клаву
    //     reply_markup: {
    //       inline_keyboard: keyboard
    //     }
    //   });
    // }
  });

  console.log('TELEGRAMM BOT CONNECTING...READY!');
}

module.exports = TGAPI;


            


