import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Link } from 'react-router-dom';
import { change_page, change_header_visible } from '../../redux/actions/app' 
import { login } from '../../redux/actions/users' 
class SigninWindow extends React.Component {

  constructor( props ){
    super( props );
    this.handleInputChange = this.handleInputChange.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.state = {
      form_login: '',
      form_password: '',
      err: false
    }
  }

  escFunction(event) {
    const { pass,log,put } = this.props;
    const { form_login,form_password} = this.state;
    if(event.keyCode === 13 ) {
      console.log('!')
      if(form_login !== log && form_password !== pass) {
        this.setState({ wrong: true });
      }
      // put({form_login,form_password})
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
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
      users,
      changePage,
      changeHeaderVisible
    } = this.props

    const {
      form_login,
      form_password,
      err
    } = this.state;


    return (
      <div className="signinWindowWrapper">
        <div className="signinImageContainer" />
        <div className="signinInfoContainer">
          <div className="signinLoginContainer">
            <div>LOGIN</div>
            <input onChange={this.handleInputChange} value={form_login} name="form_login" placeholder='Введите почту' className="signinLogin" />
          </div>
          <div className="signinPasswordContainer">
            <div>PASSWORD</div>
            <input type="password" value={form_password} onChange={this.handleInputChange} name="form_password" placeholder='Введите пароль' className="signinPassword" />
          </div>
          <div className="signinMemberContainer">
            <div className="signinMemberContainerleft">
              <input type="checkbox" name="membercheck" className="chekbox"></input>
              <div>запомни меня</div>
            </div>
            <div className="signinMemberContainerRightBox">
              <Link to='/forgot' >забыли пароль?</Link>
            </div>
          </div>
          <div className="signinBtnContainer">
            <div onClick={async () => {
                 let err = await login(form_login,form_password);
                 if(err) {
                    this.setState({err: true})
                 }
               }} className="signinBtn">
              <div className="signinBtntext">Войти</div>
            </div>
          </div>
          <div className="signinAutorizationContainer">
            <div style={{display: err ? "flex": "none"}} className='errorLogin'>Пользователь не найден необходимо:</div> 
              <Link to='/signup' className="signinAutorizeText">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    );
  }
}

// <Link to={`${((login === form_login) && (password === form_password)) ? '/main': '/'}`} >
// <div onClick={()=>{
//     if((login === form_login)&&(password === form_password)) {
//       changePage("main");
//     }
//   }} className="signinBtntext">Войти</div>
// </Link>

const mapStateToProps = state => {
  const {
   users
  } = state;
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: (page) => { dispatch(change_page(page)) },
    changeHeaderVisible: (visible) => { dispatch(change_header_visible(visible)) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigninWindow);
