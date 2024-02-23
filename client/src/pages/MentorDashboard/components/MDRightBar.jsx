import React from "react";
import logOut from "../assets/logout.png";
import notification from "../assets/notification.png";
import { Link } from "react-router-dom";
import ToDo from "./ToDo";
import Calender from "./Calender";
import { useSelector } from "react-redux";
function MDRightBar() {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <>
    <div className="md-right-wrapper">
        <div className="md-right-signout-wrapper">
            <div className="md-right-signout-center">
                <div className="md-right-signout-circle1"><Link to=""><img src={notification} className="md-right-signout-notification"></img></Link></div>
                <div className="md-right-signout-circle"><Link to="/"><img src={logOut}  className="md-right-signout-signout"></img></Link></div>
                <div  className="md-right-signout-text">
                    <div  className="md-right-signout-Name">{user.userName}</div>
                    <div  className="md-right-signout-Email">{user.email}</div>
                </div>
            </div>
        </div>
        <Calender></Calender>
        <ToDo></ToDo>

    </div>
    </>
  )
}

export default MDRightBar;
