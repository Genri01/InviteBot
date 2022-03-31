const keyboard_main = [
  [
    {
      text: 'Продажа', // текст на кнопке
      callback_data: 'sales' // данные для обработчика событий
    },
    {
      text: 'Купля',
      callback_data: 'purchase'
    },
    // {
    //   text: 'Хочу проходить курсы',
    //   url: 'https://htmlacademy.ru/courses' //внешняя ссылка
    // }
  ],
  [
    {
      text: 'Рекрутинг', 
      callback_data: 'recruiting'  
    },
    {
      text: 'Проверка',
      callback_data: 'verification'
    },
  ],
  [
    {
      text: 'Уведомления',  
      callback_data: 'notifications'  
    },
    {
      text: 'Помощь',
      callback_data: 'help'
    },
  ],

];

const keyboard_sales = [
  [
    {
      text: 'Все категории', // текст на кнопке
      callback_data: 'all' // данные для обработчика событий
    },
    {
      text: 'Привода',
      callback_data: 'privod'
    },
  ],
  [
    {
      text: 'Аксессуары и защита', 
      callback_data: 'accessories'  
    },
    {
      text: 'Снаряжение',
      callback_data: 'gear'
    },
  ],
  [
    {
      text: 'Включить уведомление',  
      callback_data: 'on_notification_sales'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
];

const keyboard_notifications = [
  [
    {
      text: 'Включить уведомление',  
      callback_data: 'on_notification'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
];

const keyboard_purchase = [
  [
    {
      text: 'Включить уведомление',  
      callback_data: 'on_notification_purchase'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
];

const keyboard_verification = [
  [
    {
      text: 'Включить уведомление', 
      callback_data: 'on_notification_verification'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
];

const keyboard_recruiting = [
  [
    {
      text: 'Поиск команды',  
      callback_data: 'search_team'  
    },
    {
      text: 'Поиск бойца',  
      callback_data: 'search_fighter'  
    },
  ],
  [
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ]
];

const keyboard_team_search = [
  [
    {
      text: 'Включить уведомление',  
      callback_data: 'on_notification_team_search'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
  [
    {
      text: 'Назад',
      callback_data: 'recruting_menu'
    },
  ]
];

const keyboard_fighter_search = [
  [
    {
      text: 'Включить уведомление',  
      callback_data: 'on_notification_fighter_search'  
    },
    {
      text: 'Главное меню',
      callback_data: 'main_menu'
    },
  ],
  [
    {
      text: 'Назад',
      callback_data: 'recruting_menu'
    },
  ]
];

const keyboard_notifications_btn_msg = [
  [
    {
      text: 'Отменить',
      callback_data: 'off_notification'
    },
  ]
];

const main = {
  text :``,
  buttons: keyboard_main
};

const sale = {
  text :`
  *Вы находитесь в меню:*  _Продажа_

  *Включен поиск по:*  _"Все категории"_
 
 
 
  *Включено уведомление по запросу:*  _"АК и Тюмень"_
  `,
  buttons: keyboard_sales
};

const purchase = {
  text :``,
  buttons: keyboard_purchase
}; 

const notifications = {
  text :`
  *Вы находитесь в меню:*  _Уведомления._
  
  Ниже отображены ваши подписки на уведомление.

  *Раздел Продажа.*
  *Запрос:*  _АК и Питер_
 
  *Раздел Проверка.*
  *Запрос:*  _https://vk.com/id12345 <отобразить ФИО продавца>_
  `,
  buttons: keyboard_notifications
}; 

const verification = {
  text :``,
  buttons: keyboard_verification
}; 

const recruiting = {
  text :`
  *Вы находитесь в меню:*  _Рекрутинг._

  Здесь можно найти себе команду или бойца
  `,
  buttons: keyboard_recruiting
};  

const team_search = {
  text :`
  *Вы находитесь в меню:*  _Поиск команды._



  В базе *<количество записей>* команд ищут бойцов.
  `,
  buttons: keyboard_team_search
}; 

const fighter_search = {
  text :`
  *Вы находитесь в меню:*  _Поиск бойца._



  В базе *<количество записей>* бойцов ищут команду.
  `,
  buttons: keyboard_fighter_search
}; 

function changePageMain(settings,main) {
const grups = JSON.parse(settings.albums).length + JSON.parse(settings.command_topics).length + JSON.parse(settings.topics).length;
const info = JSON.parse(settings.info_project);
let arr = '';
info.possibility_main.map(element => {arr += "- " + element +'\n'})
  main.text = `
  *${info.welcome_main}*

  *Мои возможности:*\n\n${arr}- База обновляется *каждые ${info.minutes} минут.*

  *Информация в моей базе:*

  *${grups}* групп и альбомов по продаже и купле.
  *${settings.albums.length}* лотов на продажу.
  *${settings.albums.length}* лотов на покупку.
  *${settings.albums.length}* рекрутов и команд.
  *${settings.albums.length}* продавцов в черном списке.
 
  Для поиска просто впиши, например _'ак47'_.
  Для сложного поиска используй _'и'_ или _'или'_. 
  Например, _'М4А1 и Москва'_.

  *Вы находитесь в главном меню*
  `
}

function changePageMainAgain(settings,main) {
const grups = JSON.parse(settings.albums).length + JSON.parse(settings.command_topics).length + JSON.parse(settings.topics).length;
const info = JSON.parse(settings.info_project);
let arr = '';
info.possibility_main.map(element => {arr += "- " + element +'\n'})
  main.text = `
  *Мои возможности:*\n\n${arr}- База обновляется *каждые ${info.minutes} минут.*

  *Вас по прежнему ожидает:*

  *${grups}* групп и альбомов по продаже и купле.
  *${settings.albums.length}* лотов на продажу.
  *${settings.albums.length}* лотов на покупку.
  *${settings.albums.length}* рекрутов и команд.
  *${settings.albums.length}* продавцов в черном списке.
 
  Для поиска просто впиши, например _'ак47'_.
  Для сложного поиска используй _'и'_ или _'или'_. 
  Например, _'М4А1 и Москва'_.

  *Вы находитесь в главном меню*
  `
}

function changePagePurchase(settings,purchase) {
  const info = JSON.parse(settings.info_project);
  purchase.text = `
  *Вы находитесь в меню:*  _Купля._

  ${info.welcome_purchase}

  *Включено уведомление по запросу:*  _"АК и Тюмень"_
  `
}

function changePageVerification(settings,verification) {
  const info = JSON.parse(settings.info_project);
  let arr = '';
  info.possibility_verification.map(element => {arr += "- " + element +'\n'})
  verification.text = `
  *Вы находитесь в меню:*  _Проверка._

  *Возможности:*\n\n${arr}


  Для проверки вставьте ссылку на страницу продавца в формате: _https://vk.com/id12345_
  `
}

function changePageNotifications(settings,notifications) {
  notifications.text = `
  *Вы находитесь в меню:*  _Уведомления._
  
  Ниже отображены ваши подписки на уведомление.

  *Раздел Продажа.*
  *Запрос:*  _АК и Питер_
 
  *Раздел Проверка.*
  *Запрос:*  _https://vk.com/id12345 <отобразить ФИО продавца>_
  `
}

function changePageTeamSearch(settings,team_search) {
  team_search.text = `
  *Вы находитесь в меню:*  _Поиск команды._



  В базе *${settings.albums.length}* команд ищут бойцов.
  `
}

function changePageFighterSearch(settings,fighter_search) {
  fighter_search.text = `
  *Вы находитесь в меню:*  _Поиск бойца._



  В базе *${settings.albums.length}* бойцов ищут команду.
  `
}

module.exports = {
  main,
  sale,
  purchase,
  notifications,
  verification,
  recruiting,
  team_search,
  fighter_search,
  keyboard_notifications_btn_msg,
  changePageMain,
  changePageMainAgain,
  changePageNotifications,
  changePageFighterSearch,
  changePageTeamSearch,
  changePagePurchase,
  changePageVerification,
}