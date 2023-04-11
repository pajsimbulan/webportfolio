import * as React from 'react';
import './Contacts.css';
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

    return (
        <section id="contacts" className="contacts">   
        <h1>Contacts</h1>
        <div className="container">
            <div className="container-2 forms">
                <form onSubmit={handleSubmit}>
                        <p>Name</p>
                        <input type="text" id="name" ref={nameRef} />
                        <p htmlFor="email">Email:</p>
                        <input type="email" id="email" ref={emailRef} />
                        <p htmlFor="message">Message:</p>
                        <textarea id="message" ref={messageRef} rows="10" resize="none"/>
                </form>
                <button type="button" onClick={(event) => handleSubmit(event)}>Submit</button>
            </div>
            <div className="container-2 contactInfo">
                <h2>Connect with me</h2>
                <p>Feel free to reach out to me directly through email or leave your contact information along with a message. I am open to any ideas or feedback, or you can simply say hi! Anything is appreciated.</p>
                <p>Anonymous message is fine, too</p>
            </div>
        </div>
    </section>
    );
}

export default Contacts;