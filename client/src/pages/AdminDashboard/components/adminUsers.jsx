// import React from 'react'
import {useState} from 'react'
import '../styles/adminUsers.css'
import AdminUsersCard from './adminUsersCard'

export default function AdminUsers() {
  const [sortType,setSortType] = useState("default")
  const [userType, setUserType] = useState("Mentor")

  function handleClick(item){
    setUserType(item);
  }

  const Mentors = [
    {
      role: 'mentor',
      name: 'smith'
    },
    {
      role: 'mentor',
      name: 'Shekh'
    },
    {
      role: 'mentor',
      name: 'Paul'
    },
    {
      role: 'mentor',
      name: 'Lilith'
    },
    {
      role: 'mentor',
      name: 'Jasmin'
    },
    {
      role: 'mentor',
      name: 'Kartein'
    },
  ]

  const Students = [
    {
      role: 'student',
      name: 'Nithin'
    },
    {
      role: 'student',
      name: 'Jathin'
    },
    {
      role: 'student',
      name: 'Kamal'
    },
    {
      role: 'student',
      name: 'Nikhil'
    },
    {
      role: 'student',
      name: 'Kapil'
    },
    {
      role: 'student',
      name: 'Deepak'
    }
  ]

  let itemElements;

  if (userType === 'mentor'){
    itemElements = Mentors.map((item, index) => (
      <AdminUsersCard user = {item}/>
    ));
  }
  else{
    itemElements = Students.map((item, index) => (
      <AdminUsersCard user = {item}/>
    ));
  }

  return (
    <div className="admin-users-nav-wrapper">
      <div className="users-nav-navbar">
        <h2 onClick={()=>handleClick('mentor')} className={userType==='mentor' ? 'active-role' : ''}>Mentors</h2>
        <h2 onClick = {()=>handleClick('student')} className = {userType==='student' ? 'active-role':''}>Students</h2>
      </div>
      <div className="admin-users-main-wrapper">
        <div className="admin-users-search-wrapper">
          <input
            placeholder="Search.."
            id="admin-users-search-input"
            className="admin-users-search-input"
            name="text"
            type="text"
          />
        </div>
        <div className="admin-users-sort-wrapper">
          <h2>Sort By:</h2>
          <div className="admin-users-sort-list">
            <h2>Relevance</h2>
            <h2>Reports</h2>
            <h2>Room Count</h2>
          </div>
        </div>

        {itemElements}
        
        
      </div>

      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
