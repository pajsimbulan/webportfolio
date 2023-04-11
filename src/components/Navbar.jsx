import * as React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/monogram-svg.svg';

function Navbar({ _darkMode, _setDarkMode, openModal }) {
    return (
        <div className="navbar">
                <div className="name_logo">
                    <img src={logo} alt="ps logo" />
                    <p>Paul Simbulan</p>
                </div>
                <div className="navigations">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contact</a>
                    <button onClick={_setDarkMode}>
                        {_darkMode? 
                            <FontAwesomeIcon icon={faMoon} style={{color: "#000000",height:'20px',width:'20px', margin:'auto 0 auto 0'}} size="large" />
                        :
                        <FontAwesomeIcon icon={faSun} style={{color: "#000000",height:'20px',width:'20px', margin:'auto 0 auto 0'}} size="large" />}
                    </button>
                    <button onClick={openModal}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#000000",height:'20px',width:'20px', margin:'auto 0 auto 0'}} size="large" />
                    </button>
                </div>
                
        </div>
    );
}

export default Navbar;