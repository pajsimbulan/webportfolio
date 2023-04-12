import * as React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import gmail from './assets/gmail.svg';

function Contacts() {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${nameRef.current.value}`);
        console.log(`Email: ${emailRef.current.value}`);
        console.log(`Message: ${messageRef.current.value}`);
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
       
      };

      const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <section id="contacts" className="contacts">   
        <h1>Contacts</h1>
        <div className="container">
            <div className="container-2 contactInfo">
                <h2>Connect with me</h2>
                <p>Feel free to reach out to me directly through email or leave your contact information along with a message.</p> 
                <p>I am open to any opportunities, ideas, or feedback &mdash; or you can simply say hi! Anything is appreciated.</p>
                <br />
                <h2>Email:</h2>
                <p>info@paulsimbulan.com</p>
                <br />
                <div className='line' />
                <div className='links'>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://github.com/pajsimbulan')}>
                        <FontAwesomeIcon icon={faGithub} style={{color: "#000000", height:'30px',width:'30px', margin:'auto 0 auto 0'}} size="large" />
                        </button>   
                        <p>Github</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://www.linkedin.com/in/pauljsimbulan/')}>
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#0b66c2", height:'30px',width:'30px', margin:'auto 0 auto 0'}} size="large" />
                        </button>   
                        <p>Linkedin</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => window.location.href = 'mailto:info@paulsimbulan.com'}>
                            <img src={gmail} alt="gmail icon" style={{height:'30px',width:'30px', margin:'auto 0 auto 0'}}/>
                        </button>
                        <p>Email</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://yourwebsite.com/your_resume.pdf')}>
                            <FontAwesomeIcon icon={faFile} style={{color: "#183153", height:'30px',width:'30px', margin:'10px 0 auto 0'}} size="large" />
                        </button>
                        <p>Resume</p>
                    </div>
                </div>
            </div>
            <div className="container-2 forms">
                <form onSubmit={handleSubmit}>
                        <p>Name</p>
                        <input type="text" id="name" ref={nameRef} placeholder="Enter a name"/>
                        <p htmlFor="email">Email:</p>
                        <input type="email" id="email" ref={emailRef} placeholder="Enter an email"/>
                        <p htmlFor="message">Message:</p>
                        <textarea id="message" ref={messageRef} rows="10" resize="none" placeholder="Enter a message"/>
                </form>
                <button type="button" onClick={(event) => handleSubmit(event)}>Submit</button>
            </div>
        </div>
    </section>
    );
}

export default Contacts;