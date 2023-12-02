import React from "react";
import CourseCard from "./CourseCard";

function MentorCourses() {
  return (
    <>
      <div className="MentorCourses-wrapper">
        <p className="MentorCourses-header">Courses</p>
        <div className="MentorCourses">
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
        </div>
      </div>
    </>
  );
}

export default MentorCourses;
