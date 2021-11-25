import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';
import Marker from '../../assets/Marker.png'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const Apply = () => {
    const location = useLocation();
    const history = useHistory();
    const job = location.state.job;
    const { register, handleSubmit, formState: {errors} } = useForm();

    const goToJob = () => {
        history.push({
            pathname: `/job/${job.id}`,
            state: {job: job}
        })
    }

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
        <h1 style={{display:"inline-block", marginLeft:"22%", marginTop:"30px", marginBottom:"30px"}}>Submit an application</h1>
        <form noValidate onSubmit={
            handleSubmit((data) => {
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
                <h2>Job details</h2>
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
                        <TextField className={classes.root} id="bid" label="$" variant="outlined" size="small" sx={{ minWidth: "100%" }}
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
                    <TextField className={classes.root} id="total" label="$" variant="outlined" size="small" sx={{ minWidth: "100%" }}
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
