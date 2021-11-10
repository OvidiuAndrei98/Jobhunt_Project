import React from 'react'
import ContactActive from '../../assets/Contact.png';
import Contact from '../../assets/Contact1.png';
import UserActive from '../../assets/UserActive.png';
import User from '../../assets/User.png';
import SettingsActive from '../../assets/SettingsActive.png';
import Settings from '../../assets/Settings.png';
import Dashboard from '../../assets/Dashboard.png';
// import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import { useState } from 'react';
// import logo from '../../images/logo.svg';
// import AuthService from "../../service/AuthService";

const SideNav = () => {
    const history = useHistory();
    const [size, setSize] = useState("70px")
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const handleSizeUp = () => {
        setSize("300px")
    }

    const handleSizeDown = () => {
        setSize("70px")
    }

    // const logout = () => {
    //     AuthService.logout();
    //     history.push("/login")
    // }

    return (
        <div className="navigation" onMouseEnter={handleSizeUp} onMouseLeave={handleSizeDown} style={{width:"" + size}}>
            <ul>
                <li className={splitLocation[2] === "contact" ? "list active" : "list"}>
                    <NavLink to="/user/contact">
                        <img className="icon" src={splitLocation[2] === "contact" ? ContactActive : Contact}/>
                        <span className="title">Contact</span>
                    </NavLink>
                </li>
                <li className={splitLocation[2] === "my-profile" ? "list active" : "list"}>
                    <NavLink to="/user/my-profile">
                    <   img className="icon" src={splitLocation[2] === "my-profile" ? UserActive : User}/>
                        <span className="title">Profile</span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "settings" ? "list active" : "list"}>
                    <NavLink to="/settings">
                        <img className="icon" src={splitLocation[2] === "settings" ? SettingsActive : Settings}/>
                        <span className="title">Settings</span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "dashboard" ? "list active" : "list"}>
                    <NavLink to="#">
                        <img className="icon" src={splitLocation[2] === "dashboard" ? Dashboard : Dashboard}/>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default SideNav