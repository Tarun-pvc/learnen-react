import React, { useEffect, useState } from "react";
import "../styles/adminCoursesNav.css";
import AdminCourseCard from "./adminCourseCard";
import axios from "axios";

export default function AdminCoursesNav() {
  const [roomData, setRoomData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      fetch("https://learnen-react.onrender.com/api/explorecourses")
        .then((res) => res.json())
        .then((data) => {
          setRoomData(data.courses);
          console.log(data.courses);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Filter roomData based on search query
  const filteredRoomData = roomData.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-courses-nav-wrapper">
      <div className="courses-nav-navbar">
        <h2>All Courses</h2>
        <h2>Flagged</h2>
      </div>
      <div className="admin-courses-main-wrapper">
        <div className="admin-courses-search-wrapper">
          <input
            placeholder="Search.."
            id="admin-course-search-input"
            className="admin-course-search-input"
            name="text"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="admin-courses-cards-wrapper">
          {filteredRoomData.map((card) => (
            <AdminCourseCard key={card.index} cardData={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
