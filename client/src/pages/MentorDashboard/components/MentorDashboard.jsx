import React from "react";
import "../MentorDashboard.css";
import MdSideBar from "./MdSideBar";
import MdMiddle from "./MdMiddle";
// import { useRef } from 'react';

function MentorDashboard() {
  return (
    <>
      <MdSideBar></MdSideBar>
      <MdMiddle></MdMiddle>
    </>
  );
}

export default MentorDashboard;
