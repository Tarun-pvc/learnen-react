import { useEffect, useState } from "react";
import "../styles/adminCoursesNav.css";
import AdminCourseCard from "./adminCourseCard";
import axios from 'axios'

export default function AdminCoursesNav() {
  const [roomData, setRoomData] = useState([]);
  const CardImg = "images/Software code testing.png" 
  const courseData = [
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 300,
      reports: 18,
    },
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 400,
      reports: 16,
    },
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 500,
      reports: 12,
    },
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 600,
      reports: 20,
    },
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 700,
      reports: 23,
    },
    {
      cardimg: CardImg,
      title: "Full-Stack-Development",
      mentor: "Dr.Karthick Surthadar",
      stars: 4,
      users: 800,
      reports: 10,
    },
  ];

  // const itemsPerPage = 12;
  // const totalPages = Math.ceil(courseData.length / itemsPerPage);
  // const [currentPage, setCurrentPage] = useState(1);

  // const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  //   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  //   return (
  //     <div className="pagination">
  //       {pageNumbers.map((number) => (
  //         <button
  //           key={number}
  //           onClick={() => onPageChange(number)}
  //           className={number === currentPage ? "active" : ""}
  //         >
  //           {number}
  //         </button>
  //       ))}
  //     </div>
  //   );
  // };

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/api/adminRooms");
  //       console.log(response.data.Rooms)
  //       setRoomData(response.data.Rooms)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };

  //   fetchData();
  // }, []); 

  const [sortType, setSortType] = useState("default");

  const sortedList = [...courseData].sort((a, b) => {
    if (sortType === "reports") return a.reports - b.reports;
    if (sortType === "users") return a.users - b.users;
    return 0;
  });

  return (
    <div className="admin-courses-nav-wrapper">
      <div className="courses-nav-navbar">
        <h2>All Courses</h2>
        <h2>Flagged</h2>
      </div>
      <div className="admin-courses-main-wrapper">
        <div className="admin-courses-search-wrapper">
          <input
            placeholder="Search.."
            id="admin-course-search-input"
            className="admin-course-search-input"
            name="text"
            type="text"
          />
        </div>
        <div className="admin-courses-sort-wrapper">
          <h2>Sort By:</h2>
          <div className="admin-courses-sort-list">
            <h2 onClick={() => setSortType("default")}>Relevance</h2>
            <h2 onClick={() => setSortType("reports")}>Reports</h2>
            <h2 onClick={() => setSortType("users")}>User Count</h2>
          </div>
        </div>
        <div className="admin-courses-cards-wrapper">
          {sortedList.map((card) => (
            <AdminCourseCard key={card.index} cardData={card} />
          ))}
        </div>
      </div>

      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
