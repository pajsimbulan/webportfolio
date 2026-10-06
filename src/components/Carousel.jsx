import * as React from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faLaptop } from '@fortawesome/free-solid-svg-icons';



import oscil_oscil_logo from '../assets/oscil/oscil_logo.svg';
import oscil_hardware_overview_live_scope from '../assets/oscil/hardware_overview_live_scope.jpg';
import oscil_heartbeat_3_mcus from '../assets/oscil/heartbeat_3_mcus.jpg';
import oscil_use_cases from '../assets/oscil/use_cases.svg';
import oscil_architecture from '../assets/oscil/architecture.svg';
import oscil_firmware_requirements from '../assets/oscil/firmware_requirements.svg';
import oscil_hardware_requirements from '../assets/oscil/hardware_requirements.svg';
import oscil_software_requirements from '../assets/oscil/software_requirements.svg';
import oscil_schematic_oscil from '../assets/oscil/schematic_oscil.svg';
import oscil_schematic_01_power from '../assets/oscil/schematic_01_power.svg';
import oscil_schematic_02_afe_ch1 from '../assets/oscil/schematic_02_afe_ch1.svg';
import oscil_schematic_04_acq from '../assets/oscil/schematic_04_acq.svg';
import oscil_schematic_05_display from '../assets/oscil/schematic_05_display.svg';
import oscil_schematic_06_gen from '../assets/oscil/schematic_06_gen.svg';
import oscil_ads7883_soldering from '../assets/oscil/ads7883_soldering.jpg';
import oscil_pin_walk_board1 from '../assets/oscil/pin_walk_board1.png';
import oscil_adc_mode1_bitslip_analyzer from '../assets/oscil/adc_mode1_bitslip_analyzer.png';
import oscil_adc_noise_histogram from '../assets/oscil/adc_noise_histogram.png';
import oscil_dma_burst_waveform from '../assets/oscil/dma_burst_waveform.png';
import oscil_trigger_minmax from '../assets/oscil/trigger_minmax.png';
import oscil_host_tests_link_ring from '../assets/oscil/host_tests_link_ring.png';
import oscil_uart_loopback_terminal from '../assets/oscil/uart_loopback_terminal.png';
import oscil_r2r_staircase_scope from '../assets/oscil/r2r_staircase_scope.jpg';
import oscil_r2r_ladder_schematic from '../assets/oscil/r2r_ladder_schematic.jpg';
import oscil_dds_sine_scope from '../assets/oscil/dds_sine_scope.jpg';
import oscil_lcd_colour_bars from '../assets/oscil/lcd_colour_bars.jpg';
import oscil_scope_touch_controls_overview from '../assets/oscil/scope_touch_controls_overview.mp4';
import oscil_scope_ch1_touch_drag from '../assets/oscil/scope_ch1_touch_drag.mp4';
import oscil_scope_ch2_touch_drag from '../assets/oscil/scope_ch2_touch_drag.mp4';
import oscil_scope_voltage_scale_encoder from '../assets/oscil/scope_voltage_scale_encoder.mp4';
import oscil_scope_run_stop from '../assets/oscil/scope_run_stop.mp4';
import oscil_scope_trigger_rising_falling from '../assets/oscil/scope_trigger_rising_falling.mp4';
import oscil_scope_square_wave_measurements from '../assets/oscil/scope_square_wave_measurements.jpg';
import oscil_measurements_panel from '../assets/oscil/measurements_panel.jpg';
import oscil_calibration_result from '../assets/oscil/calibration_result.png';
import oscil_generator_waveform_modes_output_toggle from '../assets/oscil/generator_waveform_modes_output_toggle.mp4';
import oscil_generator_frequency_keypad from '../assets/oscil/generator_frequency_keypad.jpg';
import oscil_generator_frequency_500hz_entry from '../assets/oscil/generator_frequency_500hz_entry.mp4';
import oscil_generator_triangle from '../assets/oscil/generator_triangle.jpg';
import oscil_ota_update from '../assets/oscil/ota_update.mp4';
import oscil_ota_confirmed_log from '../assets/oscil/ota_confirmed_log.png';
import oscil_supabase_schema from '../assets/oscil/supabase_schema.png';
import oscil_supabase_isolation_tests from '../assets/oscil/supabase_isolation_tests.png';
import oscil_account_create_demo from '../assets/oscil/account_create_demo.mp4';
import oscil_account_signed_in from '../assets/oscil/account_signed_in.jpg';
import oscil_account_password_reset_sign_in from '../assets/oscil/account_password_reset_sign_in.mp4';
import oscil_cloud_save_and_gallery from '../assets/oscil/cloud_save_and_gallery.mp4';
import oscil_photos_gallery_list from '../assets/oscil/photos_gallery_list.jpg';
import oscil_photos_saved_scope_viewer from '../assets/oscil/photos_saved_scope_viewer.jpg';
import oscil_hardware_overview_display_rear from '../assets/oscil/hardware_overview_display_rear.jpg';

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
import websiteNavModal from '../assets/website/navigation_modal.jpg';
import websiteAbout from '../assets/website/about.jpg';
import websiteProjects from '../assets/website/projects.jpg';
import websiteDemoVideoModal from '../assets/website/demovideo_modal.jpg';
import websiteContacts from '../assets/website/contacts.jpg';
import websiteLoading from '../assets/website/loading.jpg';
import websiteSendingNotificationSuccess from '../assets/website/sending_notification_success.png';
import websiteSendingNotificationFailed from '../assets/website/sending_notification_failed.png';

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

