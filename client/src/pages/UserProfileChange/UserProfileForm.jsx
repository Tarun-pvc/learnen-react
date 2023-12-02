// UserProfileForm.jsx

import React, { useState } from "react";
import styles from "./UserProfileForm.module.css";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    userName: "JohnDoe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    dob: "",
    linkedinLink: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles["user-profile-form"]}>
      <h2>Edit Profile</h2>

      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-inside"]}>
            <div className={styles["form-group"]}>
              <label>Username:</label>
              <input type="text" value={formData.userName} readOnly />
            </div>
            <div className={styles["form-group"]}>
              <label>Email:</label>
              <input type="email" value={formData.email} readOnly />
            </div>
            <div className={styles["form-group"]}>
              <label>Phone Number:</label>
              <input type="tel" value={formData.phoneNumber} readOnly />
            </div>
            <div className={styles["form-group"]}>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className={styles["form-group"]}>
              <label>LinkedIn Link:</label>
              <input
                type="text"
                name="linkedinLink"
                value={formData.linkedinLink}
                onChange={handleChange}
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Bio:</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
