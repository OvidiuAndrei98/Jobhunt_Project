import React from 'react'
import Footer from '../../navigation/Footer'
import Navbar from '../../navigation/Navbar'
import ProfilePhoto from '../../../assets/ProfilePhoto.png'
import { useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom'

const Application = () => {
    const location = useLocation()
    const applicant = location.state.applicant
    const history = useHistory()

    const goToProfile = () => {
        history.push(`/user/${applicant.appUserFreelancer.id}/profile`)
    }

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexWrap: "wrap",
          },
        root: {
            margin: "15px 0",
            width: "50%",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392"
              },
              "& .MuiInputBase-root": {
                height:"70px",
                display: "flex",
                alignItems: "start"
              }
          },
      }));

      const goToMessages = () => {
        history.push({
            pathname: `/user/43/message`,
            state: {recipient: applicant.appUserFreelancer}})
      }

      const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className="apply-container mtop-40 br5 mbottom-0"> 
                <div className='job-box flex-row'>
                    <div className="left-side">
                        <img src={`http://localhost:8080/user/get-picture/${applicant.appUserFreelancer.id}`} alt="profile" className="profile-photo" style={{width:"80px", height:"80px"}}/>
                    </div>
                    <div className="right-side">
                        <div className="applicantion__header">
                            <div className="flex-row-between">
                                <p className="jobCard__header__title" style={{fontSize:"20px"}}>{`${applicant.appUserFreelancer.firstName} ${applicant.appUserFreelancer.lastName}`}</p>
                                <div>
                                    {/* <Button  style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px"}}>Message</Button> */}
                                    <Button type="submit" style={{background:"#F0540C", zIndex:"99"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px", marginLeft:"30px"}}>Hire Freelancer</Button>
                                </div>
                            </div>
                            <p style={{marginBottom:"10px", color:"rgba(0, 0, 0, 0.60)"}}>{applicant.appUserFreelancer.address?.country}</p>
                            <p style={{marginBottom:"10px", color:"#F0540C", cursor:"pointer"}} onClick={goToProfile}>View Profile</p>
                        </div>
                    </div>
                </div>
                <div className='job-box flex-row pd-0'>
                    <div className="left-side b-right f-1 pd-30">
                        <div>
                            <p style={{marginBottom:"5px",fontWeight:"550", fontSize:"13.5px", color:"rgba(0, 0, 0, 0.70)"}}>Applicannt</p>
                            <p style={{fontWeight:"550", fontSize:"13.4px", color:"rgba(0, 0, 0, 0.60)"}}>{applicant.appUserFreelancer.firstName} has applied to your company's job <spam>{applicant.job.title}</spam></p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="right-side f-3 pd-30">
                        <div className='flex-row-between'>
                            <p style={{fontWeight:"550", fontSize:"18px", color:"rgba(0, 0, 0, 0.80)"}}>Application Details</p>
                            <div>
                                <p style={{fontWeight:"550", fontSize:"18px", color:"rgba(0, 0, 0, 0.80)"}}>${applicant.terms.bid}.00</p>
                                <p style={{fontWeight:"550", fontSize:"13.4px", color:"rgba(0, 0, 0, 0.60)", marginBottom:"10px"}}>Proposed Bid</p>
                            </div>
                        </div>
                        <p style={{fontWeight:"550", fontSize:"16px", color:"rgba(0, 0, 0, 0.80)" , marginBottom:"20px"}}>Cover Letter</p>
                        <p style={{fontWeight:"550", fontSize:"14px", color:"rgba(0, 0, 0, 0.60)" , marginBottom:"20px"}}>{applicant.additionalDetails.coverLetter}</p>
                        <TextField className={classes.root} id="message" label="Message" variant="outlined" size="small" maxRows={5} multiline sx={{ minWidth: "100%", marginTop:"25px", marginBottom:"18px"}} />
                        <Button type="submit" style={{background:"#F0540C", zIndex:"99"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px"}}>Send Message</Button>
                    </div>
                </div>
            </div>
            <div className="apply-container br5 mbottom-50"> 
                <div className='job-box flex-row pd-0'>
                    <div className="left-side b-right f-1 pd-30">
                        <div>
                            <div className='header-group'> 
                                <p style={{fontWeight:"550", fontSize:"16px", color:"rgba(0, 0, 0, 0.80)" , marginBottom:"10px"}}>Availability</p>
                            </div>
                            <p>More than 30 hrs/week</p>
                        </div>
                        <div className="mtop-40">
                            <div className='header-group'> 
                                <p style={{fontWeight:"550", fontSize:"16px", color:"rgba(0, 0, 0, 0.80)" , marginBottom:"10px"}}>Languages</p>
                            </div>
                            {applicant.appUserFreelancer.languages?.map((language,index) => {
                                return (
                                    <div>
                                        <div>
                                            <h4 style={{margin:"5px 0", fontWeight:"400"}}>{language.language}</h4>
                                            <p style={{fontWeight:"400", fontSize:"14px"}}>{language.proficiency}</p>
                                        </div>
                                    </div>
                            )})}
                        </div>
                        <div className="mtop-40">
                            <div className='header-group'> 
                                <p style={{fontWeight:"550", fontSize:"16px", color:"rgba(0, 0, 0, 0.80)" , marginBottom:"10px"}}>Education</p>
                            </div>
                            {applicant.appUserFreelancer.education?.map(edu => {
                                    return (
                                    <div>
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
                    <div className="right-side f-3 pd-30">
                        <p style={{fontWeight:"550", fontSize:"16px", color:"rgba(0, 0, 0, 0.80)" , marginBottom:"20px"}}>Skills</p>
                        <div className='flex-row'>
                            {applicant.appUserFreelancer.skills?.map(skill => {
                                return (
                                    <div className="skill">{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Application
