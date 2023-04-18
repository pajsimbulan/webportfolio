import * as React from 'react';
import './Projects.css';
import Carousel from './components/Carousel';
function Projects() {
    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projectContainer p1"> 
                <div className="projectImage">
                    <Carousel projectName='mailman'/>
                </div>
                <div className="projectText">
                </div>
            </div>
            <div className="projectContainer p2"> 
                <div className="projectText">
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
                </div>
            </div>
            <div className="projectContainer p4"> 
                <div className="projectText">
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
                </div>
            </div>
            
        </section>
    );
}

export default Projects;