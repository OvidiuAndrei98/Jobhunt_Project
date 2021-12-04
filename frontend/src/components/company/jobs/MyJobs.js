import React, {useEffect, useState} from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import Button from '@mui/material/Button';
import AppUserFreelancer from '../../../service/AppUserFreelancer';
import AuthService from '../../../service/AuthService';


export const MyJobs = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        AppUserFreelancer.getFreelancerById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="info-container">
                <h2>{user.company?.companyName}</h2>
                <div>
                <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C", marginRight:"10px"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 30px", height:"0"}}>Browse Projects</Button>
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 20px"}}>Post job</Button>
                </div>
            </div>
            <div className="My-jobs-container">
                <div className="job-box flex-row-between">
                   <h2>My listings</h2>
                   <span style={{color:"#F0540C", cursor:"pointer"}}>All postings</span>
                </div>
                <div className="job-box align-center">
                    <Button type="submit" style={{background:"#F0540C",marginBottom:"10px"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 20px"}}>Post job</Button>
                   <p>Not ready to post? Try a <span style={{color:"#F0540C", cursor:"pointer"}}>predefined project</span>,</p>
                    <p>or build a list of newly <span style={{color:"#F0540C", cursor:"pointer"}}>discovered talent.</span></p>
                </div>
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