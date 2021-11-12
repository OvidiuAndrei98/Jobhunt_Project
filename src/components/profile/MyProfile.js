import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import Edit from '../../assets/Edit.png'
import Add from '../../assets/Add.png'

const MyProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container">
                    <div className="profile-upper">
                        <img src={ProfilePhoto} />
                        <p>Andrei Penica</p>
                        <p>Bucharest, Romania</p>
                    </div>
                    <div className="profile-lower">
                        <div className="lower-left">
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Availability</h3>
                                    <img src={Edit} />
                                </div>
                                <p>Available</p>
                                <p>More than 30 hrs/week</p>
                            </div>
                            <div className="section">
                                <div className='header-group'> 
                                    <h3>Language</h3>
                                    <img src={Add} />
                                    <img src={Edit} />
                                </div>
                                <p>English: Fluent</p>
                            </div>
                            <div className="section">
                            <div className='header-group'> 
                                    <h3>Education</h3>
                                    <img src={Add} />
                                    <img src={Edit} />
                                </div>
                                <p>Academia de Studii Economice din Bucuresti</p>
                                <p>Bachelor's Degree</p>
                                <p>2017-2020</p>
                            </div>
                        </div>
                        <div className="lower-right">
                            <div className="section-upper">
                                <div className="header-flex-row">
                                    <div className='header-group'>  
                                        <h3>Web, Software Full Stack Dev</h3>
                                        <img src={Edit} />
                                    </div>
                                    <div className='header-group'>  
                                        <h5>$10.00/hr</h5>
                                        <img src={Edit} />
                                    </div>
                                </div>
                                <div className="description">
                                    <p>Use this space to show clients you have the skills and experience they're looking for.<br/>
                                        Describe your strengths and skills
                                        Highlight projects, accomplishments and education
                                        Keep it short and make sure it's error-free
                                    </p>
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
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                    <div className="skill">Skill</div>
                                </div>
                            </div>
                            <div className="break-line"></div>
                            <div className="section-lower">
                                <div className='header-group-lower'>
                                    <h3>Certifications</h3>
                                    <img src={Edit} />
                                </div>
                                <h4>HTML</h4>
                                <p>Coursera 2021</p>
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
