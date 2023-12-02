import React from "react";
import dashboard from "../assets/dashboard.png"
import courses from "../assets/learning.png"
import create from "../assets/page.png"
import update from "../assets/update-user.png"
function MdSideBar() {
  return (
    <div className="md-sidebar-wrapper">
      <div className="md-sidebar-dashhead">Dashboard</div>
      <div className="md-sidebar-general">
        <div className="md-sidebar-generalHead">General</div>
        <div className="md-sidebar-generalSub">
          <div className="md-sidebar-generalSub-icon1-div"><img src={dashboard} className="md-sidebar-generalSub-icon1"/></div>
          <a className="md-sidebar-generalSub-Name " href="">Dashboard</a>
        </div>
        <div className="md-sidebar-generalSub">
          <img src={courses} className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name" href="">Courses</a>
        </div>
        <div className="md-sidebar-generalSub">
          <img src={create} className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name" href="">Create</a>
        </div>
        <div className="md-sidebar-ProfileSeHead">Profile Settings</div>
        <div className="md-sidebar-generalSub">
          <img src={update} className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name " href="">Update Profile</a>
        </div>
      </div>
    </div>
  );
}
export default MdSideBar;
