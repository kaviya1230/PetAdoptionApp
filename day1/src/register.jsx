import React from 'react'
import './register.css'
import user_icon from './person.png'
import password_icon from './password.png'
import email_icon from './email.png'
function register(){
  return (
    <><div className='container'>
      <div className="header">
        <div className="text">REGISTER</div>
    <div className='inputs'></div>
    <div className='input'>
      <img src={user_icon} alt="" />
      <input type='text' placeholder='USERNAME'></input></div>
    <div className='input'>
      <img src={email_icon} alt="" />
      <input type='email' placeholder='EMAIL ADDRESS'></input></div>
    <div className='input'>
      <img src={password_icon} alt="" />
      <input type='password' placeholder='PASSWORD'></input></div>
    <div className='input'>
      <img src={password_icon} alt="" />
      <input type='password' placeholder='CONFIRM PASSWORD'></input>
      </div></div>
      <div className="forgotpassword">
        <label><input type="checkbox"/>Remember me</label><span>
        Already created ?</span></div>
    <div className="submitcontainer">
      <div className='submit'>Register</div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='submit'>Login</div>
    </div>
    </div>
    </>
  );
}

export default register;