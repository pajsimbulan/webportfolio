import * as React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import gmail from '../assets/gmail.svg';
import resumeicon from '../assets/resumeicon.svg';

function Footer() {
    const currentYear = new Date().getFullYear();
    const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="footer">
            <div className="linkRow">
                <button onClick={() => openLink('https://github.com/pajsimbulan')}>
                    <FontAwesomeIcon icon={faGithub} className="icon" style={{color: "#000000"}} />
                </button>   
                <button onClick={() => openLink('https://www.linkedin.com/in/pauljsimbulan/')}>
                    <FontAwesomeIcon icon={faLinkedin} className="icon" style={{color: "#0b66c2"}} />
                </button>   
                <button onClick={() => window.location.href = 'mailto:info@paulsimbulan.com'}>
                    <img src={gmail} alt="gmail icon"/>
                </button>

                <button onClick={() => openLink('https://drive.google.com/file/d/193fr_CVtczfLmmZgPmdOJJqORhUs_MB7/view?usp=share_link')}>
                    <img src={resumeicon} alt='RESUME'></img>
                </button>
            </div>
            <div className='copyrightRow'>  
                <p>© {currentYear} Paul Simbulan</p>
            </div>
        </div>
    );
}

export default Footer;
