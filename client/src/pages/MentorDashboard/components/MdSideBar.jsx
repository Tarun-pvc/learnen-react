import React from "react";

function MdSideBar() {
  return (
    <div className="md-sidebar-wrapper">
      <div className="md-sidebar-dashhead">Dashboard</div>
      <div className="md-sidebar-general">
        <div className="md-sidebar-generalHead">General</div>
        <div className="md-sidebar-generalSub">
          <div className="md-sidebar-generalSub-icon1-div"><img src="./images/dashboard.png" className="md-sidebar-generalSub-icon1"/></div>
          <a className="md-sidebar-generalSub-Name " href="">Dashboard</a>
        </div>
        <div className="md-sidebar-generalSub">
          <img src="./images/learning.png" className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name" href="">Courses</a>
        </div>
        <div className="md-sidebar-generalSub">
          <img src="./images/page.png" className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name" href="">Create</a>
        </div>
        <div className="md-sidebar-ProfileSeHead">Profile Settings</div>
        <div className="md-sidebar-generalSub">
          <img src="./images/update-user.png" className="md-sidebar-generalSub-icon"/>
          <a className="md-sidebar-generalSub-Name " href="">Update Profile</a>
        </div>
      </div>
    </div>
  );
}
export default MdSideBar;
