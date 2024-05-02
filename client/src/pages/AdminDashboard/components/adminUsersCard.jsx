// UserCard.js
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChalkboardUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/adminUsersCard.css";
import cardImg from "../assets/delete.png";

const AdminUsersCard = (props) => {
  const role = props.user.Position;

  function delteUser() {
    // console.log(props.user._id);
    fetch("https://learnen-react.onrender.com/api/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: props.user._id,
      }),
    });
  }
  return (
    <div className={role}>
      <div className="user-card">
        <div className="user-icon">
          {role === "mentor" ? (
            <FontAwesomeIcon className="card_icon" icon={faChalkboardUser} />
          ) : (
            <FontAwesomeIcon className="card_icon" icon={faUser} />
          )}
        </div>
        <div className="user-info">
          <p className="user-name">{props.user.userName}</p>
        </div>
        <div className="menu-icon" onClick={delteUser}>
          <img className="user-delete" src={cardImg} alt="course-preview" />
        </div>
      </div>
    </div>
  );
};

export default AdminUsersCard;
