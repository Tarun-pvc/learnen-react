import React from "react";

import CourseCard from "./components/CourseCard";
import Description from "./components/Description";

import "./styles/CourseCheckout.css";

import rocket from "./assets/rocket.png";

export default function CourseCheckout() {
  return (
    <div className="checkout-wrapper">
      <div className="checkout-main-wrapper">
        <CourseCard/>
        <Description />
      </div>
    </div>
  );
}