const websiteDescriptions = ["Home Page", "Navigation Modal (Mobile Only)", "About Page", "Projects Page", "Video Modal" , "Contact Page", "Sending Message Loading","Sending Message Success", "Sending Message Fail",];
const websiteFiles = {
  "Home Page": website,
    "Navigation Modal (Mobile Only)": websiteNavModal,
    "About Page": websiteAbout,
    "Projects Page": websiteProjects,
    "Video Modal": websiteDemoVideoModal,
    "Contact Page": websiteContacts,
    "Sending Message Loading": websiteLoading,
    "Sending Message Success": websiteSendingNotificationSuccess,
    "Sending Message Fail": websiteSendingNotificationFailed,
}



const oscilDescriptions = ["Oscil", "The finished prototype, all three boards running together on breadboards", "Early bring-up, all three boards running my first firmware, each blinking its own LED color", "What a user can do with Oscil", "The architecture, three ESP32-S3 boards wired together with Supabase as the cloud backend", "What the firmware on each board has to do", "Hardware requirements and why I picked each main part", "The cloud side, for user accounts and saved photos", "KiCad schematic, how the six circuit sheets connect", "KiCad schematic, the power rails", "KiCad schematic, the analog front end that scales and shifts a signal so the ADC can read it", "KiCad schematic, the acquisition board with two 12-bit ADCs and the knobs and buttons", "KiCad schematic, the display board and the 7 inch touchscreen wiring", "KiCad schematic, the generator board with an 8-bit R-2R DAC and its output filter", "Early bring-up, hand soldering the tiny ADC chips onto adapter boards", "Testing board 1 by itself, every pin pulses a different number of times so I could prove the wiring matches the schematic", "Debugging board 1 by itself, the logic analyzer on the ADC data lines caught readings shifted by one bit", "Testing board 1 by itself, with the input grounded the noise is only 3.9 ADC steps (12.6 mV) RMS", "Testing board 1 by itself, a 1 kHz test signal captured with DMA at 100,000 samples per second and plotted on my PC", "A diagram I drew showing how the trigger keeps the picture steady and how 3,200 samples fit into 800 screen columns without losing spikes", "Automated tests running on my PC with no hardware, all passing, and they run again in CI on every push", "Testing board 1 by itself, the board to board link looped back into itself, 15,600 frames at 2 Mbaud with zero errors", "Testing board 3 by itself, the R-2R DAC built on a breadboard right next to its schematic", "Testing board 3 by itself, the DAC stepping through all 256 levels from 0 to 3.28 V on a bench oscilloscope", "Testing board 3 by itself, a 1 kHz sine from the DDS code before the output filter", "Testing board 2 by itself, the first picture on the 7 inch display, just color test bars", "The finished scope, using the touch controls", "The finished scope, holding and dragging the CH1 trace to move it", "The finished scope, dragging the CH2 trace", "The finished scope, turning a knob to change volts per division", "The finished scope, freezing and resuming the picture with RUN and STOP", "The finished scope, switching the trigger between rising and falling edges", "The finished scope, automatic measurements of a square wave", "Boards 1 and 2 working together for the first time, measuring a 1 kHz square wave before calibration", "Calibrating board 1, it measures 0 V and a known voltage and corrects each channel's gain and offset", "The finished generator, picking a waveform on the touchscreen and turning the output on", "The finished generator, typing an exact frequency on the keypad", "The finished generator, entering 500 Hz", "The finished generator, set to a triangle wave", "The display board updating its own firmware over Wi-Fi from a GitHub release", "The log after the update, the new version passed its self-test so it was kept", "The database tables I set up in Supabase", "A cloud test run from my PC, 17 checks proving one user can never see another user's photos", "Creating an account on the touchscreen", "Signed in on the device", "Resetting a forgotten password with a secret phrase, then signing in with the new one", "Saving a screenshot of the scope to the cloud", "The list of saved photos, loaded from the cloud", "Opening a saved photo on the device", "The display board's wiring from the back"];
const oscilFiles = {
    "Oscil": oscil_oscil_logo,
    "The finished prototype, all three boards running together on breadboards": oscil_hardware_overview_live_scope,
    "Early bring-up, all three boards running my first firmware, each blinking its own LED color": oscil_heartbeat_3_mcus,
    "What a user can do with Oscil": oscil_use_cases,
    "The architecture, three ESP32-S3 boards wired together with Supabase as the cloud backend": oscil_architecture,
    "What the firmware on each board has to do": oscil_firmware_requirements,
    "Hardware requirements and why I picked each main part": oscil_hardware_requirements,
    "The cloud side, for user accounts and saved photos": oscil_software_requirements,
    "KiCad schematic, how the six circuit sheets connect": oscil_schematic_oscil,
    "KiCad schematic, the power rails": oscil_schematic_01_power,
    "KiCad schematic, the analog front end that scales and shifts a signal so the ADC can read it": oscil_schematic_02_afe_ch1,
    "KiCad schematic, the acquisition board with two 12-bit ADCs and the knobs and buttons": oscil_schematic_04_acq,
    "KiCad schematic, the display board and the 7 inch touchscreen wiring": oscil_schematic_05_display,
    "KiCad schematic, the generator board with an 8-bit R-2R DAC and its output filter": oscil_schematic_06_gen,
    "Early bring-up, hand soldering the tiny ADC chips onto adapter boards": oscil_ads7883_soldering,
    "Testing board 1 by itself, every pin pulses a different number of times so I could prove the wiring matches the schematic": oscil_pin_walk_board1,
    "Debugging board 1 by itself, the logic analyzer on the ADC data lines caught readings shifted by one bit": oscil_adc_mode1_bitslip_analyzer,
    "Testing board 1 by itself, with the input grounded the noise is only 3.9 ADC steps (12.6 mV) RMS": oscil_adc_noise_histogram,
    "Testing board 1 by itself, a 1 kHz test signal captured with DMA at 100,000 samples per second and plotted on my PC": oscil_dma_burst_waveform,
    "A diagram I drew showing how the trigger keeps the picture steady and how 3,200 samples fit into 800 screen columns without losing spikes": oscil_trigger_minmax,
    "Automated tests running on my PC with no hardware, all passing, and they run again in CI on every push": oscil_host_tests_link_ring,
    "Testing board 1 by itself, the board to board link looped back into itself, 15,600 frames at 2 Mbaud with zero errors": oscil_uart_loopback_terminal,
    "Testing board 3 by itself, the R-2R DAC built on a breadboard right next to its schematic": oscil_r2r_staircase_scope,
    "Testing board 3 by itself, the DAC stepping through all 256 levels from 0 to 3.28 V on a bench oscilloscope": oscil_r2r_ladder_schematic,
    "Testing board 3 by itself, a 1 kHz sine from the DDS code before the output filter": oscil_dds_sine_scope,
    "Testing board 2 by itself, the first picture on the 7 inch display, just color test bars": oscil_lcd_colour_bars,
    "The finished scope, using the touch controls": oscil_scope_touch_controls_overview,
    "The finished scope, holding and dragging the CH1 trace to move it": oscil_scope_ch1_touch_drag,
    "The finished scope, dragging the CH2 trace": oscil_scope_ch2_touch_drag,
    "The finished scope, turning a knob to change volts per division": oscil_scope_voltage_scale_encoder,
    "The finished scope, freezing and resuming the picture with RUN and STOP": oscil_scope_run_stop,
    "The finished scope, switching the trigger between rising and falling edges": oscil_scope_trigger_rising_falling,
    "The finished scope, automatic measurements of a square wave": oscil_scope_square_wave_measurements,
    "Boards 1 and 2 working together for the first time, measuring a 1 kHz square wave before calibration": oscil_measurements_panel,
    "Calibrating board 1, it measures 0 V and a known voltage and corrects each channel's gain and offset": oscil_calibration_result,
    "The finished generator, picking a waveform on the touchscreen and turning the output on": oscil_generator_waveform_modes_output_toggle,
    "The finished generator, typing an exact frequency on the keypad": oscil_generator_frequency_keypad,
    "The finished generator, entering 500 Hz": oscil_generator_frequency_500hz_entry,
    "The finished generator, set to a triangle wave": oscil_generator_triangle,
    "The display board updating its own firmware over Wi-Fi from a GitHub release": oscil_ota_update,
    "The log after the update, the new version passed its self-test so it was kept": oscil_ota_confirmed_log,
    "The database tables I set up in Supabase": oscil_supabase_schema,
    "A cloud test run from my PC, 17 checks proving one user can never see another user's photos": oscil_supabase_isolation_tests,
    "Creating an account on the touchscreen": oscil_account_create_demo,
    "Signed in on the device": oscil_account_signed_in,
    "Resetting a forgotten password with a secret phrase, then signing in with the new one": oscil_account_password_reset_sign_in,
    "Saving a screenshot of the scope to the cloud": oscil_cloud_save_and_gallery,
    "The list of saved photos, loaded from the cloud": oscil_photos_gallery_list,
    "Opening a saved photo on the device": oscil_photos_saved_scope_viewer,
    "The display board's wiring from the back": oscil_hardware_overview_display_rear,
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
        case "oscil":
            return oscilFiles;
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
        case "oscil":
            return oscilDescriptions;
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
            {/\.mp4$/i.test(files[descriptions[slideIndex]]) ?
                <video key={files[descriptions[slideIndex]]} src={files[descriptions[slideIndex]]} autoPlay muted loop playsInline /> :
                <img src={files[descriptions[slideIndex]]}/>}  
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