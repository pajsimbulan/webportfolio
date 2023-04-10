import * as React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function Footer({ _darkMode, _setDarkMode}) {
    
    const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="footer">
            <button onClick={() => openLink('https://github.com/pajsimbulan')}>
                <FontAwesomeIcon icon={faGithub} style={{color: "#000000", height:'20px',width:'20px', margin:'auto 0 auto 0'}} size="large" />
            </button>   
            <button onClick={() => openLink('https://www.linkedin.com/in/pauljsimbulan/')}>
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#000000", height:'20px',width:'20px', margin:'auto 0 auto 0'}} size="large" />
            </button>   
            <button onClick={() => openLink('https://yourwebsite.com/your_resume.pdf')}>
                <FontAwesomeIcon icon={faFile} style={{color: "#000000", height:'20px',width:'20px', margin:'10px 0 auto 0'}} size="large" />
                <p>RESUME</p>
            </button>
        </div>
    );
}

export default Footer;
