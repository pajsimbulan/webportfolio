import * as React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/monogram-svg.svg';

function Navbar({ openModal }) {
    return (
        <div className="navigationbar">
                <a href="#home" className="name_logo_link">
                    <div className="name_logo">
                        <img src={logo} alt="ps logo" />
                        <p>Paul Simbulan</p>
                    </div>
                </a>
                <div className="navigations">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contact</a>
                    <div />
                    <button className="hamburger" onClick={openModal}>
                        <FontAwesomeIcon icon={faBars} className ="icon" style={{color: "#000000"}} />
                    </button>
                </div>  
        </div>
    );
}

export default Navbar;