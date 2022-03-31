const TelegramBot = require('node-telegram-bot-api');
const SESSION = require('../db/index');
var token_TG = '';
var bot = '';
var Pages = {};

const TGAPI = {
  initialBotListner: botStart
}

function botStart (ADMINSETTINGS) {
  // Pages = require('./pages');
  // Pages.changePageMain(ADMINSETTINGS,Pages.main);
  // Pages.changePageNotifications(ADMINSETTINGS,Pages.notifications);
  // Pages.changePageFighterSearch(ADMINSETTINGS,Pages.fighter_search);
  // Pages.changePageTeamSearch(ADMINSETTINGS,Pages.team_search);
  // Pages.changePagePurchase(ADMINSETTINGS,Pages.purchase);
  // Pages.changePageVerification(ADMINSETTINGS,Pages.verification);
  token_TG = "1872894305:AAE1Dfpv7gwZTfkAm6vLjvExjY_MYFSzMCk";
  // token_TG = JSON.parse(ADMINSETTINGS.tokens).tg_tokens[0];
  bot = new TelegramBot(token_TG, { polling: true });

  bot.on('message', async (msg) => {
    const { text, message_id, chat: { id, type, username }, from: { is_bot, last_name, first_name} } = msg;
    var uniqm = false;
    if (text === '/start') { uniqm = await SESSION.isUniqmUser(id);}
    if (
      text === `/reboot ${ADMINSETTINGS.password}` 
      || text === `/help`
      || text === 'Купля'
      || text === 'Назад'
      || text === '/start'
      || text === 'Помощь'
      || text === 'Продажа'
      || text === 'Привода'
      || text === 'Проверка'
      || text === 'Рекрутинг'
      || text === 'Снаряжение'
      || text === 'Уведомления'
      || text === 'Поиск бойца'
      || text === 'Главное меню'
      || text === 'Поиск команды'
      || text === 'Все категории'
      || text === 'Аксессуары и защита'
      || text === 'Включить уведомление'
    ) {

      // if(SESSION.isFerstSession(id) && uniqm) { // Зашел в первый раз 
        if (text === '/start') {
          await bot.sendMessage(id,Pages.main.text,{
            reply_markup: {
              keyboard: Pages.main.buttons,
              resize_keyboard: true
            },
            parse_mode: 'Markdown',
          });
  
          SESSION.initionalLocal(msg);
          SESSION.initionalGlobal(msg);
        }
      // } else {
        // if (SESSION.getUserSession(id) === null) {
          // await bot.sendMessage(id,`*Давненько тебя небыло ${first_name}*\n\n          Позволь напомнить что я умею!`,{
          //   reply_markup: {
          //     inline_keyboard: Pages.keyboard_loading,
          //     resize_keyboard: true
          //   },
          //   parse_mode: 'Markdown',
          // });
          // setTimeout(async ()=>{
          //   Pages.changePageMainAgain(ADMINSETTINGS,Pages.main); 
          //   await bot.sendMessage(id,`${`*С возвращением ${first_name}!*\n` + Pages.main.text}`,{
          //     reply_markup: {
          //       keyboard: Pages.main.buttons,
          //       resize_keyboard: true
          //     },
          //     parse_mode: 'Markdown',
          //   });
          //   SESSION.initionalLocal(msg);
          //   SESSION.initionalGlobal(msg);
          // },5000)
        // } else {
          // if (text === '/start') {
          //   Pages.changePageMainAgain(ADMINSETTINGS,Pages.main); 
          //   await bot.sendMessage(id,`${`*С возвращением ${first_name}!*\n` + Pages.main.text}`,{
          //     reply_markup: {
          //       keyboard: Pages.main.buttons,
          //       resize_keyboard: true
          //     },
          //     parse_mode: 'Markdown',
          //   });
          // }
          
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
          
          if (text === 'Продажа') {
            await bot.sendMessage(id,Pages.sale.text,{
              reply_markup: {
                keyboard: Pages.sale.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'sales';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Купля') {
            await bot.sendMessage(id,Pages.purchase.text,{
              reply_markup: {
                keyboard: Pages.purchase.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'purchase';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Рекрутинг') {
            await bot.sendMessage(id,Pages.recruiting.text,{
              reply_markup: {
                keyboard: Pages.recruiting.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'recruting';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Назад') {
            await bot.sendMessage(id,Pages.recruiting.text,{
              reply_markup: {
                keyboard: Pages.recruiting.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'recruting';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Проверка') {
            await bot.sendMessage(id,Pages.verification.text,{
              reply_markup: {
                keyboard: Pages.verification.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'verification';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Уведомления') {
            await bot.sendMessage(id,Pages.notifications.text,{
              reply_markup: {
                keyboard: Pages.notifications.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'notifications';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Помощь') {
            await bot.sendMessage(id,Pages.main.text,{
            // await bot.sendMessage(id,Pages.help.text,{
              reply_markup: {
                keyboard: Pages.main.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'help';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Главное меню') {
            await bot.sendMessage(id,Pages.main.text,{
              reply_markup: {
                keyboard: Pages.main.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'main';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Поиск команды') {
            await bot.sendMessage(id,Pages.team_search.text,{
              reply_markup: {
                keyboard: Pages.team_search.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'team_search';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Поиск бойца') {
            await bot.sendMessage(id,Pages.fighter_search.text,{
              reply_markup: {
                keyboard: Pages.fighter_search.buttons,
                resize_keyboard: true
              },
              parse_mode: 'Markdown',
            });
            active_page = 'fighter_search';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }    
          
          if (text === 'Все категории') {
            active_page = 'all_categories';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
          
          if (text === 'Привода') {
            active_page = 'gears';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Аксессуары и защита') {
            active_page = 'accessory';
            SESSION.putUserSession(id,{ info_user: { active_page } });
          }
      
          if (text === 'Снаряжение') {
            active_page = 'Equipment';
            SESSION.putUserSession(id,{ info_user: { active_page } });
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
        // }
      // }
    } else { // если не команда а просто сообщение

      if (SESSION.getUserSession(id) === null) {
        await bot.sendMessage(id,`*Давненько тебя небыло ${first_name}*\n\n          Позволь напомнить что я умею!`,{
          reply_markup: {
            inline_keyboard: Pages.keyboard_loading,
            resize_keyboard: true
          },
          parse_mode: 'Markdown',
        });
        setTimeout(async ()=>{
          Pages.changePageMainAgain(ADMINSETTINGS,Pages.main); 
          await bot.sendMessage(id,`${`*С возвращением ${first_name}!*\n` + Pages.main.text}`,{
            reply_markup: {
              keyboard: Pages.main.buttons,
              resize_keyboard: true
            },
            parse_mode: 'Markdown',
          });
          SESSION.initionalLocal(msg);
          SESSION.initionalGlobal(msg);
        },5000);
      } else {

        await bot.sendMessage(id,username + ': ' + text,{
          parse_mode: 'Markdown',
        }); 
      }


      // console.log(active_page);
  
      // switch (active_page) {
      //   case 'verification':
      //     console.log('TEST VERIFICATION')
      //       // var RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
  
      //       // if(RegExp.test(vali)){ stav = true; }
  
      //     break;
  
      //   default:
      //     break;
      // }

      }
  });




  // bot.on('callback_query', async (query) => {
  //   const { data, message: { chat: { id } },from: { username } } = query;
  
  //   // let img = '';
  
  //   // if (query.data === 'moreKeks') { // если кот
  //   //   img = 'keks.png';
  //   // }
  
  //   // if (query.data === 'morePes') { // если пёс
  //   //   img = 'pes.png';
  //   // }
  
  //   // if (img) {
  //   //   bot.sendPhoto(chatId, img, { // прикрутим клаву
  //   //     reply_markup: {
  //   //       inline_keyboard: keyboard
  //   //     }
  //   //   });
  //   // } else {
  //   //   bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
  //   //     // прикрутим клаву
  //   //     reply_markup: {
  //   //       inline_keyboard: keyboard
  //   //     }
  //   //   });
  //   // }
  // });

  console.log('TELEGRAMM BOT CONNECTING...READY!');
}

module.exports = TGAPI;


            


