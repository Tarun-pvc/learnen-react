import React,{useState} from "react";
import "../MentorDashboard.css";
import MdSideBar from "./MdSideBar";
import MdMiddle from "./MdMiddle";
import MDRightBar from "./MDRightBar";
import UpdateMP from "./UpdateMP";
import dashboard from "../assets/dashboard.png"
import courses from "../assets/learning.png"
import create from "../assets/page.png"
import update from "../assets/update-user.png"
import MentorCourses from "./MentorCourses";
import CreateRoom from "./CreateRoom";
// import { useRef } from 'react';

function MentorDashboard() {

  const [dashboard1,setDashboard] = useState(true);
  const [courses1,setCourses] = useState(false);
  const [create1,setCreate] = useState(false);
  const [update1,setUpdate] = useState(false);

  function dashboardHandler()
  {
    setDashboard(true);
    setCourses(false);
    setCreate(false);
    setUpdate(false);
  }
  function coursesHandler()
  {
    setDashboard(false);
    setCourses(true);
    setCreate(false);
    setUpdate(false);
  }
  function createHandler()
  {
    setDashboard(false);
    setCourses(false);
    setCreate(true);
    setUpdate(false);
  }

  function updateHandler()
  {
    setDashboard(false);
    setCourses(false);
    setCreate(false);
    setUpdate(true);
  }
  return (
    <>
      {/* <MdSideBar></MdSideBar> */}
      <div className="md-sidebar-wrapper">
      <div className="md-sidebar-dashhead">Dashboard</div>
      <div className="md-sidebar-general">
        <div className="md-sidebar-generalHead">General</div>
        <div className="md-sidebar-generalSub">
          <div className="md-sidebar-generalSub-icon1-div"><img src={dashboard} className="md-sidebar-generalSub-icon1"/></div>
          <button className="md-sidebar-generalSub-Name " onClick={dashboardHandler} >Dashboard</button>
        </div>
        <div className="md-sidebar-generalSub">
          <img src={courses} className="md-sidebar-generalSub-icon"/>
          <button className="md-sidebar-generalSub-Name" onClick={coursesHandler}>Courses</button>
        </div>
        <div className="md-sidebar-generalSub">
          <img src={create} className="md-sidebar-generalSub-icon"/>
          <button className="md-sidebar-generalSub-Name" onClick={createHandler}>Create</button>
        </div>
        <div className="md-sidebar-ProfileSeHead">Profile Settings</div>
        <div className="md-sidebar-generalSub">
          <img src={update} className="md-sidebar-generalSub-icon"/>
          <button className="md-sidebar-generalSub-Name " onClick={updateHandler}>Update Profile</button>
        </div>
      </div>
    </div>
      {dashboard1 && <><MdMiddle></MdMiddle><MDRightBar></MDRightBar></>}
      {update1 && <UpdateMP></UpdateMP> }
      {courses1 && <><MentorCourses></MentorCourses><MDRightBar></MDRightBar></>}
      {create1 && <CreateRoom></CreateRoom>}
    </>
  );
}

export default MentorDashboard;
