import { faHammer , faCompass  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardImg from '../assets/dashboard icon.png'
import ReportImg from '../assets/Dashboard.png'
import UsersNavIcon from '../assets/Client Management.png'
import '../styles/adminSidebar.css'
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AdminSidebar(props) {

  const [activePage, setActivePage] = useState("Dashboard")

    const handleMenuItemClick = (item) => {
        props.onMenuItemClick(item);
        setActivePage(item);
    }
  return (
    <div className="admin-sidebar-wrapper">
      <div className="admin-sidebar-header">
        <FontAwesomeIcon style={{color:'white'}} icon={faHammer} className="admin-sidebar-fontawesome-icon" />
        <h2 style={{color:'white'}} > Admin </h2>
      </div>
      <div className="admin-general-section">
        <h2>General</h2>
        <div className="admin-general-section-list">
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Dashboard')} id={activePage === 'Dashboard' ? 'active' : ''}>
            <div className="admin-general-child-logo-wrapper">
                <img src={DashboardImg} alt="dashboard-icon"/>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Reports')} id={activePage === 'Reports' ? 'active' : ''}>
            <div className="admin-general-child-logo-wrapper">
                <img src={ReportImg} alt="report-icon"/>
            </div>
            <p>Reports</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Course Nav')} >
            <FontAwesomeIcon icon={faCompass} className="admin-sidebar-fontawesome-icon"/>
            <p id={activePage === 'Course Nav' ? 'active' : ''}>Course Nav</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Users')} id={activePage === 'Users' ? 'active' : ''}>
            <div className="admin-general-child-logo-wrapper">
                <img src={UsersNavIcon} alt="users-nav-icon"/>
            </div>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
