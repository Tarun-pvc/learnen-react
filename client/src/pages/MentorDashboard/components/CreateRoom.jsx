import React, { useState } from "react";
import img1 from "../assets/college project-pana.png"
import img2 from "../assets/college project-bro.png"
import img3 from "../assets/college project-rafiki.png"
// import img4 from "../assets/college project-amico.png"

function CreateRoom() {
    const data=[img1,img2,img3];
    const random = Math.round(Math.random()* 2)
  const [formData, setFormData] = useState({
    roomTitle: "",
    Duration: "",
    meetLink: "",
    skills: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="createroom-wrapper">
        <div className="createroom-top">
          <img className="createroom-top-img" src={data[random]} alt="Project Image" />
        </div>
        <div className="createroom-bottom-wrapper">
          <div className="createroom-bottom">
            <div className="createroom-input-wrapper">
              <input
                type="text"
                className="createroom-input1"
                placeholder="Room Title"
                name="roomTitle"
                value={formData.roomTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="createroom-DurationDescription">
              <div className="createroom-input-wrapper1">
                <input
                  type="number"
                  className="createroom-input2"
                  placeholder="Duration"
                  name="Duration"
                  value={formData.Duration}
                  onChange={handleInputChange}
                />
              </div>
              <div className="createroom-input-wrapper2">
                <input
                  type="text"
                  className="createroom-input3"
                  placeholder="Meet link"
                  name="meetLink"
                  value={formData.meetLink}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="updateMP-input-wrapper">
              <textarea
                className="updateMP-input-bio"
                placeholder="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="updateMP-input-wrapper">
              <textarea
                className="updateMP-input-bio"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="updateMP-update1">
              <button className="updateMP-updateBtn" onClick={handleSubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRoom;
