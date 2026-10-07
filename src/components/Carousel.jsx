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
import oscil_concept_product from '../assets/oscil/concept_product.svg';
import oscil_concept_enclosure_dimensions from '../assets/oscil/concept_enclosure_dimensions.svg';
import oscil_concept_pcb from '../assets/oscil/concept_pcb.svg';

import labs_lab00_demo_hello_restart_countdown from '../assets/esp32labs/lab00_demo_hello_restart_countdown.mp4';
import labs_lab01_concept_button_pullup from '../assets/esp32labs/lab01_concept_button_pullup.jpg';
import labs_lab01_demo_boot_button_cycles_rgb_led from '../assets/esp32labs/lab01_demo_boot_button_cycles_rgb_led.mp4';
import labs_lab02_concept_task_states from '../assets/esp32labs/lab02_concept_task_states.jpg';
import labs_lab02_demo_worker_and_heartbeat_tasks from '../assets/esp32labs/lab02_demo_worker_and_heartbeat_tasks.mp4';
import labs_lab03_concept_uart_8n1_frame from '../assets/esp32labs/lab03_concept_uart_8n1_frame.jpg';
import labs_lab03_demo_uart_loopback_wire_pulled from '../assets/esp32labs/lab03_demo_uart_loopback_wire_pulled.mp4';
import labs_lab04_bench_logic_analyzer_on_gpio4 from '../assets/esp32labs/lab04_bench_logic_analyzer_on_gpio4.jpg';
import labs_lab04_proof_analyzer_500hz_and_1000_samples from '../assets/esp32labs/lab04_proof_analyzer_500hz_and_1000_samples.jpg';
import labs_lab05_concept_i2c_bus_and_transaction from '../assets/esp32labs/lab05_concept_i2c_bus_and_transaction.jpg';
import labs_lab05_demo_mpu_tilt_with_i2c_capture from '../assets/esp32labs/lab05_demo_mpu_tilt_with_i2c_capture.mp4';
import labs_lab06_concept_pwm_duty_cycle from '../assets/esp32labs/lab06_concept_pwm_duty_cycle.jpg';
import labs_lab06_demo_led_pwm_fade from '../assets/esp32labs/lab06_demo_led_pwm_fade.mp4';
import labs_lab07_concept_sensor_pipeline from '../assets/esp32labs/lab07_concept_sensor_pipeline.jpg';
import labs_lab07_demo_vibration_rms_with_uart_log from '../assets/esp32labs/lab07_demo_vibration_rms_with_uart_log.mp4';
import labs_lab08_concept_reading_a_crash_dump from '../assets/esp32labs/lab08_concept_reading_a_crash_dump.jpg';
import labs_lab08_proof_gdb_break_inside_button_isr from '../assets/esp32labs/lab08_proof_gdb_break_inside_button_isr.jpg';
import labs_lab09_concept_spi_full_duplex from '../assets/esp32labs/lab09_concept_spi_full_duplex.jpg';
import labs_lab09_proof_spi_loopback_decoded_deadbeef from '../assets/esp32labs/lab09_proof_spi_loopback_decoded_deadbeef.jpg';
import labs_lab10_concept_flash_vs_ram from '../assets/esp32labs/lab10_concept_flash_vs_ram.jpg';
import labs_lab10_demo_boot_counter_survives_reset from '../assets/esp32labs/lab10_demo_boot_counter_survives_reset.mp4';
import labs_lab11_concept_extract_logic_to_test from '../assets/esp32labs/lab11_concept_extract_logic_to_test.jpg';
import labs_lab11_proof_unity_tests_pass from '../assets/esp32labs/lab11_proof_unity_tests_pass.jpg';
import labs_lab12_concept_sleep_current_profile from '../assets/esp32labs/lab12_concept_sleep_current_profile.jpg';
import labs_lab12_demo_deep_sleep_wake_counter from '../assets/esp32labs/lab12_demo_deep_sleep_wake_counter.mp4';
import labs_lab13_concept_wifi_init_and_events from '../assets/esp32labs/lab13_concept_wifi_init_and_events.jpg';
import labs_lab13_demo_wifi_http_post_to_laptop from '../assets/esp32labs/lab13_demo_wifi_http_post_to_laptop.mp4';
import labs_lab14_concept_gatt_table from '../assets/esp32labs/lab14_concept_gatt_table.jpg';
import labs_lab14_demo_ble_notify_phone_and_log from '../assets/esp32labs/lab14_demo_ble_notify_phone_and_log.mp4';
import labs_lab15_concept_ab_slots_and_rollback from '../assets/esp32labs/lab15_concept_ab_slots_and_rollback.jpg';
import labs_lab15_demo_ota_update_v1_to_v2 from '../assets/esp32labs/lab15_demo_ota_update_v1_to_v2.mp4';
import labs_lab16_concept_priority_inversion_timeline from '../assets/esp32labs/lab16_concept_priority_inversion_timeline.jpg';
import labs_lab16_proof_binary_semaphore_800ms from '../assets/esp32labs/lab16_proof_binary_semaphore_800ms.jpg';
import labs_lab16_proof_mutex_300ms from '../assets/esp32labs/lab16_proof_mutex_300ms.jpg';
import labs_lab17_concept_can_arbitration from '../assets/esp32labs/lab17_concept_can_arbitration.jpg';
import labs_lab17_proof_can_frame_0x456_decoded from '../assets/esp32labs/lab17_proof_can_frame_0x456_decoded.jpg';
import labs_lab17_demo_can_two_nodes_125k from '../assets/esp32labs/lab17_demo_can_two_nodes_125k.mp4';
import labs_lab17_demo_can_500k_bus_errors_bus_off from '../assets/esp32labs/lab17_demo_can_500k_bus_errors_bus_off.mp4';
import labs_lab18_concept_anti_windup from '../assets/esp32labs/lab18_concept_anti_windup.jpg';
import labs_lab18_proof_step_response_board_zoom from '../assets/esp32labs/lab18_proof_step_response_board_zoom.jpg';
import labs_lab20_concept_cpu_vs_dma from '../assets/esp32labs/lab20_concept_cpu_vs_dma.jpg';
import labs_lab20_demo_pot_sweep_dma_adc from '../assets/esp32labs/lab20_demo_pot_sweep_dma_adc.mp4';
import labs_lab21_concept_jtag_openocd_gdb from '../assets/esp32labs/lab21_concept_jtag_openocd_gdb.jpg';
import labs_lab21_proof_watchpoint_catches_overflow from '../assets/esp32labs/lab21_proof_watchpoint_catches_overflow.jpg';
import labs_lab21_proof_same_address_root_cause from '../assets/esp32labs/lab21_proof_same_address_root_cause.jpg';
import labs_lab22_concept_ping_pong_buffers from '../assets/esp32labs/lab22_concept_ping_pong_buffers.jpg';
import labs_lab22_demo_tft_image_over_spi_dma from '../assets/esp32labs/lab22_demo_tft_image_over_spi_dma.mp4';
import labs_lab22_proof_8fps_log from '../assets/esp32labs/lab22_proof_8fps_log.jpg';
import labs_lab23_concept_factory_flow from '../assets/esp32labs/lab23_concept_factory_flow.jpg';
import labs_lab23_demo_factory_test_pass_fail_pass from '../assets/esp32labs/lab23_demo_factory_test_pass_fail_pass.mp4';
import labs_lab23_proof_station_pass_fail_pass from '../assets/esp32labs/lab23_proof_station_pass_fail_pass.jpg';

