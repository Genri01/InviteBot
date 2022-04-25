import React from 'react';
import AccCard from '../AccCard';
import AddAccount from '../AddAccount';
import './style.css';

export default function VisualAccountsComponent (props) {

  const { accounts, typeScreen, onClick, onChangeTaskId, task } = props;
 
  return (
    <div className="account_wrapper" >
      <div className='account_active_wrapper'>
        <div className='account_title'>Активные:</div>
        <div className='account_active_container'>
          <AddAccount type={typeScreen} accounts={accounts} />
          {
            accounts.map((item,i) => {
             if(task.id_acc === Number(item.id)) {
              //  console.log('task change number '+item.id)
               if (task.task_id === 0) {
                item.main_settings.btn_state[4].disabled = true
                item.main_settings.btn_state[3].disabled = true
               }

               if (task.task_id !== 0 && item.isLogining) {
                item.main_settings.btn_state[4].disabled = false
                item.main_settings.btn_state[3].disabled = false
               }
             }
              return <AccCard 
                task={task} 
                onChangeTaskId={onChangeTaskId} 
                onClick={e => onClick(e)} 
                key={i} 
                active={item.isLogining} 
                info_account={item} 
                id={item.id} 
                name={item.main_settings.name} 
                type={typeScreen}
                status={item.task_settings.status_tasks} 
              />
            })
          }
        </div>
      </div>
      {/* <div className='account_blocked_wrapper'>
        <div className='account_title'>Заблокированные:</div>
          <div className='account_blocked_container'>
            <div className='account_blocked_item'>
              <div className='account_blocked_oreder'>1</div>
              <div className='account_blocked_name'>vk-inboxwhite</div>
            </div>
          </div>
      </div> */}
    </div>
  );
}

