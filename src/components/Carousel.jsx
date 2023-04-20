import * as React from 'react';
import './Carousel.css';
import c from '../assets/c.svg';
import cplusplus from '../assets/cplusplus.svg';
import java from '../assets/java.svg';
import download from '../assets/download.jpg';
import resumeicon from '../assets/resumeicon.svg';

import huffmanIntro from '../assets/huffman/huffman_intro.jpg';
import huffmanEncodingHelp from '../assets/huffman/huffman_encoding_help.jpg';
import huffmanDecodingHelp from '../assets/huffman/huffman_decoding_help.jpg';
import huffmanResult from '../assets/huffman/huffman_results.jpg';

import httpserverIntro from '../assets/httpserver/httpserver_intro.jpg';
import httpserverListening from '../assets/httpserver/httpserver_listening.jpg';
import httpserverSingle from '../assets/httpserver/httpserver_singlethread_test.jpg';
import httpserverMulti from '../assets/httpserver/httpserver_multithreading_test.jpg';
import httpserverMulti2 from '../assets/httpserver/httpserver_multithreading_test2.jpg';
import httpserverMultiLog from '../assets/httpserver/httpserver_multithreading_log.jpg';

import slugfitCalendar from '../assets/slugfit/calendar.PNG';
import slugfitDrawer from '../assets/slugfit/drawer_navigation.PNG';
import slugfitEditExercise from '../assets/slugfit/edit_exercise.PNG';
import slugfitExerciseOptions from '../assets/slugfit/exercise_options.PNG';
import slugfitSearchBar from '../assets/slugfit/exercises_searchbar.PNG';
import slugfitHome from '../assets/slugfit/home.PNG';
import slugfitIntro from '../assets/slugfit/intro.PNG';
import slugfitProfileSettings from '../assets/slugfit/profile_settings.PNG';
import slugfitProfileView from '../assets/slugfit/profile_view.PNG';
import slugfitRegister from '../assets/slugfit/register.PNG';
import slugfitFilter from '../assets/slugfit/search_filter.PNG';
import slugfitSignIn from '../assets/slugfit/signin.PNG';
import slugfitSignout from '../assets/slugfit/signout.PNG';
import slugfitSocialMediaOptions from '../assets/slugfit/social_media_options.PNG';
import slugfitSocialMediaSearch from '../assets/slugfit/social_media_search.PNG';
import slugfitSocialMedia from '../assets/slugfit/social_media.PNG';
import slugfitStartWorkout from '../assets/slugfit/start_workout.PNG';
import slugfitStartWorkoutCard from '../assets/slugfit/start_workout_card.PNG';
import slugfitStartWorkoutList from '../assets/slugfit/start_workout_list.PNG';
import slugfitWorkoutAnalytics from '../assets/slugfit/workout_analytics.PNG';
import slugfitWorkoutSummary from '../assets/slugfit/workout_summary.PNG';
import slugfitWorkouts from '../assets/slugfit/workouts.PNG';
import slugfitFigma from '../assets/slugfit/figma_design.jpg';

import website from '../assets/website/website_portfolio.jpg';

const huffmanDescriptions = ["About", "Encoding help", "Decoding help", "Result"];
const huffmanFiles = {
  "About": huffmanIntro,
  "Encoding help": huffmanEncodingHelp,
  "Decoding help": huffmanDecodingHelp,
  "Result": huffmanResult,
}

const httpserverDescriptions = ["About", "Listening", "Single thread test", "Multi thread test", "Multi thread test 2", "Multi thread log"];
const httpserverFiles = {
  "About": httpserverIntro,
  "Listening": httpserverListening,
  "Single thread test": httpserverSingle,
  "Multi thread test": httpserverMulti,
  "Multi thread test 2": httpserverMulti2,
  "Multi thread log": httpserverMultiLog,
}

const slugfitDescriptions = ["Banner", "Sign In", "Create Account", "Home", "Drawer Navigation", "Workouts", "Searching for /Adding an Exercise", "Search Filter", "Editing an Exercise", 
"Edit Exercise Options", "Start Workout", "Exercise Cards", "Cards List View", "Workout Summary", "Completed Workouts Calendar", "Profile View", "Profile Settings", "Workout Analytics",
"Social Media", "Friend's Post Options", "Searching friends", "Sign Out", "Figma Design"];

const slugfitFiles = {
  "Completed Workouts Calendar": slugfitCalendar,
  "Drawer Navigation": slugfitDrawer,
  "Editing an Exercise": slugfitEditExercise,
  "Edit Exercise Options": slugfitExerciseOptions,
  "Searching for /Adding an Exercise": slugfitSearchBar,
  "Home": slugfitHome,
  "Banner": slugfitIntro,
  "Profile Settings": slugfitProfileSettings,
  "Profile View": slugfitProfileView,
  "Create Account": slugfitRegister,
  "Search Filter": slugfitFilter,
  "Sign In": slugfitSignIn,
  "Sign Out": slugfitSignout,
  "Friend's Post Options": slugfitSocialMediaOptions,
  "Searching friends": slugfitSocialMediaSearch,
  "Social Media": slugfitSocialMedia,
  "Start Workout": slugfitStartWorkout,
  "Exercise Cards": slugfitStartWorkoutCard,
  "Cards List View": slugfitStartWorkoutList,
  "Workout Analytics": slugfitWorkoutAnalytics,
  "Workout Summary": slugfitWorkoutSummary,
  "Workouts": slugfitWorkouts,
  "Figma Design": slugfitFigma,
}

const websiteDescriptions = ["Home Page"];
const websiteFiles = {
  "Home Page": website,
}



const getFiles = (projectName) => {
    switch(projectName) {
        case "huffman":
            return huffmanFiles;
        case "httpserver":
            return httpserverFiles;
        case "slugfit":
            return slugfitFiles;
        case "website":
            return websiteFiles;
        default:
            return {};
    }
}
const getDescriptions = (projectName) => {
    switch(projectName) {
        case "huffman":
            return huffmanDescriptions;
        case "httpserver":
            return httpserverDescriptions;
        case "slugfit":
            return slugfitDescriptions;
        case "website":
            return websiteDescriptions;
        default:
            return [];
    }
}


const Carousel = ({projectName = 'huffman'}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [files, setFiles] = React.useState(getFiles(projectName));
    const [descriptions, setDescriptions] = React.useState(getDescriptions(projectName));

    React.useEffect(() => {
        setFiles(files);
        setDescriptions(descriptions);
    }, [projectName]);

    return (
    <div className="slideshow-container"> 
        <div className="fade">
            <div className="numbertext">{slideIndex+1} / {descriptions.length}</div>
            <img src={files[descriptions[slideIndex]]}/>  
            <div className="text">{descriptions[slideIndex]}</div>
        </div>
        <div className="prev" onClick={() => {
          setSlideIndex(
            (((slideIndex - 1) % descriptions.length) + descriptions.length) %
              descriptions.length
          );
        }}>&#10094;</div>
        <div className="next" onClick={() => {
          setSlideIndex((slideIndex + 1) % descriptions.length);
        }}>&#10095;</div>
    </div>
    )
}

export default Carousel;