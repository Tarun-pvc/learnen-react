import {
  faChalkboardUser,
  faSchool,
  faBug,
  faCircleExclamation,
  faTasks,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function AdminGeneral() {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [reports1, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getUsers")
      .then((res) => res.json())
      .then((data) => {
        const mentorList = data.filter((item) => item.Position === "mentor");
        const studentList = data.filter((item) => item.Position === "student");
        setMentors(mentorList);
        setStudents(studentList);
      });
    fetch("http://localhost:3000/api/Reports")
      .then((res) => res.json())
      .then((data) => {
        setReports(data.reports);
        console.log(data.reports);
      });
    fetch("http://localhost:3000/api/explorecourses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.courses);
        setRoomData(data.courses);
      });
  }, []);

  const topRooms = roomData
    .map((room) => ({
      ...room,
      reports: room.reports.length,
    }))
    .filter((room) => room.reports > 0) 
    .sort((a, b) => b.reports - a.reports)
    .slice(0, 4);

  const data1 = topRooms.map((room) => ({
    name: room.title,
    value: room.reports,
  }));

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 style={{ color: "#112D4E" }}>ADMIN DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card" id="mentor-card">
          <div className="card-inner">
            <h3>Mentors</h3>
            <FontAwesomeIcon className="card_icon" icon={faChalkboardUser} />
          </div>
          <h1>{mentors.length}</h1>
        </div>
        <div className="card" id="student-card">
          <div className="card-inner">
            <h3>Students</h3>
            <FontAwesomeIcon className="card_icon" icon={faSchool} />
          </div>
          <h1>{students.length}</h1>
        </div>
        <div className="card" id="user-reports-card">
          <div className="card-inner">
            <h3>Course Rooms</h3>
            <FontAwesomeIcon className="card_icon" icon={faBuilding} />
          </div>
          <h1>{roomData.length}</h1>
        </div>
        <div className="card" id="bug-reports-card">
          <div className="card-inner">
            <h3>Reports</h3>
            <FontAwesomeIcon className="card_icon" icon={faBug} />
          </div>
          <h1>{reports1.length}</h1>
        </div>
      </div>
      <div className="main-title">
        <h3 style={{ color: "#112D4E",fontSize:"1.5rem" }}>Reports</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </main>
  );
}

export default AdminGeneral;