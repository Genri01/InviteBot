import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accounts_vk } from '../../redux/selectors'
import images from '../../assets/images';
import Button from '../Button';
import CheckIcon from '../CheckIcon';
import { appGetAccountsVK } from '../../redux/actions/app.js';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import './style.css';
//https://oauth.vk.com/authorize?client_id=6121396&redirect_uri=https://api.vk.com/blank.html&display=page&scope=notify,friends,photos,audio,video,stories,pages,+256,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,email,market&response_type=token
function AccCard (props) {

  const {
    vk,
    tgbtn,
    instbtn,
    vkbtn,
    inst,
    info,
    exit,
    profile,
    eye_on,
    eye_off,
    img,
    del,
    pause,
    add,
    play,
    setting,
    stop
  } = images;
  const {
    id,
    name,
    accinfo,
    type,
    acc,
  } = props;

  const {
    tasks
  } = accinfo;

  let btnIcon = type === "vk" ? vkbtn : type === "inst" ? instbtn : tgbtn;
  // console.log(useSelector(accounts_vk))
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

  let taskarr = []

  tasksTitle.map((item,i) => {
    if (item.type === type){
      taskarr =  tasksTitle[i]
    }
  }) 

  // useInvalidUrlAccess();

  const [visibleVK, setVisibleVK] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const http = useHttp();

  async function getTokenVk() {
    const url = 'https://oauth.vk.com/token?grant_type=password&client_id=2274003&client_secret=hHbZxrka2uZ6jB1inYsH&username=+79626339565&password=misha07072013&v=5.131&2fa_supported=1';
    const response = await http.request(url,{});
    console.log(response)
  } 

  return (
    <div className="itemAccWrapper">
          <div className='nameAccWrapper'>
            <div className='nameWrapper'>
              <div className='orederNumber'>{id}</div>  
              <div className='inputName'>{name}</div>  
            </div>
            <div className='visualSettings'>
              <CheckIcon icon={eye_on} onClick={()=>{console.log('sf')}} name='name' id='id' alt='eye'/>
              <CheckIcon icon={img} onClick={()=>{console.log('sf')}} name='name' id='id' alt='img'/>
            </div>
            <div className='settingBtnWrapper'>
              <Button icon={btnIcon} onClick={()=>{getTokenVk()}} alt='social' />
              <Button icon={setting} onClick={()=>{}} alt='settingsAcc' />
              <Button id={id} icon={del} onClick={(e) => {
                acc.splice(Number(e.target.id)-1,1);
                dispatch(appGetAccountsVK(acc));}} alt='deleted' />
            </div>
          </div>
          <div className='taskAccWrapper'>
            <div className='selectTaskWrapper'>
              <select className='selectTask'>
                {
                  taskarr.title.map((item,i) => (
                    <option key={i}>{item}</option>
                  ))
                }
              </select>
            </div>
            <div className='settingBtnWrapper'>
              <Button icon={play} onClick={()=>{console.log('sf')}} alt='play task' />
              <Button icon={setting} onClick={()=>{console.log('sf')}} alt='settings' />
              <Button icon={info} onClick={()=>{console.log('sf')}} alt='help' />
            </div>
          </div>
          <div className='statusAccWrapper'></div>
        </div>
  );
}

export default AccCard;
