import React from "react";
import JoinedCourseCard from "../components/JoinedCourseCard";
import SdRightBar from "./SdRightBar";
import { useState, useEffect } from "react";

export default function Joined() {
  const [courses,setCourses] = useState([]);
  const user = JSON.parse(localStorage.getItem("loginUser"));

  const getCreatedCourses = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getjoinedcourses/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user._id }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch created courses');
        }

        const data = await response.json();
        console.log(data)
        return data.courses;
    } catch (error) {
        console.error(error);
    }
};
  
useEffect(() => {
  const fetchCourses = async () => {
    const coursesData = await getCreatedCourses();
    setCourses(coursesData);
  };

  fetchCourses();
}, [user._id]);
  return (
    <>
    <div className="MentorCourses-wrapper">
      <p className="MentorCourses-header">Courses</p>
      <div className="MentorCourses">
      {courses.map((course) => (
            <JoinedCourseCard
              key={course._id}
              courseId={course._id}
              courseName={course.title}
              mentorName={user.userName}
              skills={course.skills}
              duration="60"
              rating={course.rating}
            />
          ))}
        {/* <JoinedCourseCard />
        <JoinedCourseCard />
        <JoinedCourseCard />
        <JoinedCourseCard /> */}
      </div>
    </div>
    <SdRightBar/>
    </>
  );
}