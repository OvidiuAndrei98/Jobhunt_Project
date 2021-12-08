import React, {useRef} from 'react'
import ProfilePhoto from '../../../assets/ProfilePhoto.png'
import Button from '@mui/material/Button';
import LeftArrow from '../../../assets/leftArrow.png'
import RightArrow from '../../../assets/rightArrow.png'
import Marker from '../../../assets/Marker.png'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';

const ApplicantCard = ({applicant}) => {
    let currentPossition = 0;
    const scroll = 320;
    const componentRef = useRef()
    const componentRef2 = useRef()
    const maxScroll = -componentRef.current?.offsetWidth + componentRef2.current?.offsetWidth;
    console.log(maxScroll)

    const moveRight = (val) => {


        currentPossition += (val * scroll);

        if (currentPossition > 0) {
            currentPossition = 0;
        }

        if (currentPossition < maxScroll) {
            currentPossition = maxScroll;
            console.log(currentPossition)
        }
        console.log(currentPossition);

        componentRef.current.style.left = `${currentPossition}px`;
    }


    console.log(applicant)
    return (
        <div className="jobCard">
            <div className="reviewCard-container">
                <div className="left-side">
                    <img src={ProfilePhoto} alt="profile" className="profile-photo" style={{width:"90px", height:"90px"}}/>
                </div>
                <div className="right-side">
                    <div className="jobCard__header">
                        <div className="flex-row-between">
                            <p className="jobCard__header__title" style={{fontSize:"20px", marginBottom:"10px"}}>{`${applicant.appUserFreelancer.firstName} ${applicant.appUserFreelancer.lastName}`}</p>
                            <div>
                                <Button  style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px"}}>Message</Button>
                                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"3px 40px", marginLeft:"30px"}}>Hire</Button>
                            </div>
                        </div>
                    </div>
                        <p>{applicant.appUserFreelancer.title}</p>
                        <p style={{marginBottom:"10px"}}>{applicant.appUserFreelancer.address.country}</p>
                        <p style={{marginBottom:"10px"}}>${applicant.terms.bid}.00</p>
                        <p><strong>Cover letter</strong> - {applicant.additionalDetails.coverLetter} </p>
                        <div className="horizontal-scroll" ref={componentRef2}>
                            <img className="btn-scroll" src={LeftArrow} onClick={() => moveRight(1)}/>
                            <img className="btn-scroll" src={RightArrow} onClick={() => moveRight(-1)}/>
                            <div className="slider__container" ref={componentRef}>
                            {applicant.appUserFreelancer.skills.map((skill, index) => {
                                return (
                                    <div style={{zIndex:"99"}} className="review-skill" key={index}>{skill}</div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
            </div>
            {/* <div className="jobCard__header">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h2 className="jobCard__header__title">{job.title}</h2>
                    <div className="favoriteIcon">
                    <Checkbox style={{color:"#F0540C"}} size="small" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <img src={Heart} alt="heart" />
                    </div>
                </div>
                <div className="jobCard__header__info">
                    <p className="payType">{job.budget.paymentType}</p>
                    <p className="experienceLevel">{job.scope.experienceLevel}</p>
                    <p className="budget">Budget: {job.budget.budget}</p>
                    <p className="postDate">Posted 2 hours ago</p>
                </div>
            </div>
            <div className="jobCard__body">
                <p className="jobCard__body__description">{job.description}</p>
            </div>
            <div className="jobCard__footer">
                <div className="jobCard__footer__skills">
                    {job.skills.map(skill => <div className="skills">{skill}</div>)}
                </div>
                <div className="location">
                    <img src={Marker}/>
                    <p className="location__country">{job.location}</p>
                </div>
            </div> */}
        </div>
    )
}

export default ApplicantCard
