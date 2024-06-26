import React, { useState, useEffect } from "react";
import userIcon from "../assets/user.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateMP() {
  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
    bio: "",
    academicQualifications: "",
    Linkedin: "",
    portfolio: "",
    profileImage: "",
  });

  const [defaultTrue, setDefaultTrue] = useState(false);
  const user = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://learnen-react.onrender.com/api/getupdateuser?userId=${user._id}`
        );
        console.log(response.data);
        setUserData(response.data);
        console.log("user data", userData);
        if (!response.data.LinkedIn) {
          setDefaultTrue(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "https://learnen-react.onrender.com/api/updateuser",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User data updated successfully:", response.data);
      // Reset form fields to empty values
      setUserData({
        userName: "",
        phoneNumber: "",
        bio: "",
        academicQualifications: "",
        Linkedin: "",
        portfolio: "",
        profileImage: "",
      });
      // Show success toast
      toast.success("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      // Show error toast
      toast.error("Error updating user data");
    }
  }

  function handleChange(event, field) {
    setUserData({ ...userData, [field]: event.target.value });
  }

  function handleImageChange(event) {
    setUserData({ ...userData, profileImage: event.target.files[0] });
  }

  return (
    <>
      <div className="updateMP-wrapper">
        <div className="updateMP-top">
          {!userData.profileImage ? (
            <img
              src={userIcon}
              alt="Profile"
              className="updateMP-userIcon"
              onClick={() => document.getElementById("fileInput").click()}
            />
          ) : (
            <div
              className="updateMP-userIcon"
              style={{
                backgroundImage: userData.profileImage
                  ? `url(http://localhost:3000${userData.profileImage})`
                  : "url('/defaultImage.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            ></div>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="updateMP-bottom">
          <div className="updateMP-bottom1">
            <div>
              <div className="updateMP-input-wrapper">
                <label>First Name</label>
                <br></br>
                <input
                  type="text"
                  className="updateMP-input1"
                  placeholder="First Name"
                  value={userData.userName.split(" ")[0] || ""}
                  onChange={(event) => handleChange(event, "userName")}
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Phone Number</label>
                <br></br>
                <input
                  type="tel"
                  className="updateMP-input1"
                  placeholder="Phone Number"
                  value={userData.phoneNumber || ""}
                  onChange={(event) => handleChange(event, "phoneNumber")}
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Date of Birth</label>
                <br />
                <input
                  type="date"
                  className="updateMP-input-date"
                  placeholder="Date of Birth"
                  value={userData.dateOfBirth ? userData.dateOfBirth.split("T")[0] : ""}
                  onChange={(event) => handleChange(event, "dateOfBirth")}
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Bio</label>
                <br></br>
                <textarea
                  className="updateMP-input-bio"
                  placeholder="Bio"
                  value={userData.bio || ""}
                  onChange={(event) => handleChange(event, "bio")}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="updateMP-bottom2">
            <div>
              <div className="updateMP-input-wrapper">
                <label>Last Name</label>
                <br></br>
                <input
                  type="text"
                  className="updateMP-input1"
                  placeholder="Last Name"
                  value={userData.userName.split(" ")[1] || ""}
                  onChange={(event) => handleChange(event, "userName")}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Academic Qualifications</label>
                <br></br>
                <input
                  type="text"
                  className="updateMP-input"
                  placeholder="Academic Qualifications"
                  value={userData.academicQualifications || ""}
                  onChange={(event) => handleChange(event, "academicQualifications")}
                ></input>
              </div>
              <p className="updateMP-socials">
                <u>Socials</u>
              </p>
              <div className="updateMP-input-wrapper">
                <label>LinkedIn</label>
                <br></br>
                <input
                  type="url"
                  className="updateMP-input1"
                  placeholder="LinkedIn"
                  value={userData.Linkedin || ""}
                  onChange={(event) => handleChange(event, "Linkedin")}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Portfolio</label>
                <br></br>
                <input
                  type="url"
                  className="updateMP-input"
                  placeholder="Portfolio"
                  value={userData.portfolio || ""}
                  onChange={(event) => handleChange(event, "portfolio")}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="updateMP-update">
          <button className="updateMP-updateBtn" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default UpdateMP;
