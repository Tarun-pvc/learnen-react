import React, { useState, useEffect } from "react";
import "../styles/adminUsers.css";
import AdminUsersCard from "./adminUsersCard";

export default function AdminUsers() {
  const [sortType, setSortType] = useState("default");
  const [userType, setUserType] = useState("Mentor");
  const [users, setUsers] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/getUsers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        const mentorList = data.filter((item) => item.Position === "mentor");
        const studentList = data.filter((item) => item.Position === "student");
        setMentors(mentorList);
        setStudents(studentList);
      });
  }, []);

  useEffect(() => {
    const filteredMentors = mentors.filter((mentor) =>
      mentor.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredStudents = students.filter((student) =>
      student.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMentors(filteredMentors);
    setStudents(filteredStudents);
  }, [searchQuery]);

  function handleClick(item) {
    setUserType(item);
  }

  const itemElements = userType === "Mentor" ? mentors : students;

  return (
    <div className="admin-users-nav-wrapper">
      <div className="users-nav-navbar">
        <h2
          onClick={() => handleClick("Mentor")}
          className={userType === "Mentor" ? "active-role" : ""}
        >
          Mentors
        </h2>
        <h2
          onClick={() => handleClick("Student")}
          className={userType === "Student" ? "active-role" : ""}
        >
          Students
        </h2>
      </div>
      <div className="admin-users-main-wrapper">
        <div className="admin-users-search-wrapper">
          <input
            placeholder="Search.."
            id="admin-users-search-input"
            className="admin-users-search-input"
            name="text"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="admin-users-list12">
          {itemElements.map((item, index) => (
            <AdminUsersCard key={index} user={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
