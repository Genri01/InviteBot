import React from 'react';
import MainSettingsComponent from '../settings_components/MainSettingsComponent';
import TaskSettingsComponent from '../settings_components/TaskSettingsComponent';
import './style.css';

export default function VisualSettingsComponent (props) {

  const { accounts, type_settings, onClose } = props;

  return (
    <div className="visual_settings_wrapper" >
      <div className='visual_settings_container'>
        {
          type_settings.type === 'main' ?
          <MainSettingsComponent id_acc={type_settings.id_acc} accounts={accounts} onClose={onClose} /> : 
          <TaskSettingsComponent id_acc={type_settings.id_acc} accounts={accounts} onClose={onClose} />
        }
      </div>
    </div>
  );
}
