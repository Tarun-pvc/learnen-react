import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/courseRoomParticipants.css'

export default function CourseRoomParticipants(props) {
  const [participants, setParticipants] = useState([]);
  const courseId = JSON.parse(localStorage.getItem("selectedCourseId"));
  useEffect(()=>{
    fetch("https://learnen-react.onrender.com/api/getParticipants",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({courseId}),
    })
    .then((res)=>res.json())
    .then((data)=>{setParticipants(data)});
  },[])
  return (
    <div className="cr-assignments-main">
      <h1>Participants</h1>
      <hr/>
      <div className="cr-Participants-item">
        <div className="cr-Participants-item-heading">
        </div>
        <div className="cr-Participants-assigned-list-items-wrapper">
          {participants.map((participant, index) => (
            <div className="cr-assignment-assigned-item" key={participant._id}>
              <div className="cr-assignment-assigned-item-content">
                <div className="cr-Participants-new-left">
                  <div>
                    <div className="cr-Participants-new-left-name">
                      {participant.userName}
                    </div>
                  </div>
                </div>
                <div className="cr-Participants-new-right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
