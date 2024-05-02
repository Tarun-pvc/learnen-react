import React, { useState, useEffect } from "react";
import "../styles/adminReports.css";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReportComponent = (props) => {
  return (
    <div className="report">
      <span className="sender">{props.report.userName}:</span>
      <span className="subject">{props.report.title}</span>
      <p className="preview">{props.report.description}</p>
    </div>
  );
};

const AdminReports = () => {
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://learnen-react.onrender.com/api/Reports")
      .then((res) => res.json())
      .then((data) => {
        setReports(data.reports);
      });
  }, []);

  // Filter reports based on search query
  const filteredReports = reports.filter((report) =>
    report.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-reports-wrapper">
      <header className="reports-header">
        <FontAwesomeIcon className="reports-icon" icon={faSkullCrossbones} />
        <input
          className="search-bar"
          type="text"
          placeholder="Search Reports by Username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <main className="reports">
        {filteredReports.map((item, index) => (
          <ReportComponent key={index} report={item} />
        ))}
      </main>
    </div>
  );
};

export default AdminReports;
