const express = require('express');
const v8 = require('v8');
const path = require('path');
const config = require('config');
const cors = require('cors');
const app = express();
const { Router } = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const VKAPI = require ('./bot_VK_API/index');
const SERVER = config.get('Server');
const PORT = SERVER.port || 4000;

const router = require('./routers/router')
const errorMiddleware = require('./middelwares/error-middleware');

// app.use(function (req, res, next) { // CORSS
//   res.header('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// },express.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: config.get('Server.URL.CLIENT')
}));
app.use('/api',router);
app.use(errorMiddleware);

app.use('/bot',Router().get('/adminpage',(req,res,next) => {
  console.log(req,res);
  res.status(200).send(`ADMINPAGE!`)
}));

if (process.env.NODE_ENV === 'production') {
  // app.use('/',express.static(path.join(__dirname,'..','client','build')))
  // app.get('*',(req,res)=>{
  //   res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
  // })
}

app.listen(SERVER.port,() => {

  const totalHeapSize = v8.getHeapStatistics().total_available_size;
  const totalHeapSizeGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2);

  console.log('TOTAL HEAP SIZE Gb: ', totalHeapSizeGb);
  console.log(`Start server ${SERVER.port} on port`);
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
 



  // (async () => {
  //   const user = await getUser();
  
  //   const phone = '+99966XYYYY';
  //   const code = 'XXXXX';
  
  //   if (!user) {
  //     const { phone_code_hash } = await new API().sendCode(phone);
  
  //     try {
  //       const signInResult = await new API().signIn({
  //         code,
  //         phone,
  //         phone_code_hash,
  //       });
  
  //       if (signInResult._ === 'auth.authorizationSignUpRequired') {
  //         await new API().signUp({
  //           phone,
  //           phone_code_hash,
  //         });
  //       }
  //     } catch (error) {
  //       if (error.error_message !== 'SESSION_PASSWORD_NEEDED') {
  //         console.log(`error:`, error);
  
  //         return;
  //       }
  
  //       // 2FA
  
  //       const password = 'USER_PASSWORD';
  
  //       const { srp_id, current_algo, srp_B } = await new API().getPassword();
  //       const { g, p, salt1, salt2 } = current_algo;
  
  //       const { A, M1 } = await api.mtproto.crypto.getSRPParams({
  //         g,
  //         p,
  //         salt1,
  //         salt2,
  //         gB: srp_B,
  //         password,
  //       });
  
  //       const checkPasswordResult = await new API().checkPassword({ srp_id, A, M1 });
  //     }
  //   }
  // })();

  // Получаем настройки администратора
//   SESSION.getAdminItems().then(res => {

//     // ADMINSETTINGS = res;

//     // module.exports = ADMINSETTINGS;

//     // Запускаем телеграмм бота
//     // if(ADMINSETTINGS.toogle_status_bot) {
//       // TGAPI.initialBotListner();
//     // } else {
     
//       // console.log('TELEGRAMM BOT NO CONECTION...!');
//     // }
//   //   // console.log(ADMINSETTINGS.tokens)
//   //   // SESSION.putAdmin({
//   //   //   tokens:JSON.stringify({tg_tokens:["1872894305:AAE1Dfpv7gwZTfkAm6vLjvExjY_MYFSzMCk",""],vk_tokens:["5b81d9f1d23cb2fbbbe7a82999062566065f0b2545e22ad5f39003ce497add257a44ebd37fb40ebd56666","1c0c119eead79358f942431fac35659ba7d470198d613097394752b3773a5ff06aeafca50422da3eea9a9"]})
//   //     // tokens: {"tg_tokens":["1872894305:AAE1Dfpv7gwZTfkAm6vLjvExjY_MYFSzMCk",""],"vk_tokens":["24dee4bc51acfa64b0aaf53d3048e7f202122ed972ede15923823fa6d5e0630d19a2cb9c3e8ab17553253",""]}
//   //     // info_project: JSON.stringify({
//   //     //   minutes: 30,
//   //     //   welcome_main: 'Привет, страйкболист! Бот создан для тебя!',
//   //     //   welcome_purchase: 'Здесь представлены лоты, которые хотят купить.',
//   //     //   possibility_main: ['Поиск по барахолкам товара на покупку и продажу.',
//   //     //   'Настроить автоматическое уведомление по интересующим лотам.',
//   //     //   'Проверить продавца по черным спискам (не только по страйкбольным ЧС).',
//   //     //   'Найти команду или рекрута в свою.'],
//   //     //   possibility_verification: ['Проверить продавца по черному списку недобросовестных продавцов',
//   //     //   'Отобразить все актуальные лоты продавца',
//   //     //   'Подписаться на уведомление при появлении новых лотов продавца'],
//   //     // }),
//   //     // toogle_status_bot: 1,

//   //     // id_groups: JSON.stringify(['111727979','13212026','6887524','20132331','126254331',
//   //     // '22778872','69616936','191504008','105133127','13099530',
//   //     // '10368180','73640246','87969557','34059490','148842595',
//   //     // '11020514','114925462','41256869','1468310','110304795',
//   //     // '17647382','5261326','79200401','48878238','36444079',
//   //     // '35886391','11796163','6106568','153825126','120113734',
//   //     // '103059974','139732134','50712880','97057351','102290305',
//   //     // '43444443','97351418','173224752','97006205','97351401',
//   //     // '116143','120257020','58480021','73021692','108521742',
//   //     // '90688559','24058835','48082319','36860851','80891598',
//   //     // '53548055','1079','76723191','45753674','172998737',
//   //     // '30804147','90157786','82590437','27239071','28052108',
//   //     // '76629546','42520747','11571122','68657565','40158470',
//   //     // '50206538','120999154','11817748','145619887','48220891',
//   //     // '101005011','2366360','98851139','44572875','2332373',
//   //     // '1036218','37331591','33561338','6143088','32415380',
//   //     // '36397180','80033899','100886250','42772643','3862893',
//   //     // '12343135','127473952','10961618','64895827','144376667',
//   //     // '49718129','15524031','110035949','92574685','7292',
//   //     // '20399900','65529783','58634012','81473635','38384727',
//   //     // '87977237','84902792','97326361','21174315','53161199',
//   //     // '7123904','39146112','69112277','5465644','75140920',
//   //     // '1033354','4594867','131648198','81025152','62412641',
//   //     // '103543737','4149356','59196462','84043131','129988889',
//   //     // '92691121','28935276','10542295','57196020','9065881',
//   //     // '57973234','1875518','50668991','162460','67965482',
//   //     // '99806249','39016575','62834687','28597508','124093407',
//   //     // '139617029','65667780','50475824','101178242','61476368',
//   //     // '63049922','59147204','21363430','107942784','84755611',
//   //     // '73718493','36540424','4354650','55730115','135530108','31611242',
//   //     // '3812381','158636','34885542','35973646','102140277',
//   //     // '129305950','20122504','84428774','137598288','64880184',
//   //     // '104993530','93165493','56987949','19316370','176264456',
//   //     // '74904686','74887703','23026952','15931404','40531600',
//   //     // '59083037','53731541','29007502','8876144','12759227',
//   //     // '41638268','64536743','55750452','68670327','70359116',
//   //     // '75553251','35797939','78824233','67290339','76817545',
//   //     // '60317708','57480889','28445158','104225515','47131306',
//   //     // '86339345','21753624','34630159','89284371','122154239',
//   //     // '53458552','84199463','96669082','5236037','117241336',
//   //     // '22892513','36055747','143223618','76977280','38516038',
//   //     // '107137683','40818227','64122242','139606683','65246235',
//   //     // '30850982','70924311','63467354','82522157','90269664',
//   //     // '4237575','166700962','25815350','2356337','6930836',
//   //     // '44764887','48388852','101376916','155364361','45596053',
//   //     // '26678895','121884079','131873798','93929999','4975877',
//   //     // '3384457','44203357','5881010','26046143','18039023',
//   //     // '117322555','3952294','15335038','52113683','42602611',
//   //     // '50291266','57977033','89827343','50671707','103437869',
//   //     // '63236457','60292847','108072945','57190654','114485419',
//   //     // '58558603','117940621','40315097','3282887','68433682',
//   //     // '61648507','49953590','28476309','78279865','3678772',
//   //     // '57456169','37897064','26105088','125235564','10432578',
//   //     // '108847540','15805031','37983514','110389678','97610426',
//   //     // '148046207','45591686','42630782','35478491','63644355',
//   //     // '38475300','120699636','4536628','113098860','27534415',
//   //     // '44553963','35362961','58467608','26300090','90857753',
//   //     // '12030958','64275171','167674611','129840488','10076127',
//   //     // '37935528','31155707','57691882','90709278','10703851',
//   //     // '60577760','119818894','113164816','90168724','71063160']),
//   //         // })
//   //   // })
//   //   // 
//   //   // SESSION.putUser(3234525,{ id: 245880107 })
//   //   // SESSION.putUser(3234525,{ notification_request: JSON.stringify([{qrty:1}]) })
// console.log(res)
//   })




  // Получаем всех пользователей
  // SESSION.getUsers().then(res => {
  //   const { users, errors } = res;
  //   if(errors.length === 0) {
  //     // console.log(users);
  //   } else {
  //     // console.log(errors);
  //   }
  // })

    // const get_db_info_interval = setInterval(() => {
    //   console.log('Запрашиваю базу каждые 2 минуты');
    // }, getTime (2,'m')); 
    
    // const change_db_info_on_new = setInterval(() => {
    //   oldData = newData;
    // }, getTime (2,'m')); 


  // SESSION.getAdminItems().then(ADMINSETTINGS => {
    // console.log(ADMINSETTINGS);
    // if(ADMINSETTINGS.toogle_status_bot) {
      // TGAPI.initialBotListner(ADMINSETTINGS);
    // } else {
    //   console.log('TELEGRAMM BOT NO CONECTION...!');
    // }
  // })

  // const garbageInterval = setInterval(() => { SESSION.garbageSessions(); console.log('Проведена очистка сесии',SESSION.LOCAL_USER_SESSIONS) },60000 * 5)
  // const updateUsersInterval = setInterval(async() => {
  //   console.log('GLOBAL_UNIQUE_SESSIONS',SESSION.GLOBAL_UNIQUE_SESSIONS);
  //   await Promise.all(SESSION.GLOBAL_UNIQUE_SESSIONS.map(async (user) => {
  //     if(await SESSION.isUniqmUser(user.id)) {
  //       SESSION.createUser(user);
  //       console.log('Проведена запись новых пользователей');
  //     }
  //   }));
  // },32000 * 1);

// axios({
//  url: ,
//  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//  data: formUrlEncoded({
//     client_id: '***',
//     client_secret: '***',
//     grant_type: 'authorization_code',
//     redirect_uri: 'http://localhost:8080/',
//     code: '***' 
//  })
// })
// axios.get('https://oauth.vk.com/authorize?client_id=8119021&scope=274673247&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1')
// .then(function(response) {
//  console.log(response.data)
// })
// .catch(function(error) {
//  console.log(error)
// })


  // console.log('GLOBAL_UNIQUE_SESSIONS',SESSION.GLOBAL_UNIQUE_SESSIONS);
  // console.log('LOCAL_USER_SESSIONS',SESSION.LOCAL_USER_SESSIONS);
  // console.log('LOCAL_USER_SESSIONS',SESSION.LOCAL_USER_SESSIONS);
});




  
