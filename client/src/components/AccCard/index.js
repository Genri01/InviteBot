import React,{ useState } from 'react';
import images from '../../assets/images';
import Button from '../Button';
import CheckIcon from '../CheckIcon';

import './style.css';

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
    info_account
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
              <div style={{ backgroundColor:false  ? '#15b90a2b' : 'rgb(249 0 0 / 21%)'}} className='inputName'>{name}</div> 
            </div>
            <div className='visualSettings'>
              <CheckIcon value={eye_cheked} icon={eye_on} onClick={(e) => { changeEye(e) }} alt='eye'/>
              <CheckIcon value={img_cheked} icon={img} onClick={(e)=>{ changeImg(e) }} name='name' id='id' alt='img'/>
            </div>
            <div className='settingBtnWrapper'>
              <Button disabled={info_account.main_settings.btn_state[0].disabled} icon={btnIcon} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'social', task: task}) }} alt='social' />
              <Button disabled={info_account.main_settings.btn_state[1].disabled} icon={setting} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'acc_settings', task: task}) }} alt='settingsAcc' />
              <Button disabled={info_account.main_settings.btn_state[2].disabled} id={id} icon={del} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'deleted', task: task}) }} alt='deleted' />
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
              <Button disabled={false} icon={play} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'play', task: task}) }} alt='play task' />
              <Button disabled={info_account.main_settings.btn_state[4].disabled} icon={setting} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'task_settings', task: task}) }} alt='settings' />
              <Button disabled={info_account.main_settings.btn_state[5].disabled} icon={info} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'help', task: task}) }} alt='help' />
            </div>
          </div>
          <div className='statusAccWrapper'></div>
        </div>
  );
}

export default AccCard;


/*   <Button disabled={info_account.main_settings.btn_state[3].disabled} icon={play} onClick={() => { onClick({ id: id, type: type, checkbox: {eye: eye_cheked,img: img_cheked}, event: 'play', task: task}) }} alt='play task' />  */