import React from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import { useLocation , useHistory} from 'react-router-dom'
import Marker from '../../../assets/Marker.png'
import Clock from '../../../assets/Clock.png'
import Calendar from '../../../assets/Timesheet.png'
import Experience from '../../../assets/Experience.png'

const JobPost = () => {
    const location = useLocation();
    const history = useHistory();
    const job = location.state.job;

    const goToReview = () => {
        history.push({
            pathname: `/applicants/${job.id}/applicants`,
            state: {
                job: job
            }
        })
    }
    return (
        <>
        <Navbar />
        <div className="info-container">
            <h2>{job.title}</h2>
        </div>
        <div className="breadcrumb-applications">
            <div className="applications-menu-active"><div className="mask" style={{alignSelf:"center", zIndex:"99", color:"white", textTransform:"uppercase"}}><span>VIEW JOB POST</span></div></div>
            <div className="applications-menu" onClick={goToReview}><div style={{alignSelf:"center", zIndex:"99", color:"black", textTransform:"uppercase"}}><span>Review proposals</span></div></div>
            <div className="applications-menu"><div style={{alignSelf:"center", zIndex:"99", color:"black", textTransform:"uppercase"}}><span>Hire</span></div></div>
            <div className="applications-menu">4</div>
        </div>
        <div className="job-container"> 
                <div className="left-column" style={{borderRadius:"5px"}}>
                    <div className="job-box">
                        <p style={{color:"#F0540C", textTransform:"capitalize", marginBottom:"15px"}}>{job.category}</p>
                        <p style={{color:"rgba(0, 0, 0, 0.39)", marginBottom:"15px"}}>Posted 1 day ago</p>
                        <div className="flex-column">
                            <img src={Marker}/>
                            <p>{job.location}</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <p>{job.description}</p>
                    </div>
                    <div className="job-box flex-row-space-between">
                        <p><img src={Clock}/>Less than 30 hrs/week</p>
                        <p><img src={Calendar}/>1-3 months</p>
                        <p><img src={Experience}/>Expert</p>
                    </div>
                    <div className="job-box">
                        <p>Project Type: Complex project</p>
                    </div>
                    <div className="job-box">
                        <p style={{fontWeight:"550",fontSize:"18px", color:"rgba(0, 0, 0, 0.80)", marginBottom:"35px"}}>Skills and Expertise</p>
                        <div className="flex-row">
                            {job.skills.map(skill => {
                                return (
                                <div className="skills">{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="job-box">
                        <p style={{fontWeight:"550",fontSize:"18px", color:"rgba(0, 0, 0, 0.80)", marginBottom:"35px"}}>Activity on this job</p>
                        <p>Applied: <span style={{fontWeight:"550"}}>5</span></p>
                        <br/>
                        {/* <p>Interviewing: <span style={{fontWeight:"550"}}>0</span></p> */}
                        <br/>
                        {/* <p>Invites sent: <span style={{fontWeight:"550"}}>0</span></p> */}
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default JobPost
