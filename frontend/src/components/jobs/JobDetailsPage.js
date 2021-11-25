import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import Button from '@mui/material/Button';
import Marker from '../../assets/Marker.png'
import Heart from '../../assets/Heart.png'
import Clock from '../../assets/Clock.png'
import Calendar from '../../assets/Timesheet.png'
import Experience from '../../assets/Experience.png'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




const JobDetailsPage = () => {
    const location = useLocation();
    const job = location.state.job;
    const history = useHistory();
    
    const goToApplication = () => {
        history.push({
            pathname: `/application`,
            state: {job: job}
        })
    }

    return (
        <div>
            <Navbar />
            <h1 style={{display:"inline-block", marginLeft:"22%", marginTop:"30px", marginBottom:"30px"}}>Job Details</h1>
            <div className="job-container"> 
                <div className="left-column">
                    <div className="job-box">
                        <h2>{job.title}</h2>
                    </div>
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
                        <p>Interviewing: <span style={{fontWeight:"550"}}>0</span></p>
                        <br/>
                        <p>Invites sent: <span style={{fontWeight:"550"}}>0</span></p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="pannel-box">
                        <Button style={{background:"#F0540C", width:"100%"}} variant="contained" sx={{borderRadius:"25px", padding:"8px 40px",marginBottom:"20px", height:"0"}} onClick={goToApplication}>Apply</Button>
                        <Button style={{background:"white", width:"100%", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"8px 40px", height:"0"}}><img src={Heart}/> Save</Button>
                    </div>
                    <div className="pannel-box">
                        <h4>About the client</h4>
                        <div>
                            <p style={{fontWeight:"600"}}>Romania</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"600"}}>1 job posted</p>
                            <p style={{  color:"rgba(0, 0, 0, 0.603)"}}>1 open job</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"600"}}>Tech & IT</p>
                            <p style={{  color:"rgba(0, 0, 0, 0.603)"}}>Mid-sized company (10-99 people)</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobDetailsPage
