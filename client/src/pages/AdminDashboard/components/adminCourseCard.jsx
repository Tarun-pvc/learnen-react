import React, {useState,useEffect } from 'react';
import '../styles/adminCourseCard.css';
import { faStar, faUser, faBug, faTrash, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImg from "../assets/college project-rafiki.png"

export default function AdminCourseCard(props) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  };

  const [mentor,setMentor]=useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/getUserName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: props.cardData.mentor.user,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      setMentor(data);
    })
    .catch((error) => {
      console.error("Error fetching user name:", error);
    });
  }, [props.cardData.mentor.user]);

  function delteCourse() {
    console.log(props.cardData._id);
    fetch("http://localhost:3000/api/deleteCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomid: props.cardData._id,
      }),
    });
  }
  
  
  const maxLength = 120;
  return (
    <div className="admin-course-card-wrapper">
      <div className="admin-course-card-img-wrapper">
        <img  src={cardImg} alt='course-preview'/>
      </div> 
      <div className="admin-course-card-details-wrapper">
        <h2 className='admin-course-title'>{truncateText(props.cardData.title,maxLength)}</h2>
        <p className='admin-course-mentor'>{mentor}</p>
        <div className="admin-course-count-details">
          <div className="admin-course-stars-wrapper">
            <FontAwesomeIcon icon={faStar} color='#f7d74d' />
            <p>{props.cardData.stars}</p>
          </div>
          <div className="admin-course-users-wrapper">
            <FontAwesomeIcon icon={faUser} />
            <p>{props.cardData.participants.length}</p>
          </div>
          <div className="admin-course-reports-wrapper">
            <FontAwesomeIcon icon={faBug} />
            <p>{props.cardData.reports.length}</p>
          </div>
        </div>
        <div className="admin-course-card-buttons-wrapper">
          <button className='admin-course-delete-button' onClick={delteCourse}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          {/* <button className='admin-course-flag-button'>
            <FontAwesomeIcon icon={faFlag} /> Flag
          </button> */}
        </div>
      </div>
    </div>
  );
}
