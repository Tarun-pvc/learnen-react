import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/wishListSlice";


import "./styles/StudentDashboard.css";

import SdSideBar from "./components/SdSideBar";
import General from "./components/General";
import Assignment from "./components/Assignment";
import Explore from "./components/Explore";
import Document from "./components/Document";
import UpdateMP from "./components/UpdateMP";
import Joined from "./components/Joined";

export default function StudentDashboard() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const dispatch = useDispatch();
  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <General />;
      case "Explore":
        return <Explore />;
      case "Assignment":
        return <Assignment />;
      case "Document":
        return <Document />;
      case "UpdateProfile":
        return <UpdateMP/>
      case "Joined":
        return <Joined/>
      default:
        return <General />;
    }
  };

  fetch("http://localhost:3000/api/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(addUser(data));
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="student-dashboard-main">
      <div className="admin-sidebar">
        <SdSideBar onMenuItemClick={(item) => setSelectedItem(item)} />
      </div>
      <div className="student-dashboard-wrapper">
        {renderSelectedComponent()}
      </div>
    </div>
  );
}
