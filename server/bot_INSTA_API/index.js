const SERVICE = require('../service_functions/index');
const INST = require('instagram-web-api');
const SESSION = require('../db/index');
var token_VK = '';
var ADMINSETTINGS = {};
const path = require('path');

const VKAPI = {
  initialVKListner: VKAPIStart
}


function chunkArray(myArray, chunk_size){
/**
* Returns an array with arrays of the given size.
*
* @param myArray {Array} Array to split
* @param chunkSize {Integer} Size of every group
*/

  var results = [];
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
};

function VKAPIStart() {

  ADMINSETTINGS = require('../server');
  token_VK = JSON.parse(ADMINSETTINGS.tokens).vk_tokens;

  
    // // Split in group of 3 items
    // var result = chunkArray([1,2,3,4,5,6,7,8], 3);
    // // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
    // console.log(result);



  // JSON.parse(ADMINSETTINGS.info_groups).map((group,count) => {
    // console.log(chunkArray(JSON.parse(ADMINSETTINGS.info_groups))[0])
    console.log(JSON.parse(ADMINSETTINGS.info_groups)[10])
  // })
  
  // Для пользователя
  const User = new VK.User(token_VK[0])
  // Для групп
  const Group = new VK.Group(token_VK[1])
  // Для приложения
  const App = new VK.App(token_VK[1])
  // Для Фото
  const Photos = new VK.Photos(token_VK[0])
  // Для Стена
  const Wall = new VK.Wall(token_VK[0])
  

function getWallPosts(idGroup, search_word, screen_name) {
  var objectResult = {
    http: [],
    data: {
      id: '',
      owner_id: '',
      date: '',
    },
    noempty: false
  }

  return new Promise((resolve, reject) => {
    Wall.api('wall.get', { owner_id: `-${idGroup}`, extended: 1}, (data, error) => {

      if (error) {
        reject(`Ошибка выполнения метода: ${error}`);
      } else {
        if(data.items !== undefined && data.items !== null &&  data.items.length !== 0) {
          for (let ind = 0; ind < data.items.length; ind++) {
            if (SERVICE.searchInPosts(search_word,data.items[ind].text)) {
              console.log(data.items[ind])
              objectResult.data.id = data.items[ind].id;
              objectResult.data.owner_id = data.items[ind].owner_id;
              objectResult.data.date = data.items[ind].date;
              objectResult.http.push(`https://vk.com/public${String(data.items[ind].owner_id).substring(1)}?w=wall${data.items[ind].owner_id}_${data.items[ind].id}`);
              objectResult.noempty = true;
            }
          }
            resolve(objectResult);
        }
      }
    });
  });
}

let groupsIpArr = JSON.parse(ADMINSETTINGS.info_groups.length);
// let groupsIpArr = [
//   "86339345","76629546","117322555","3952294","89284371","122154239",
//   "53458552","84199463","96669082","5236037","117241336","22892513",
//   "36055747","143223618","76977280","38516038","107137683","40818227",
//   "64122242","139606683","65246235","30850982","70924311","63467354",
//   "82522157","90269664","4237575","166700962","25815350","2356337",
//   "6930836","44764887","48388852","101376916","155364361","45596053",
//   "26678895","121884079","131873798","93929999","4975877","3384457",
//   "44203357","5881010","26046143","18039023","15335038","52113683",
//   "57977033","89827343","50671707","103437869","63236457","42602611",
//   "50291266","60292847","108072945","57190654","28445158","104h225515",
//   "47131306"
// ];
// console.log(groupsIpArr)
// Promise.all(groupsIpArr.map(group => {
//    getWallPosts(group.id,['ak47','ак47'],group.screen_name)
// }))
//   .then((response) => {
//     // const sortArray = [];
//     // let httpLength = 0;
//     // response.map((res) => {
//     //   if(res.noempty) {
//     //     sortArray.push(res);
//     //   }
//     // });

//     // sortArray.sort((a,b) => {
//     //   return new Date(b.data.date) - new Date(a.data.date);
//     // });

//     // sortArray.map((item) => {
//     //   httpLength += item.http.length;
//     // })
//     // const resultSearch = {
//     //   posts: sortArray,
//     //   count_groups: sortArray.length,
//     //   count_posts: httpLength,
//     // }
//     // console.log(response);
//   })

//   .catch((err) => {
//     console.log(err)
//   })

// // дождаться выполнения всех
// .then((results) => {
// console.log('results')
// console.log(results)
// })
// // минус в том, что если хоть один руганется, то слетит всё. Но как я понял, 404 или 500 это не ошибка
// .catch(err => console.error(err))


// .then(() => {
//   arrayResults = SERVICE.noDubleElements(arrayResults);
//   console.log(arrayResults)
// })


  // Photos.api('photos.getAlbums', { owner_id: '-76629546', need_system: 1, need_covers: 1, photo_sizes: 0 }, (data, error) => {
  //   if (error) {
  //      console.log('Ошибка выполнения метода', error)
  //   } else {
  //      console.log(data);
  //   }
  // })

  // Photos.api('photos.get', { owner_id: '-76629546', album_id: '203427030', rev: 0 }, (data, error) => {
  //   if (error) {
  //      console.log('Ошибка выполнения метода', error)
  //   } else {
  //      console.log(data);
  //   }
  // })


  // Group.onCommand('/help', (message) => { // Пример использование комманды
  //   message.addText('Это тестовый бот для проверки библиотеки vk-node-sdk.').send()
  // })

  // Group.onMessage((message) => {
  //   console.log('new message', message.toJSON())
  //   message.setTyping() // Отправляем статус "печатает"
  //   switch(message.body) {
  //     case 'пинг':
  //       message.addText('пошел нахуй').send()
  //       break
  //     case 'фото':
  //       message.addPhoto('https://vk.com/images/gift/875/256_1.jpg').send()
  //       break
  //     case 'документ':
  //       message.addPhoto('http://vk.com/images/gift/875/256.mp4').send()
  //       break
  //     case 'ответ':
  //       message.addText('сообщение').addForward(message.id).send()
  //       break
  //   }
  // })


  // Group.api('groups.getById', { group_ids: 76629546,fields:'activity,contacts,can_see_all_posts,city,counters,main_album_id,wall' }, (data, error) => {
  // Group.api('groups.getById', { group_ids: JSON.parse(ADMINSETTINGS.id_groups),fields:'activity,contacts,can_see_all_posts,city,counters,main_album_id,wall' }, (data, error) => {
  //   if (error) {
  //      console.log('Ошибка выполнения метода', error)
  //   } else {

  //     // SESSION.putAdmin({
  //     //     info_groups: JSON.stringify(data)
  //     // })

  //   }

  // })


      // console.log(VK.App); // ID последнего отправленного сообщения  https://vk.com/dev/photos.getAlbums?params[owner_id]=-76629546&params[need_system]=1&params[need_covers]=1&params[photo_sizes]=0&params[v]=5.131
      // console.log(VK.Group); // ID последнего отправленного сообщения
      // console.log(VK.User); // ID последнего отправленного сообщения
      // let result = [];
      // let res = [];
    
      // JSON.parse(ADMINSETTINGS.topics).map((element) => {
      //   let a = element.match(/[0-9_]\w+/g)[0];
      //   result.push(a.split('_'));
      // })

      // result.forEach((el) => {
      //   res.push(el[0])
      // })

      // let arr_2 = res.filter((item, index) => {
      //   return res.indexOf(item) === index
      // });
      // res.forEach((el) => {
      //   if()
      //   res.push(el[0].match(/\w+/g)[0])
      // })
      // ID последнего отправленного сообщения
      // for(let i = 0 ; i < arr_2.length ;i++){
      //   console.log(arr_2[i]); 
      // }
      // console.log(VK.Utils.rand()); // ID последнего отправленного сообщения
      // console.log(VK.Message); // ID последнего отправленного сообщения
    
    // })
    // .catch((err) => {
    //   console.log('ERROR_REQUST_API_VK_code :',err.error_code);
    //   console.log('ERROR_REQUST_API_VK_msg :',err.error_msg);
    // })

  
}


function getGroupInfo(idGroups) {
  Group.api(
    'groups.getById',
    {
      group_ids: JSON.parse(idGroups),
      fields:'activity,contacts,can_see_all_posts,city,counters,main_album_id,wall'
    },
    (data, error) => {
      if (error) {
        console.log('Ошибка выполнения метода', error)
      } else { return data }
    });
}

function getGroupAlbums(idGroup) {
  console.log('Ошибка выполнения метода', error);
}

module.exports = VKAPI;
