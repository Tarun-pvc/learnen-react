
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/adminCourseCard.css';
import { faStar, faUser, faBug, faTrash, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function AdminCourseCard(props) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  };
  
  const maxLength = 12;
  console.log(props)

  return (
    <div className="admin-course-card-wrapper">
      <div className="admin-course-card-img-wrapper">
        <img src={props.cardData.cardimg} alt='course-preview'/>
      </div> 
      <div className="admin-course-card-details-wrapper">
        <p className='admin-course-mentor'>{props.cardData.mentor}</p>
        <h2 className='admin-course-title'>{truncateText(props.cardData.title,maxLength)}</h2>
        <div className="admin-course-count-details">
          <div className="admin-course-stars-wrapper">
            <FontAwesomeIcon icon={faStar} color='#f7d74d' />
            <p>{props.cardData.stars}</p>
          </div>
          <div className="admin-course-users-wrapper">
            <FontAwesomeIcon icon={faUser} />
            <p>{props.cardData.users}</p>
          </div>
          <div className="admin-course-reports-wrapper">
            <FontAwesomeIcon icon={faBug} />
            <p>{props.cardData.reports}</p>
          </div>
        </div>
        <div className="admin-course-card-buttons-wrapper">
          <button className='admin-course-delete-button'>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          <button className='admin-course-flag-button'>
            <FontAwesomeIcon icon={faFlag} /> Flag
          </button>
        </div>
      </div>
    </div>
  );
}
