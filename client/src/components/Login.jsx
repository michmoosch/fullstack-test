import React, {useState} from 'react'
import "./login.css"
import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'
import icon from "../assets/logo.png"


const Login = () => {

  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = JSON.parse(`{"email" : "${email}", "userPsw" : "${password}" }`)
    console.log(data)
  }
  return (
    <div>
        <h1 className='login-title'>Welcome to Office Suppy Depot</h1>
        <img src={icon} className="logo-image"/>
        <form onSubmit={handleSubmit} className="login-container">
          <h1>Login</h1>
          <label>User Name</label>
          <input type="text" className="input-field" placeholder='Username or email' name="email"/>
          <label>Password</label>
          <input type="password" className="input-field" placeholder='Password' name="password"/>
          <a href="" className='forgot-password'>Forgot Password / Username?</a>
          <input type="submit" value="Login" className='login-submit'/>
          <p className='register'>Don't Have An Account ? <Link to="/signup"><a href="./Signup.js">Sign Up</a></Link></p>
        </form>
       <h2 style={{color: "red"}}> {error}</h2>
    </div>
  )
}

export default Login