import React, {useState, useEffect} from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import SideNav from '../../navigation/SideNav'
import ProfilePhoto from '../../../assets/ProfilePhoto.png'
import Edit from '../../../assets/Edit.png'
import Add from '../../../assets/Add.png'
import AppUserFreelancer from '../../../service/AppUserFreelancer'
import AuthService from '../../../service/AuthService'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddLanguageModal from './AddLanguageModal'
import EditLanguages from './EditLanguages'
import AddEducationModal from './AddEducationModal'
import EditEducationModal from './EditEducation'
import EditPersonalDescription from './EditPersonalDescription'
import EditSkillsModal from './EditSkillsModal'

const MyProfile = () => {
    const [user, setUser] = useState([])
    const [modalContent, setModalContent] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleOpenAddLanguages = () => {
        setModalContent(<AddLanguageModal closeModal = {open => setOpen(open)}/>)
        setOpen(true)};

    const handleOpenAddEducation = () => {
        setModalContent(<AddEducationModal closeModal = {open => setOpen(open)}/>)
        setOpen(true)};

    const handleOpenEditLanguages = (language) => {
        setModalContent(<EditLanguages language={language} closeModal = {open => setOpen(open)}/>)
        setOpen(true)};

    const handleOpenEditEducation = (education) => {
        setModalContent(<EditEducationModal education={education} closeModal = {open => setOpen(open)}/>)
        setOpen(true)};

    const handleOpenEditSelfDescription = (title,selfDescription) => {
        setModalContent(<EditPersonalDescription title={title} selfDescription={selfDescription} closeModal = {open => setOpen(open)}/>)
        setOpen(true)};

    const handleOpenEditSkills = (skills) => {
        setModalContent(<EditSkillsModal skills={skills} closeModal = {open => setOpen(open)}/>)
        setOpen(true)}

        

    const handleClose = () => setOpen(false);

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [open])

    
    const style = {
        position: 'absolute',
        top: '10%',
        left: '31%',
        // transform: 'translateX(-50%)',
        // transform: 'translateY(-50%)',
        width: "40%",
        bgcolor: 'background.paper',
        outline: 'none',
        p: 4,
        borderRadius: "5px 5px 0 0",
        // maxHeight: "calc(100vh - 210px)",
      };

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
                                    <img src={Add} onClick={handleOpenAddLanguages}/>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        >
                                        <Box sx={style}>
                                            {modalContent}
                                        </Box>
                                    </Modal>
                                </div>
                                {user.languages?.map((language,index) => {
                                return (
                                    <div className="language-item">
                                        <div>
                                            <h4 style={{margin:"5px 0", fontWeight:"400"}}>{language.language}</h4>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{language.proficiency}</p>
                                        </div>
                                        <img src={Edit} className="hide" onClick={() => {handleOpenEditLanguages(language)}}/>

                                    </div>
                                )})}
                            </div>
                            <div className="section">
                            <div className='header-group'> 
                                    <h3>Education</h3>
                                    <img src={Add} onClick={handleOpenAddEducation} />
                                </div>
                                {user.education?.map(edu => {
                                    return (
                                        <div className="language-item">
                                        <div>
                                            <h4 style={{margin:"5px 0", fontWeight:"400"}}>{edu.education}</h4>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{edu.educationSpecialization}</p>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{edu.educationPeriod}</p>
                                        </div>
                                        <img src={Edit} className="hide" onClick={() => {handleOpenEditEducation(edu)}}/>
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
                                        <img src={Edit} onClick={() => {handleOpenEditSelfDescription(user.title, user.selfDescription)}} />
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
                                    <img src={Edit} onClick={() => {handleOpenEditSkills(user.skills)}} />
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
