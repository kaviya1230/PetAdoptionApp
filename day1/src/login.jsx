import React from 'react';
import './login.css';
import user_icon from './person.png';
import password_icon from './password.png';

function Login() {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">LOGIN</div>
        <div className='inputs'></div>
        <div className='input'>
          <img src={user_icon} alt="" />
          <input type='text' placeholder='USERNAME'></input>
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type='password' placeholder='PASSWORD'></input>
        </div>
      </div>
      <div className="forgotpassword">
        <label><input type="checkbox"/>Remember me</label><span> Forgot Password ? </span>
      </div>
      <div className="submitcontainer">
        <div className='submit'>Register
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='submit'>Login
        </div>
      </div>
    </div>
  );
}

export default Login;
