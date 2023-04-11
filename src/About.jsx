import * as React from 'react';
import './About.css';
function About() {
    return (
        <section id="about" className="about">
            <div className="rowContainer">
                <div className="aboutTextContainer">
                    <h1>About</h1>
                    <p>
                        I am a Software Engineer based in Bay Area, California.  I have worked with Full-Stack Web Applications, Mobile Applications, and now I am currently setting my 
                        sights on Artificial Intelligence and Machine Learning.  
                    </p>
                    <p>
                        I am a graduate of the University of California, Santa Cruz with a Bachelor's Degree in Computer Science, where I learned the fundamentals of programming&mdash;  
                        from learning the Microarchitecture of CPU with RISC-V to data structures and utilizing a full tech stack. 
                    </p>
                    <p>
                        From my recent solo project, Mailman, I learned how to fully build a full stack application independently and attempt to innovate a new way to to send emails and 
                        deploy it to the cloud.  I also learned the drawbacks of trying to work alone and the importance of working with a team.
                    </p>
                    <p>
                        My featured project Slugfit is a mobile application that I built with a team of 5 other students.  In that project, I learned to function as a team and how to 
                        work with a team to build a product.  While practicing Agile Methodologies and Scrum in building that project, I learned to properly manage my time in approaching a task to reach a deadline.
                    </p>
                </div>
                <div className="technologiesContainer">
                    <h2>Technologies</h2>
                </div>
                
            </div>
            
        </section>
    );
}

export default About;