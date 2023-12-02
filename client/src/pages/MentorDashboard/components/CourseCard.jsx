import React from "react";
import RatingComponent from "./RatingComponent"; 

import img1 from "../assets/college project-pana.png"
import img2 from "../assets/college project-amico.png"
import img3 from "../assets/college project-bro.png"
import img4 from "../assets/college project-rafiki.png"

function CourseCard() {
    const staticRating = 3; 
  
    return (
      <>
        <div className="CourseCard-wrapper">
          <div className="CourseCard-content">
            <p className="CourseCard-content-course">Google project Management</p>
            <p className="CourseCard-content-mentor">Mentor: Chandra Sai Teja</p>
            <p className="CourseCard-content-skills">Skills: Html,css,bootstarp,javascript</p>
            <p className="CourseCard-content-duration">Duration: 47hrs</p>
            <RatingComponent className="CourseCard-rating" staticRating={5-staticRating} />
          </div>
          <div className="CourseCard-image">
            <img className="CourseCard-img" src={img3} alt="Course" />
          </div>
        </div>
      </>
    );
  }
  
  export default CourseCard;
