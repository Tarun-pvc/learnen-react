import React, { useState } from "react";

import SearchBar from "./SearchBar";
import CourseCard from "./CourseCard";

import "../styles/StudentDashboard.css";
import axios from "axios";

export default function Explore() {
  const [explorecourses,setExplorecourses] = useState([]);
  fetch("http://localhost:3000/api/explorecourses")
  .then((res)=>res.json())
  .then((data)=>{
    setExplorecourses(data.courses)
  })
  .catch((err)=>{
    console.log(err)
  }
  )

  const cardData = [
    {
      title:"Python",
      img : "",
      price : "900",
      duration : "6 months",
      stars : "4.5"
    },
    {
      title:"Java",
      img : "",
      price : "999",
      duration : "6 months",
      stars : "4.8"
    },
    {
      title:"ReactJS",
      img : "",
      price : "449",
      duration : "6 months",
      stars : "3.5"
    },
    {
      title:"MongoDB",
      img : "",
      price : "500",
      duration : "6 months",
      stars : "4"
    }
  ]
  return (
    <div className="sd-explore-main-wrapper">
      <SearchBar /> <br /> <br /> <br />
      <div className="sd-explore-heading">
        <h3>Most Popular</h3>
      </div>
      <div className="explore-cards-wrapper">
        {explorecourses.map((card , index)=>(
          <CourseCard cardData={card} key={index}/>
        ))}
      </div>
    </div>
  );
}