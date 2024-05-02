import React, { useState } from "react";

import SearchBar from "./SearchBar";
import CourseCard from "./CourseCard";

import "../styles/StudentDashboard.css";
import axios from "axios";

export default function Explore() {
  const [explorecourses,setExplorecourses] = useState([]);
  fetch("https://learnen-react.onrender.com/api/explorecourses")
  .then((res)=>res.json())
  .then((data)=>{
    setExplorecourses(data.courses)
    console.log(explorecourses)
  })
  .catch((err)=>{
    console.log(err)
  }
  )

  return (
    <div className="sd-explore-main-wrapper">
      {/* <SearchBar /> <br />  */}
      <div className="sd-explore-heading">
        <h3  className="sd-explore-heading1">Most Popular</h3>
      </div>
      <div className="explore-cards-wrapper">
        {explorecourses.map((card , index)=>(
          <CourseCard cardData={card} key={index}/>
        ))}
      </div>
    </div>
  );
}