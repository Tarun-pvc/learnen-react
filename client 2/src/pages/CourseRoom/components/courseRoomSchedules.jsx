import React from "react";
import { useState,useEffect } from "react";
import "../styles/CourseRoomAssignments.css";
import { useSelector } from "react-redux";

export default function CourseRoomSchedules() {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const courseId = JSON.parse(localStorage.getItem("selectedCourseId"));
  const [showPopup, setShowPopup] = useState(false);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = () => {
    const course = {
      courseId,
    };
    fetch("http://localhost:3000/api/getSchedulesByCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data.schedules);
      })
      .catch((err) => {
        console.error("Error fetching schedules:", err);
      });
  };
  
  

  function submitHandler() {
    const schedule = {
      title,
      time,
      link,
      courseId,
    };
    fetch("http://localhost:3000/api/addschedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schedule),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowPopup(false);
        fetchSchedules();
      })
      .catch((err) => {
        console.error("Error adding schedule:", err);
        window.location.href = "/error";
      });
  }

  const handleAddDocument = () => {
    setShowPopup(true);
  };
  const handleCancelDocument = () => {
    setShowPopup(false);
  };

  return (
    <div className="cr-assignments-main">
      <div className="cr-assignments-header">
        <h1>Schedules</h1>
        {user.Position === "mentor" && (
          <button
            className="cr-add-assignment-button"
            onClick={handleAddDocument}
          >
            Add Schedule
          </button>
        )}
      </div>
      <hr />
      <div className="cr-assignments-item">
        <div className="cr-assignments-item-heading">
          <h2>Meetings</h2>
        </div>
        {schedules.map((assignment) => (
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
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>
              <div>
                <div className="cr-assignments-new-right-time">
                  {assignment.time}
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
            <h1>New Session</h1>
            <input
              type="text"
              placeholder="Session Title"
              className="assignment-popup-input"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Session Time"
              className="assignment-popup-input"
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Link"
              className="assignment-popup-input"
              onChange={(e) => setLink(e.target.value)}
            />
            <div className="assignment-popup-buttons">
            <button onClick={handleCancelDocument}>Cancel</button>
              <button onClick={submitHandler}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
