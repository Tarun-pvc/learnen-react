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
      <MentorDashboard></MentorDashboard>
      <AdminDashboardMain/>
      <LoginPage></LoginPage>
      <SignUp></SignUp>
      <VerificationPage></VerificationPage>
    </div>
  );
}

export default App;
