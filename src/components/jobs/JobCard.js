import React from 'react'
import Heart from '../../assets/Heart.png'
import Marker from '../../assets/Marker.png'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const JobCard = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="jobCard">
            <div className="jobCard__header">
                <h2 className="jobCard__header__title">Title</h2>
                <div className="jobCard__header__info">
                    <p className="payType">Fixed-price</p>
                    <p className="experienceLevel">Intermediate</p>
                    <p className="budget">Budget: $100</p>
                    <p className="postDate">Posted 2 hours ago</p>
                </div>
                <div className="favoriteIcon">
                <Checkbox style={{color:"#F0540C"}} size="small" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    {/* <img src={Heart} alt="heart" /> */}
                </div>
            </div>
            <div className="jobCard__body">
                <p className="jobCard__body__description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="jobCard__footer">
                <div className="jobCard__footer__skills">
                    <div className="skills">Skill</div>
                    <div className="skills">Skill</div>
                    <div className="skills">Skill</div>
                </div>
                <div className="location">
                    <img src={Marker}/>
                    <p className="location__country">Romania</p>
                </div>
            </div>
            
        </div>
    )
}

export default JobCard
