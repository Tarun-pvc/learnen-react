import React from "react";

import cart from "../assets/cart.png";
import buy from "../assets/buy.png";
import duration from "../assets/duration.png";
import course from "../assets/course.png";
import star from "../assets/star.png";

export default function CourseCard() {

  return (
    
    <div className="course-card-horizontal">
      <div className="course-details">
        <h2 className="course-title">Google Project Management</h2>
        <p className="mentor-name">Mentor: John Doe</p>
        <div className="checkout-course-description">
          <p>
            Master the art of efficient project management with Google's Project
            Management course, designed to enhance your skills, boost
            collaboration, and lead successful projects using Google's
            innovative tools and methodologies.
          </p>
        </div>
        <div className="course-details-wrapper">
          <div className="checkout-rating">
            <img className="star-icon" src={star} alt="" />
            <p className="star-icon-p">4.5</p>
          </div>
          <div className="duration">
            <img className="duration-icon" src={duration} alt="" />
            <p className="duration6">6 Months</p>
          </div>
          <div className="price">
            <p>$99.99</p>
          </div>
          <div className="action-icons">
            <img className="cart" src={cart} alt="Add to Cart" />
            <img className="buy" src={buy} alt="Buy"/>
          </div>
        </div>
      </div>
      <div className="course-image">
        <img src={course} alt="Course Image" />
      </div>
    </div>
  );
}
