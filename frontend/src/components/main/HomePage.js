import React from 'react'
import Navbar from '../navigation/Navbar'
import Triangle from '../main/Triangle2.png'
import Footer from '../navigation/Footer'
import Button from '@mui/material/Button';

const HomePage = () => {
    return (
        <section style={{position:"relative", width:"100%", height:"100%", display:"flex", flexDirection:"column"}}>
            <Navbar />
            <img src={Triangle} style={{height:"70vh"}} />
            <div className="homepage-text">
                <h1>Find out Talented</h1>
                <h1>Freelancers!</h1>
                <div className="buttons">
                    <Button style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px", height:"0", marginTop:"10%"}}>Find Work</Button>
                    <Button style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px", height:"0", marginTop:"10%"}}>Find Talent</Button>
                    {/* <div className="findWork-btn">Find Work</div> */}
                    {/* <div className="findTalent-btn">Find Talent</div> */}
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default HomePage
