import React from 'react';
import Navbar from '../navigation/Navbar';
import { ReactComponent as Person } from "./Person.svg";

const Register = () => {
    return (
        <>
        <Navbar />
            <div class="register-form">
                <div className="register-upper">
                    <i className="lock"><Person /></i>
                    <h2>Register</h2>
                </div>
                <form className="register-middle">
                    {/* first name / last name  */}
                    <input type="text" className="email-input" id="name" placeholder="Full Name"/>
                    <input type="text" className="email-input" id="email" placeholder="Email"/>
                    <input type="password" className="password-input" id="password" placeholder="Password"/>
                    <input type="password" className="password-input" id="repeat-password" placeholder="Repeat Password"/>
                    <input type="submit" className="login-btn" value="Register" />
                </form>
                <div className="register-bottom">
                    <p>Allready have an account? <span className="reset-p">Login</span></p>
                </div>
            </div>
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </>
    )
}

export default Register