import ece425_s01 from '../assets/ece425/slide01.svg';
import ece425_s02 from '../assets/ece425/slide02.svg';
import ece425_s03 from '../assets/ece425/slide03.svg';
import ece425_s04 from '../assets/ece425/slide04.svg';
import ece425_s05 from '../assets/ece425/slide05.svg';
import ece425_s06 from '../assets/ece425/slide06.svg';
import ece425_s07 from '../assets/ece425/slide07.svg';
import ece425_s08 from '../assets/ece425/slide08.svg';
import ece425_s09 from '../assets/ece425/slide09.svg';
import ece425_s10 from '../assets/ece425/slide10.svg';
import ece425_s11 from '../assets/ece425/slide11.svg';

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



const oscilDescriptions = ["Oscil", "The finished prototype, all three boards running together on breadboards", "Early bring-up, all three boards running my first firmware, each blinking its own LED color", "What a user can do with Oscil", "The architecture, three ESP32-S3 boards wired together with Supabase as the cloud backend", "What the firmware on each board has to do", "Hardware requirements and why I picked each main part", "The cloud side, for user accounts and saved photos", "KiCad schematic, how the six circuit sheets connect", "KiCad schematic, the power rails", "KiCad schematic, the analog front end that scales and shifts a signal so the ADC can read it", "KiCad schematic, the acquisition board with two 12-bit ADCs and the knobs and buttons", "KiCad schematic, the display board and the 7 inch touchscreen wiring", "KiCad schematic, the generator board with an 8-bit R-2R DAC and its output filter", "Early bring-up, hand soldering the tiny ADC chips onto adapter boards", "Testing board 1 by itself, every pin pulses a different number of times so I could prove the wiring matches the schematic", "Debugging board 1 by itself, the logic analyzer on the ADC data lines caught readings shifted by one bit", "Testing board 1 by itself, with the input grounded the noise is only 3.9 ADC steps (12.6 mV) RMS", "Testing board 1 by itself, a 1 kHz test signal captured with DMA at 100,000 samples per second and plotted on my PC", "A diagram I drew showing how the trigger keeps the picture steady and how 3,200 samples fit into 800 screen columns without losing spikes", "Automated tests running on my PC with no hardware, all passing, and they run again in CI on every push", "Testing board 1 by itself, the board to board link looped back into itself, 15,600 frames at 2 Mbaud with zero errors", "Testing board 3 by itself, the R-2R DAC built on a breadboard right next to its schematic", "Testing board 3 by itself, the DAC stepping through all 256 levels from 0 to 3.28 V on a bench oscilloscope", "Testing board 3 by itself, a 1 kHz sine from the DDS code before the output filter", "Testing board 2 by itself, the first picture on the 7 inch display, just color test bars", "The finished scope, using the touch controls", "The finished scope, holding and dragging the CH1 trace to move it", "The finished scope, dragging the CH2 trace", "The finished scope, turning a knob to change volts per division", "The finished scope, freezing and resuming the picture with RUN and STOP", "The finished scope, switching the trigger between rising and falling edges", "The finished scope, automatic measurements of a square wave", "Boards 1 and 2 working together for the first time, measuring a 1 kHz square wave before calibration", "Calibrating board 1, it measures 0 V and a known voltage and corrects each channel's gain and offset", "The finished generator, picking a waveform on the touchscreen and turning the output on", "The finished generator, typing an exact frequency on the keypad", "The finished generator, entering 500 Hz", "The finished generator, set to a triangle wave", "The display board updating its own firmware over Wi-Fi from a GitHub release", "The log after the update, the new version passed its self-test so it was kept", "The database tables I set up in Supabase", "A cloud test run from my PC, 17 checks proving one user can never see another user's photos", "Creating an account on the touchscreen", "Signed in on the device", "Resetting a forgotten password with a secret phrase, then signing in with the new one", "Saving a screenshot of the scope to the cloud", "The list of saved photos, loaded from the cloud", "Opening a saved photo on the device", "The display board's wiring from the back", "The next step, a concept of Oscil as a handheld product only 1.2 inches thick, not built yet", "Next step concept, the case drawing at 190 x 118 x 30 mm with the BNC jacks on top and USB-C charging on the side", "Next step concept, the three-MCU design moved off the breadboards onto one PCB with a battery, and how it all stacks together"];
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
    "The next step, a concept of Oscil as a handheld product only 1.2 inches thick, not built yet": oscil_concept_product,
    "Next step concept, the case drawing at 190 x 118 x 30 mm with the BNC jacks on top and USB-C charging on the side": oscil_concept_enclosure_dimensions,
    "Next step concept, the three-MCU design moved off the breadboards onto one PCB with a battery, and how it all stacks together": oscil_concept_pcb,
}

