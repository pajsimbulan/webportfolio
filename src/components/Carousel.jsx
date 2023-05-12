import * as React from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faLaptop } from '@fortawesome/free-solid-svg-icons';

import mailmanPCEmailToolbar from '../assets/mailman/pc/body_settings.jpg';
import mailmanPCChangeProfilePicture from '../assets/mailman/pc/change_profile_picture.jpg';
import mailmanPCCompose from '../assets/mailman/pc/compose_with_images_files.jpg';
import mailmanPCCreateAccount from '../assets/mailman/pc/create_account.jpg';
import mailmanPCEditBirthdate from '../assets/mailman/pc/edit_birthdate.jpg';
import mailmanPCEditFirstName from '../assets/mailman/pc/edit_firstname.jpg';
import mailmanPCEditLastName from '../assets/mailman/pc/edit_lastname.jpg';
import mailmanPCEditPassword from '../assets/mailman/pc/edit_password.jpg';
import mailmanPCEditGender from '../assets/mailman/pc/edit_gender.jpg';
import mailmanPCEmailContents from '../assets/mailman/pc/email_content.jpg';
import mailmanPCEmailContents2 from '../assets/mailman/pc/email_content_2.jpg';
import mailmanPCErrorMessage from '../assets/mailman/pc/error_message.jpg';
import mailmanPCErrorPage from '../assets/mailman/pc/error_page.png';
import mailmanPCForgotPassword from '../assets/mailman/pc/forgot_password.jpg';
import mailmanPCGreeting from '../assets/mailman/pc/greeting.png';
import mailmanPCHome from '../assets/mailman/pc/home.jpg';
import mailmanPCLoading from '../assets/mailman/pc/loading_fetching.png';
import mailmanPCMailBody from '../assets/mailman/pc/mailbody.jpg';
import mailmanPCNavbar from '../assets/mailman/pc/mailman_navbar.jpg';
import mailmanPCProfileMenu from '../assets/mailman/pc/manage_profile_menu.jpg';
import mailmanPCNoEmails from '../assets/mailman/pc/no_emails_today.jpg';
import mailmanPCPasswordChanged from '../assets/mailman/pc/password_changed.jpg';
import mailmanPCProfile from '../assets/mailman/pc/profile.jpg';
import mailmanPCReply from '../assets/mailman/pc/reply.jpg';
import mailmanPCRow from '../assets/mailman/pc/row_settings.png';
import mailmanPCSearch from '../assets/mailman/pc/search_result.jpg';
import mailmanPCSignIn from '../assets/mailman/pc/signin.png';
import mailmanPCSuccess from '../assets/mailman/pc/success_notification.jpg'; 

import mailmanMobileEmailToolbar from '../assets/mailman/mobile/body_settings.jpg';
import mailmanMobileChangePassword from '../assets/mailman/mobile/change_password.jpg';
import mailmanMobileComposeEmail from '../assets/mailman/mobile/compose_email.jpg';
import mailmanMobileComposeEmail2 from '../assets/mailman/mobile/compose_email_2.jpg';
import mailmanMobileCreateAccount from '../assets/mailman/mobile/create_account.jpg';
import mailmanMobileEditBirthdateInvalid from '../assets/mailman/mobile/edit_birthdate_invalid.jpg';
import mailmanMobileEditBirthdate from '../assets/mailman/mobile/edit_birthdate.jpg';
import mailmanMobileEditFirstName from '../assets/mailman/mobile/edit_first_name.jpg';
import mailmanMobileEditGender from '../assets/mailman/mobile/edit_gender.jpg';
import mailmanMobileEditLastName from '../assets/mailman/mobile/edit_last_name.jpg';
import mailmanMobileEditProfilePicture from '../assets/mailman/mobile/edit_profile_picture.jpg';
import mailmanMobileEmailContents from '../assets/mailman/mobile/email_contents_1.jpg';
import mailmanMobileEmailContents2 from '../assets/mailman/mobile/email_contents_2.jpg';
import mailmanMobileErrorPage from '../assets/mailman/mobile/error_page.jpg';
import mailmanMobileForgotPassword from '../assets/mailman/mobile/forgot_password.jpg';
import mailmanMobileGreet from '../assets/mailman/mobile/greet.png';
import mailmanMobileHome from '../assets/mailman/mobile/home.jpg';
import mailmanMobileLoading from '../assets/mailman/mobile/loading_modal.png';
import mailmanMobileMailBody from '../assets/mailman/mobile/mail_body.jpg';
import mailmanMobileNavbar from '../assets/mailman/mobile/navbar.jpg';
import mailmanMobileNoEmails from '../assets/mailman/mobile/no_emails.jpg';
import mailmanMobilePasswordChanged from '../assets/mailman/mobile/password_changed.jpg';
import mailmanMobileProfileMenu from '../assets/mailman/mobile/profile_menu.jpg';
import mailmanMobileProfile from '../assets/mailman/mobile/profile_page_1.jpg';
import mailmanMobileProfile2 from '../assets/mailman/mobile/profile_page_2.jpg';
import mailmanMobileReply from '../assets/mailman/mobile/reply.jpg';
import mailmanMobileRows from '../assets/mailman/mobile/rows.jpg';
import mailmanMobileSearch from '../assets/mailman/mobile/search.jpg';
import mailmanMobileSignIn from '../assets/mailman/mobile/signin.jpg';

