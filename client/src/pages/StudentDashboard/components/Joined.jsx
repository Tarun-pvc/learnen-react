import React from "react";
import JoinedCourseCard from "../components/JoinedCourseCard";
import SdRightBar from "./SdRightBar";

export default function Joined() {
  return (
    <>
    <div className="MentorCourses-wrapper">
      <p className="MentorCourses-header">Courses</p>
      <div className="MentorCourses">
        <JoinedCourseCard />
        <JoinedCourseCard />
        <JoinedCourseCard />
        <JoinedCourseCard />
      </div>
    </div>
    <SdRightBar/>
    </>
  );
}