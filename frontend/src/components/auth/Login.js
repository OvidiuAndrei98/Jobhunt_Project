import React from 'react';
import Navbar from '../navigation/Navbar';
import { ReactComponent as Lock } from "./Lock.svg";
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import AuthService from '../../service/AuthService';


const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();


    const eventHandler = () => {
        history.push("/register")
    }
    

    return (
        <div className="container">
        <Navbar />
        <div class="login-form">
            <div className="login-upper">
                <i className="lock"><Lock /></i>
                <h2>Login</h2>
            </div>
            <form className="login-middle" noValidate onSubmit={
                        handleSubmit((data) => {
                            AuthService.login(data).then(
                                res => history.push("/"),
                                error => console.log(error)
                            );
                        })
                        }>
                <input
                 type="text" className="email-input" id="email" placeholder="Email"
                    {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                {errors.email && <span className="required-field-error-1">Enter a valid email address!</span>}

                <input type="password" className="password-input" id="password" placeholder="Password"
                    {...register("password", {required: true, minLength: 5, maxLength: 30})}/>
                {errors.password && <span className="required-field-error-1">Invalid password!</span>}

                <input type="submit" className="login-btn" value="Login"/>
            </form>
            <div className="login-bottom">
                <p>Forgot password? <span className="reset-p">Reset</span></p>
                <p>Don’t have an account? <span className="sign-up" onClick={eventHandler}>Sign Up</span></p>
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
