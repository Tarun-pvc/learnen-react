// MentorApplicationForm.jsx
import React, { useState } from 'react';
import './MentorApplication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faUserGraduate, faPencilAlt, faFilePdf, faScroll } from '@fortawesome/free-solid-svg-icons';

const MentorApplication = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    expertise: '',
    motivation: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'resume' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console('Form data submitted:', formData);
  };

  return (
    <div className="mentor-application-form">
      <h2>Mentor Application Form</h2>
      <form id="form-tag" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='input-label' htmlFor="firstName">
            <FontAwesomeIcon icon={faUser} /> First Name:
          </label>
          <input className='inputs' type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="lastName">
            <FontAwesomeIcon icon={faUser} /> Last Name:
          </label>
          <input className='inputs' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </label>
          <input className='inputs' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="expertise">
            <FontAwesomeIcon icon={faUserGraduate} /> Area of Expertise:
          </label>
          <input className='inputs' type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="motivation">
            <FontAwesomeIcon icon={faPencilAlt} /> Motivation to be a Mentor:
          </label>
          <textarea className='inputs' id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="resume">
            <FontAwesomeIcon icon={faFilePdf} /> Upload Resume (PDF):
          </label>
          <input className='inputs' type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className='input-label' htmlFor="resume">
          <FontAwesomeIcon icon={faScroll} /> Upload Transcript:
          </label>
          <input className='inputs' type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
        </div>
        <button id='form-button' type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default MentorApplication;
