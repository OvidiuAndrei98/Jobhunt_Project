import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import SideNav from '../navigation/SideNav'
import Edit from '../../assets/Edit.png'

const ContactInfo = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-inf-container">
                <SideNav /> 
                <div className="center-container">
                    <h1>Contact Info</h1>
                    <div className="account">
                        <div className="account-header">   
                            <h1>Account</h1>
                            <img src={Edit} />
                        </div>
                        <div className="name">
                            <h3>Name</h3>
                            <p>Andrei Penica</p>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <p>andrei.penica@yahoo.com</p>
                        </div>
                    </div>
                    <div className="location-container">
                        <div className="location-header">   
                            <h1>Location</h1>
                            <img src={Edit} />
                        </div>
                        <div className="address">
                            <h3>Address</h3>
                            <p>Bulevardul Brancoveanu 5</p>
                            <p>Bucharest, Romania</p>
                        </div>
                        <div className="phone">
                            <h3>Phone</h3>
                            <p>0743212448</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    )
}

export default ContactInfo
