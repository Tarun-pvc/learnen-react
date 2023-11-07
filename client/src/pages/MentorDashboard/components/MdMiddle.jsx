import React from "react";
import NewSchedule from "./NewSchedule";

function MdMiddle() {
  return (
    <div className="md-Middle-wrapper">
      <div className="md-MentorWelcome-wrapper">
        <div className="md-MentorWelcome-wrapper-left">
          <div>
            <div className="md-MentorWelcome-wrapper-left-h1">
              Welcome back, Mentor
            </div>
            <p className="md-MentorWelcome-wrapper-left-p">
              Your hub for Academic Excellence and Classroom Management!
            </p>
          </div>
        </div>
        <div className="md-MentorWelcome-wrapper-img">
          <img
            src="./images/Screenshot_2023-11-06_113903-removebg-preview.png"
            className="md-sidebar-MentorWelcome-icon1"
          />
        </div>
      </div>
      <div className="md-CourseAnalytics-wrapper">
        <div className="md-CourseAnalyticsHead-wrapper">Course Analytics</div>
        <div>
          <div className="md-CourseAnalyticsHead-wrapper-left">
            Number of Courses : <b>50</b>
          </div>
          <div className="md-CourseAnalyticsHead-wrapper-right">
            Number of Students : <b> 3740</b>
          </div>
        </div>
      </div>
      <div className="md-Middle-Schedule-wrapper">
        <div className="md-Middle-ScheduleHead">My Schedule</div>
        <div  className="md-Middle-ScheduleHead-new">
          <NewSchedule></NewSchedule>
          <NewSchedule></NewSchedule>
          <NewSchedule></NewSchedule>
          <NewSchedule></NewSchedule>
          <NewSchedule></NewSchedule>
        </div>
      </div>
    </div>
  );
}
export default MdMiddle;
