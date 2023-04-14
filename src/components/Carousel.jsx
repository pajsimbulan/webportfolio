import * as React from 'react';
import './Carousel.css';
import c from '../assets/c.svg';
import cplusplus from '../assets/cplusplus.svg';
import java from '../assets/java.svg';
import download from '../assets/download.jpg';
import resumeicon from '../assets/resumeicon.svg';

const tempimages = [c, cplusplus, java, download, resumeicon];


const Carousel = ({projectName = 'temp'}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    return (
    <div className="slideshow-container"> 
        <div className="fade">
            <div className="numbertext">{slideIndex+1} / {tempimages.length}</div>
            <img src={tempimages[slideIndex]}/>
            <div className="text">{projectName}</div>
        </div>
        <div className="prev" onClick={() => {
          setSlideIndex(
            (((slideIndex - 1) % tempimages.length) + tempimages.length) %
              tempimages.length
          );
        }}>&#10094;</div>
        <div className="next" onClick={() => {
          setSlideIndex((slideIndex + 1) % tempimages.length);
        }}>&#10095;</div>
    </div>
    )
}

export default Carousel;