import mailmanArchtitecture from '../assets/mailman/architecture.svg';
import mailmanLoginTest from '../assets/mailman/jest_test_login.jpg';


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
import slugfitArchitecture from '../assets/slugfit/slugfit_architecture.jpg';
import slugfitFigma from '../assets/slugfit/figma_design.jpg';

import website from '../assets/website/website_portfolio.jpg';

const mailmanPCDescriptions = ["Sign In", "Error Message", "Create Account", "Forgot Password", "Password Changed" , "Greeting", 
    "Loading", "Home", "Navigation Bar", "Emails","Email Toolbar","Row Settings",
    "Empty Inbox", "Profile Menu","Searching Emails", "Composing an Email", "Success Alerts", "Email Contents", "Email Contents Cont'd","Replying",
    "Profile", "Change Profile Picture", "Editing First Name", "Editing Last Name", "Changing Password", 
    "Editing Gender", "Editing Birth Date", "Error Page", "Architecture", "Backend Login Test"];  
const mailmanPCFiles = {
    "Sign In": mailmanPCSignIn,
    "Error Message": mailmanPCErrorMessage,
    "Create Account": mailmanPCCreateAccount,
    "Forgot Password": mailmanPCForgotPassword,
    "Password Changed": mailmanPCPasswordChanged,
    "Greeting": mailmanPCGreeting,
    "Loading": mailmanPCLoading,
    "Home": mailmanPCHome,
    "Navigation Bar": mailmanPCNavbar,
    "Emails": mailmanPCMailBody,
    "Email Toolbar": mailmanPCEmailToolbar,
    "Row Settings": mailmanPCRow,
    "Empty Inbox": mailmanPCNoEmails,
    "Profile Menu": mailmanPCProfileMenu,
    "Searching Emails": mailmanPCSearch,
    "Composing an Email": mailmanPCCompose,
    "Success Alerts": mailmanPCSuccess,
    "Email Contents": mailmanPCEmailContents,
    "Email Contents Cont'd": mailmanPCEmailContents2,
    "Replying": mailmanPCReply,
    "Profile": mailmanPCProfile,
    "Change Profile Picture": mailmanPCChangeProfilePicture,
    "Editing First Name": mailmanPCEditFirstName,
    "Editing Last Name": mailmanPCEditLastName,
    "Changing Password": mailmanPCEditPassword,
    "Editing Gender": mailmanPCEditGender,
    "Editing Birth Date": mailmanPCEditBirthdate, 
    "Error Page": mailmanPCErrorPage,
    "Architecture": mailmanArchtitecture,
    "Backend Login Test": mailmanLoginTest,
}
const mailmanMobileDescriptions = ["Sign In", "Create Account", "Forgot Password", "Password Changed" ,"Greeting", 
"Loading","Home","Navigation Bar","Emails","Email Toolbar","Row Settings",
"Empty Inbox","Profile Menu","Searching Emails","Composing an Email (empty)","Composing an Email","Email Contents","Email Contents Cont'd","Replying",
"Profile","Profile Cont'd","Change Profile Picture","Editing First Name","Editing Last Name","Changing Password", 
"Editing Gender","Editing Birth Date","Editing Birth Date (Invalid)","Error Page", "Architecture", "Backend Login Test"];
const mailmanMobileFiles = {
    "Sign In": mailmanMobileSignIn,
    "Create Account": mailmanMobileCreateAccount,
    "Forgot Password": mailmanMobileForgotPassword,
    "Password Changed": mailmanMobilePasswordChanged,
    "Greeting": mailmanMobileGreet,
    "Loading": mailmanMobileLoading,
    "Home": mailmanMobileHome,
    "Navigation Bar": mailmanMobileNavbar,
    "Emails": mailmanMobileMailBody,
    "Email Toolbar": mailmanMobileEmailToolbar,
    "Row Settings": mailmanMobileRows,
    "Empty Inbox": mailmanMobileNoEmails,
    "Profile Menu": mailmanMobileProfileMenu,
    "Searching Emails": mailmanMobileSearch,
    "Composing an Email (empty)": mailmanMobileComposeEmail,
    "Composing an Email": mailmanMobileComposeEmail2,
    "Email Contents": mailmanMobileEmailContents,
    "Email Contents Cont'd": mailmanMobileEmailContents2,
    "Replying": mailmanMobileReply,
    "Profile": mailmanMobileProfile,
    "Profile Cont'd": mailmanMobileProfile2,
    "Change Profile Picture": mailmanMobileEditProfilePicture,
    "Editing First Name": mailmanMobileEditFirstName,
    "Editing Last Name": mailmanMobileEditLastName,
    "Changing Password": mailmanMobileChangePassword,
    "Editing Gender": mailmanMobileEditGender,
    "Editing Birth Date": mailmanMobileEditBirthdate,
    "Editing Birth Date (Invalid)": mailmanMobileEditBirthdateInvalid,
    "Error Page": mailmanMobileErrorPage,
    "Architecture": mailmanArchtitecture,
    "Backend Login Test": mailmanLoginTest,
}


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
"Social Media", "Friend's Post Options", "Searching friends", "Sign Out","Architecture", "Figma Design"];

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
  "Architecture": slugfitArchitecture,
  "Figma Design": slugfitFigma,
}

