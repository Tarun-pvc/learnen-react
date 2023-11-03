import { faHammer , faCompass  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardImg from '../assets/dashboard icon.png'
import ReportImg from '../assets/Dashboard.png'
import UsersNavIcon from '../assets/Client Management.png'
import '../styles/adminSidebar.css'

// eslint-disable-next-line react/prop-types
export default function AdminSidebar({onMenuItemClick}) {

    const handleMenuItemClick = (item) => {
        onMenuItemClick(item);
    }
  return (
    <div className="admin-sidebar-wrapper">
      <div className="admin-sidebar-header">
        <FontAwesomeIcon icon={faHammer} className="admin-sidebar-fontawesome-icon" />
        <h2>Admin</h2>
      </div>
      <div className="admin-general-section">
        <h2>General</h2>
        <div className="admin-general-section-list">
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Dashboard')}>
            <div className="admin-general-child-logo-wrapper">
                <img src={DashboardImg} alt="dashboard-icon"/>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Reports')}>
            <div className="admin-general-child-logo-wrapper">
                <img src={ReportImg} alt="report-icon"/>
            </div>
            <p>Reports</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Course Nav')}>
            <FontAwesomeIcon icon={faCompass} className="admin-sidebar-fontawesome-icon"/>
            <p>Course Nav</p>
          </div>
          <div className="admin-general-child" onClick={() => handleMenuItemClick('Users')}>
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
