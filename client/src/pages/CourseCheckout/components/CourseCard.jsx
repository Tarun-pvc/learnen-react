import React , {useState} from "react";

import cart from "../assets/cart.png";
import buy from "../assets/buy.png";
import duration from "../assets/duration.png";
import course from "../assets/course.png";
import star from "../assets/star.png";
import axios from "axios"

export default function CourseCard() {
  const [buying, setBuying] = useState(false); 
  const user = JSON.parse(localStorage.getItem("loginuser"));
  

  const handleBuyCourse = async () => {
    try {
      const response = await axios.post("/buycourse", {
        roomId: "YOUR_ROOM_ID",
        userId: "YOUR_USER_ID",
      });
      
      console.log(response.data.message); 
      initPayment(response.data);
    } catch (error) {
      console.error("Error buying course:", error);
    }
  };

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_Gj1HHlsQFVyVat",
			amount: data.amount,
			currency: data.currency,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
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
            <img className="buy" src={buy} alt="Buy"
            onClick={() => {
              setBuying(true); 
              handleBuyCourse();
            }}/>
            
          </div>
        </div>
      </div>
      <div className="course-image">
        <img src={course} alt="Course Image" />
      </div>
    </div>
  );
}
