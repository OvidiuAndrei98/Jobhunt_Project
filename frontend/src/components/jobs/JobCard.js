import React from 'react'
import Marker from '../../assets/Marker.png'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';



const JobCard = ({job}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const history = useHistory();


    const goToJob = () => {
        history.push({
            pathname: `/job/${job.id}`,
            state: {job: job}
        })
    }

    return (
        <div className="jobCard" onClick={goToJob}>
            <div className="jobCard__header">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h2 className="jobCard__header__title">{job.title}</h2>
                    <div className="favoriteIcon">
                    <Checkbox style={{color:"#F0540C"}} size="small" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        {/* <img src={Heart} alt="heart" /> */}
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
            </div>
            
        </div>
    )
}

export default JobCard
