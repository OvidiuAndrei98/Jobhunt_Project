import React from 'react'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import Button from '@mui/material/Button';
import Footer from '../navigation/Footer';

const ProfileSettings = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container-settings">
                    <h1>Profile Settings</h1>
                    <div className="settings-container">
                        <h3>CHANGE PASSWORD</h3>
                        <form>
                            <div className="input-group">
                                <label>Current Password</label>
                                <input type="password"/>
                            </div>
                            <div className="input-group">
                                <label>New Password</label>
                                <input type="password"/>
                            </div>
                            <div className="input-group">
                                <label>Confirm Password</label>
                                <input type="password"/>
                            </div>
                            <p className="password-info">8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                            <Button style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"25px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileSettings
