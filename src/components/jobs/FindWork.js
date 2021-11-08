import React from 'react'
import Navbar from '../navigation/Navbar'
import SearchIcon from '../../assets/SearchIcon.png'
import JobCard from './JobCard'

const FindWork = () => {
    return (
        <>
            <Navbar />
            <div className="container-fw">
                <div className="left-collumn">
                    <h3 style={{marginBottom:"15px"}}>Find Work</h3>
                    <p style={{marginBottom:"15px"}}>Filter</p>
                    <div className="filter-container">
                    </div>
                </div>
                <div className="right-collumn">
                    <div className="searchContainer">
                        <input type="text" placeholder="Search" className="searchBar"></input>
                        <div className="searchIcon">
                            <div className="searchSquare"><img src={SearchIcon} style={{width:"60%"}}/></div>
                        </div>
                    </div>
                    <JobCard />
                </div>
            </div>
            
        </>
    )
}

export default FindWork



