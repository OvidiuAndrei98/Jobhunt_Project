import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import Edit from '../../assets/Edit.png'
import { useEffect, useState } from 'react'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import AuthService from '../../service/AuthService'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'

const ContactInfo = () => {
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [])

    const createAccount = () => {
        history.push('/company/create-company-account')
    }

    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container">
                    <h1>Contact Info</h1>
                    <div className="account">
                        <div className="account-header">   
                            <h1>Account</h1>
                            <img src={Edit} />
                        </div>
                        <div className="name">
                            <h3>Name</h3>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div  className="new-account">
                        <div className="job-box">
                            <h2>Additional accounts</h2>
                            <p>Creating a new account allows you to use Lancefy in different ways, while still having just one login.</p>
                        </div>
                        <div className="job-box flex-row-between">
                            <div>
                                <p style={{fontWeight:"550", marginBottom:"10px"}}>Client Account</p>
                                <p>Hire, manage and pay as a different company.</p>
                            </div>
                            <Button style={{background:"#F0540C", width:"20%"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 15px"}} onClick={createAccount}>New company account</Button>
                        </div>
                    </div>
                    <div className="location-container">
                        <div className="location-header">   
                            <h1>Location</h1>
                            <img src={Edit} />
                        </div>
                        <div className="address">
                            <h3>Address</h3>
                            <p>{user.address?.address}</p>
                            <p>{user.address?.city}, {user.address?.country}</p>
                        </div>
                        <div className="phone">
                            <h3>Phone</h3>
                            <p>{user.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    )
}

export default ContactInfo
