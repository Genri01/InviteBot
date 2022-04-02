import React from 'react';
import './style.css';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
function ForgotWindow() {
  // useInvalidUrlAccess();
    return (
      <div className="ForgotWindowWrapper">
        <div className="ForgotImageContainer">
          {/* <div className="ForgotTextContainer">ORPHAMEDIA.RU</div> */}
        </div>
        <div className="ForgotInfoContainer">
          <div className="ForgotLoginContainer">
            <div className="">EMAIL</div>
            <input placeholder='Введите почту' className="ForgotLogin" />
          </div>
          <div className="ForgotBtnContainer">
            <div className="ForgotBtn">
              <div className="ForgotBtntext">Восстановить</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ForgotWindow;
