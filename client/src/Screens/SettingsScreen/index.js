import React from 'react';
import AddingComponent from '../../components/settings_components/AddingComponent';
import AnswerComponentArea from '../../components/settings_components/AnswerComponentArea';
import AudioComponent from '../../components/settings_components/AudioComponent';
import InputComponentItem from '../../components/settings_components/InputComponentItem';
import RadialBtnComponent from '../../components/settings_components/RadialBtnComponent';
import SelectComponentItem from '../../components/settings_components/SelectComponentItem';
import TitleComponent from '../../components/settings_components/TitleComponent';
import CountInput from '../../components/settings_components/CountInput';
import DelayComponent from '../../components/settings_components/DelayComponent';
import RandomizeComponentArea from '../../components/settings_components/RandomizeComponentArea';
import ManualSelect from '../../components/settings_components/ManualSelect';
import AccountSettingsCopy from '../AccountSettingsCopy';
import './style.css';


export default function SettingsScreen() {
  return (
    <div className="settings_screen" >
      <div className='settings_wrapper'>
        <AddingComponent >
          <AnswerComponentArea />
          <AudioComponent />
          <InputComponentItem />
          <SelectComponentItem />
          <RadialBtnComponent >
            <TitleComponent title="dcsdcdcsdc" />
          </RadialBtnComponent>
          <CountInput />
          <DelayComponent />
          <RandomizeComponentArea />
          <AccountSettingsCopy />
          <ManualSelect />
        </AddingComponent>
      </div>
    </div>
  );
}