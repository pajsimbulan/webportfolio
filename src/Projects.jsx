import * as React from 'react';
import './Projects.css';
import Carousel from './components/Carousel';
import html from './assets/html.svg';
import css from './assets/css.svg';
import javascript from './assets/javascript.svg';
import typescript from './assets/typescript.svg';
import react from './assets/react.svg';
import express from './assets/express.svg';
import mongodb from './assets/mongodb.svg';
import python from './assets/python.svg';
import c from './assets/c.svg';
import git from './assets/git.svg';
import supabase from './assets/supabase.svg';
import materialui from './assets/materialui.svg';
import nodejs from './assets/nodejs.svg';
import postgresql from './assets/postgresql.svg';   
import figma from './assets/figma.svg';
import expo from './assets/expo.svg';
import vite from './assets/vite.svg';
import jest from './assets/jest.svg';
import npm from './assets/npm.svg';
import yarn from './assets/yarn.svg';
import storybook from './assets/storybook.svg';
import heroku from './assets/heroku.svg';
import linux from './assets/linux.svg';
import tailwindcss from './assets/tailwindcss.svg';
import hostinger from './assets/hostinger.svg';
import kicad from './assets/kicad.svg';
import espressif from './assets/espressif.svg';
import cmake from './assets/cmake.svg';
import githubactions from './assets/githubactions.svg';


