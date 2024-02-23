// import React from 'react'

import { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import './styles/adminDashboardMain.css'
import AdminCoursesNav from "./components/adminCoursesNav";
import AdminReports from "./components/adminReports";
import AdminUsers from "./components/adminUsers";
import AdminGeneral from "./components/adminGeneral";

export default function AdminDashboardMain() {

  const [selectedItem , setSelectedItem] = useState("Dashboard");

  const renderSelectedComponent = () => {
    switch(selectedItem){
      case 'Dashboard' :
        return <AdminGeneral/>;
      case 'Course Nav':
        return <AdminCoursesNav/>;
      case 'Reports':
        return <AdminReports/>;
      case 'Users':
        return <AdminUsers/>;
      default:
        return <AdminGeneral/>;
    }
  }
  return (
    <div className="admin-dashboard-main">
      <div className="admin-sidebar">
        <AdminSidebar onMenuItemClick={(item) => setSelectedItem(item)} selectedItem = {selectedItem} />
      </div>
      <div className="admin-main-wrapper">
        {renderSelectedComponent()}
      </div>
    </div>
  )
}