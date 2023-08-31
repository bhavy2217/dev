import React from 'react';
import './Nav.css';
import bar from '../assets/images/bar.png';


const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <img className="imgbar" src={bar} alt="" />
                </label>
                <label className="logo">Design</label>
                <ul>
                    <li><a className="nav-btn" href="/">Home</a></li>
                    <li><a className="nav-btn" href="/Design">Design</a></li>
                    <li><a className="nav-btn" href="/About">About</a></li>
                    <li><a className="nav-btn" href="/Contact">Contact</a></li>
                    {/* <li><a  className="login-icon" href="login.html">Login</a></li> */}
                </ul>
            </nav>

        </div>

    );
};

export default Nav;
