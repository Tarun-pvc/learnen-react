import React from "react";
import { useEffect, useState } from "react";
import MyAssignment from "./MyAssignment";
import SdRightBar from "./SdRightBar";

import "../styles/StudentDashboard.css";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
  const user = JSON.parse(localStorage.getItem("loginUser"));
    fetch("https://learnen-react.onrender.com/api/getAssignmentsJoined",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joinedRooms: user.Joined_Room,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data.assignments);
      })
      .catch((err) => {
        console.error("Error fetching assignments:", err);
      });
  };
  return (
    <div className="sd-Assignment-main-wrapper">
      <div className="sd-Middle-Assignment-wrapper">
        <h1>Assignments</h1>
        <hr/>
        <div className="cr-assignments-item">
        {assignments.map((assignment) => (
          <div className="cr-assignments-item" key={assignment.id}>
            <div className="sd-Middle-Assignment-new">
              <div className="sd-Middle-Assignment-new-left">
                <div>
                  <div className="sd-Middle-Assignment-new-left-Name">
                    {assignment.title}
                  </div>
                  <div className="sd-Middle-Assignment-new-left-Lecture">
                    Literature
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    {assignment.course}
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>
              <div>
                <div className="cr-assignments-new-right-time">
                  {assignment.deadline}
                </div>
                <br />
                <a
                  href={assignment.link}
                  className="cr-assignments-new-right-view"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* <div className="sd-Middle-AssignmentHead">Assigned</div>
        <div className="sd-Middle-AssignmentHead-new">
          <MyAssignment />
          <MyAssignment />
        </div>
        <div className="sd-Middle-AssignmentHead">Submitted</div>
        <div className="sd-Middle-AssignmentHead-new">
          <MyAssignment />
          <MyAssignment />
        </div> */}
      </div>
      <SdRightBar />
    </div>
  );
}
