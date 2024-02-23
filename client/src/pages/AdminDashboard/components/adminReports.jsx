// GmailClone.jsx
import React from 'react';
import '../styles/adminReports.css';
import {faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReportComponent = (props) =>{
  
  return (
    <div className="report">
      <span className="sender">{props.report.reporter}</span>
      <span className="subject">{props.report.subject}</span>
      <p className="preview">{props.report.content}</p>
    </div>
  )
}

const AdminReports = () => {


  const mails = [
    {
      reporter: 'Samuel',
      subject: 'Not working!',
      content: 'I have a bug...'
    },
    {
      reporter: 'Crum',
      subject: 'Gmeet issue',
      content: 'Not working'
    },
    {
      reporter: 'Emojis',
      subject: 'Why are emojis not working??',
      content: 'Funny emojis... not working....'
    },
    {
      reporter: 'Fire_Kaiser',
      subject: 'What is this... didnt expect',
      content: 'Diddnt explect. .. '
    },
    {
      reporter: 'Jolie',
      subject: 'Why this feature no?',
      content: 'no feature no like'
    }
  ]
  
  return (
    <div className="admin-reports-wrapper">
      <header className="reports-header">
        <FontAwesomeIcon className='reports-icon' icon={faSkullCrossbones} />
          <input className='search-bar' type="text" placeholder="Search Reports" />
      </header>
      <main className="reports">
      {mails.map((item, index) => (
          <ReportComponent key={index} report={item} />
        ))}
      </main>
    </div>
  );
};

export default AdminReports;
