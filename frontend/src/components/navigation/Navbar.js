import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import DefaultPic from '../../assets/DefaultPic.png'
import Settings from '../../assets/Settings-popUp.png'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import AuthService from '../../service/AuthService'
import { useLocation, useHistory } from 'react-router-dom';


const Navbar = () => {
    const [popUp, setPopUp] = React.useState(false);
    const [show, setShow] = React.useState({display: "none"});
    const [accountType, setAccountType] = React.useState([]);
    const user = AuthService.getCurrentUser();
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation);

    const handlePopup = () => {
        setPopUp(!popUp);
    }

    const handleShow = () => {
        setShow({display: "flex"});
        setPopUp(false);
    }

    const handleShowLeave = () => {
        setShow({display: "none"});
    }

    const goToProfile = () => {
        AuthService.switchToFreelancer(user.id).then(res => {
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push('/work');
            // window.location.reload(false);
        });
    }

    const goToCompany = () => {
        AuthService.switchToCompany(user.id).then(res => {
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push('/jobs');
            // window.location.reload(false)
        });
    }

    const goToSettings = () => {
        window.location.href = '/user/my-profile';
    }

    const goToSettingsCompany = () => {
        window.location.href = '/company/profile';
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
                            <li className={splitLocation[1] === "jobs" ? "active-link" : ""}><NavLink to="/work">Find Work</NavLink></li>,
                            <li><NavLink to="/my-jobs">My Jobs</NavLink></li>,
                            <li><NavLink to="/messages">Messages</NavLink></li>,
                            <li><img src={`http://localhost:8080/user/get-picture/${user.id}`} className="profile-photo" onClick={handlePopup} />
                            {popUp ? (
                        <ul className="profile-dropdown">   
                            <li><div className="profile-pop-up" onClick={goToProfile}><img src={`http://localhost:8080/user/get-picture/${user.id}`} className="profile-photo-pop-up" />{accountType.firstName}</div></li>
                            {accountType.company && (<li><div className="profile-pop-up" onClick={goToCompany}><img src={DefaultPic} className="profile-photo-pop-up" /><div style={{display:'flex', flexDirection:"column"}}>{accountType.company.companyName} <p style={{fontSize:"12px"}}>Company</p></div></div></li>)}    
                            <li><div className="profile-pop-up" onClick={goToSettings}><img src={Settings}/>Settings</div></li>    
                            <li><div className="profile-pop-up" onClick={logout}><img src={Settings}/>Logout</div></li>
                        </ul>) : ("")}</li>
                    ]
                    ) : ([
                        <li><NavLink to="/jobs" onMouseEnter={handleShow} onMouseLeave={handleShowLeave}>Jobs</NavLink>
                        <ul className="jobs-dropdown-hover" onMouseEnter={handleShow} onMouseLeave={handleShowLeave} style={show}>   
                            <li><NavLink to="/jobs"><div className="profile-pop-up">My Posts</div></NavLink></li>
                            <li><div className="profile-pop-up">All job posts</div></li>
                            <li><div className="profile-pop-up">All contracts</div></li>
                            <li><div className="profile-pop-up"> Post job</div></li>
                        </ul></li>,
                        <li><NavLink to="/">Talents</NavLink></li>,
                        <li><NavLink to="/">Messages</NavLink></li>,
                    <li><img src={DefaultPic} className="profile-photo" onClick={handlePopup} />
                            {popUp ? (
                        <ul className="profile-dropdown">   
                            <li><div className="profile-pop-up" onClick={goToProfile}><img src={`http://localhost:8080/user/get-picture/${user.id}`} className="profile-photo-pop-up" />{accountType.firstName}</div></li>
                            {accountType.company && (<li><div className="profile-pop-up" onClick={goToCompany}><img src={DefaultPic} className="profile-photo-pop-up" /> {accountType.company.companyName}</div></li>)}    
                            <li><div className="profile-pop-up" onClick={goToSettingsCompany}><img src={Settings}/>Settings</div></li>    
                            <li><div className="profile-pop-up" onClick={logout}><img src={Settings}/>Logout</div></li>
                        </ul>) : ("")}</li>
                    ])
                    }
                </ul>
                ) : (<ul>
                    <li>Find Talent</li>
                    <li><NavLink to="/jobs">Find Work</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>)}
                
            </div>
        </div>
    )
}

export default Navbar
