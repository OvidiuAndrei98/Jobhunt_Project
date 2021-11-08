import React from 'react';
import Navbar from '../navigation/Navbar';
import { ReactComponent as Lock } from "./Lock.svg";

const Login = () => {
    return (
        <div className="container">
        <Navbar />
        <div class="login-form">
            <div className="login-upper">
                <i className="lock"><Lock /></i>
                <h2>Login</h2>
            </div>
            <form className="login-middle">
                <input type="text" className="email-input" id="email" placeholder="Email"/>
                <input type="password" className="password-input" id="password" placeholder="Password"/>
                <input type="submit" className="login-btn" value="Login" />
            </form>
            <div className="login-bottom">
                <p>Forgot password? <span className="reset-p">Reset</span></p>
                <p>Don’t have an account? <span className="sign-up">Sign Up</span></p>
            </div>
        </div>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        </div>
    )
}

export default Login
