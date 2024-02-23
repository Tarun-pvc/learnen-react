import React from "react";
import dashboard from "../assets/dashboard.png";
import explore from "../assets/explore.png";
import document from "../assets/document.png";
import assignment from "../assets/assignment.png";
import update from "../assets/update.png";
import joinedIcon from "../assets/Google Classroom.png";

export default function SdSideBar({ onMenuItemClick }) {
  const handleMenuItemClick = (item) => {
    onMenuItemClick(item);
  };

  return (
    <div className="sd-sidebar-wrapper">
      <div className="sd-sidebar-dashhead">Dashboard</div>
      <div className="sd-sidebar-general">
        <div className="sd-sidebar-generalHead">General</div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("Dashboard")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={dashboard} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-selector">Dashboard</p>
        </div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("Explore")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={explore} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-selector">Explore</p>
        </div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("Joined")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={joinedIcon} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-selector">Joined</p>
        </div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("Document")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={document} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-selector">Documents</p>
        </div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("Assignment")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={assignment} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-selector">Assignments</p>
        </div>
        <div className="sd-sidebar-ProfileSeHead">Profile Settings</div>
        <div
          className="sd-sidebar-generalSub"
          onClick={() => handleMenuItemClick("UpdateProfile")}
        >
          <div className="sd-sidebar-generalSub-icon1-div">
            <img src={update} className="sd-sidebar-generalSub-icon1" />
          </div>
          <p className="sd-sidebar-generalSub-Name ">
            Update Profile
          </p>
        </div>
      </div>
    </div>
  );
}
