import React from 'react';
import './App.css';
import AdminDashboardMain from './pages/AdminDashboard/adminDashboardMain';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import MentorDashboard from './pages/MentorDashboard/components/MentorDashboard';

function App() {
  return (
    <div className="App">
      {/* <AdminDashboardMain/> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignUp></SignUp> */}
      {/* <VerificationPage></VerificationPage> */}
      <MentorDashboard></MentorDashboard>
    </div>
  );
}

export default App;