const esp32labsDescriptions = ["Lab 0: ESP-IDF toolchain set up, first firmware built, flashed and running with a restart countdown", "Lab 1: GPIO input, how a pull-up resistor makes the BOOT button active-low", "Lab 1: GPIO, pressing the BOOT button with debounce cycles the RGB LED colors", "Lab 2: FreeRTOS task states, running, ready, blocked and suspended", "Lab 2: FreeRTOS, a heartbeat task and a worker task running side by side with drift-free vTaskDelayUntil timing", "Lab 3: UART, one 8N1 frame with start bit, 8 data bits and stop bit", "Lab 3: UART loopback test, pulling the TX to RX wire makes the check fail live", "Lab 4: periodic timer, logic analyzer clipped onto the output pin", "Lab 4: esp_timer callback toggling a pin at 500 Hz, measured in PulseView", "Lab 5: I2C bus wiring and a register read transaction", "Lab 5: ESP-IDF I2C master driver reading the MPU-6500 IMU, tilting the board changes the g values", "Lab 6: PWM, how duty cycle sets LED brightness", "Lab 6: LEDC PWM, a task steps the duty cycle to fade an LED", "Lab 7: sensor pipeline, a fixed-rate sampler task hands windows to a processing task with semaphores", "Lab 7: tapping the board raises the RMS vibration value computed on the ESP32", "Lab 8: reading an ESP32 panic and backtrace to find the crashing line", "Lab 8: GPIO interrupt, GDB stopped inside the button ISR", "Lab 9: SPI is full duplex, a byte goes out on MOSI while one comes back on MISO", "Lab 9: SPI master loopback decoded on a logic analyzer, DEADBEEF out and back", "Lab 10: NVS, what survives a reset in flash and what is lost in RAM", "Lab 10: NVS boot counter keeps counting across resets", "Lab 11: unit testing, splitting pure logic from hardware so it can be tested", "Lab 11: Unity unit tests running on the ESP32-S3, all passing", "Lab 12: deep sleep, current draw while awake vs asleep", "Lab 12: deep sleep with a timer wake, RTC memory keeps the wake count", "Lab 13: Wi-Fi station startup and the event handler flow", "Lab 13: Wi-Fi telemetry, the board POSTs JSON over HTTP to a server on my laptop", "Lab 14: BLE GATT table, service, characteristic and CCCD", "Lab 14: BLE GATT server with NimBLE, live notifications to nRF Connect on my phone", "Lab 15: OTA with two app slots, self-test and automatic rollback", "Lab 15: OTA firmware update over Wi-Fi from v1 to v2, self-test passes and the image is kept", "Lab 16: priority inversion, the high priority task stuck behind a medium one", "Lab 16: with a binary semaphore the high priority task waits 800 ms, 30 trials", "Lab 16: with a mutex and priority inheritance the wait drops to 300 ms", "Lab 17: CAN bus arbitration, the lower ID wins without corrupting the frame", "Lab 17: CAN (TWAI) frame between two ESP32-S3 nodes decoded in PulseView, with the ACK bit", "Lab 17: two ESP32-S3 CAN nodes exchanging frames at 125 kbit/s with zero errors", "Lab 17: at 500 kbit/s the error counters climb and the node goes bus-off and recovers", "Lab 18: PID integrator windup and how anti-windup stops it", "Lab 18: PID step responses from the board, anti-windup cuts overshoot from 14.6 to 2.5", "Lab 20: reading every ADC sample with the CPU vs letting DMA fill whole frames", "Lab 20: continuous ADC with DMA at 20 kHz, sweeping a potentiometer", "Lab 21: debug chain, built-in USB-JTAG to OpenOCD to GDB", "Lab 21: GDB hardware watchpoint catching an off-by-one array write as it happens", "Lab 21: root cause, win[8] and win_len share the same address", "Lab 22: ping-pong DMA buffers, fill one while the other is sent", "Lab 22: a photo drawn on an ST7789 TFT over SPI with DMA", "Lab 22: 8.0 fps measured, matching the 10 MHz SPI wire limit", "Lab 23: production test flow, boot, handshake, self-tests, PASS or FAIL", "Lab 23: factory test station in Python, PASS, then FAIL with the IMU unplugged, then PASS", "Lab 23: the station log with serial number and failing test names"];
const esp32labsFiles = {
    "Lab 0: ESP-IDF toolchain set up, first firmware built, flashed and running with a restart countdown": labs_lab00_demo_hello_restart_countdown,
    "Lab 1: GPIO input, how a pull-up resistor makes the BOOT button active-low": labs_lab01_concept_button_pullup,
    "Lab 1: GPIO, pressing the BOOT button with debounce cycles the RGB LED colors": labs_lab01_demo_boot_button_cycles_rgb_led,
    "Lab 2: FreeRTOS task states, running, ready, blocked and suspended": labs_lab02_concept_task_states,
    "Lab 2: FreeRTOS, a heartbeat task and a worker task running side by side with drift-free vTaskDelayUntil timing": labs_lab02_demo_worker_and_heartbeat_tasks,
    "Lab 3: UART, one 8N1 frame with start bit, 8 data bits and stop bit": labs_lab03_concept_uart_8n1_frame,
    "Lab 3: UART loopback test, pulling the TX to RX wire makes the check fail live": labs_lab03_demo_uart_loopback_wire_pulled,
    "Lab 4: periodic timer, logic analyzer clipped onto the output pin": labs_lab04_bench_logic_analyzer_on_gpio4,
    "Lab 4: esp_timer callback toggling a pin at 500 Hz, measured in PulseView": labs_lab04_proof_analyzer_500hz_and_1000_samples,
    "Lab 5: I2C bus wiring and a register read transaction": labs_lab05_concept_i2c_bus_and_transaction,
    "Lab 5: ESP-IDF I2C master driver reading the MPU-6500 IMU, tilting the board changes the g values": labs_lab05_demo_mpu_tilt_with_i2c_capture,
    "Lab 6: PWM, how duty cycle sets LED brightness": labs_lab06_concept_pwm_duty_cycle,
    "Lab 6: LEDC PWM, a task steps the duty cycle to fade an LED": labs_lab06_demo_led_pwm_fade,
    "Lab 7: sensor pipeline, a fixed-rate sampler task hands windows to a processing task with semaphores": labs_lab07_concept_sensor_pipeline,
    "Lab 7: tapping the board raises the RMS vibration value computed on the ESP32": labs_lab07_demo_vibration_rms_with_uart_log,
    "Lab 8: reading an ESP32 panic and backtrace to find the crashing line": labs_lab08_concept_reading_a_crash_dump,
    "Lab 8: GPIO interrupt, GDB stopped inside the button ISR": labs_lab08_proof_gdb_break_inside_button_isr,
    "Lab 9: SPI is full duplex, a byte goes out on MOSI while one comes back on MISO": labs_lab09_concept_spi_full_duplex,
    "Lab 9: SPI master loopback decoded on a logic analyzer, DEADBEEF out and back": labs_lab09_proof_spi_loopback_decoded_deadbeef,
    "Lab 10: NVS, what survives a reset in flash and what is lost in RAM": labs_lab10_concept_flash_vs_ram,
    "Lab 10: NVS boot counter keeps counting across resets": labs_lab10_demo_boot_counter_survives_reset,
    "Lab 11: unit testing, splitting pure logic from hardware so it can be tested": labs_lab11_concept_extract_logic_to_test,
    "Lab 11: Unity unit tests running on the ESP32-S3, all passing": labs_lab11_proof_unity_tests_pass,
    "Lab 12: deep sleep, current draw while awake vs asleep": labs_lab12_concept_sleep_current_profile,
    "Lab 12: deep sleep with a timer wake, RTC memory keeps the wake count": labs_lab12_demo_deep_sleep_wake_counter,
    "Lab 13: Wi-Fi station startup and the event handler flow": labs_lab13_concept_wifi_init_and_events,
    "Lab 13: Wi-Fi telemetry, the board POSTs JSON over HTTP to a server on my laptop": labs_lab13_demo_wifi_http_post_to_laptop,
    "Lab 14: BLE GATT table, service, characteristic and CCCD": labs_lab14_concept_gatt_table,
    "Lab 14: BLE GATT server with NimBLE, live notifications to nRF Connect on my phone": labs_lab14_demo_ble_notify_phone_and_log,
    "Lab 15: OTA with two app slots, self-test and automatic rollback": labs_lab15_concept_ab_slots_and_rollback,
    "Lab 15: OTA firmware update over Wi-Fi from v1 to v2, self-test passes and the image is kept": labs_lab15_demo_ota_update_v1_to_v2,
    "Lab 16: priority inversion, the high priority task stuck behind a medium one": labs_lab16_concept_priority_inversion_timeline,
    "Lab 16: with a binary semaphore the high priority task waits 800 ms, 30 trials": labs_lab16_proof_binary_semaphore_800ms,
    "Lab 16: with a mutex and priority inheritance the wait drops to 300 ms": labs_lab16_proof_mutex_300ms,
    "Lab 17: CAN bus arbitration, the lower ID wins without corrupting the frame": labs_lab17_concept_can_arbitration,
    "Lab 17: CAN (TWAI) frame between two ESP32-S3 nodes decoded in PulseView, with the ACK bit": labs_lab17_proof_can_frame_0x456_decoded,
    "Lab 17: two ESP32-S3 CAN nodes exchanging frames at 125 kbit/s with zero errors": labs_lab17_demo_can_two_nodes_125k,
    "Lab 17: at 500 kbit/s the error counters climb and the node goes bus-off and recovers": labs_lab17_demo_can_500k_bus_errors_bus_off,
    "Lab 18: PID integrator windup and how anti-windup stops it": labs_lab18_concept_anti_windup,
    "Lab 18: PID step responses from the board, anti-windup cuts overshoot from 14.6 to 2.5": labs_lab18_proof_step_response_board_zoom,
    "Lab 20: reading every ADC sample with the CPU vs letting DMA fill whole frames": labs_lab20_concept_cpu_vs_dma,
    "Lab 20: continuous ADC with DMA at 20 kHz, sweeping a potentiometer": labs_lab20_demo_pot_sweep_dma_adc,
    "Lab 21: debug chain, built-in USB-JTAG to OpenOCD to GDB": labs_lab21_concept_jtag_openocd_gdb,
    "Lab 21: GDB hardware watchpoint catching an off-by-one array write as it happens": labs_lab21_proof_watchpoint_catches_overflow,
    "Lab 21: root cause, win[8] and win_len share the same address": labs_lab21_proof_same_address_root_cause,
    "Lab 22: ping-pong DMA buffers, fill one while the other is sent": labs_lab22_concept_ping_pong_buffers,
    "Lab 22: a photo drawn on an ST7789 TFT over SPI with DMA": labs_lab22_demo_tft_image_over_spi_dma,
    "Lab 22: 8.0 fps measured, matching the 10 MHz SPI wire limit": labs_lab22_proof_8fps_log,
    "Lab 23: production test flow, boot, handshake, self-tests, PASS or FAIL": labs_lab23_concept_factory_flow,
    "Lab 23: factory test station in Python, PASS, then FAIL with the IMU unplugged, then PASS": labs_lab23_demo_factory_test_pass_fail_pass,
    "Lab 23: the station log with serial number and failing test names": labs_lab23_proof_station_pass_fail_pass,
}

