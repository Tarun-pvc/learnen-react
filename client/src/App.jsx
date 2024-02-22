// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboardMain from "./pages/AdminDashboard/adminDashboardMain";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUp/SignUp";
import VerificationPage from "./pages/VerificationPage/VerificationPage";
import MentorDashboard from "./pages/MentorDashboard/components/MentorDashboard";
// import ContactUs from './pages/ContactUs/ContactUs'
import UpdateProfile from "./pages/UserProfileChange/UserProfileForm";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import CourseRoomMain from "./pages/CourseRoom/CourseRoomMain";
import LandingPage from "./pages/Landingpage/components/LandingPage";
import CourseCheckout from "./pages/CourseCheckout/CourseCheckout";
import MentorApplication from "./pages/MentorApplication/MentorApplication";
import { useEffect } from "react";
import axios from "axios";
import Error from "./pages/Error";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mentorDashboard" element={<MentorDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboardMain />} />
          {/* <Route path='/contactus' element={<ContactUs/>}/> */}
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/courseRoom" element={<CourseRoomMain />} />
          <Route path="/courseCheckOut" element={<CourseCheckout />} />
          <Route path="/mentorApplication" element={<MentorApplication />} />
          <Route path="/error" element={<Error/>} />
          <Route path="*"  element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;