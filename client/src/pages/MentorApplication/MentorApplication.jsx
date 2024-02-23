// // MentorApplicationForm.jsx
// import React, { useState } from 'react';
// import './MentorApplication.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faUserGraduate, faPencilAlt, faFilePdf, faScroll } from '@fortawesome/free-solid-svg-icons';

// const MentorApplication = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     expertise: '',
//     motivation: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData({
//       ...formData,
//       [name]: name === 'resume' ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to a server
//     console('Form data submitted:', formData);
//   };

//   return (
//     <div className="mentor-application-form">
//       <h2>Mentor Application Form</h2>
//       <form id="form-tag" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className='input-label' htmlFor="firstName">
//             <FontAwesomeIcon icon={faUser} /> First Name:
//           </label>
//           <input className='inputs' type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="lastName">
//             <FontAwesomeIcon icon={faUser} /> Last Name:
//           </label>
//           <input className='inputs' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="email">
//             <FontAwesomeIcon icon={faEnvelope} /> Email:
//           </label>
//           <input className='inputs' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="expertise">
//             <FontAwesomeIcon icon={faUserGraduate} /> Area of Expertise:
//           </label>
//           <input className='inputs' type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="motivation">
//             <FontAwesomeIcon icon={faPencilAlt} /> Motivation to be a Mentor:
//           </label>
//           <textarea className='inputs' id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="resume">
//             <FontAwesomeIcon icon={faFilePdf} /> Upload Resume (PDF):
//           </label>
//           <input className='inputs' type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label className='input-label' htmlFor="resume">
//           <FontAwesomeIcon icon={faScroll} /> Upload Transcript:
//           </label>
//           <input className='inputs' type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
//         </div>
//         <button id='form-button' type="submit">Submit Application</button>
//       </form>
//     </div>
//   );
// };

// export default MentorApplication;

import React, { useState } from "react";
import "./MentorApplication.css";
import hat from "../Landingpage/assets/hat.png";
import Image from "./Forms-pana.png";

const MentorApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    bio: "",
    skills: "",
    linkedin: "",
    twitter: "",
    website: "",
    motivation: "",
    achievement: "",
    introVideo: null,
    resume: null,
  });

  const [formStepsNum, setFormStepsNum] = useState(0);

  const nextStep = () => {
    setFormStepsNum((prev) => prev + 1);
    updateProgressbar();
  };

  const prevStep = () => {
    setFormStepsNum((prev) => prev - 1);
    updateProgressbar();
  };

  const updateProgressbar = () => {
    const progressSteps = document.querySelectorAll(".progress-step");
    const progressActive = document.querySelectorAll(".progress-step-active");

    document.getElementById("progress").style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  };

  return (
    <div className="application-form">
      <div className="LandingPage-nav-wrapper">
        <div className="LandingPage-nav">
          <img className="LandingPage-nav-hat" src={hat} />
          <p className="LandingPage-nav-head">Learnen</p>
        </div>
      </div>
      <div className="application-form-wrapper">
        <h1 className="text-center">Join Us as a Mentor!!</h1>
        <div className="progressbar">
          <div className="progress" id="progress"></div>
          <div
            className={`progress-step ${
              formStepsNum === 0 ? "progress-step-active" : ""
            }`}
            data-title="Intro"
          ></div>
          <div
            className={`progress-step ${
              formStepsNum === 1 ? "progress-step-active" : ""
            }`}
            data-title="Profile"
          ></div>
          <div
            className={`progress-step ${
              formStepsNum === 2 ? "progress-step-active" : ""
            }`}
            data-title="Experience"
          ></div>
        </div>

        <div className="application-form-main">
          <div className="application-form-left">
            <img src={Image} alt="" />
          </div>

          <div className="application-form-right">
            <div
              className={`form-step ${
                formStepsNum === 0 ? "form-step-active" : ""
              }`}
            >
              <div className="input-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone No</label>
                <input type="number" name="phoneno" id="phoneno" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <button
                  className="btn btn-next width-50 ml-auto"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>

            <div
              className={`form-step ${
                formStepsNum === 1 ? "form-step-active" : ""
              }`}
            >
              <div className="input-group">
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio" />
              </div>
              <div className="input-group">
                <label htmlFor="skills">Skills</label>
                <input type="text" name="skills" id="skills" />
              </div>
              <div className="input-group">
                <label htmlFor="linkedin">Linkedin URL</label>
                <input type="text" name="linkedin" id="linkedin" />
              </div>
              <div className="input-group">
                <label htmlFor="website">Personal Website</label>
                <input type="text" name="website" id="website" />
              </div>
              <div className="btns-group">
                <button className="btn btn-prev" onClick={prevStep}>
                  Previous
                </button>
                <button className="btn btn-next" onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>

            <div
              className={`form-step ${
                formStepsNum === 2 ? "form-step-active" : ""
              }`}
            >
              <div className="input-group">
                <label htmlFor="question1">Why do you want to become a Mentor?</label>
                <textarea name="question1" id="question1" />
              </div>
              <div className="input-group">
                <label htmlFor="resume">Resume</label>
                <input type="file" accept="pdf" name="resume" id="resume" />
              </div>
              <div className="btns-group">
                <button className="btn btn-prev" onClick={prevStep}>
                  Previous
                </button>
                <button type="submit" value="Submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorApplication;
