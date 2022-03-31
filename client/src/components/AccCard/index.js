import React from 'react';
import images from '../../assets/images';
import Button from '../Button';
import CheckIcon from '../CheckIcon';
import { connect } from 'react-redux';
import {
  appGetAccountsVK,
} from '../../redux/actions/app.js';
import './style.css';

class AccCard extends React.Component {

    render(){
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
        putAccountsVK
      } = this.props;

      const {
        tasks
      } = accinfo;

      let btnIcon = type === "vk" ? vkbtn : type === "inst" ? instbtn : tgbtn;
      
      const tasksTitle = [{
          type: "vk",
          title: [
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
            "Расписание",
            "Отправка сообщение в Телеграмм по списку пользователей",
            "Поиск целевой аудитории (парсер)",
            "Инвайтинг в группы Телеграмм",
            "Автосекретарь",
          ]
        },{
          type: "inst",
          title: [
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
              <Button icon={btnIcon} onClick={()=>{console.log('sf')}} alt='social' />
              <Button icon={setting} onClick={()=>{}} alt='settingsAcc' />
              <Button id={id} icon={del} onClick={(e) => {
                acc.splice(Number(e.target.id)-1,1);
                putAccountsVK(acc);}} alt='deleted' />
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
}
const mapStateToProps = state => {

  const { accounts_vk: { newDataAccountVK: { acc } } } = state

  return {
    acc
  }
}

const mapDispatchToProps = dispatch => {
  return {
    putAccountsVK: (data)=>dispatch(appGetAccountsVK(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccCard);
