import * as React from 'react';
import './Home.css';
import logo from './assets/monogram-svg.svg';
<i class="fa-solid fa-sun" style="color: #000000;"></i>

function Home() {
    return (
        <section id="home" className="home">
            <div className="container">  
                <img src={logo} alt="ps logo" />
                <div className='homeText'>
                    <h1>Hi, I'm Paul</h1>
                    <p>I'm a Software Engineer</p>
                    <p>Come see my work!</p>
                </div>
            </div>
        </section>
    );
}

export default Home;