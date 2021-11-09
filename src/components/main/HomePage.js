import React from 'react'
import Navbar from '../navigation/Navbar'
import Triangle from '../main/Triangle2.png'
import Footer from '../navigation/Footer'
// import { ReactComponent as Triangle } from "./Triangle2.png";

const HomePage = () => {
    return (
        <section style={{position:"relative", width:"100%", height:"100%", display:"flex", flexDirection:"column"}}>
            <Navbar />
            <img src={Triangle} style={{height:"90vh"}} />
            <Footer/>
        </section>
    )
}

export default HomePage
