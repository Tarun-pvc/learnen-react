import React, { useState , useEffect } from "react";
import userIcon from "../assets/user.png";
import axios from "axios";
function UpdateMP() {
  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
    bio: "",
    academicQualifications: "",
    Linkedin: "",
    Portfolio: "",
    dateOfBirth: "",
    profileImage: "",
  });
  const [defaultTrue, setDefaultTrue] = useState(false);
  const user = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getupdateuser?userId=${user._id}`
        );
        console.log(response.data);
        setUserData(response.data);
        console.log("user data",userData);
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
        "http://localhost:3000/api/updateuser",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User data updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
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
        {!userData.profileImage? (
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
                  value={userData.userName?userData.userName.split("  ")[0] : ""}
                  onChange={(event) => handleChange(event, "firstName")}
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Phone Number</label>
                <br></br>
                <input
                  type="email"
                  className="updateMP-input1"
                  placeholder="Phone Number"
                  value={userData.phoneNumber}
                  onChange={(event) => handleChange(event, "phone")}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Date of Birth</label>
                <br />
                <input 
                type="date"
                className="updateMP-input-date" 
                placeholder="Date of Birth"
                value={userData.dateOfBirth?userData.dateOfBirth.split("T")[0] : ""}
                onChange={(event) => handleChange(event, "dateOfBirth")}
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Bio</label>
                <br></br>
                <textarea
                  className="updateMP-input-bio"
                  placeholder="Bio"
                  value={userData.bio}
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
                  value={userData.userName?userData.userName.split("  ")[1] : ""}
                  onChange={(event) => handleChange(event, "lastName")}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Academic Qualifications</label>
                <br></br>
                <input
                  type="text"
                  className="updateMP-input"
                  placeholder="Academic Qualifications"
                  value={userData.academicQualifications}
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
                  value={userData.Linkedin}
                  onChange={(event) => handleChange(event, "LinkedIn")}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Portfolio</label>
                <br></br>
                <input
                  type="url"
                  className="updateMP-input"
                  placeholder="Portfolio"
                  value={userData.Portfolio}
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
    </>
  );
}

export default UpdateMP;

import React, { useState } from "react";
import userIcon from "../assets/user.png";
import axios from "axios";
function UpdateMP() {
  const data = {
    firstName: "First name",
    lastname: "Last name",
    phone:"Phone Number",
    bio: "Bio",
    acQua: "Qualification",
    LinkedIn: "Linkedin URL",
    portfolio: "Portfolio URL",
  };
  const [fn, setFirstName] = useState(data.firstName);
  const [ln, setlastName] = useState(data.lastname);
  const [ph, setPhone] = useState(data.phone);
  const [bi, setBio] = useState(data.bio);
  const [date, setDate] = useState(data.dateOfBirth);
  const [aq, setAq] = useState(data.acQua);
  const [li, setLinkedIn] = useState(data.LinkedIn);
  const [pt, setPortfolio] = useState(data.portfolio);
  const [profileImage, setProfileImage] = useState(null);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  console.log(user);

  async function handleSubmit() {
    try {
      const formData = new FormData();
      formData.append("firstName", fn);
      formData.append("lastName", ln);
      formData.append("phone", ph);
      formData.append("bio", bi);
      formData.append("acQua", aq);
      formData.append("linkedIn", li);
      formData.append("portfolio", pt);
      formData.append("profileImage", profileImage);
      formData.append("dateOfBirth", date);
      formData.append("userId",user._id);

      const response = await axios.post(
        "http://localhost:3000/api/updateuser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  function firstNameHandler(event) {
    setFirstName(event.target.value);
  }
  function lastNameHandler(event) {
    setlastName(event.target.value);
  }
  function datehandler(event) {
    setDate(event.target.value);
  }
  function phoneHandler(event) {
    setPhone(event.target.value);
  }
  function bioHandler(event) {
    setBio(event.target.value);
  }
  function aqHandler(event) {
    setAq(event.target.value);
  }
  function linkedInHandler(event) {
    setLinkedIn(event.target.value);
  }
  function portfolioHandler(event) {
    setPortfolio(event.target.value);
  }
  function handleImageClick() {
    document.getElementById("fileInput").click();
  }

  function handleImageChange(event) {
    setProfileImage(event.target.files[0]);
  }
  return (
    <>
      <div className="updateMP-wrapper">
        <div className="updateMP-top">
          {!profileImage ? (
            <img
              src={userIcon}
              alt="Profile"
              className="updateMP-userIcon"
              onClick={handleImageClick}
            />
          ) : (
            <div
              className="updateMP-userIcon"
              style={{
                backgroundImage: profileImage
                  ? `url(${URL.createObjectURL(profileImage)})`
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
                  placeholder={fn}
                  onChange={firstNameHandler}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Phone Number</label>
                <br></br>
                <input
                  type="email"
                  className="updateMP-input1"
                  placeholder={ph}
                  onChange={phoneHandler}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Date of Birth</label>
                <br />
                <input 
                type="date"
                className="updateMP-input-date" 
                onChange={datehandler}
                placeholder="Date of Birth"
                />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Bio</label>
                <br></br>
                <textarea
                  className="updateMP-input-bio"
                  placeholder={bi}
                  onChange={bioHandler}
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
                  placeholder={ln}
                  onChange={lastNameHandler}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Academic Qualifications</label>
                <br></br>
                <input
                  type="text"
                  className="updateMP-input"
                  placeholder={aq}
                  onChange={aqHandler}
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
                  placeholder={li}
                  onChange={linkedInHandler}
                ></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>portfolio</label>
                <br></br>
                <input
                  type="url"
                  className="updateMP-input"
                  placeholder={pt}
                  onChange={portfolioHandler}
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
    </>
  );
}

export default UpdateMP;
