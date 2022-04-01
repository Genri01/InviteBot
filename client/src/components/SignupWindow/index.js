import React from 'react';
import images from '../../assets/images';
import { registration } from '../../redux/actions/users' 
import './style.css';

class SignupWindow extends React.Component  {
  constructor( props ){
    super( props );

    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeEmail = this.Email.bind(this);
    this.validateForm = this.Valid.bind(this);

    this.state = {
      email:'',
      passOne:'',
      passTwo:'',
      eye_pass: false,
      eye_replay: false,
      type_pass: 'password',
      type_replay: 'password',
      errorText: 'Введенные пароли не совпадают',
      err: false,
      errEmail: true,
      bang: true
    }
  }

  Email(event) {
    this.setState({
      email: event.target.value
    })
    this.validateForm();
  }

  validateEmail(email) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    return pattern .test(email);
  }

  Valid() {
    const { email } = this.state 
    if (this.validateEmail(email)) {
      this.setState({
        errEmail: false,
      })
    } else {
      this.setState({
        errEmail: true,
      })
    }
    return false;
  }

  handleInputChange(event) {

    const {
      target: {
        type,
        name,
        checked,
        value
      }
    } = event
   
    
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  render() {
    const {
      email,
      passOne,
      passTwo,
      eye_replay,
      eye_pass,
      type_pass,
      type_replay,
      err,
      errorText,
      errEmail
    } = this.state;
    const { changeEmail } = this;
    return (
      <div className="signUpWindowWrapper">
        <div className="signUpImageContainer" />
        <div className="signUpInfoContainer">
          <div className="signUpLoginContainer">
            <div className="">EMAIL</div>
            <input name="email" value={email}  onChange={changeEmail} placeholder='Введите имя' className={`signUpLogin ${errEmail ? 'error_input' : ''}`}  />
          </div>
          <div className="signUpPasswordContainer">
            <div className="">PASSWORD</div>
            <div className='passContain'>
              <input  name="passOne" onChange={this.handleInputChange} type={type_pass} placeholder='Введите пароль' className="signUpPassword" />
              {
              eye_pass ? <img onClick={()=>{this.setState({eye_pass:!eye_pass, type_pass:"password"})}} aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img onClick={()=>{this.setState({eye_pass:!eye_pass, type_pass:"text"})}} aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div className="signUpPasswordReplayContainer">
            <div className="">PASSWORD REPLAY</div>
            <div className='passContain'>
              <input  name="passTwo" onChange={this.handleInputChange} type={type_replay} placeholder='Введите пароль еще раз' className="signUpPasswordReplay" />
              {
              eye_replay ? <img onClick={()=>{this.setState({eye_replay:!eye_replay, type_replay:"password"})}} aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img onClick={()=>{this.setState({eye_replay:!eye_replay, type_replay:"text"})}} aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div style={{display: err ? "flex": "none"}} className="signUpErrContainer">
            <div className="signUpErr">{errorText}</div>
          </div>
          <div className="signUpBtnContainer">
            <div onClick={async () => {
                if(passOne === passTwo) {
                    this.setState({errorText: 'Некорректный email'})
                  if(errEmail) {
                    let timeremail = '';
                    this.setState({err: true})
                    clearTimeout(timeremail);
                    timeremail = setTimeout(() => {
                    this.setState({err: false})
                    }, 2000);
                  } else {
                    if(passOne.length > 7) {
                      let errRigistation = await registration(email,passOne);
                      if(errRigistation) {
                          this.setState({err: true})
                          this.setState({errorText: 'Пользователь с почтовым адресом aspektpak@yandex.ru уже существует'})
                      }
                    } else {
                      this.setState({errorText: 'Длинна пароля от 8 символов'})
                      let timerlength = '';
                      this.setState({err: true})
                      clearTimeout(timerlength);
                      timerlength = setTimeout(() => {
                      this.setState({err: false})
                      }, 2000);
                    }
                  }
                } else {
                  let timer = '';
                  this.setState({err: true})
                  clearTimeout(timer);
                  timer = setTimeout(() => {
                    this.setState({err: false})
                  }, 2000);
                }
               }} className="signUpBtn">
              <div className="signUpBtntext">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupWindow;
