import * as React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import gmail from './assets/gmail.svg';
import emailjs from '@emailjs/browser';
import resumeicon from './assets/resumeicon.svg';

const TO_NAME = 'Paul';
const REPLY_TO_EMAIL = 'info@paulsimbulan.com';

function Contacts() {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();
    const [sendingEmail, setSendingEmail] = React.useState(false);
    const [successfulEmail, setSuccessfulEmail] = React.useState(false);
    const [failedEmail, setFailedEmail] = React.useState(false);
    const [invalidForm, setInvalidForm] = React.useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(nameRef.current.value === '' || emailRef.current.value === '' || messageRef.current.value === '') {
            setInvalidForm(true);
            setTimeout(() => {
                setInvalidForm(false);
            }, 2000);
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
            return;
        }
        setSendingEmail(true);
        let status = '';
        await emailjs.send('service_8sarxo8', 'contact_form', {
            from_name: `${nameRef.current.value} <${emailRef.current.value}>`,
            to: TO_NAME,
            message: `${messageRef.current.value}`,
            reply_to: REPLY_TO_EMAIL
        }, 'Ta1twmm7Oo0s7v4Nn')
        .then((result) => {
            console.log(result.text);
            status = 'success';
        }, (error) => {
            console.log(error.text);
            status = 'failed';
        }).catch((error) => {
            status = 'failed';
            console.log(error);
        }).finally(() => {
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
            setSendingEmail(false);
            if(status === 'success') {
                setSuccessfulEmail(true);
                setTimeout(() => {
                    setSuccessfulEmail(false);
                }, 2000);
            }
            if(status === 'failed') {
                setFailedEmail(true);
                setTimeout(() => {
                    setFailedEmail(false);
                }, 6000);
            }
        });
        
      };

      const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <section id="contacts" className="contacts">   
        {sendingEmail && 
        <div className="modal" data-backdrop="static">
            <div className="modalLoadingContents">
                <div className="loading-spinner"></div>
                <div>Sending Message</div>
            </div>
        </div>}
        {successfulEmail &&
        <div className="modalAlert" data-backdrop="static">
            <div className="modalSuccessContents">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle className="path circle" fill="none" stroke="#198754" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline className="path check" fill="none" stroke="#198754" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " /> 
                </svg> 
                <p style={{fontWeight:'bold'}}>Message Successfully Sent!</p>
            </div >
        </div>}
        {failedEmail &&
        <div className="modalAlert" data-backdrop="static">
            <div className='modalFailureContents'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#db3646" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> 
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" X2="34.4" y2="92.2" /> 
                </svg>
                <p style={{fontWeight:'bold'}}>Automated Message Failed to Send!</p>
                <p style={{color:'#6b7280'}}>Sorry for the Inconvenice.  Please reach out to me through email directly for the meantime.</p>
            </div>
        </div>}
        {invalidForm &&
        <div className="modalAlert" data-backdrop="static">
            <div className='modalFailureContents'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#db3646" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> 
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" X2="34.4" y2="92.2" /> 
                </svg>
                <p style={{fontWeight:'bold'}}>Message Failed to Send!</p>
                <p style={{color:'#6b7280'}}>Please make sure to fill all forms before submitting</p>
            </div>
        </div>}
        <h1>Contacts</h1>
        <br />
        <div className="container">
            <div className="container-2 contactInfo">
                <h2>Connect with me</h2>
                <p>Feel free to reach out to me directly through email or leave your contact information along with a message.</p> 
                <p>I am open to any opportunities, ideas, or feedback &mdash; or you can simply say hi!</p> 
                <p>Anything is appreciated!</p>
                <br />
                <h2>Email:</h2>
                <p>info@paulsimbulan.com</p>
                <br />
                <div className='line' />
                <div className='links'>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://github.com/pajsimbulan')}>
                        <FontAwesomeIcon icon={faGithub} className="icon" style={{color: "#000000"}}/>
                        </button>   
                        <p>Github</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://www.linkedin.com/in/pauljsimbulan/')}>
                            <FontAwesomeIcon icon={faLinkedin} className="icon" style={{color: "#0b66c2"}}/>
                        </button>   
                        <p>Linkedin</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => window.location.href = 'mailto:info@paulsimbulan.com'}>
                            <img src={gmail} alt="gmail icon" />
                        </button>
                        <p>Email</p>
                    </div>
                    <div className='link-col'>
                        <button onClick={() => openLink('https://drive.google.com/file/d/1DlGZiOZaH9dbk5l4z4Gy6XoOj3rTm4Q5/view')}>
                        <img src={resumeicon} alt="resume"/>
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
                <button type="button" onClick={(event) => handleSubmit(event)}>Send Message <span> <FontAwesomeIcon icon={faPaperPlane} style={{color: "#f3f4f6", height:'px',width:'15px', margin:'auto 0 auto 0'}} /></span></button>
            </div>
        </div>
        
    </section>
    );
}

export default Contacts;