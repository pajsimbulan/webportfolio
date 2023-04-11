import * as React from 'react';
import './Home.css';
import logo from './assets/monogram-svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHands, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <section id="home" className="home">
            <div className='container-outer'>
                <div className="container-inner">  
                    <img src={logo} alt="ps logo" />
                    <div className='homeText'>
                        <h1>Hi, I'm Paul
                            <span className="handWave">  
                                <FontAwesomeIcon icon={faHands} style={{marginLeft:'10px'}}/>
                            </span>
                        </h1>
                        <p>I'm a <span style={{fontWeight:'bold'}}> Software Engineer</span></p>
                        <p className="p1">Come see my work <FontAwesomeIcon icon={faArrowDown} style={{margin:'auto 0 auto 10px'}}/></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;