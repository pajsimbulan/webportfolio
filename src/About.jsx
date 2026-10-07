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
import docker from './assets/docker.svg';
import jest from './assets/jest.svg';
import npm from './assets/npm.svg';
import yarn from './assets/yarn.svg';
import storybook from './assets/storybook.svg';
import heroku from './assets/heroku.svg';
import tailwindcss from './assets/tailwindcss.svg';
import hostinger from './assets/hostinger.svg';
import aws from './assets/aws.svg';
import espressif from './assets/espressif.svg';
import freertos from './assets/freertos.svg';
import lvgl from './assets/lvgl.svg';
import cmake from './assets/cmake.svg';
import kicad from './assets/kicad.svg';
import githubactions from './assets/githubactions.svg';
import gdb from './assets/gdb.svg';
import unity from './assets/unity.png';
import pulseview from './assets/pulseview.svg';

const technologies = ['C', 'C++', 'Python', 'ESP-IDF', 'FreeRTOS', 'LVGL', 'CMake', 'Unity', 'GDB', 'Logic Analyzer', 'KiCad', 'GitHub Actions', 'Git',
'HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'TailwindCSS', 'MaterialUI', 'Java', 'ExpressJS', 'NodeJS', 'Expo', 'Figma',
'MongoDB', 'Supabase', 'Postgresql', 'Docker', 'NPM', 'Yarn', 'Jest', 'Storybook', 'Amazon Web Services', 'Heroku', 'Hostinger'];
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
    Docker: docker,
    Jest: jest,
    Storybook: storybook,
    Heroku: heroku,
    NPM: npm,
    Yarn: yarn,
    TailwindCSS: tailwindcss,
    Hostinger: hostinger,
    'Amazon Web Services': aws,
    'ESP-IDF': espressif,
    FreeRTOS: freertos,
    LVGL: lvgl,
    CMake: cmake,
    Unity: unity,
    GDB: gdb,
    'Logic Analyzer': pulseview,
    KiCad: kicad,
    'GitHub Actions': githubactions
  };
  
function About() {
    return (
        <section id="about" className="about">
            <div className="rowContainer">
                <div className="aboutTextContainer">
                    <h1>About</h1>
                    <p>
                        I am an <span>Electrical Engineering graduate student</span> at <span>California State University, Northridge (CSUN)</span> with a 
                        background in computer science and software engineering. My work sits at the intersection of <span>circuits</span>, <span>electronics</span>, 
                        <span>embedded systems</span>, and software, with a growing focus on how hardware and software come together in real-world devices.
                    </p>
                    <p>
                        I earned my <span>Bachelor’s degree</span> in <span>Computer Science</span> from the <span>University of California</span>, <span>Santa Cruz</span>, where I built a strong foundation in programming, computer architecture, and systems-level thinking, ranging from low-level 
                        programming and CPU microarchitecture concepts to full-stack application development. 
                        That background now informs my transition into electrical engineering, where I’ve built hands-on experience with 
                        circuits, electronics, embedded systems, and other areas of electrical engineering such as power systems, control systems, and RF/communication. 
                    </p>
                    <p>
                        My projects, from full-stack and mobile applications to embedded firmware, reflect my ability to design, build, and debug complex systems end to end. 
                        I now apply those same principles to <span>embedded firmware</span>, from bare-metal microcontroller work to FreeRTOS-based projects on real hardware, emphasizing reliability, performance, and system-level understanding. 
                    </p>
                    <p>
                        I’m particularly interested in <span>embedded</span> and <span>electronics-oriented </span>roles within <span>consumer hardware</span>, <span>embedded devices</span>, and <span>hardware-adjacent engineering </span>teams, where a strong foundation in both 
                        software and electrical engineering is a meaningful advantage.
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