import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/courseRoomAssignments.css";

export default function CourseRoomDocuments() {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const courseId = JSON.parse(localStorage.getItem("selectedCourseId"));
  const [showPopup, setShowPopup] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = () => {
    const course = {
      courseId,
    };
    fetch("https://learnen-react.onrender.com/api/getresources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        setResources(data.resources);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
      });
  };
  
  

  function submitHandler() {
    const document = {
      title,
      description,
      link,
      courseId,
    };
    console.log("frontend",document);
    fetch("https://learnen-react.onrender.com/api/addresource", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowPopup(false);
        fetchDocuments();
      })
      .catch((err) => {
        console.error("Error adding document:", err);
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
        <h1>Documents</h1>
        {user.Position === "mentor" && (
          <button
            className="cr-add-assignment-button"
            onClick={handleAddDocument}
          >
            Add Document
          </button>
        )}
      </div>
      <hr />
      <div className="cr-assignments-item">
        {resources.map((assignment) => (
          <div className="cr-assignment-assigned-item" key={assignment._id}>
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    {assignment.title}
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                  {assignment.description}
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    {assignment.course}
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>
              <div>
                <div className="cr-assignments-new-right-time">
                  
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
            <h1>Add Document</h1>
            <input
              type="text"
              placeholder="Document Name"
              className="assignment-popup-input"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Document Description"
              className="assignment-popup-input"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Document Link"
              className="assignment-popup-input"
              onChange={(e) => setLink(e.target.value)}
            />
            <div className="assignment-popup-buttons">
              <button onClick={handleCancelDocument}>Cancel</button>
              <button onClick={submitHandler}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
