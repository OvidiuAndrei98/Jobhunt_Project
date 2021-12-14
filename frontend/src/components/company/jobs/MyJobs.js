import React, {useEffect, useState} from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import Button from '@mui/material/Button';
import AppUserFreelancer from '../../../service/AppUserFreelancer';
import AuthService from '../../../service/AuthService';
import {useHistory, useLocation} from 'react-router-dom';
import ViewMore from '../../../assets/View_More.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


export const MyJobs = () => {
    const [user, setUser] = useState([])
    const history = useHistory();    
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const location = useLocation();
    const [alert, setAlert] = React.useState(location.state?.alert);
    const [error, setError] = React.useState(false);
    const vertical = 'top';
    const horizontal = 'center';

    const GoToPosting = () => { 
        history.push({
            pathname: '/job-post/getting-started',
            state: {user: user}
        })
    }

    const goToApplications = (id, job) => {
        history.push({
            pathname: `/applicants/${id}/job-details`,
            state: {job: job}
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [])

    
    return (
        <div>
            <Navbar />
            <Snackbar anchorOrigin={{vertical, horizontal}} open={alert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Job posted successfully!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical, horizontal}} open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Job application failed!
                </Alert>
            </Snackbar>
            <div className="info-container">
                <h2>{user.company?.companyName}</h2>
                <div>
                <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C", marginRight:"10px"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 30px", height:"0"}}>Browse Projects</Button>
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 20px"}} onClick={GoToPosting}>Post job</Button>
                </div>
            </div>
            <div className="My-jobs-container">
                <div className="job-box flex-row-between">
                   <h2>My listings</h2>
                   <span style={{color:"#F0540C", cursor:"pointer"}}>All postings</span>
                </div>
               {user.company?.jobs.length > 0 ? (user.company.jobs.map(job => {
                    return (
                        <div className="job-box-hover" key={job.id} onClick={() => goToApplications(job.id, job)}>
                            <div className="align-center-row flex-row-between ">
                                <h3>{job.title}</h3>
                                <div className="view-more">
                                <img src={ViewMore} style={{width:"25px", cursor:"pointer"}} alt="view more" />
                                </div>
                            </div>
                            <div style={{marginTop:"10px"}}>
                                {/* <span>{job.budget.paymentType.toLowerCase()}</span> */}
                                {/* <span>{job.category}</span> */}
                            </div>
                        </div>
                    )
                })) 
                : ( <div className="job-box align-center">
                    <Button style={{background:"#F0540C",marginBottom:"10px"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 20px"}} onClick={GoToPosting}>Post job</Button>
                   <p>Not ready to post? Try a <span style={{color:"#F0540C", cursor:"pointer"}}>predefined project</span>,</p>
                    <p>or build a list of newly <span style={{color:"#F0540C", cursor:"pointer"}}>discovered talent.</span></p>
                </div>)}
            </div>
            <div className="My-jobs-container">
                <div className="job-box flex-row-between">
                   <p style={{color:"black", fontSize:"25px"}}>How to work with talent</p>
                </div>
                <div className="job-box">
                    <p style={{color:"black", fontSize:"20px", marginBottom:"10px"}}>1. Post a job to the marketplace</p>
                    <p>What would you like to get done? Make sure you provide enough detail for great talent to identify if it's right for them.</p>
                </div>
                <div className="job-box">
                    <p style={{color:"black", fontSize:"20px", marginBottom:"10px"}}>2. Talent sends you proposals</p>
                    <p>With a strong job post, you should receive offers within hours. You can always edit your post, or send an invite to reach out to talent directly.</p>
                </div>
                <div className="job-box">
                    <p style={{color:"black", fontSize:"20px", marginBottom:"10px"}}>3. Review proposals</p>
                    <p>Here's your chance to ask questions about talent’s work experience, set expectations for what you need, and discuss terms of the engagement.</p>
                </div>
                <div className="job-box">
                    <p style={{color:"black", fontSize:"20px", marginBottom:"10px"}}>4. Send a contract offer and start working</p>
                    <p>Once you both agree to your terms, start collaborating with simple, seamless, and secure tools. You only pay for work you authorize.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