function Projects() {
    const [openVideoModal, setOpenVideoModal] = React.useState(false);
    const [video, setVideo] = React.useState("https://www.youtube.com/embed/pvIHewhP_T8");
    const [videoLink, setVideoLink] = React.useState('https://youtu.be/pvIHewhP_T8');

    const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <section id="projects" className="projects">
            {openVideoModal && 
                <div className="modal" data-backdrop="static">
                    <div className="modalVideoContents">
                        <button className="closeButton" onClick={() => setOpenVideoModal(false)}>Close</button>
                        <iframe src={video} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                        </iframe>
                        <p>Video not loading?  Watch it with this link: <a href={videoLink} target="_blank">{videoLink}</a></p>
                    </div>
            </div>}
            <h1>Projects</h1>
            <div className="projectContainer p2"> 
                <div className="projectText">
                    <h2 className="projectTitle" style={{color:'#d97706'}}>Oscil</h2>
                    <h3 className='projectSubTitle'>Two-Channel Oscilloscope and Function Generator on Three ESP32-S3s</h3>
                    <p><span>Oscil</span> is an <span>embedded systems</span> project: a touchscreen oscilloscope and function generator built from three <span>ESP32-S3</span> microcontrollers, written in <span>C</span> on <span>ESP-IDF</span> and <span>FreeRTOS</span>. I designed it from the requirements and <span>KiCad</span> schematic through breadboard bring-up, firmware, cloud backend and tests.</p>
                    <p><span>Firmware.</span> <span>Bare-metal</span>, register-level drivers written from the ESP32-S3 Technical Reference Manual for <span>GPIO</span>, <span>SPI</span>, <span>UART</span>, <span>GDMA</span> and a hardware timer interrupt, with no vendor driver layer. On top of them, <span>FreeRTOS</span> tasks pinned to each core handle acquisition, the UI, networking and the links, synchronized with queues, event groups and critical sections. Two ADS7883 ADCs on dual-line SPI at 26.67 MHz read both channels in one frame, with <span>DMA</span> burst capture up to about 620 kSa/s, and an edge trigger with hysteresis and min/max decimation run in their own task on the second core. Boards talk over a <span>COBS</span>-framed, <span>CRC-16</span> checked UART link at 2 Mbaud: 31.8 frames/s, zero errors. The generator runs <span>DDS</span> in a 100 kHz timer <span>interrupt</span> into an 8-bit R-2R DAC. The display drives an 800x480 RGB panel with <span>LVGL</span>, PSRAM double buffering and <span>I2C</span> touch. Settings and calibration live in <span>NVS</span>, and firmware updates over <span>HTTPS OTA</span> into A/B partitions, where a self-test confirms the new image or <span>rolls it back</span>. <span>Wi-Fi</span> reconnects with backoff, and <span>TLS</span> requests run on worker tasks so the UI never blocks.</p>
                    <p><span>Testing.</span> Nine <span>Unity</span> host-test suites (trigger, decimation, DDS, link framing, ring buffer, measurements, front-end math and image format) run on every push in <span>GitHub Actions CI</span>. Every pin was checked on a <span>logic analyzer</span>, and the analog side with an oscilloscope and multimeter.</p>
                    <p><span>Hardware and cloud.</span> Analog front ends, an R-2R DAC with a Sallen-Key filter, and the power rails, drawn in KiCad. <span>Supabase</span> accounts with <span>PostgreSQL row-level security</span>, a private storage bucket and a TypeScript Edge Function with PBKDF2 secret-phrase password reset, verified by a 17-check Python isolation test.</p>
                    <p style={{alignSelf:'stretch'}}><span>Next:</span> a custom PCB in KiCad to replace the breadboards, and a 3D-printed enclosure.</p>
                    <div className='row'>
                        <h3>Version: </h3>
                        <p>0.9.0 (working prototype)</p>
                    </div>
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                        <div className="chip">C <img src={c}></img></div>
                        <div className="chip">ESP32-S3 / ESP-IDF <img src={espressif}></img></div>
                        <div className="chip">FreeRTOS</div>
                        <div className="chip">LVGL</div>
                        <div className="chip">mbedTLS</div>
                        <div className="chip">Unity</div>
                        <div className="chip">CMake <img src={cmake}></img></div>
                        <div className="chip">GitHub Actions <img src={githubactions}></img></div>
                        <div className="chip">Supabase <img src={supabase}></img></div>
                        <div className="chip">Postgresql <img src={postgresql}></img></div>
                        <div className="chip">Typescript <img src={typescript}></img></div>
                        <div className="chip">Python <img src={python}></img></div>
                        <div className="chip">Matplotlib</div>
                        <div className="chip">Github <img src={git}></img></div>
                    </div>
                    <div className='row'>
                        <h3>Tools Used: </h3>
                    </div>
                    <div className="row">
                        <div className="chip">KiCad <img src={kicad}></img></div>
                        <div className="chip">Logic Analyzer (PulseView)</div>
                        <div className="chip">Oscilloscope</div>
                        <div className="chip">Multimeter</div>
                        <div className="chip">Soldering</div>
                        <div className="chip">VS Code (ESP-IDF)</div>
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/oscil')}}>Code</button>
                </div>
                <div className="projectImage">
                    <Carousel projectName='oscil'/>
                </div>
            </div>
            <div className="projectContainer p1"> 
                <div className="projectImage">
                    <Carousel projectName='mailman'/>
                </div>
                <div className="projectText">
                    <h2 className="projectTitle">Mailman</h2>
                    <h3 className='projectSubTitle'> Modern Lightweight Email Service</h3>
                    <p><span>Mailman</span> is a <span>lightweight email service</span> designed to simplify and streamline the 
                    emailing experience for users. It's a fresh take on email services that offers a <span>chat-like experience</span> by adopting a <span>less formal</span> and more streamlined approach. Built using modern technologies, it focuses on offering an easy-to-use 
                    interface, quick navigation, and essential email features without the clutter. </p>
                    <p>Its intuitive email composer, efficient search capabilities, 
                    and customizable inbox management make it a breeze to send and receive emails.  Mailman ensures the <span>privacy</span> and <span>safety</span> of its users by employing secure authentication and encryption methods.</p>
                    <p>This is a <span>solo project</span> of mine that I worked on for 4 months straight and will continuously improve as I gain more experience in the field. <span>AI technology</span> to help users craft emails in their unique writing style and a <span>UI re-design</span> are planned for the future <span>(v2.0)</span>.  The app is compatible with both PC and Mobile devices. </p>
                    <div className='row'>
                        <h3>Version: </h3>
                        <p>1.0</p>
                    </div>  
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                    <div className="chip">Javascript<img src={javascript}></img></div>
                    <div className="chip">React<img src={react}></img></div>
                    <div className="chip">Material UI<img src={materialui}></img></div>
                    <div className="chip">CSS<img src={css}></img></div>
                    <div className="chip">NodeJS<img src={nodejs}></img></div>
                    <div className="chip">Express<img src={express}></img></div>
                    <div className="chip">MongoDB<img src={mongodb}></img></div>
                    <div className="chip">Jest<img src={jest}></img></div>
                    <div className="chip">JSON Web Token</div>
                    <div className="chip">Bcrypt</div>  
                    <div className="chip">NPM<img src={npm}></img></div>
                    <div className="chip">Github<img src={git}></img></div>
                    <div className="chip">Hostinger<img src={hostinger}></img></div>
                    <div className="chip">Heroku <img src={heroku}></img></div>
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button className="button3" onClick={() => {openLink('https://mailman.paulsimbulan.com')}}>Live Site</button>
                    <div className='row' style={{justifyContent:'space-between'}}>
                        <div style={{width:'48%'}}>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/MailMan')}}>Code</button>
                        </div>
                        <div style={{width:'48%'}}>     
                    <button className="button2" onClick={() => {
                        setVideo("https://www.youtube.com/embed/pvIHewhP_T8");
                        setVideoLink('https://youtu.be/pvIHewhP_T8');
                        setOpenVideoModal(true);
                        }}>Demo Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projectContainer p2"> 
                <div className="projectText">   
                    <h2 className="projectTitle" style={{color:'#ed4e39'}}>Slugfit</h2>
                    <h3 className='projectSubTitle'>Cross-Platform Fitness App</h3>
        <p>Inspired by the <span>block-based</span> UI of <span>Notion</span>, <span>Slugfit</span> is a fitness app designed to cater to users with varying levels of fitness experience. It offers features such as creating, saving, and editing workouts, as well as workout analysis, an integrated calendar to keep track of workouts, and social interactions &mdash;<span>through a social feed</span>.</p>
                    <p>Me and a team developed Slugfit over 10 weeks, following the <span>Scrum</span> and <span>Agile methodologies</span>, where I led the team as a <span>Scrum Master</span> for one sprint. The project was divided into four sprints, and we collaborated closely to create a seamless and user-friendly app. The app is compatible with both iOS and Android devices.</p>
                    <div className='row'>
                        <h3>Version: </h3>
                        <p>1.0</p>
                    </div>  
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                    <div className="chip">Typescript<img src={typescript}></img></div>
                    <div className="chip">React Native<img src={react}></img></div>
                    <div className="chip">TailwindCSS<img src={tailwindcss}></img></div>
                    <div className="chip">Expo<img src={expo}></img></div>
                    <div className="chip">Supabase<img src={supabase}></img></div>
                    <div className="chip">Postgresql<img src={postgresql}></img></div>
                    <div className="chip">Figma<img src={figma}></img></div>
                    <div className="chip">Storybook<img src={storybook}></img></div>
                    <div className="chip">Jest<img src={jest}></img></div>
                    <div className="chip">Yarn<img src={yarn}></img></div>
                    <div className="chip">Github<img src={git}></img></div>
                    
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/SlugFit')}}>Code</button>
                    <button className="button2" onClick={() => {
                        setVideo("https://www.youtube.com/embed/2OFljDC_c74");
                        setVideoLink('https://youtu.be/2OFljDC_c74');
                        setOpenVideoModal(true);
                        }}>Demo Video</button>
                </div>
                <div className="projectImage">
                    <Carousel projectName='slugfit'/>
                </div>
            </div>
            <div className="projectContainer p3"> 
                <div className="projectImage">
                    <Carousel projectName='httpserver'/>
                </div>
                <div className="projectText">
                <h2 className="projectTitle" style={{color:'#7f8b99'}}>HTTP Server</h2>
                    <h3 className='projectSubTitle'>Multi-threaded HTTP Server 1.1 in C</h3>
                    <p>A fundamental yet efficient implementation of an HTTP server using the C language and POSIX threads. It demonstrates low-level programming and scalable solutions for web-based applications.</p>
                    <p>The HTTP server supports both single-threaded and multi-threaded models to handle incoming client connections and serve HTTP requests. It employs mutex lock with conditions on a queue to provide a thread-safe environment.</p>
                    <p>Key features of this server include support for the <span>GET</span>, <span>PUT</span>, and <span>HEAD</span> HTTP methods, ensuring a flexible and responsive interaction with clients.</p>
                    <br />
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                        <div className="chip">C <img src={c}></img></div>
                        <div className="chip">Python <img src={python}></img></div>
                        <div className="chip">Linux <img src={linux}></img></div>
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/httpserver')}}>Code</button>
                </div>
            </div>
            <div className="projectContainer p4"> 
                <div className="projectText">
                    <h2 className="projectTitle" style={{color:'#7f8b99'}}>Huffman Encoding and Decoding in C</h2>
                    <h3 className='projectSubTitle'> A Lossless Data Compression Implementation</h3>
                    <p> This project is one of my coursework at UCSC.  It is an implementation of the widely-used Huffman encoding and decoding algorithms in C &mdash; a lossless data compression technique.  </p>
                    <p>The Huffman algorithm uses <span>binary trees</span>, <span>stack</span>, <span>priority queues</span>, <span>linked lists</span>, and <span>bit manipulation</span> to encode and decode data.</p>
                    <p>Huffman assigns shorter binary codes to more frequently occurring characters, which in results optimal compression performance.</p>
                    <br />
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                        <div className="chip">C <img src={c}></img></div>
                        <div className="chip">Linux <img src={linux}></img></div>
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/huffman')}}>Code</button>
                </div>
                
                <div className="projectImage">
                    <Carousel projectName='huffman'/>
                </div>
            </div>
            <div className="projectContainer p5"> 
                <div className="projectImage">
                    <Carousel projectName='website'/>
                </div>
                <div className="projectText">
                    <h2 className="projectTitle" style={{color:'black'}}>Website Portfolio</h2>
                    <h3 className='projectSubTitle'>paulsimbulan.com</h3>
                    <p>A personal website portfolio I developed to showcase my work and a little about myself as a Software Engineer.  The website provides an overview of the various projects I've worked on.</p>
                    <p>Website employs smooth scrolling, lazy loading, size responsiveness to ensure accessability for different devices, and EmailJS to relay messages from website to owner.</p>
                    <br />
                    <div className='row'>
                        <h3>Technologies Used: </h3>
                    </div>
                    <div className="row">
                        <div className="chip">HTML <img src={html}></img></div>
                        <div className="chip">CSS <img src={css}></img></div>
                        <div className="chip">Javascript <img src={javascript}></img></div>
                        <div className="chip">React <img src={react}></img></div>
                        <div className="chip">Vite <img src={vite}></img></div>
                        <div className="chip">Hostinger <img src={hostinger}></img></div>
                    </div>
                    <br />
                    <div style={{display:'flex', flexDirection:'column', flexGrow:1}}/>
                    <button onClick={() => {openLink('https://github.com/pajsimbulan/webportfolio')}}>Code</button>
                </div>
            </div>

        </section>
    );
}

export default Projects;