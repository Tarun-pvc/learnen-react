import React from "react";
import RatingComponent from "./RatingComponent";

import img3 from "../assets/college project-bro.png";
import { useNavigate } from "react-router-dom";

function JoinedCourseCard(props) {
  const staticRating = 3;
  const navigate = useNavigate();

  return (
    <>
      <div className="CourseCard-wrapper" onClick={()=>{
        navigate('/courseRoom')
      }}>

        <div className="CourseCard-content">
          <p className="CourseCard-content-course">{props.courseName}</p>
          <p className="CourseCard-content-mentor">Mentor: Dr.Benjamin</p>
          <p className="CourseCard-content-skills">
            Skills: Html,css,bootstarp,javascript
          </p>
          <p className="CourseCard-content-duration">Duration: 47hrs</p>
          <RatingComponent
            className="CourseCard-rating"
            staticRating={5 - props.rating}
          />
        </div>
        <div className="CourseCard-image">
          <img className="CourseCard-img" src={img3} alt="Course" />
        </div>
      </div>
    </>
  );
}

export default JoinedCourseCard;