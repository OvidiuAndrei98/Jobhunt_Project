import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import DefaultPic from '../../assets/DefaultPic.png'
import Settings from '../../assets/Settings-popUp.png'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import AuthService from '../../service/AuthService'


const Navbar = () => {
    const [popUp, setPopUp] = React.useState(false);
    const [accountType, setAccountType] = React.useState([]);
    const user = AuthService.getCurrentUser();

    const handlePopup = () => {
        setPopUp(!popUp);
    }

    const goToProfile = () => {
        AuthService.switchToFreelancer(user.id).then(res => {
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.reload(false);
        });
    }

    const goToCompany = () => {
        AuthService.switchToCompany(user.id).then(res => {
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.reload(false)
        });
    }

    const goToSettings = () => {
        window.location.href = '/user/my-profile';
    }

    const goToSettingsCompany = () => {
        window.location.href = '/company/company/profile';
    }

    const logout = () => {
        window.location.href = '/';
        AuthService.logout();
    }
    console.log(user);

    useEffect(() => {
        if (user) {
        AppUserFreelancer.getFreelancerById(user.id).then(response => {
            setAccountType(response.data);
        })
    }
    } , []);


    return (
        <div className="nav-container">
            <div className="nav">
                <div className="logo"><NavLink to="/">lancefy</NavLink></div>
                {user ? (
                <ul>
                    {user.roles[0] === 'ROLE_FREELANCER' ? (
                        [
                            <li><NavLink to="/jobs">Find Work</NavLink></li>,
                            <li><NavLink to="/my-jobs">My Jobs</NavLink></li>,
                            <li><NavLink to="/messages">Messages</NavLink></li>,
                            <li><img src={ProfilePhoto} className="profile-photo" onClick={handlePopup} />
                            {popUp ? (
                        <ul className="profile-dropdown">   
                            <li><div className="profile-pop-up" onClick={goToProfile}><img src={ProfilePhoto} className="profile-photo-pop-up" /> Andrei Penica</div></li>
                            {accountType.company && (<li><div className="profile-pop-up" onClick={goToCompany}><img src={DefaultPic} className="profile-photo-pop-up" /> {accountType.company.companyName}</div></li>)}    
                            <li><div className="profile-pop-up" onClick={goToSettings}><img src={Settings}/>Settings</div></li>    
                            <li><div className="profile-pop-up" onClick={logout}><img src={Settings}/>Logout</div></li>
                        </ul>) : ("")}</li>
                    ]
                    ) : ([
                        <li><NavLink to="/">Jobs</NavLink></li>,
                        <li><NavLink to="/">Talents</NavLink></li>,
                        <li><NavLink to="/">Messages</NavLink></li>,
                    <li><img src={DefaultPic} className="profile-photo" onClick={handlePopup} />
                            {popUp ? (
                        <ul className="profile-dropdown">   
                            <li><div className="profile-pop-up" onClick={goToProfile}><img src={ProfilePhoto} className="profile-photo-pop-up" /> Andrei Penica</div></li>
                            {accountType.company && (<li><div className="profile-pop-up" onClick={goToCompany}><img src={DefaultPic} className="profile-photo-pop-up" /> {accountType.company.companyName}</div></li>)}    
                            <li><div className="profile-pop-up" onClick={goToSettingsCompany}><img src={Settings}/>Settings</div></li>    
                            <li><div className="profile-pop-up" onClick={logout}><img src={Settings}/>Logout</div></li>
                        </ul>) : ("")}</li>
                    ])
                    }
                </ul>
                ) : (<ul>
                    <li>Find Talent</li>
                    <li><NavLink to="/work">Find Work</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>)}
                
            </div>
        </div>
    )
}

export default Navbar
