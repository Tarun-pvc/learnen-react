// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboardMain from './pages/AdminDashboard/adminDashboardMain';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import MentorDashboard from './pages/MentorDashboard/components/MentorDashboard';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/verification' element={<VerificationPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mentorDashboard' element={<MentorDashboard/>}/>
        <Route path='/adminDashboard' element={<AdminDashboardMain/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
