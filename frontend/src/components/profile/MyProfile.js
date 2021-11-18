import React, {useState, useEffect} from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import Edit from '../../assets/Edit.png'
import Add from '../../assets/Add.png'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import AuthService from '../../service/AuthService'

const MyProfile = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [])

    console.log(user);

    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container">
                    <div className="profile-upper">
                        <img src={ProfilePhoto} />
                        <p>{user.firstName?.split(" ")[0]} {user.lastName}</p>
                        <p>{user.address?.city}, {user.address?.country}</p>
                    </div>
                    <div className="profile-lower">
                        <div className="lower-left">
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Availability</h3>
                                    <img src={Edit} />
                                </div>
                                <p>{user.availability}</p>
                                <p>More than 30 hrs/week</p>
                            </div>
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Language</h3>
                                    <img src={Add} />
                                    <img src={Edit} />
                                </div>
                                <p>{user.language}</p>
                            </div>
                            <div className="section">
                            <div className='header-group'> 
                                    <h3>Education</h3>
                                    <img src={Add} />
                                    <img src={Edit} />
                                </div>
                                {user.education?.map(edu => {
                                    return (
                                        <div>
                                        <p>{edu.education}</p>
                                        <p>{edu.educationSpecialization}</p>
                                        <p>{edu.educationPeriod}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="lower-right">
                            <div className="section-upper">
                                <div className="header-flex-row">
                                    <div className='header-group'>  
                                        <h3>{user.title}</h3>
                                        <img src={Edit} />
                                    </div>
                                    <div className='header-group'>  
                                        <h5>$10.00/hr</h5>
                                        <img src={Edit} />
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{user.selfDescription}</p>
                                    <img src={Edit} />
                                </div>
                            </div>
                            <div className="break-line"></div>
                            <div className="section-middle">
                                <div className='header-group-middle'>  
                                    <h3>Skills</h3>
                                    <img src={Edit} />
                                </div>
                                <div className="middle-skills">
                                    {user.skills?.map(skill => {
                                        return (
                                            <div className="skill">{skill}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="break-line"></div>
                            <div className="section-lower">
                                <div className='header-group-lower'>
                                    <h3>Certifications</h3>
                                    <img src={Edit} />
                                </div>
                                {user.certifications?.map(cert => {
                                    return (
                                        <div>
                                            <h4>{cert.title}</h4>
                                            <p>{cert.issuer} {cert.year}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyProfile
