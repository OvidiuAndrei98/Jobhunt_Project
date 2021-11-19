import React from 'react'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import Button from '@mui/material/Button';
import Footer from '../navigation/Footer';
import {useForm} from 'react-hook-form';
import AppUserFreelancer from '../../service/AppUserFreelancer';
import AuthService from '../../service/AuthService';

const ProfileSettings = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container-settings">
                    <h1>Profile Settings</h1>
                    <div className="settings-container">
                        <h3>CHANGE PASSWORD</h3>
                        <form noValidate onSubmit={
                        handleSubmit((data) => {
                            AppUserFreelancer.updateFreelancerPassword(data,AuthService.getCurrentUser().id).then(res => {console.log(res)}
                                ).catch(err => {console.log(err)});
                        })
                        }>
                            <div className="input-group">
                                <label>Current Password</label>
                                <input type="password"
                                {...register("currentPassword", {required: true, minLength: 5, maxLength: 30})}/>
                                {errors.currentPassword && <span className="required-field-error-1">Password must be between 8 and 30 characters!</span>}
                            </div>
                            <div className="input-group">
                                <label>New Password</label>
                                <input type="password"
                                {...register("newPassword", {required: true, minLength: 5, maxLength: 30})}/>
                                {errors.password && <span className="required-field-error-1">Password must be between 8 and 30 characters!</span>}
                            </div>
                            <div className="input-group">
                                <label>Confirm Password</label>
                                <input type="password"
                                {...register("repeatNewPassword", {required: true, minLength: 5, maxLength: 30})}/>
                                {errors.repeatPassword && <span className="required-field-error-1">Password must be between 8 and 30 characters!</span>}
                            </div>
                            <p className="password-info">8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                            <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"25px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileSettings
