import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import Settings from '../../assets/Settings-popUp.png'


const Navbar = () => {
    const loggedIn = true;
    const [popUp, setPopUp] = React.useState(false);

    const handlePopup = () => {
        setPopUp(!popUp);
    }

    const goToProfile = () => {
        window.location.href = '/user/my-profile';
    }

    const goToSettings = () => {
        window.location.href = '/user/profile-settings';
    }

    const logout = () => {
        window.location.href = '/';
        loggedIn = false;
    }

    return (
        <div className="nav-container">
            <div className="nav">
                <div className="logo"><NavLink to="/">lancefy</NavLink></div>
                {loggedIn ? (
                <ul>
                    {/* <li>Find Talent</li> */}
                    <li><NavLink to="/work">Find Work</NavLink></li>
                    <li><NavLink to="/my-jobs">My Jobs</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><img src={ProfilePhoto} className="profile-photo" onClick={handlePopup} />
                        {popUp ? (
                        <ul className="profile-dropdown">   
                            <li><div className="profile-pop-up" onClick={goToProfile}><img src={ProfilePhoto} className="profile-photo-pop-up" /> Andrei Penica</div></li>    
                            <li><div className="profile-pop-up" onClick={goToSettings}><img src={Settings}/>Settings</div></li>    
                            <li><div className="profile-pop-up" onClick={logout}><img src={Settings}/>Logout</div></li>
                        </ul>) : ("")}
                    </li>
                </ul>
                ) : (<ul>
                    <li>Find Talent</li>
                    <li><NavLink to="/work">Find Work</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li>Register</li>
                </ul>)}
                
            </div>
        </div>
    )
}

export default Navbar
