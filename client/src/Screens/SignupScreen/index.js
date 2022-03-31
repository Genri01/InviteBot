import React from 'react';
import './style.css';
import SignupWindow from '../../components/SignupWindow/index'

function SignupScreen(props) {
    return (
      <div className="sigup_screen" >
        <SignupWindow />
      </div>
    );
}

export default SignupScreen;
