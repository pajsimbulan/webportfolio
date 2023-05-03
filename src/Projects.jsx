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
                    <p>This is a <span>solo project</span> of mine that I will continuously improve as I gain more experience in the field. <span>AI technology</span> to help users craft emails in their unique writing style and a <span>UI re-design</span> are planned for the future <span>(v2.0)</span>.  The app is compatible with both PC and Mobile devices. </p>
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
                    <p>The Huffman algorithm uses <span>binary trees</span>, <span>priority queues</span>,<span>linked lists</span>, and <span>bit manipulation</span> to encode and decode data.</p>
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