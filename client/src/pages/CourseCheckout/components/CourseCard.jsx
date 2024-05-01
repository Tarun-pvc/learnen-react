import React, { useState } from "react";

import cart from "../assets/cart.png";
import buy from "../assets/buy.png";
import duration from "../assets/duration.png";
import course from "../assets/course.png";
import star from "../assets/star.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"; 

export default function CourseCard() {
  const [buying, setBuying] = useState(false);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const room = JSON.parse(localStorage.getItem("courseCheckout"));

  console.log("coursecheckout", room.cardData);
  console.log("user", user);
  const navigate = useNavigate();

  const handleBuyCourse = async () => {
    try {
      await axios
        .post("http://localhost:3000/api/buycourse", {
          roomId: room.cardData._id,
          userId: user._id,
        })
        .then((result) => {
          console.log("Result", result);
          // toast.success("Course bought successfully!");

        });
    } catch (error) {
      console.error("Error buying course:", error);
    }
  };

  const handlePayment = async () => {
    try {
      console.log("Trying to initiate payment...");
      const orderUrl = "http://localhost:3000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: room.cardData.price});
      console.log("Initiating payment...");
      initPayment(data.data);
      console.log("Payment initiated...");
      handleBuyCourse();
      console.log("Course bought successfully!");

    } catch (error) {
      console.error("Error in handlePayment:", error);
    }
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_hcluKtADsGp5AS",
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          toast.success("Payment successful!");
          setTimeout(() => {
            navigate("/studentDashboard")
          }, 3000);
          
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="course-card-horizontal">
      <div className="course-details">
        <h2 className="course-title">{room.cardData.title}</h2>
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
            <p>{room.cardData.price} INR</p>
          </div>
          <div className="action-icons">
            <img className="cart" src={cart} alt="Add to Cart" />
            <img
              className="buy"
              src={buy}
              alt="Buy"
              onClick={() => {
                setBuying(true);
                handlePayment();
              }}
            />
          </div>
        </div>
      </div>
      <div className="course-image">
        <img src={course} alt="Course Image" />
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
