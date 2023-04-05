import React from "react";
import "./login.css";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/logo.png"
import { registerUser } from "./api";

function Signup() {

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = JSON.parse(`{"email" : "${email}", "firName" : "${fname}", "lstName" : "${lname}", "userPsw" : "${password}" }`)
    console.log(data)
    const reply = await registerUser(data)
    console.log(reply)
  }
  return (
    <div>
      <h1 className="signup-title">Create your Account</h1>
      <img src={icon} className="logo-image" />
      <form onSubmit={handleSubmit} className="login-container">
        <h1>Sign Up</h1>
        <label>Last Name</label>
        <input
          type="text"
          className="input-field"
          placeholder="Last Name"
          name="lname"
        />
        <label>First Name</label>
        <input
          type="text"
          className="input-field"
          placeholder="First Name"
          name="fname"
        />
        <label>Email</label>
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="input-field"
          placeholder="Confirm Password"
        />
        <input
          type="submit"
          value="create my account"
          className="signup-submit"
        />
        <p className="register">
          Already have an account?{" "}
          <Link to="/login">
            <a href="./Login.js">Log In</a>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
