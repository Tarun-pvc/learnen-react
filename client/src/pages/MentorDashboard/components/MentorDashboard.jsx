import React from "react";
import "../MentorDashboard.css";
import MdSideBar from "./MdSideBar";
import MdMiddle from "./MdMiddle";
import MDRightBar from "./MDRightBar";
// import { useRef } from 'react';

function MentorDashboard() {
  return (
    <>
      <MdSideBar></MdSideBar>
      <MdMiddle></MdMiddle>
      <MDRightBar></MDRightBar>
    </>
  );
}

export default MentorDashboard;
