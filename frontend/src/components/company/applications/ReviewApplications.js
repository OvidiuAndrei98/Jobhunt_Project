import React from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import { useLocation , useHistory} from 'react-router-dom'

const ReviewApplications = () => {
    const location = useLocation();
    const history = useHistory();
    const job = location.state.job;
    return (
        <>
        <Navbar />
        <div className="info-container">
            <h2>{job.title}</h2>
        </div>
        <div className="breadcrumb-applications">
            <div className="applications-menu-active"><div style={{alignSelf:"center", zIndex:"99", color:"white", textTransform:"uppercase"}}><span>VIEW JOB POST</span></div></div>
            <div className="applications-menu"><div style={{alignSelf:"center", zIndex:"99", color:"black", textTransform:"uppercase"}}><span>Review proposals</span></div></div>
            <div className="applications-menu"><div style={{alignSelf:"center", zIndex:"99", color:"black", textTransform:"uppercase"}}><span>Hire</span></div></div>
            <div className="applications-menu">4</div>
        </div>
        <div className="job-container"> 
            <div className="left-column" style={{borderRadius:"5px"}}>
                a
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ReviewApplications