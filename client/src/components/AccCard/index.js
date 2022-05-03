import React,{ useState } from 'react';
import images from '../../assets/images';
import Button from '../Button';
import Loader from '../Loader'
import './style.css';

function AccCard (props) {

  const {
    info,
    del,
    play,
    setting,
    vkbtn
  } = images;
  
  const {
    id,
    name,
    onClick,
    info_account,
    active,
    onChangeTaskId,
    task,
    status,
    accounts         
  } = props;

  // const [task_local,setTask] = useState(0);

  const tasksTitle = [
    "Выбрать задание из списка",
    "Автоответчик на подтвержденные заявки в друзья",
    "Лайкинг друзей",
    "Автоответчик на входящие заявки в друзья",
    "Работа по целевой аудитории из списка",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    // "Работа по целевой аудитории из списка",
    "Отправка сообщений в сообщества из списка",
  ]

  return (
    <div className="itemAccWrapper">
          {
            info_account.isLoadingTask && <Loader text='Выполняется' style={{ height: '100%' }} />
          }
          <div className='nameAccWrapper'>
            <div className='nameWrapper'>
              <div className='orederNumber'>{id}</div>  
              <div style={{ backgroundColor: active  ? '#15b90a2b' : 'rgb(249 0 0 / 21%)'}} className='inputName'>{name}</div> 
            </div>
            <div className='settingBtnWrapper'>
              <Button disabled={info_account.main_settings.btn_state[0].disabled} icon={vkbtn} onClick={() => { onClick({ id: id, event: 'social', task }) }} alt='social' />
              <Button disabled={info_account.main_settings.btn_state[1].disabled} icon={setting} onClick={() => { onClick({ id: id, event: 'acc_settings', task }); info_account.task_settings.status_tasks.initial_state = 'Задание не выбрано:'}} alt='settingsAcc' />
              <Button disabled={info_account.main_settings.btn_state[2].disabled} id={id} icon={del} onClick={() => { onClick({ id: id, event: 'deleted', task }) }} alt='deleted' />
            </div>
          </div>
          <div className='taskAccWrapper'>
            <div className='selectTaskWrapper'>
              <select 
                value={task}
                onChange={(e)=> {
                  let arr = [...accounts];
                  arr = arr.filter(item => { return (item.id !== info_account.id)});
                  info_account.task_settings.task_value = Number(e.target.value);
                  info_account.task_settings.status_tasks.initial_state = `${e.target.value !== '0' ?  'Задание: ' + tasksTitle[e.target.value] + ' готово к запуску' : 'Задание не выбрано:'}`;
                  arr=[...arr,info_account];
                  arr.sort((a,b) => {
                    let nameA = Object.keys(a)[0];
                    let nameB = Object.keys(b)[0];

                    if (a[nameA] < b[nameB]) {
                      return -1;
                    }

                    if (a[nameA] > b[nameB]) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                  })

                  onChangeTaskId(arr); 
                }} 
                className='selectTask'
              > 
                {
                  tasksTitle.map((item,i) => (
                    <option value={i} key={i}>{item}</option>
                  ))
                }
              </select>
            </div>
            <div className='settingBtnWrapper'>
              <Button disabled={info_account.main_settings.btn_state[3].disabled} icon={play} onClick={() => { onClick({ id: id, event: 'play', task }); }} alt='play task' /> 
              <Button disabled={info_account.main_settings.btn_state[4].disabled} icon={setting} onClick={() => { onClick({ id: id, event: 'task_settings', task }) }} alt='settings' />
              <Button disabled={info_account.main_settings.btn_state[5].disabled} icon={info} onClick={() => { onClick({ id: id, event: 'help', task }) }} alt='help' />
            </div>
          </div>
          <div className='statusAccWrapper'>
            {status.initial_state}
          </div>
        </div>
  );
}

export default AccCard;
