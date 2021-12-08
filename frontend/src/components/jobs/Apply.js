import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';
import Marker from '../../assets/Marker.png'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AuthService from '../../service/AuthService';
import ApplicationsService from '../../service/ApplicationsService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Apply = () => {
    const location = useLocation();
    const history = useHistory();
    const job = location.state.job;
    const user = AuthService.getCurrentUser();
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [bid, setBid] = React.useState(0);
    const [alert, setAlert] = React.useState(false);
    const [error, setError] = React.useState(false);
    const vertical = 'top';
    const horizontal = 'center';

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };
   

    const goToJob = () => {
        history.push({
            pathname: `/job/${job.id}`,
            state: {job: job}
        })
    }

    const handleBid = (e) => {
       setBid(e.target.value - (0.2 * e.target.value));
    }

    console.log(bid);

    const redirectToJobs = () => {
        history.push(`/jobs`)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '50px',
            margin: "15px 0",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392",
              },
          },
      }));

      const classes = useStyles();

    return (
    <div>
        <Navbar />
        <Snackbar anchorOrigin={{vertical, horizontal}} open={alert} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                You have successfully applied for this job!
            </Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{vertical, horizontal}} open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Job application failed!
            </Alert>
        </Snackbar>
        <h1 style={{display:"inline-block", marginLeft:"22%", marginTop:"30px", marginBottom:"30px"}}>Submit an application</h1>
        <form noValidate onSubmit={
            handleSubmit((data) => {
                const application = {
                    terms: {bid: data.bid, fees: (20 / 100) * data.bid, receive: data.bid - (20 / 100) * data.bid},
                    additionalDetails: {coverLetter: data.coverLetter},
                }
                    ApplicationsService.apply(application, job.id, user.id).then(() => {
                        setAlert(true);
                        setTimeout(() => {
                            history.push({
                            pathname: `/work`,
                        });}, 3000);
                    }).catch(() => {
                        setError(true);
                        setTimeout(() => {
                            history.push({
                            pathname: `/work`,
                        });}, 3000);
                    })
                }
            )
        }>
        <div className="apply-container">
            <div className="job-box">
                <h2>Job details</h2>
            </div>
            <div className="job-box">
                <h3 style={{color:"rgba(0, 0, 0, 0.80)", marginBottom:"30px"}}>{job.title}</h3>
                <p style={{color:"#F0540C", textTransform:"capitalize", marginBottom:"20px"}}>{job.category}</p>
                <p>{job.description}</p>
                <p className="view-job-posting" onClick={goToJob}>View job posting</p>
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
        </div>
        <div className="apply-container">
            <div className="job-box flex-row-between">
                <h2>Terms</h2>
                <p>Client's budget: $90.00 USD</p>
            </div>
            <div className="job-box">
                <p style={{fontWeight:"550",fontSize:"18px", color:"rgba(0, 0, 0, 0.80)", marginBottom:"15px"}}>What is the full amount you'd like to bid for this job?</p>
                <div className="flex-row-between">
                    <div>
                        <p style={{fontWeight:"550",fontSize:"18px", color:"rgba(0, 0, 0, 0.80)"}}>Bid</p>
                        <p style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.80)"}}>Total amount the client will see on your proposal</p>
                    </div>
                    <div>
                        <TextField className={classes.root} id="bid" label="$" onInput={handleBid} variant="outlined" size="small" sx={{ minWidth: "100%" }}
                        {...register("bid", {required: true})}/>
                    </div>
                </div>
            </div>
            <div className="job-box flex-row-between">
                <p style={{fontWeight:"550",fontSize:"16px", color:"rgba(0, 0, 0, 0.80)", marginBottom:"15px"}}>Lancefy Service Fee</p>
                <p>${0.2 * 90}</p>
            </div>
            <div className="job-box flex-row-between">
                <div>
                    <p style={{fontWeight:"550",fontSize:"16px", color:"rgba(0, 0, 0, 0.80)"}}>You'll Receive</p>
                    <p>The estimated amount you'll receive after service fees</p>
                </div>
                <div>
                    <TextField className={classes.root} id="total" value={`${bid}`} label="$" variant="outlined" size="small" sx={{ minWidth: "100%" }}
                    {...register("total", {required: true})}/>
                </div>
            </div>
        </div>
        <div className="apply-container">
            <div className="job-box">
                <h2>Additional details</h2>
            </div>
            <div style={{position:"relative"}} className="job-box">
                <p style={{fontWeight:"550",fontSize:"18px", color:"rgba(0, 0, 0, 0.80)", marginBottom:"15px"}}>Cover Letter</p>
                <p style={{fontWeight:"500",fontSize:"18px", color:"rgba(0, 0, 0, 0.40)", marginBottom:"15px"}}>Introduce yourself and explain why you’re a strong candidate for this job. Feel free to suggest any changes to the job details or ask to schedule a video call.</p>
                <textarea className="text-area" id="coverLetter" placeholder="Add cover letter"
                {...register("coverLetter", {required: true})}/>
            </div>
            <div className="job-box">
                <div className="flex-row allign-middle">
                    <Button type="submit" style={{background:"#F0540C", width:"20%"}} variant="contained" sx={{borderRadius:"25px", padding:"8px 20px", marginRight:"15px"}}><p>Submit application</p></Button>
                    <p style={{fontWeight:"500", color:"#F0540C", cursor:"pointer"}} onClick={redirectToJobs}>Cancel</p>
                </div>
            </div>
        </div>
        </form>
        <Footer />
    </div>
    )
}

export default Apply
