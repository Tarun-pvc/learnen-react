import React from "react";
import { useDispatch } from "react-redux";

import course from "../assets/course.png";

import "../styles/StudentDashboard.css";

import star from "../assets/star.png";
import cart from "../assets/cart.png";
import buy from "../assets/buy.png";
import duration from "../assets/duration.png";
import { addToList } from "../../../features/wishListSlice";
import { useNavigate } from "react-router-dom";

export default function CourseCard(cardData) {
  console.log(cardData)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddCart = (title) => {
    console.log("Add to cart clicked");
    dispatch(addToList({ id: 1, name: title }));
  };
  
  return (
    <div className="course-card-wrapper">
      <div className="course-card-image">
        <img src={course} alt="Image" />
      </div>
      <div className="course-card-details">
        <h2>{cardData.cardData.title}</h2>
        <div className="course-card-pricing-duration">
          <div className="course-card-price">
            <h3>Price: <span>{cardData.cardData.price}$</span></h3>
          </div>
          <div className="course-card-duration">
            <h3>Duration: <span>{cardData.cardData.duration}</span></h3>
          </div>
        </div>
        <div className="course-card-rating-buttons">
          <div className="course-card-rating">
            <img className="course-star-icon" src={star} alt="" />
            <p>{cardData.cardData.stars}</p>
          </div>
          <div className="course-card-buttons-wrapper">
            <img
              className="course-cart-icon"
              src={cart}
              alt=""
              onClick={()=>handleAddCart(cardData.cardData.title)}
            />
            <img className="course-buy-icon" src={buy} alt="" onClick={()=>{
              navigate('/courseCheckOut')
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
