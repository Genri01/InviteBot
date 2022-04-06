import React,{ useState } from 'react';
import images from '../../assets/images';
import Button from '../Button';
import CheckIcon from '../CheckIcon';

import './style.css';
//https://oauth.vk.com/authorize?client_id=6121396&redirect_uri=https://api.vk.com/blank.html&display=page&scope=notify,friends,photos,audio,video,stories,pages,+256,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,email,market&response_type=token
function AccCard (props) {

  const {
    info,
    eye_on,
    img,
    del,
    play,
    setting,
    vkbtn,
    tgbtn,
    instbtn
  } = images;
  
  const {
    id,
    name,
    onClick,
    type,
  } = props;

  const [eye_cheked,changeEye] = useState({ check:false, name:'eye' });
  const [img_cheked,changeImg] = useState({ check:false, name:'img' });
  const [task,setTask] = useState(0);

  let btnIcon = type === "vk" ? vkbtn : type === "inst" ? instbtn : tgbtn;

  const tasksTitle = [{
    type: "vk",
    title: [
      "Выбрать задание из списка",
      "Расписание",
      "Автоответчик на подтвержденные заявки в друзья",
      "Автосекретарь",
      "Лайкинг и просмотр Stories друзей",
      "Автоответчик на входящие заявки в друзья",
      "Отправка сообщение вКонтакте по списку пользователей",
      "Работа по возможным друзьям",
      "Ручная сортировка возможных друзей",
      "Работа по целевой аудитории из списка",
      "Публикация историй",
      "Поиск целевой аудитории (парсер)",
      "Отправка сообщений в сообщества из списка",
    ]
  },{
    type: "tg",
    title: [
      "Выбрать задание из списка",
      "Расписание",
      "Отправка сообщение в Телеграмм по списку пользователей",
      "Поиск целевой аудитории (парсер)",
      "Инвайтинг в группы Телеграмм",
      "Автосекретарь",
    ]
  },{
    type: "inst",
    title: [
      "Выбрать задание из списка",
      "Расписание",
      "Лайкинг новостей",
      "Работа по целевой аудитории (Подписки лайки и просмотр Сториз)",
      "Поиск целевой аудитории (парсер)",
      "Приветствие в директ инстаграмм",
      "Отмена подписки (Отписки)",
      "Автоответчик на входящие заявки в друзья",
      "Отправка сообщение в директ инстаграмм по списку пользователей",
    ]
  },
  ]

  let task_options = []

  tasksTitle.map((item,i) => {
    if (item.type === type) {
      task_options = tasksTitle[i];
      return false;
    }
    return false;
  }) 

  return (
    <div className="itemAccWrapper">
          <div className='nameAccWrapper'>
            <div className='nameWrapper'>
              <div className='orederNumber'>{id}</div>  
              <div className='inputName'>{name}</div>  
            </div>
            <div className='visualSettings'>
              <CheckIcon value={eye_cheked} icon={eye_on} onClick={(e) => { changeEye(e) }} alt='eye'/>
              <CheckIcon value={img_cheked} icon={img} onClick={(e)=>{ changeImg(e) }} name='name' id='id' alt='img'/>
            </div>
            <div className='settingBtnWrapper'>
              <Button icon={btnIcon} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'social', task: task}) }} alt='social' />
              <Button icon={setting} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'acc_settings', task: task}) }} alt='settingsAcc' />
              <Button id={id} icon={del} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'deleted', task: task}) }} alt='deleted' />
            </div>
          </div>
          <div className='taskAccWrapper'>
            <div className='selectTaskWrapper'>
              <select onChange={(e)=> { setTask(e.target.value) }} className='selectTask'>
                {
                  task_options.title.map((item,i) => (
                    <option value={i} key={i}>{item}</option>
                  ))
                }
              </select>
            </div>
            <div className='settingBtnWrapper'>
              <Button icon={play} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'play', task: task}) }} alt='play task' />
              <Button icon={setting} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'task_settings', task: task}) }} alt='settings' />
              <Button icon={info} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'help', task: task}) }} alt='help' />
            </div>
          </div>
          <div className='statusAccWrapper'></div>
        </div>
  );
}

export default AccCard;
