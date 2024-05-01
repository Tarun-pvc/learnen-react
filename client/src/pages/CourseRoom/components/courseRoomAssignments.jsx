import React, { useState, useEffect } from "react";
import "../styles/courseRoomAssignments.css";
import { useSelector } from "react-redux";

export default function CourseRoomAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [link, setLink] = useState("");

  const user = JSON.parse(localStorage.getItem("loginUser"));
  const courseId = JSON.parse(localStorage.getItem("selectedCourseId"));
  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    const course = {
      courseId,
    };
    fetch("http://localhost:3000/api/getcourseassignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data.assignments);
      })
      .catch((err) => {
        console.error("Error fetching assignments:", err);
      });
  };
  
  

  function submitHandler() {
    const assignment = {
      title,
      deadline,
      link,
      courseId,
    };
    fetch("http://localhost:3000/api/addassignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowPopup(false);
        fetchAssignments();
      })
      .catch((err) => {
        console.error("Error adding assignment:", err);
        window.location.href = "/error";
      });
  }

  const handleAddAssignment = () => {
    setShowPopup(true);
  };

  const handleCancelAssignment = () => {
    setShowPopup(false);
  };

  return (
    <div className="cr-assignments-main">
      <div className="cr-assignments-header">
        <h1>Assignments</h1>
        {user.Position === "mentor" && (
          <button
            className="cr-add-assignment-button"
            onClick={handleAddAssignment}
          >
            Add Assignment
          </button>
        )}
      </div>

      <hr />
      <div className="cr-assignments-item">
        {assignments.map((assignment) => (
          <div className="cr-assignment-assigned-item" key={assignment._id}>
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    {assignment.title}
                  </div>
                  <div className="cr-assignments-new-left-lecture">
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
      {showPopup && (
        <div className="overlay">
          <div className="assignment-popup">
            <h1>Add Assignment</h1>
            <input
              type="text"
              placeholder="Assignment Title"
              className="assignment-popup-input"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              placeholder="Deadline"
              className="assignment-popup-input"
              onChange={(e) => setDeadline(e.target.value)}
            />
            <input
              type="text"
              placeholder="Link"
              className="assignment-popup-input"
              onChange={(e) => setLink(e.target.value)}
            />
            <div className="assignment-popup-buttons">
              <button onClick={handleCancelAssignment}>Cancel</button>
              <button onClick={submitHandler}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
