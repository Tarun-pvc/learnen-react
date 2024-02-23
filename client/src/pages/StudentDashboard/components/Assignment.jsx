import React from "react";

import MyAssignment from "./MyAssignment";
import SdRightBar from "./SdRightBar";

import "../styles/StudentDashboard.css";

export default function Assignments() {
  return (
    <div className="sd-Assignment-main-wrapper">
      <div className="sd-Middle-Assignment-wrapper">
        <h1>Assignments</h1>
        <hr/>
        <div className="sd-Middle-AssignmentHead">Assigned</div>
        <div className="sd-Middle-AssignmentHead-new">
          <MyAssignment />
          <MyAssignment />
        </div>
        <div className="sd-Middle-AssignmentHead">Submitted</div>
        <div className="sd-Middle-AssignmentHead-new">
          <MyAssignment />
          <MyAssignment />
        </div>
      </div>
      <SdRightBar />
    </div>
  );
}
