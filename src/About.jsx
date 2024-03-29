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
import cplusplus from './assets/cplusplus.svg';
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
import npm from './assets/npm.svg';
import yarn from './assets/yarn.svg';
import storybook from './assets/storybook.svg';
import heroku from './assets/heroku.svg';
import linux from './assets/linux.svg';
import tailwindcss from './assets/tailwindcss.svg';
import hostinger from './assets/hostinger.svg';
import aws from './assets/aws.svg';

const technologies = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React','TailwindCSS','MaterialUI', 'Python', 'Java', 'C++', 'C', 'ExpressJS', 'NodeJS','Expo','Figma',
'MongoDB','Supabase' , 'Postgresql', 'Git','Linux', 'Docker','Vite', 'NPM', 'Yarn', 'Jest', 'Storybook', 'Amazon Web Services', 'Heroku','Hostinger'];
const techImages = {
    HTML: html,
    CSS: css,
    Javascript: javascript,
    Typescript: typescript,
    React: react,
    ExpressJS: express,
    MongoDB: mongodb,
    Python: python,
    Java: java,
    'C++': cplusplus,
    C: c,
    Git: git,
    Supabase: supabase,
    MaterialUI: materialui,
    NodeJS: nodejs,
    Postgresql: postgresql,
    Figma: figma,
    Expo: expo,
    Vite: vite,
    Docker: docker,
    Jest: jest,
    Storybook: storybook,
    Heroku: heroku,
    NPM: npm,
    Yarn: yarn,
    Linux: linux,
    TailwindCSS: tailwindcss,
    Hostinger: hostinger,
    'Amazon Web Services': aws
  };
  
function About() {
    return (
        <section id="about" className="about">
            <div className="rowContainer">
                <div className="aboutTextContainer">
                    <h1>About</h1>
                    <p>
                        I am a <span>Software Engineer</span> based in Bay Area, California.  I have worked with Full-Stack Web Applications, Mobile Applications, Low-level languages, and now I am currently setting my 
                        sights on Artificial Intelligence and Rust.  
                    </p>
                    <p>
                        I am a graduate of the <span>University of California, Santa Cruz</span> with a <span>Bachelor's Degree</span> in <span>Computer Science</span>, where I learned the fundamentals of programming&mdash;  
                        from learning the Microarchitecture of CPU with RISC-V Assembly to Data Structures and utilizing a Full Tech Stack. 
                    </p>
                    <p>
                        From my recent solo project, <span>Mailman</span>, I learned how to fully build a full stack application independently and attempt to innovate a new way to send emails and 
                        deploy it to the cloud.  I also learned the drawbacks of trying to work alone and the importance of working with a team. My goal for this project is to futher enhance it as I grow and gain more experience in the Software Engineering field.  With the rapid advancements of AI technology, I'm looking to apply that to Mailman to make it more efficient &mdash; to make communication even more seamless and accessible. 
                    </p>
                    <p>
                        My featured project <span>Slugfit</span> is a mobile application that I built with a team of 5 other students.  In that project, I learned to function as a team and how to 
                        work with a team to build a product.  While practicing <span>Agile Methodologies</span> and <span>Scrum</span> in building that project, I learned to properly manage my time in executing a task to reach a deadline.
                    </p>
                </div>
                <div className='line'/>
                <div className="technologiesContainer">
                    <h1>Technologies & Skills</h1>
                    <div className="techstacks">
                        {technologies.map((tech) => { return (
                          <div className="techCard" key={tech}>
                          <img src={techImages[tech]} alt={tech} />
                            <p>{tech}</p>
                        </div>
                        )})}
                        
                    </div>
                </div>
                
            </div>
            
        </section>
    );
    
}

export default About;