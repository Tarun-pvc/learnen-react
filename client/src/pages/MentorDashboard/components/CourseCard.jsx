import React from "react";
import RatingComponent from "./RatingComponent"; 

import img1 from "../assets/college project-pana.png"
import img2 from "../assets/college project-amico.png"
import img3 from "../assets/college project-bro.png"
import img4 from "../assets/college project-rafiki.png"
import {useNavigate} from "react-router-dom"

function CourseCard(course) {
    const staticRating = 3; 
    const navigate = useNavigate();
  
    return (
      <>
        <div className="CourseCard-wrapper" onClick={()=>{
          navigate('/courseRoom')
        }}>
          <div className="CourseCard-content">
            <p className="CourseCard-content-course">{course.courseName}</p>
            <p className="CourseCard-content-mentor">Mentor: {course.mentorName}</p>
            <p className="CourseCard-content-skills">Skills: Html,css,bootstarp,javascript</p>
            <p className="CourseCard-content-duration">Duration: {course.duration}</p>
            <RatingComponent className="CourseCard-rating" staticRating={5-course.rating} />
          </div>
          <div className="CourseCard-image">
            <img className="CourseCard-img" src={img3} alt="Course" />
          </div>
        </div>
      </>
    );
  }
  
  export default CourseCard;
