import React, { useState, useEffect } from "react";
import MyDocument from "./MyDocument";
import SdRightBar from "./SdRightBar";
import "../styles/StudentDashboard.css";

export default function Document() {
  const [resources, setResources] = useState([]);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  useEffect(() => {
    if (user) {
      fetch("http://localhost:3000/api/getresourcesJoined", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          joinedRooms: user.Joined_Room,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("backendSchedules",data.resources)
          setResources(data.resources);
        })
        .catch((err) => {
          console.error("Error fetching schedules:", err);
        });
    }
  }, []);
  
  return (
    <div className="sd-Document-main-wrapper">
      <div className="sd-Middle-Document-wrapper">
        <h1>Documents</h1>
        <hr />
        {resources.map((resource, index) => (
          <div key={index}>
            <div className="sd-Middle-DocumentHead">{resource.category}</div>
            <div className="sd-Middle-DocumentHead-new">
              <MyDocument
                key={resource._id}
                title={resource.title}
                description={resource.description}
                link={resource.link}
              />
            </div>
          </div>
        ))}
      </div>
      <SdRightBar />
    </div>
  );
}
