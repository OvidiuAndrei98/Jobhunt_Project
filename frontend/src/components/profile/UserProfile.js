import React, {useState, useEffect} from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import AppUserFreelancer from '../../service/AppUserFreelancer'
import {useParams} from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        AppUserFreelancer.getFreelancerById(id).then(res => {
            setUser(res.data)
        });
    }, [])

    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <div className="center-container">
                    <div className="profile-upper">
                        <img src={`http://localhost:8080/user/get-picture/${user.id}`} />
                        <p>{user.firstName?.split(" ")[0]} {user.lastName}</p>
                        <p>{user.address?.city}, {user.address?.country}</p>
                    </div>
                    <div className="profile-lower">
                        <div className="lower-left">
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Availability</h3>
                                </div>
                                <p>{user.availability}</p>
                                <p>More than 30 hrs/week</p>
                            </div>
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Language</h3>
                                </div>
                                {user.languages?.map((language,index) => {
                                return (
                                    <div className="language-item">
                                        <div>
                                            <h4 style={{margin:"5px 0", fontWeight:"400"}}>{language.language}</h4>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{language.proficiency}</p>
                                        </div>
                                    </div>
                                )})}
                            </div>
                            <div className="section">
                            <div className='header-group'> 
                                    <h3>Education</h3>
                                </div>
                                {user.education?.map(edu => {
                                    return (
                                    <div className="language-item">
                                        <div>
                                            <h4 style={{margin:"5px 0", fontWeight:"400"}}>{edu.education}</h4>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{edu.educationSpecialization}</p>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{edu.educationPeriod}</p>
                                        </div>
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
                                    </div>
                                    <div className='header-group'>  
                                        <h5>$10.00/hr</h5>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{user.selfDescription}</p>
                                </div>
                            </div>
                            <div className="break-line"></div>
                            <div className="section-middle">
                                <div className='header-group-middle'>  
                                    <h3>Skills</h3>
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
                                </div>
                                {user.certifications?.map(cert => {
                                    return (
                                        <div className="certification-item">
                                            <div>
                                                <h4 style={{fontWeight:"400"}}>{cert.title}</h4>
                                                <p style={{fontWeight:"400", fontSize:"14px"}}>{cert.issuer}</p>
                                                <p style={{fontWeight:"400", fontSize:"14px"}}>Issued {cert.month} {cert.year}</p>
                                                <a href={cert.credentialUrl} style={{fontWeight:"700", fontSize:"14px"}}>See credential</a>
                                            </div>
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

export default UserProfile
