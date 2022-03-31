import React from 'react';
import './style.css';
import SigninWindow from '../../components/SigninWindow/index';

function SigninScreen(props) {
    return (
      <div className="sigin_screen" >
        <SigninWindow />
      </div>
    );
}

export default SigninScreen;