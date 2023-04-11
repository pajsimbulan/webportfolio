import * as React from 'react';
import './About.css';
import html from './assets/html.svg';
import css from './assets/css.svg';
import javascript from './assets/javascript.svg';
import typescript from './assets/typescript.svg';
import react from './assets/react.svg';
import express from './assets/express.svg';
import mongodb from './assets/mongodb.svg';
import python from './assets/python.svg';
import java from './assets/java.svg';
import cplusplus from './assets/plusplus.svg';
import c from './assets/c.svg';
import git from './assets/git.svg';
import supabase from './assets/supabase.svg';
import materialui from './assets/materialui.svg';
import nodejs from './assets/nodejs.svg';
import postgresql from './assets/postgresql.svg';
import figma from './assets/figma.svg';
import expo from './assets/expo.svg';
import vite from './assets/vite.svg';
import docker from './assets/docker.svg';
import jest from './assets/jest.svg';
function About() {
    /**
     * html +
     * javascript +
     * css +
     * react +
     * express  +
     * mongodb +
     * python +
     * java + 
     * c++ +
     * c +
     * git +
     * supabase +
     * typescript +
     * material ui  +
     * node js +
     * postgresql +
     * figma +
     * expo +
     * vite +
     * docker +
     * jest +
     */
    return (
        <section id="about" className="about">
            <div className="rowContainer">
                <div className="aboutTextContainer">
                    <h1>About</h1>
                    <p>
                        I am a <span>Software Engineer</span> based in Bay Area, California.  I have worked with Full-Stack Web Applications, Mobile Applications, and now I am currently setting my 
                        sights on Artificial Intelligence and Machine Learning.  
                    </p>
                    <p>
                        I am a graduate of the <span>University of California, Santa Cruz</span> with a <span>Bachelor's Degree</span> in <span>Computer Science</span>, where I learned the fundamentals of programming&mdash;  
                        from learning the Microarchitecture of CPU with RISC-V to data structures and utilizing a full tech stack. 
                    </p>
                    <p>
                        From my recent solo project, <span>Mailman</span>, I learned how to fully build a full stack application independently and attempt to innovate a new way to to send emails and 
                        deploy it to the cloud.  I also learned the drawbacks of trying to work alone and the importance of working with a team.
                    </p>
                    <p>
                        My featured project <span>Slugfit</span> is a mobile application that I built with a team of 5 other students.  In that project, I learned to function as a team and how to 
                        work with a team to build a product.  While practicing <span>Agile Methodologies</span> and <span>Scrum</span> in building that project, I learned to properly manage my time in approaching a task to reach a deadline.
                    </p>
                </div>
                <div className="technologiesContainer">
                    <h2>Technologies</h2>
                <img src={mongodb}></img>
                </div>
                
            </div>
            
        </section>
    );
    
}

export default About;