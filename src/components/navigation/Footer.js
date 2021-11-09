import React from 'react'
// import { Facebook } from '@mui/icons-material'
import Facebook1 from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import LinkedIn from '../../assets/LinkedIn.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-content-box">
                    <h3>Explore</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Careers</li>
                    </ul>

                </div>
                <div className="footer-content-box">
                    <h3>Contact</h3>
                    <ul>
                        <li>Lancefy Co. Romania</li>
                        <li>1 Union Square</li>
                        <li>Bucharest, dist.4, Romania</li>
                    </ul>
                </div>
                <div className="footer-content-box">
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                    </ul>
                </div>
                <div className="footer-content-box">
                <h3>Support</h3>
                    <ul>
                        <li>User Guide</li>
                        <li>Contact Us</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="footer-social-media">
                <h3>Follow us: </h3>
                <div className="footer-social-media-icons">
                    {/* <Facebook /> */}
                    <img src={Facebook1} />
                    <img src={Instagram} />
                    <img src={Twitter} />
                    <img src={LinkedIn} />
                </div>
            </div>
            
        </div>
    )
}

export default Footer
