import React from 'react';
import Navbar from '../navigation/Navbar';
import { ReactComponent as Person } from "./Person.svg";
import AuthService from '../../service/AuthService';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();

    const eventHandler = () => {
        history.push("/login")
    }

    return (
        <>
        <Navbar />
            <div class="register-form">
                <div className="register-upper">
                    <i className="lock"><Person /></i>
                    <h2>Register</h2>
                </div>
                <form className="register-middle" noValidate onSubmit={
                        handleSubmit((data) => {
                            AuthService.register(data).then(
                                res => history.push("/login"),
                                error => console.log(error)
                            )
                        })
                        }>

                    {/* first name / last name  */}
                    <input type="text" className="email-input" id="firstName" placeholder="First Name" 
                         {...register("firstName", {required: true, minLength: 5, maxLength: 30})}/>
                    {errors.email && <span className="required-field-error-1">Enter a valid name!</span>}

                    <input type="text" className="email-input" id="lastName" placeholder="Last Name" 
                         {...register("lastName", {required: true, minLength: 5, maxLength: 30})}/>
                    {errors.email && <span className="required-field-error-1">Enter a valid name!</span>}
                    
                    <input type="text" className="email-input" id="email" placeholder="Email"
                        {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                    {errors.email && <span className="required-field-error-1">Enter a valid email!</span>}

                    <input type="password" className="password-input" id="password" placeholder="Password"
                        {...register("password", {required: true, minLength: 5, maxLength: 30})}/>
                    {errors.password && <span className="required-field-error-1">Password must be between 5 and 30 characters!</span>}

                    <input type="password" className="password-input" id="repeat-password" placeholder="Repeat Password"
                        {...register("password", {required: true, minLength: 5, maxLength: 30})}/>
                    {errors.password && <span className="required-field-error-1">Password must be between 5 and 30 characters!</span>}

                    <input type="submit" className="login-btn" value="Register" />
                </form>
                <div className="register-bottom">
                    <p>Allready have an account? <span className="reset-p" onClick={eventHandler}>Login</span></p>
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
