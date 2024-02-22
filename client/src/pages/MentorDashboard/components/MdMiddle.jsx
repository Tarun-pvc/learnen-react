import React from "react";
import NewSchedule from "./NewSchedule";
import Welcome from "../assets/Screenshot_2023-11-06_113903-removebg-preview.png";
import { useSelector } from "react-redux";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Python', value: 400 },
  { name: 'Java', value: 300 },
  { name: 'DBMS', value: 200 },
  { name: 'DevOps', value: 500 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; 


function MdMiddle() {
  const user = useSelector((state) => state.wishList.user);
  return (
    <div className="md-Middle-wrapper">
      <div className="md-MentorWelcome-wrapper">
        <div className="md-MentorWelcome-wrapper-left">
          <div>
            <div className="md-MentorWelcome-wrapper-left-h1">
              Welcome back, {user.userName}
            </div>
            <p className="md-MentorWelcome-wrapper-left-p">
              Your hub for Academic Excellence and Classroom Management!
            </p>
          </div>
        </div>
        <div className="md-MentorWelcome-wrapper-img">
          <img
            src={Welcome}
            className="md-sidebar-MentorWelcome-icon1"
          />
        </div>
      </div>
      <div className="md-CourseAnalytics-wrapper">
        <div>
        <div className="md-CourseAnalyticsHead-wrapper">Course Analytics</div>
        <div>
          <div className="md-CourseAnalyticsHead-wrapper-left">
            Number of Courses : <b>50</b>
          </div>
          <div className="md-CourseAnalyticsHead-wrapper-right">
            Number of Students : <b> 3740</b>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
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
