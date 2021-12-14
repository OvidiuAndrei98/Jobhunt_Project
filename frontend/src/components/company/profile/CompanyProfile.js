import React, {useEffect, useState} from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import SideNav from '../../navigation/SideNav'
import Edit from '../../../assets/Edit.png'
import ProfilePhoto from '../../../assets/ProfilePhoto.png'
import DefaultPicture from '../../../assets/No-photo.png'
import AppUserFreelancer from '../../../service/AppUserFreelancer'
import AuthService from '../../../service/AuthService'


export const CompanyProfile = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container">
                    <h1>My info</h1>
                    <div className="account">
                        <div className="account-header">   
                            <h1>Account</h1>
                            <img src={Edit} />
                        </div>
                        <div className="job-box">
                            <div className="profile-upper">
                            <img src={user.profilePic ? `http://localhost:8080/user/get-picture/${user.id}` :  DefaultPicture} />
                            </div>
                        </div>
                        <div className="job-box">
                            <h4>{user.firstName} {user.lastName}</h4>
                            <p>{user.company?.companyName} - Company</p>
                            <br/>
                            <h4>Email</h4>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div  className="new-account">
                        <div className="job-box flex-row-between">
                            <h2>Company details</h2>
                            <img src={Edit} />
                        </div>
                        <div className="job-box">
                            <div className="profile-upper">
                                <img src={DefaultPicture} />
                            </div>
                        </div>
                        <div className="job-box">
                            <a style={{fontWeight:"600", fontSize:"20", letterSpacing:"1px"}}>{user.company?.companyName} </a>
                        </div>
                        {/* <div className="job-box">
                            <p style={{fontWeight:"600", fontSize:"20", letterSpacing:"1px"}}>{user.company?.companyWebsite} </p>
                        </div>
                        <div className="job-box">
                            <p style={{fontWeight:"600", fontSize:"20", letterSpacing:"1px"}}>{user.company?.companyDescription} </p>
                        </div> */}
                    </div>
                    <div  className="new-account">
                        <div className="job-box flex-row-between">
                            <h2>Company contacts</h2>
                            <img src={Edit} />
                        </div>
                        <div className="job-box">
                            <h4>Owner</h4>
                            <br/>
                            <p>{user.company?.companyOwner}</p>
                        </div>
                        <div className="job-box">
                            <h4>Phone</h4>
                            <br/>
                            <p>{user.company?.companyPhone}</p>
                        </div>
                        <div className="job-box">
                            <h4>Address</h4>
                            <br/>
                            <p>{user.company?.address.address}</p>
                            <p>{user.company?.address.city}, {user.company?.address.country}</p>
                        </div>
                    </div>
                    <div className="location-container">
                        <div className="job-box">
                            <p>This is a company account</p>
                            <br/>
                            <span className="close-account">Close account</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
