import React from "react";

import welcome from "../assets/welcome.png";
import courses from "../assets/courses.png";
import { useDispatch , useSelector } from "react-redux";

import MySchedule from "./MySchedule";

export default function SdMiddle() {
  const user = useSelector((state) => state.wishList.user);
  console.log(user)
  return (
    <div className="sd-Middle-wrapper">
      <div className="sd-StudentWelcome-wrapper">
        <div className="sd-StudentWelcome-wrapper-left">
          <div>
            <div className="sd-StudentWelcome-wrapper-left-h1">
              Welcome back, {user.userName}
            </div>
            <p className="sd-StudentWelcome-wrapper-left-p">
              Welcome to your dashboard! Explore, learn, and stay organized as
              you embark on your educational journey.
            </p>
          </div>
        </div>
        <div className="sd-StudentWelcome-wrapper-img">
          <img src={welcome} className="sd-sidebar-StudentWelcome-icon1" />
        </div>
      </div>
      <div className="sd-CourseAnalytics-wrapper">
        <div className="sd-CourseAnalyticsHead-wrapper">Course Analytics</div>
        <div>
          <div className="sd-CourseAnalyticsHead-wrapper-left">
            Number of Active Courses : <b>5</b>
          </div>
          <div className="sd-CourseAnalyticsHead-wrapper-right">
            Number of Assignment Pending : <b>3</b>
          </div>
        </div>
        <div className="sd-CourseAnalytics-piechart">
          <img src={courses} alt="Courses" />
        </div>
      </div>
      <div className="sd-Middle-Schedule-wrapper">
        <div className="sd-Middle-ScheduleHead">My Schedule</div>
        <div className="sd-Middle-ScheduleHead-new">
          <MySchedule></MySchedule>
          <MySchedule></MySchedule>
        </div>
      </div>
    </div>
  );
}
