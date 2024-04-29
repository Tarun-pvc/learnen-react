import React, {useState,useEffect } from "react";
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
  const [schedules, setSchedules] = useState([]);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const [data1,setData]=useState([]);
  const [total,setTotal]=useState(0);
  useEffect(() => {
    if (user) {
      fetch("http://localhost:3000/api/getSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          joinedRooms: user.Joined_Room,
          createdRooms: user.Created_Room,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("backendSchedules",data.schedules)
          // console.log("backend",data.students)
          setSchedules(data.schedules);
          setData(data.students)
          setTotal(data.total)
        })
        .catch((err) => {
          console.error("Error fetching schedules:", err);
        });
    }
  }, []);
  
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
            Number of Courses : <b>{user.Created_Room.length}</b>
          </div>
          <div className="md-CourseAnalyticsHead-wrapper-right">
            Number of Students : <b> {total}</b>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={230}>
        <PieChart>
          <Pie
            data={data1}
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
        {schedules.map((schedule) => (
            <NewSchedule
            key={schedule._id}
            className="schedule-item"
            title={schedule.title}
            time={schedule.time}
            link={schedule.link}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MdMiddle;