const ece425Descriptions = ["ECE 425 Final Assignment: Bluetooth-controlled music player on a TI TM4C123 LaunchPad", "ECE 425 Final Assignment: project overview, iPhone to HM-10 BLE module to TM4C123 to buzzer, with the full EduBase build", "ECE 425 Final Assignment: Classic Bluetooth vs Bluetooth Low Energy, and sending a command from the LightBlue app", "ECE 425 Final Assignment: the HM-10 BLE-to-UART bridge (TI CC2541), pins, voltage and default 9600 8N1", "ECE 425 Final Assignment: wiring the HM-10 TX to UART5 RX on PE4", "ECE 425 Final Assignment: firmware setup order, GPIO, Timer0, UART5 and the NVIC interrupt", "ECE 425 Final Assignment: generating tones as square waves on PC4 with a 1 us Timer0 time base", "ECE 425 Final Assignment: bare-metal UART5 register setup at 9600 baud", "ECE 425 Final Assignment: a short UART interrupt handler that hands the command to main()", "ECE 425 Final Assignment: debugging the 50 MHz clock bug that threw off timing and baud rate", "ECE 425 Final Assignment: how it all connects, plus ideas for what's next"];
const ece425Files = {
    "ECE 425 Final Assignment: Bluetooth-controlled music player on a TI TM4C123 LaunchPad": ece425_s01,
    "ECE 425 Final Assignment: project overview, iPhone to HM-10 BLE module to TM4C123 to buzzer, with the full EduBase build": ece425_s02,
    "ECE 425 Final Assignment: Classic Bluetooth vs Bluetooth Low Energy, and sending a command from the LightBlue app": ece425_s03,
    "ECE 425 Final Assignment: the HM-10 BLE-to-UART bridge (TI CC2541), pins, voltage and default 9600 8N1": ece425_s04,
    "ECE 425 Final Assignment: wiring the HM-10 TX to UART5 RX on PE4": ece425_s05,
    "ECE 425 Final Assignment: firmware setup order, GPIO, Timer0, UART5 and the NVIC interrupt": ece425_s06,
    "ECE 425 Final Assignment: generating tones as square waves on PC4 with a 1 us Timer0 time base": ece425_s07,
    "ECE 425 Final Assignment: bare-metal UART5 register setup at 9600 baud": ece425_s08,
    "ECE 425 Final Assignment: a short UART interrupt handler that hands the command to main()": ece425_s09,
    "ECE 425 Final Assignment: debugging the 50 MHz clock bug that threw off timing and baud rate": ece425_s10,
    "ECE 425 Final Assignment: how it all connects, plus ideas for what's next": ece425_s11,
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
        case "esp32labs":
            return esp32labsFiles;
        case "ece425":
            return ece425Files;
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
        case "esp32labs":
            return esp32labsDescriptions;
        case "ece425":
            return ece425Descriptions;
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