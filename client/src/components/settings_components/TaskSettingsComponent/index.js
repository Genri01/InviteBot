import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SheduleSettingsPage from '../task_settings_pages/SheduleSettingsPage';
import AnswerSettingsPage from '../task_settings_pages/AnswerSettingsPage';
import AutoSecretarySettingsPage from '../task_settings_pages/AutoSecretarySettingsPage';
import LikingLookingSettingsPage from '../task_settings_pages/LikingLookingSettingsPage';
import AnswerInFriendsSettingsPage from '../task_settings_pages/AnswerInFriendsSettingsPage';
import SendMessageListSettingsPage from '../task_settings_pages/SendMessageListSettingsPage';
import PossibleFriendsSettingsPage from '../task_settings_pages/PossibleFriendsSettingsPage';
import TargetGroupLIstSettingsPage from '../task_settings_pages/TargetGroupLIstSettingsPage';
import PublicHistorySettingsPage from '../task_settings_pages/PublicHistorySettingsPage';
import ParsingSettingsPage from '../task_settings_pages/ParsingSettingsPage';
import SendMessageGroupListSettingsPage from '../task_settings_pages/SendMessageGroupListSettingsPage';

import './style.css';

export default function TaskSettingsComponent (props) {

  const { accounts, typeScreen } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState(-1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="task_settings_component_wrapper" >
      {/* <SheduleSettingsPage /> */}
      {/* <AnswerSettingsPage /> */}
      {/* <AutoSecretarySettingsPage /> */}
      {/* <LikingLookingSettingsPage /> */}
      {/* <AnswerInFriendsSettingsPage /> */}
      {/* <SendMessageListSettingsPage /> */}
      {/* <PossibleFriendsSettingsPage /> */}
      {/* <TargetGroupLIstSettingsPage /> */}
      {/* <PublicHistorySettingsPage /> */}
      {/* <ParsingSettingsPage /> */}
      <SendMessageGroupListSettingsPage />
      
    </div>
  );
}
