import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/courseRoomParticipants.css'

export default function CourseRoomParticipants(props) {
  const [course, setCourse] = useState();
  return (
    <div className="cr-assignments-main">
      <h1>Participants</h1>
      <hr/>
      <div className="cr-Participants-item">
        <div className="cr-Participants-item-heading">
        </div>
        <div className="cr-Participants-assigned-list-items-wrapper">
          {props.course.participants.map((participant, index) => (
            <div className="cr-assignment-assigned-item" key={index}>
              <div className="cr-assignment-assigned-item-content">
                <div className="cr-Participants-new-left">
                  <div>
                    <div className="cr-Participants-new-left-name">
                      {participant.name}
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
