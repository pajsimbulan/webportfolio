import * as React from 'react';
import './Home.css';
import logo from './assets/monogram-svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <section id="home" className="home">
            <div className='container-outer'>
                <div className="container-inner">  
                    <img src={logo} alt="ps logo" />
                    <div className='homeText'>
                        <h1>Hi, I'm Paul
                        </h1>
                        <p>I'm a <span style={{fontWeight:'bold'}}> Software Engineer.</span></p>
                        <p className="p1">Come get to know <span><a href="#about">me</a></span> and see my <span><a href="#projects">work</a></span> <a className="arrow" href='#about'><FontAwesomeIcon icon={faArrowDown} style={{margin:'auto 0 auto 10px', transition:'none', backgroundImage:'none'}}/></a></p>
                        <p style={{color:'red', fontWeight:'bold'}}>**TEST RUN.    Resume, Linkedin, still to be added**</p>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;