const websiteDescriptions = ["Home Page"];
const websiteFiles = {
  "Home Page": website,
}



const getFiles = (projectName) => {
    switch(projectName) {
        case "mailmanPC":
            return mailmanPCFiles;
        case "mailmanMobile":
            return mailmanMobileFiles;
        case "slugfit":
            return slugfitFiles;
        case "httpserver":
            return httpserverFiles;
        case "huffman":
            return huffmanFiles;
        case "website":
            return websiteFiles;
        default:
            return {};
    }
}
const getDescriptions = (projectName) => {
    switch(projectName) {
        case "mailmanPC":
            return mailmanPCDescriptions;
        case "mailmanMobile":
            return mailmanMobileDescriptions;
        case "slugfit":
            return slugfitDescriptions;
        case "httpserver":
            return httpserverDescriptions;
        case "huffman":
            return huffmanDescriptions;
        case "website":
            return websiteDescriptions;
        default:
            return [];
    }
}


const Carousel = ({projectName}) => { 
    const [mobile, setMobileView] = React.useState(false);
    const [files, setFiles] = React.useState(
        () => {
            if(projectName === 'mailman') {
                return getFiles(`${projectName}${(mobile)? 'Mobile':'PC'}`);
            }
            else {
                return getFiles(projectName);
            }
        }
        );
        const [descriptions, setDescriptions] = React.useState(
            () => {
                if(projectName === 'mailman') {
                    return getDescriptions(`${projectName}${(mobile)? 'Mobile':'PC'}`);
                }
                else {
                    return getDescriptions(projectName);
                }
            }
        );
    const [slideIndex, setSlideIndex] = React.useState(0);
            
    React.useEffect(() => {
        setFiles(files);
        setDescriptions(descriptions);
    }, [projectName]);

    return (
    <div className="slideshow-container"> 
        <div className="fade">
            <div className="numbertext">{slideIndex+1} / {descriptions.length}</div>
           
            {projectName.includes("mailman")? 
            <div className="toggle-buttons">
                <button className={`${mobile? '':'selected'}`} onClick={() => {
                    setMobileView(false);
                    setFiles(getFiles(`${projectName}PC`));
                    setDescriptions(getDescriptions(`${projectName}PC`));
                    setSlideIndex(0);
                    }}>
                    <FontAwesomeIcon icon={faLaptop} className="icon" style={{color: "#737373"}} />
                </button>
                <button className={`${mobile? 'selected':''}`} onClick={() => {
                    setMobileView(true);
                    setFiles(getFiles(`${projectName}Mobile`));
                    setDescriptions(getDescriptions(`${projectName}Mobile`));
                    setSlideIndex(0);
                    }}>
                    <FontAwesomeIcon icon={faMobileScreenButton} className="icon" style={{color: "#737373"}} />
                </button>
            </div> : null}
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