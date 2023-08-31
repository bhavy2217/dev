import React from 'react'
import './Last.css';

import Fblogo from '../assets/images/Fblogo.png';
import IGlogo from '../assets/images/IGlogo.png';
import Lilogo from '../assets/images/Lilogo.webp';


const Last = () => {
    return (
        <div className="last-block">
            <div className="all">
                <div className="about-us">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="about.html">Questions</a></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="contact.html">Email us</a></li>
                    </ul>
                </div>
                <div className="connect-with-us">
                    <h4>Connect With us</h4>
                    <div className="CWUimage">
                        <ul>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <img src={IGlogo} alt="Instagram" className="Metalogo" />
                            </a>
                            </li>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <img src={Fblogo} alt="Facebook" className="Metalogo" />
                            </a>
                            </li>
                            <li><a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
                                <img src={Lilogo} alt="LinkedIn" className="Llogo" />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright © 2022 Bhavy™ ©. All rights reserved</p>
            </div>

            <div className="goto-up">
                <a href="#home" rel="noreferrer"><img className="goto-up-img" src="Uparrow.png" alt="" /></a>
            </div>
        </div>
    )};

    export default Last