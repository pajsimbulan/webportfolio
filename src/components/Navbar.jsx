import * as React from 'react';
import './Components.css';
function Navbar() {
    return (
        <div className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contact</a>
        </div>
    );
}

export default Navbar;