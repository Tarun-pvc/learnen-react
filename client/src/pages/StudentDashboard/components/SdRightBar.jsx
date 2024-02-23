import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";

import logout from "../assets/logout.png";
import cart from "../assets/cart.png";

import ToDo from "./ToDo";
import WishListPopUp from "./WishListPopUp";
import { Link } from "react-router-dom";
import axios from "axios"

function SdRightBar() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("loginUser"));
  console.log(user)

  const handleLogout = () => {
    axios.get("http://localhost:3000/api/logout").then((res) => {
      console.log(res);
      window.location.href = "/";
    });
  };

  const handleViewCart = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="sd-right-wrapper">
      <div className="sd-right-signout-wrapper">
        <div className="sd-right-signout-center">
          <div className="sd-right-signout-circle1" onClick={handleViewCart}>
            <img src={cart} className="sd-right-signout-cart"></img>
            {isPopupVisible && (
              <div className="sd-wishlist-popup">
                <WishListPopUp />
              </div>
            )}
          </div>
          <div className="sd-right-signout-circle" onClick={handleLogout}>
              <img src={logout} className="sd-right-signout-signout"></img>
          </div>
          <div className="sd-right-signout-text">
            <div className="sd-right-signout-Name">{user.userName}</div>
            <div className="sd-right-signout-Email">{user.email}</div>
          </div>
        </div>
      </div>

      <ToDo></ToDo>
    </div>
  );
}

export default SdRightBar;
