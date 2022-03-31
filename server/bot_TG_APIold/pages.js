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

const keyboard_loading = [
  [
    {
      text: 'Ожидай ⌛',
      callback_data: 'loading...'
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


let albums = [
"https://vk.com/album-111727979_226945976_0",
"https://vk.com/album-13212026_278056996_1",
"https://vk.com/album-13212026_278056983_2",
"https://vk.com/album-13212026_278056972_3",
"https://vk.com/album-13212026_278056955_5",
"https://vk.com/album-6887524_267192851_0",
"https://vk.com/album-20132331_204531499_0",
"https://vk.com/album-126254331_234847282_0",
"https://vk.com/album-22778872_192683885_1",
"https://vk.com/album-69616936_238048194_0",
"https://vk.com/album-191504008_270037495_0",
"https://vk.com/album-105133127_267463764_0",
"https://vk.com/album-13099530_177971601_3",
"https://vk.com/album-10368180_96906463_0",
"https://vk.com/album-13099530_177972509_2",
"https://vk.com/album-73640246_197564868_0",
"https://vk.com/album-87969557_268578560_2",
"https://vk.com/album-34059490_223924192_0",
"https://vk.com/album-87969557_268578541_3",
"https://vk.com/album-87969557_268578528_1",
"https://vk.com/album-148842595_245051741_1",
"https://vk.com/album-148842595_245052294_2",
"https://vk.com/album-148842595_245052181_2",
"https://vk.com/album-148842595_245052962_1",
"https://vk.com/album-148842595_245051921_1",
"https://vk.com/album-148842595_245053914_1",
"https://vk.com/album-148842595_245053435_1",
"https://vk.com/album-148842595_245054108_3", 
"https://vk.com/album-148842595_245056949_3",
"https://vk.com/album-148842595_245057284_3",
"https://vk.com/album-148842595_245056571_3",
"https://vk.com/album-148842595_245056422_2",
"https://vk.com/album-148842595_245057567_2",
"https://vk.com/album-11020514_240761882_0",
"https://vk.com/album-114925462_257502152_0",
"https://vk.com/album-41256869_231771884_0",
"https://vk.com/album-1468310_146673666_0",
"https://vk.com/album-110304795_255027268_0",
"https://vk.com/album-17647382_250643806_1",
"https://vk.com/album-17647382_250643809_2",
"https://vk.com/album-17647382_250643825_0",
"https://vk.com/album-5261326_228703803_0",
"https://vk.com/album-79200401_271347677_1",
"https://vk.com/album-48878238_204828550_0",
"https://vk.com/album-36444079_154309607_1",
"https://vk.com/album-35886391_264937180_0",
"https://vk.com/album-11796163_240327894_1",
"https://vk.com/album-6106568_60957209_0",
"https://vk.com/album-153825126_249727914_0",
"https://vk.com/album-120113734_231796817_0",
"https://vk.com/album-103059974_266213713_3",
"https://vk.com/album-139732134_242217946_1",
"https://vk.com/album-50712880_177403994_0",
"https://vk.com/album-97057351_234214604_0",
"https://vk.com/album-102290305_253030468_0",
"https://vk.com/album-103059974_266213708_2",
"https://vk.com/album-103059974_266213697_1",
"https://vk.com/album-43444443_180909014_0",
"https://vk.com/album-97351418_235750815_0",
"https://vk.com/album-173224752_267565819_1",
"https://vk.com/album-97006205_217566735_1",
"https://vk.com/album-97006205_236163598_2",
"https://vk.com/album-97351401_218053836_0",
"https://vk.com/album-116143_169321127_1",
"https://vk.com/album-116143_174833042_0",
"https://vk.com/album-120257020_242780882_0",
"https://vk.com/album-58480021_181066627_3",
"https://vk.com/album-73021692_198542094_0",
"https://vk.com/album-58480021_181066599_2",
"https://vk.com/album-58480021_181066588_3",
"https://vk.com/album-58480021_181066581_2",
"https://vk.com/album-58480021_181066572_2",
"https://vk.com/album-58480021_181066556_2",
"https://vk.com/album-58480021_181066397_3",
"https://vk.com/album-58480021_181066220_3",
"https://vk.com/album-58480021_181066205_1",
"https://vk.com/album-58480021_181066182_1",
"https://vk.com/album-58480021_181066170_1",
"https://vk.com/album-58480021_181066164_1",                                                                                                              
"https://vk.com/album-58480021_181066144_1",
"https://vk.com/album-58480021_179977417_0",
"https://vk.com/album-108521742_224465568_0",
"https://vk.com/album-90688559_213823868_0",
"https://vk.com/album-24058835_207112623_1",
"https://vk.com/album-24058835_207112857_2",
"https://vk.com/album-24058835_194736464_3",
"https://vk.com/album-48082319_226819222_0",
"https://vk.com/album-36860851_233252422_1",
"https://vk.com/album-36860851_239754369_1",
"https://vk.com/album-36860851_239731104_1",
"https://vk.com/album-36860851_239690709_3",
"https://vk.com/album-36860851_239690722_2",
"https://vk.com/album-80891598_224429450_0",
"https://vk.com/album-53548055_183544118_0",
"https://vk.com/album-1079_219476035_0",
"https://vk.com/album-1079_220734297_0",
"https://vk.com/album-1079_220863333_0",
"https://vk.com/album-76723191_202281742_0",
"https://vk.com/album-76723191_270703734_2",
"https://vk.com/album-76723191_270703729_1",
"https://vk.com/album-45753674_254192587_3",
"https://vk.com/album-45753674_254192577_2",
"https://vk.com/album-45753674_254192566_1",
"https://vk.com/album-172998737_256682202_1",
"https://vk.com/album-173224752_267565719_3",
"https://vk.com/album-173224752_267565576_2",
"https://vk.com/album-173224752_267565177_1",
"https://vk.com/album-30804147_231967580_1",
"https://vk.com/album-90157786_244825308_2",
"https://vk.com/album-90157786_244825356_3",
"https://vk.com/album-90157786_262723154_1",
"https://vk.com/album-82590437_265820440_3",
"https://vk.com/album-82590437_265820397_2",
"https://vk.com/album-82590437_265820351_1",
"https://vk.com/album-27239071_255071555_3",
"https://vk.com/album-27239071_255071572_2",
"https://vk.com/album-27239071_255071521_1",
"https://vk.com/album-28052108_238452821_1",
"https://vk.com/album-76629546_203426992_2",
"https://vk.com/album-42520747_265095861_1",
"https://vk.com/album-42520747_265095843_1",
"https://vk.com/album-42520747_265095819_1",
"https://vk.com/album-42520747_265095678_1",
"https://vk.com/album-42520747_269039952_2",
"https://vk.com/album-42520747_246931234_2",
"https://vk.com/album-42520747_265095549_2",
"https://vk.com/album-42520747_255052787_2",
"https://vk.com/album-42520747_238108558_1",
"https://vk.com/album-11571122_229924632_2",
"https://vk.com/album-11571122_227525422_3",
"https://vk.com/album-11571122_229924509_1",
"https://vk.com/album-76629546_203426857_1",
"https://vk.com/album-76629546_203426935_0",
"https://vk.com/album-11571122_218215712_3",
"https://vk.com/album-68657565_255247123_0",
"https://vk.com/album-40158470_209845988_0",
"https://vk.com/album-40158470_209842633_0",
"https://vk.com/album-40158470_209839591_0",
"https://vk.com/album-40158470_209839409_0",
"https://vk.com/album-50206538_170476212_0",
"https://vk.com/album-120999154_269000798_0",
"https://vk.com/album-11817748_107050821_0",
"https://vk.com/album-11817748_96483246_0",
"https://vk.com/album-145619887_243784048_0",
"https://vk.com/album-97057351_234214604_0",
"https://vk.com/album-17647382_250643809_0",
"https://vk.com/album-17647382_250643806_0",
"https://vk.com/album-50712880_177403994_0",
"https://vk.com/album-48220891_200851585_0",
"https://vk.com/album-101005011_241685721_0",
"https://vk.com/album-6106568_60957209_0",
"https://vk.com/album-153825126_249727914_0",
"https://vk.com/album-110304795_255027268_0",
"https://vk.com/album-2366360_125282552_0",
"https://vk.com/album-48878238_204828550_0",
"https://vk.com/album-34059490_223924192_0",
"https://vk.com/album-98851139_250235533_0",
"https://vk.com/album-98851139_250235426_0",
"https://vk.com/album-98851139_250235284_0",
"https://vk.com/album-44572875_164679534_0",
"https://vk.com/album-2332373_234849465_0",
"https://vk.com/album-108521742_224465568_0",
"https://vk.com/album-1036218_221410283_0",
"https://vk.com/album-1036218_195816419_0",            
"https://vk.com/album-1036218_127060301_0",
"https://vk.com/album-1036218_129335275_0",
"https://vk.com/album-11571122_229924703_2",
"https://vk.com/album-11571122_223227493_5",
"https://vk.com/album-36860851_239730862_5",
"https://vk.com/album-27239071_255071591_5",
"https://vk.com/album-76629546_203427030_5",
"https://vk.com/album-42520747_265095938_5",
"https://vk.com/album-97006205_253613716_5",
"https://vk.com/album-45753674_254192600_5",
"https://vk.com/album-173224752_267565748_5",
"https://vk.com/album-148842595_245054616_5",
"https://vk.com/album-87969557_268578548_5",
"https://vk.com/album-17647382_250643825_5",
"https://vk.com/album-98851139_250235639_5",
"https://vk.com/album-10368180_96906518_5"
]

let topics = [
            "https://vk.com/topic-13212026_38955494_5",
            "https://vk.com/topic-59147204_30413278_5",
            "https://vk.com/topic-82590437_31147907_5",
            "https://vk.com/topic-42520747_26970026_5",
            "https://vk.com/topic-24058835_41074995_5",
            "https://vk.com/topic-64880184_30062699_5",
            "https://vk.com/topic-104993530_32990143_5",
            "https://vk.com/topic-158636_16042971_5",
            "https://vk.com/topic-93165493_35011181_5",
            "https://vk.com/topic-73640246_33282886_5",
            "https://vk.com/topic-50206538_32258131_5",
            "https://vk.com/topic-84755611_35397374_5",
            "https://vk.com/topic-65529783_31587694_5",
            "https://vk.com/topic-5261326_22605472_5",
            "https://vk.com/topic-56987949_33858417_5",
            "https://vk.com/topic-48878238_31807841_5",            
            "https://vk.com/topic-58480021_31499697_5",
            "https://vk.com/topic-4149356_27252720_5",
            "https://vk.com/topic-19316370_31407606_5",
            "https://vk.com/topic-176264456_38966507_5",
            "https://vk.com/topic-1875518_33276230_5",
            "https://vk.com/topic-74904686_31763016_5",
            "https://vk.com/topic-82590437_31147910_0",
            "https://vk.com/topic-27239071_32793801_0",
            "https://vk.com/topic-82590437_31147910_0",
            "https://vk.com/topic-74887703_30631429_0",
            "https://vk.com/topic-33561338_28790001_0",
            "https://vk.com/topic-97351401_39309050_0",
            "https://vk.com/topic-90157786_39102296_0",
            "https://vk.com/topic-45753674_34370495_0",
            "https://vk.com/topic-23026952_25417938_0",
            "https://vk.com/topic-15931404_22873254_0",
            "https://vk.com/topic-15931404_32440206_0",   
            "https://vk.com/topic-63049922_34804193_0",
            "https://vk.com/topic-24058835_30028858_0",
            "https://vk.com/topic-40531600_30745784_0",
            "https://vk.com/topic-59083037_31254230_0",
            "https://vk.com/topic-31611242_30123933_0",
            "https://vk.com/topic-3812381_27303202_0",
            "https://vk.com/topic-76723191_35388665_0",
            "https://vk.com/topic-76723191_35388663_0",
            "https://vk.com/topic-43444443_27491781_0",
            "https://vk.com/topic-80033899_33840301_0",
            "https://vk.com/topic-1079_15625417_0",
            "https://vk.com/topic-42772643_27534370_0",
            "https://vk.com/topic-3862893_29421642_0",
            "https://vk.com/topic-53731541_33384580_0",
            "https://vk.com/topic-80891598_39479806_0",
            "https://vk.com/topic-29007502_32285350_0",
            "https://vk.com/topic-102290305_32613424_0",     
            "https://vk.com/topic-8876144_30489752_0",
            "https://vk.com/topic-12759227_25250637_0",
            "https://vk.com/topic-41638268_29676178_0",
            "https://vk.com/topic-64536743_29737589_0",
            "https://vk.com/topic-55750452_30448437_0",
            "https://vk.com/topic-68670327_33913428_0",
            "https://vk.com/topic-158636_23277349_0",
            "https://vk.com/topic-158636_384603_0",
            "https://vk.com/topic-70359116_30096690_0",
            "https://vk.com/topic-75553251_39090317_0",
            "https://vk.com/topic-35797939_33713003_0",
            "https://vk.com/topic-139732134_35233142_0",
            "https://vk.com/topic-144376667_37258026_0",
            "https://vk.com/topic-93165493_33118844_0",
            "https://vk.com/topic-93165493_33118849_0",
            "https://vk.com/topic-93165493_33118846_0",
            "https://vk.com/topic-49718129_38835487_0",  
            "https://vk.com/topic-73640246_33282879_0",
            "https://vk.com/topic-78824233_39371989_0",
            "https://vk.com/topic-67290339_36093064_0",
            "https://vk.com/topic-110035949_36296024_0",
            "https://vk.com/topic-99806249_32766159_0",
            "https://vk.com/topic-68657565_29874335_0",
            "https://vk.com/topic-92574685_32630276_0",
            "https://vk.com/topic-40158470_30581772_0",
            "https://vk.com/topic-76817545_30776856_0",
            "https://vk.com/topic-60317708_30462414_0",
            "https://vk.com/topic-57480889_32122745_0",
            "https://vk.com/topic-20399900_40150053_0",
            "https://vk.com/topic-50206538_32258122_0",
            "https://vk.com/topic-34885542_30211685_0",
            "https://vk.com/topic-28445158_26399798_0",
            "https://vk.com/topic-111727979_33475208_0",
            "https://vk.com/topic-104225515_38940316_0",          
            "https://vk.com/topic-11817748_22409757_0",
            "https://vk.com/topic-47131306_27815255_0",
            "https://vk.com/topic-86339345_32147514_0",
            "https://vk.com/topic-21753624_25969624_0",
            "https://vk.com/topic-34630159_29223062_0",
            "https://vk.com/topic-89284371_31914042_0",
            "https://vk.com/topic-116143_8339333_0",
            "https://vk.com/topic-122154239_34182363_0",
            "https://vk.com/topic-65529783_29958915_0",
            "https://vk.com/topic-101005011_34986070_0",
            "https://vk.com/topic-53458552_29588802_0",
            "https://vk.com/topic-84199463_40895526_0",
            "https://vk.com/topic-96669082_34310627_0",
            "https://vk.com/topic-5236037_38205973_0",
            "https://vk.com/topic-5236037_22133135_0",
            "https://vk.com/topic-5261326_21903135_0",
            "https://vk.com/topic-117241336_39478734_0",           
            "https://vk.com/topic-102140277_35314380_0",
            "https://vk.com/topic-22892513_24123772_0",
            "https://vk.com/topic-81473635_33525434_0",
            "https://vk.com/topic-2366360_22872967_0",
            "https://vk.com/topic-36055747_28635082_0",
            "https://vk.com/topic-56987949_33858425_0",
            "https://vk.com/topic-38384727_43285948_0",
            "https://vk.com/topic-143223618_35385530_0",
            "https://vk.com/topic-48878238_29925803_0",
            "https://vk.com/topic-20122504_36975027_0",
            "https://vk.com/topic-20122504_36974959_0",
            "https://vk.com/topic-107137683_33950425_0",
            "https://vk.com/topic-40818227_26883077_0",
            "https://vk.com/topic-21174315_36187430_0",
            "https://vk.com/topic-2332373_20017439_0",
            "https://vk.com/topic-64122242_36156856_0",
            "https://vk.com/topic-139606683_35494906_0",     
            "https://vk.com/topic-7123904_37895236_0",
            "https://vk.com/topic-39146112_35010236_0",
            "https://vk.com/topic-65246235_34790520_0",
            "https://vk.com/topic-30850982_32137805_0",
            "https://vk.com/topic-70924311_31444034_0",
            "https://vk.com/topic-1468310_23501218_0",
            "https://vk.com/topic-63467354_30764200_0",
            "https://vk.com/topic-82522157_32673132_0",
            "https://vk.com/topic-5465644_10784394_0",
            "https://vk.com/topic-90269664_37749321_0",
            "https://vk.com/topic-4237575_21342095_0",
            "https://vk.com/topic-108521742_34029197_0",
            "https://vk.com/topic-75140920_32253575_0",
            "https://vk.com/topic-1033354_22470655_0",
            "https://vk.com/topic-166700962_38639308_0",
            "https://vk.com/topic-1036218_20216760_0",
            "https://vk.com/topic-21363430_26881678_0",           
            "https://vk.com/topic-25815350_27058853_0",
            "https://vk.com/topic-84902792_31732543_0",
            "https://vk.com/topic-4594867_12381296_0",
            "https://vk.com/topic-2356337_21893456_0",
            "https://vk.com/topic-6930836_35345890_0",
            "https://vk.com/topic-6930836_35345892_0",
            "https://vk.com/topic-44764887_30342151_0",
            "https://vk.com/topic-48388852_31735714_0",
            "https://vk.com/topic-13099530_22120208_0",
            "https://vk.com/topic-101376916_32220562_0",
            "https://vk.com/topic-39016575_28274927_0",
            "https://vk.com/topic-155364361_36180021_0",
            "https://vk.com/topic-45596053_37720858_0",
            "https://vk.com/topic-11796163_21953124_0",
            "https://vk.com/topic-26678895_26539956_0",
            "https://vk.com/topic-121884079_36095692_0",
            "https://vk.com/topic-131873798_37040398_0",
            "https://vk.com/topic-93929999_39771550_0",
            "https://vk.com/topic-4975877_32070681_0",
            "https://vk.com/topic-3384457_22785443_0",
            "https://vk.com/topic-44203357_27874708_0",
            "https://vk.com/topic-81025152_36194343_0",
            "https://vk.com/topic-5881010_35571311_0",
            "https://vk.com/topic-26046143_24693141_0",
            "https://vk.com/topic-18039023_26432249_0",
            "https://vk.com/topic-117322555_33598365_0",
            "https://vk.com/topic-3952294_12364474_0",
            "https://vk.com/topic-15335038_26485304_0",
            "https://vk.com/topic-52113683_29894878_0",
            "https://vk.com/topic-42602611_27605339_0",
            "https://vk.com/topic-50291266_33957461_0",
            "https://vk.com/topic-57977033_33118307_0",
            "https://vk.com/topic-89827343_34981462_0",
            "https://vk.com/topic-50671707_43773511_0",                                                                                                     
            "https://vk.com/topic-103437869_33439717_0",
            "https://vk.com/topic-63236457_29537610_0",
            "https://vk.com/topic-60292847_29477811_0",
            "https://vk.com/topic-4149356_35918048_0",
            "https://vk.com/topic-108072945_34079161_0",
            "https://vk.com/topic-57190654_29216732_0",
            "https://vk.com/topic-114485419_37276313_0",
            "https://vk.com/topic-76977280_35899017_0",
            "https://vk.com/topic-38516038_30818305_0",
            "https://vk.com/topic-27534415_25357363_0",
            "https://vk.com/topic-58558603_30933401_0",
            "https://vk.com/topic-117940621_34086010_0",
            "https://vk.com/topic-40315097_26671498_0",
            "https://vk.com/topic-19316370_27675159_0",
            "https://vk.com/topic-3282887_34118207_0",
            "https://vk.com/topic-3282887_28541084_0",
            "https://vk.com/topic-68433682_30198731_0",       
            "https://vk.com/topic-61648507_29061516_0",
            "https://vk.com/topic-49953590_35205601_0",
            "https://vk.com/topic-28476309_27995689_0",
            "https://vk.com/topic-78279865_31531616_0",
            "https://vk.com/topic-3678772_8903632_0",
            "https://vk.com/topic-57456169_29575628_0",
            "https://vk.com/topic-37897064_28337433_0",
            "https://vk.com/topic-62834687_32065596_0",
            "https://vk.com/topic-26105088_27906258_0",
            "https://vk.com/topic-125235564_35170436_0",
            "https://vk.com/topic-10432578_32347540_0",
            "https://vk.com/topic-28935276_26154193_0",
            "https://vk.com/topic-108847540_33735284_0",
            "https://vk.com/topic-10542295_31539907_0",
            "https://vk.com/topic-57196020_31543109_0",
            "https://vk.com/topic-57196020_28764178_0",
            "https://vk.com/topic-9065881_21821041_0",
            "https://vk.com/topic-15805031_22532455_0",
            "https://vk.com/topic-37983514_26251711_0",
            "https://vk.com/topic-110389678_33358562_0",
            "https://vk.com/topic-97610426_31966289_0",
            "https://vk.com/topic-148046207_37591297_0",
            "https://vk.com/topic-45591686_28656751_0",
            "https://vk.com/topic-42630782_30278972_0",
            "https://vk.com/topic-57973234_31318876_0",
            "https://vk.com/topic-1875518_33276228_0",
            "https://vk.com/topic-35478491_30477953_0",
            "https://vk.com/topic-63644355_34993150_0",
            "https://vk.com/topic-74904686_31763011_0",
            "https://vk.com/topic-38475300_28143000_0",
            "https://vk.com/topic-120699636_35138563_0",
            "https://vk.com/topic-4536628_40170201_0",
            "https://vk.com/topic-113098860_35367571_0",
            "https://vk.com/topic-44553963_31114217_0",                                                                                                                
            "https://vk.com/topic-35362961_26492761_0",
            "https://vk.com/topic-58467608_32991392_0",
            "https://vk.com/topic-162460_26176534_0",
            "https://vk.com/topic-26300090_33258545_0",
            "https://vk.com/topic-90857753_40010887_0",
            "https://vk.com/topic-28597508_25164792_0",
            "https://vk.com/topic-12030958_30843898_0",
            "https://vk.com/topic-64275171_39523119_0",
            "https://vk.com/topic-167674611_39169301_0",
            "https://vk.com/topic-129840488_34599987_0",
            "https://vk.com/topic-10076127_35510913_0",
            "https://vk.com/topic-37935528_31119961_0",
            "https://vk.com/topic-31155707_34005151_0",
            "https://vk.com/topic-57691882_30723482_0",
            "https://vk.com/topic-90709278_32780691_0",
            "https://vk.com/topic-162460_26176534_0",
            "https://vk.com/topic-26300090_33258545_0",
            "https://vk.com/topic-10703851_28077570_0",
            "https://vk.com/topic-60577760_40178417_0",
            "https://vk.com/topic-119818894_33433856_0",
            "https://vk.com/topic-113164816_34138962_0",
            "https://vk.com/topic-90168724_32118464_0",
            "https://vk.com/topic-71063160_29980761_0",
            "https://vk.com/topic-53161199_28903827_0"
]

let comand_topic = [
            "https://vk.com/topic-82590437_31147902_1",
            "https://vk.com/topic-11571122_30472345_1",
            "https://vk.com/topic-37331591_31765000_1",
            "https://vk.com/topic-36860851_26937817_1",
            "https://vk.com/topic-27239071_27380277_1",
            "https://vk.com/topic-82590437_31147905_1",
            "https://vk.com/topic-33561338_34649573_1",
            "https://vk.com/topic-6143088_21632739_1",
            "https://vk.com/topic-90157786_31419630_1",
            "https://vk.com/topic-32415380_28781803_1",
            "https://vk.com/topic-76723191_38328444_1",
            "https://vk.com/topic-36397180_33541757_1",
            "https://vk.com/topic-80033899_33567840_1",
            "https://vk.com/topic-69616936_34198440_1",
            "https://vk.com/topic-1079_27178676_1",
            "https://vk.com/topic-100886250_40346602_1",
            "https://vk.com/topic-42772643_29551167_1",
            "https://vk.com/topic-3862893_27088300_1",
            "https://vk.com/topic-80891598_39479769_1",
            "https://vk.com/topic-12343135_22675985_1",
            "https://vk.com/topic-127473952_35516006_1",
            "https://vk.com/topic-10961618_22817114_1",
            "https://vk.com/topic-64895827_29733169_1",
            "https://vk.com/topic-144376667_37259642_1",               	    
            "https://vk.com/topic-49718129_38835491_1",
            "https://vk.com/topic-15524031_24040499_1",
            "https://vk.com/topic-110035949_35218267_1",
            "https://vk.com/topic-92574685_32630300_1",
            "https://vk.com/topic-7292_39822871_1",
            "https://vk.com/topic-20399900_40150041_1",
            "https://vk.com/topic-11817748_22632743_1",
            "https://vk.com/topic-116143_344481_1",
            "https://vk.com/topic-65529783_31154202_1",
            "https://vk.com/topic-48220891_30267511_1",
            "https://vk.com/topic-58634012_32457803_1",
            "https://vk.com/topic-81473635_33405526_1",
            "https://vk.com/topic-38384727_36695236_1",
            "https://vk.com/topic-87977237_42959322_1",
            "https://vk.com/topic-84902792_32478554_1",
            "https://vk.com/topic-97326361_32098025_1",
            "https://vk.com/topic-98851139_32691798_1",                           	   
            "https://vk.com/topic-21174315_27652941_1",
            "https://vk.com/topic-53161199_39609101_1",
            "https://vk.com/topic-7123904_32005786_1",
            "https://vk.com/topic-39146112_27853688_1",
            "https://vk.com/topic-69112277_31501162_1",
            "https://vk.com/topic-5465644_33164602_1",
            "https://vk.com/topic-75140920_32253592_1",
            "https://vk.com/topic-1033354_39223923_1",
            "https://vk.com/topic-4594867_16091954_1",
            "https://vk.com/topic-35886391_26510878_1",
            "https://vk.com/topic-13099530_29636254_1",
            "https://vk.com/topic-13099530_23115370_1",
            "https://vk.com/topic-131648198_39060833_1",
            "https://vk.com/topic-81025152_33972737_1",
            "https://vk.com/topic-62412641_35413245_1",
            "https://vk.com/topic-103543737_38381916_1",
            "https://vk.com/topic-4149356_24132262_1",   	       		    
            "https://vk.com/topic-59196462_35286352_1",
            "https://vk.com/topic-84043131_38559647_1",
            "https://vk.com/topic-6887524_16195090_1",
            "https://vk.com/topic-129988889_39455398_1",
            "https://vk.com/topic-92691121_32525533_1",
            "https://vk.com/topic-28935276_39626561_1",
            "https://vk.com/topic-10542295_40792876_1",
            "https://vk.com/topic-57196020_28755005_1",
            "https://vk.com/topic-9065881_25368183_1",
            "https://vk.com/topic-57973234_28559548_1",
            "https://vk.com/topic-1875518_33841711_1",
            "https://vk.com/topic-50668991_27986422_1",
            "https://vk.com/topic-162460_17339575_1",
            "https://vk.com/topic-67965482_39581226_1",
            "https://vk.com/topic-11571122_30472345_0",
            "https://vk.com/topic-82590437_31147902_0",
            "https://vk.com/topic-90157786_31419629_1",
            "https://vk.com/topic-36397180_33541797_0",
            "https://vk.com/topic-69616936_39915008_0",
            "https://vk.com/topic-100886250_40346596_0",
            "https://vk.com/topic-99806249_32850206_0",
            "https://vk.com/topic-81473635_33194103_0",
            "https://vk.com/topic-48878238_30942828_0",
            "https://vk.com/topic-39016575_34827155_0",
            "https://vk.com/topic-62412641_35503070_0",
            "https://vk.com/topic-62834687_30474362_0",
            "https://vk.com/topic-92691121_31808506_0",
            "https://vk.com/topic-28597508_25118364_0"
]

let scammers = [
            "https://vk.com/topic-13212026_33047884",
            "https://vk.com/topic-124093407_35524340",
            "https://vk.com/topic-139617029_35672871",
            "https://vk.com/topic-65667780_29606801",
            "https://vk.com/topic-50475824_31300171",
            "https://vk.com/topic-101178242_35836485",
            "https://vk.com/topic-61476368_29541041",
            "https://vk.com/topic-76723191_35110346",
            "https://vk.com/topic-63049922_34566029",
            "https://vk.com/topic-59147204_30947799",
            "https://vk.com/topic-21363430_33226725",
            "https://vk.com/topic-59147204_30603250",
            "https://vk.com/topic-76629546_30818886",
            "https://vk.com/topic-59147204_30947799",
            "https://vk.com/topic-107942784_32728911",
            "https://vk.com/topic-84755611_33545287",
            "https://vk.com/topic-84755611_31644978",
            "https://vk.com/topic-73718493_31775489",
            "https://vk.com/topic-24058835_34206688",
            "https://vk.com/topic-5261326_35798307",                                                                                                                         
            "https://vk.com/topic-80891598_39479811",
            "https://vk.com/topic-33561338_33170252",
            "https://vk.com/topic-4594867_34331902",
            "https://vk.com/topic-148842595_40068885",
            "https://vk.com/topic-36540424_32687632",
            "https://vk.com/topic-59147204_30947799",
            "https://vk.com/topic-11571122_31851982",
            "https://vk.com/topic-33561338_33170252",
            "https://vk.com/topic-36540424_32687632",
            "https://vk.com/topic-4354650_34868567",
            "https://vk.com/topic-42520747_27335459",
            "https://vk.com/topic-90157786_31633766",
            "https://vk.com/topic-55730115_34171333",
            "https://vk.com/topic-32415380_31463403",
            "https://vk.com/topic-63049922_30946187",
            "https://vk.com/topic-135530108_35539400",
            "https://vk.com/topic-31611242_30508455",                                                                                                                        
            "https://vk.com/topic-3812381_31302741",
            "https://vk.com/topic-158636_32656809",
            "https://vk.com/topic-68657565_32035245",
            "https://vk.com/topic-92574685_32743600",
            "https://vk.com/topic-50206538_32507412",
            "https://vk.com/topic-34885542_30508460",
            "https://vk.com/topic-35973646_30794452",
            "https://vk.com/topic-84755611_33545287",
            "https://vk.com/topic-84755611_31644978",
            "https://vk.com/topic-58634012_31144422",
            "https://vk.com/topic-102140277_35969528",
            "https://vk.com/topic-129305950_34297793",
            "https://vk.com/topic-21363430_33226725",
            "https://vk.com/topic-20122504_35776042",
            "https://vk.com/topic-39146112_33409948",
            "https://vk.com/topic-69112277_44004278",
            "https://vk.com/topic-108521742_34476604",
            "https://vk.com/topic-27239071_30992796",
            "https://vk.com/topic-4594867_34331902",
            "https://vk.com/topic-84428774_31126764",
            "https://vk.com/topic-137598288_35217949"
]









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
  keyboard_loading,
  changePageMain,
  changePageMainAgain,
  changePageNotifications,
  changePageFighterSearch,
  changePageTeamSearch,
  changePagePurchase,
  changePageVerification,
  albums,
  comand_topic,
  topics,
  scammers
}





