import React, {useRef} from 'react'
import ProfilePhoto from '../../../assets/ProfilePhoto.png'
import Button from '@mui/material/Button';
import LeftArrow from '../../../assets/leftArrow.png'
import RightArrow from '../../../assets/rightArrow.png'
import { useHistory } from 'react-router-dom';

const ApplicantCard = ({applicant}) => {
    let currentPossition = 0;
    const scroll = 320;
    const componentRef = useRef()
    const componentRef2 = useRef()
    const maxScroll = -componentRef.current?.offsetWidth + componentRef2.current?.offsetWidth;
    const history = useHistory();
    const moveRight = (val) => {


        currentPossition += (val * scroll);

        if (currentPossition > 0) {
            currentPossition = 0;
        }

        if (currentPossition < maxScroll) {
            currentPossition = maxScroll;
        }

        componentRef.current.style.left = `${currentPossition}px`;
    }

    const goToApplicant = () => {
        history.push({
            pathname: `/applicants/${applicant.job?.id}/application/${applicant.id}`,
            state: {
                applicant: applicant
            }
        })
    }

    console.log(applicant)
    return (
        <div className="jobCard mbottom-0">
            <div className="reviewCard-container">
                <div className="left-side">
                    <img src={`http://localhost:8080/user/get-picture/${applicant.appUserFreelancer.id}`} alt="profile" className="profile-photo" style={{width:"90px", height:"90px"}}/>
                </div>
                <div className="right-side">
                    <div className="jobCard__header">
                        <div className="flex-row-between">
                            <p className="jobCard__header__title" style={{fontSize:"20px"}}>{`${applicant.appUserFreelancer.firstName} ${applicant.appUserFreelancer.lastName}`}</p>
                            <div>
                                <Button  style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px"}}>Message</Button>
                                <Button onClick={goToApplicant} type="submit" style={{background:"#F0540C", zIndex:"99"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px", marginLeft:"30px"}}>Hire</Button>
                            </div>
                        </div>
                    </div>
                        <p>{applicant.appUserFreelancer.title}</p>
                        <p style={{marginBottom:"10px"}}>{applicant.appUserFreelancer.address?.country}</p>
                        <p style={{marginBottom:"10px"}}>${applicant.terms.bid}.00</p>
                        <p><strong>Cover letter</strong> - {applicant.additionalDetails?.coverLetter} </p>
                        <div className="dflex align-center">
                            <img className="btn-scroll" src={LeftArrow} onClick={() => moveRight(1)}/>
                            <div className="horizontal-scroll" ref={componentRef2}>
                                <div className="slider__container" ref={componentRef}>
                                {applicant.appUserFreelancer.skills.map((skill, index) => {
                                    return (
                                        <div style={{zIndex:"99"}} className="review-skill" key={index}>{skill}</div>
                                    )
                                })}
                                </div>
                            </div>
                            <img className="btn-scroll" src={RightArrow} onClick={() => moveRight(-1)}/>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default ApplicantCard
