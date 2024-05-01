import React, { useState, useEffect } from "react";
import document from "./assets/document.png";
import assignment from "./assets/assignment.png";
import "./styles/courseRoomMain.css";
import CourseRoomAssignments from "./components/courseRoomAssignments";
import RatingComponent from "../MentorDashboard/components/RatingComponent";
import courseCardImg from "./assets/Course app-amico.png";
import MusicPlayerCard from "./components/musicPlayerCard";
import CourseRoomDocuments from "./components/courseRoomDocuments";
import CourseRoomSchedules from "./components/courseRoomSchedules";
import CourseRoomParticipants from "./components/courseRoomParticipants";
import Schoolboy from "./assets/Raise a Hand to Answer.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CourseRoomMain() {
  const [course1, setCourse] = useState();
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const staticRating = 3;
  const [selectedItem, setSelectedItem] = useState("Assignments");
  const [reportSubject, setReportSubject] = useState("");
  const [reportMessage, setReportMessage] = useState("");

  const location = useLocation();
  const courseId = JSON.parse(localStorage.getItem("selectedCourseId"));
  const userid = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getCourse?courseId=${courseId}`
        );
        setCourse(response.data.course);
      } catch {
        console.error("Error fetching data");
      }
    }

    fetchCourses();
  }, []);

  const handleReportSubmit = (event) => {
    event.preventDefault();
    const reportData = {
      userId: user._id,
      userName: user.userName,
      courseId: courseId,
      courseName: course1 ? course1.title : "",
      subject: reportSubject,
      message: reportMessage,
    };
    // console.log(reportData);

    fetch("http://localhost:3000/api/submitReports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    });
    setReportSubject("");
    setReportMessage("");
  };

  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "Assignments":
        return <CourseRoomAssignments courseId={courseId} />;
      case "Documents":
        return <CourseRoomDocuments />;
      case "Schedules":
        return <CourseRoomSchedules />;
      case "Participants":
        return <CourseRoomParticipants course={course1} />;
      default:
        return <CourseRoomAssignments />;
    }
  };

  return (
    <div className="course-room-main">
      <div className="cr-sidebar">
        <div className="cr-sidebar-user-data">
          <div className="cr-sidebar-name">
            <p>{user.userName}</p>
          </div>
          <div className="cr-sidebar-email">
            <p>{user.email}</p>
          </div>
        </div>
        <h2>{course1 ? course1.title : ""}</h2>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Assignments")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={assignment} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Assignments</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Documents")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={document} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Documents</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Schedules")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={assignment} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Schedules</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Participants")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={Schoolboy} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Participants</p>
          </div>
        </div>
      </div>
      <div className="cr-main-component">
        <div className="cr-main-top">
          <div className="cr-main-top-left">
            <div className="cr-main-top-content">
              <p className="cr-main-top-content-course">
                {course1 ? course1.title : ""}
              </p>
              <p className="cr-main-top-content-mentor">
                Mentor: {user.userName}
              </p>
              <p className="cr-main-top-content-skills">
                Skills: {course1 ? course1.skills : ""}
              </p>
              <p className="cr-main-top-content-duration">
                Price :{course1 ? course1.price : ""}
              </p>
              <RatingComponent
                className="cr-main-top-rating"
                staticRating={5 - staticRating}
              />
            </div>
            <div className="cr-main-top-image">
              <img
                className="cr-main-top-img"
                src={courseCardImg}
                alt="Course"
              />
            </div>
          </div>
          <div className="cr-main-top-middle">
            <MusicPlayerCard />
          </div>
        </div>
        <div className="cr-main-bottom">
          <div className="cr-rendering-component">
            {renderSelectedComponent()}
          </div>
          <div className="cr-mail-component">
            <p>Report</p>
            <hr />
            <form onSubmit={handleReportSubmit}>
              <div className="cr-mail-subject-input">
                <label>Subject:</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  value={reportSubject}
                  onChange={(e) => setReportSubject(e.target.value)}
                />
              </div>
              <div className="cr-mail-subject-input-text-area">
                <label>Message:</label>
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  value={reportMessage}
                  onChange={(e) => setReportMessage(e.target.value)}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
