import {useState} from 'react'
import "../styles/adminCoursesNav.css";
import AdminCourseCard from "./adminCourseCard";
import CardImg from '../assets/Software code testing.png'

export default function AdminCoursesNav() {
  const courseData = [
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    },
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    },
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    },
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    },
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    },
    {
      cardimg : CardImg,
      title : "Full-Stack-Development",
      mentor : "Dr.Karthick Surthadar",
      stars : 4,
      users : 400,
      reports : 20
    }
  ]

  const itemsPerPage = 12;
  const totalPages = Math.ceil(courseData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <h2>Reports</h2>
            <h2>Relevance</h2>
            <h2>User Count</h2>
          </div>
        </div>
        <div className="admin-courses-cards-wrapper">
          {courseData.map((card)=>(
            <AdminCourseCard key={card.index} cardData={card}/>
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
