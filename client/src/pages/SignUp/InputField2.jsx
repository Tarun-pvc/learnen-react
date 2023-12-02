import React from "react";
import "./SignUp.css";
import phoneImage from "./assets/phone-call.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import securityImage from "./assets/question-mark-in-a-shield.png";
// question-mark-in-a-shield

function InputField2() {
  return (
    <>
      <div className="SignUp-field">
      <img src={phoneImage} alt="su-img" className="su-phoneImg" />
        <input
          autoComplete="off"
          id="logemail"
          placeholder="Phone Number"
          className="SignUp-input-field"
          name="phoneNumber"
          type="number"
          // onChange={}
          // value={}
        />
      </div>
      <br></br>
      <div>Security Question:</div>
      <div className="SignUp-field-security">
      <img src={securityImage} alt="su-img" className="su-phoneImg" />
        <select name="sec" id="signUP-securityQuestion">
          <option value="What was your childhood nickname?">What was your childhood nickname?</option>
          <option value="What is your favourite sport?">What is your favourite sport?</option>
          <option value="What is your favourite cartoon?">What is your favourite cartoon?</option>
          <option value="who is your favourite actor/actress?">who is your favourite actor/actress?</option>
          <option value="What is your favourite colour?">What is your favourite colour?</option>
        </select>
      </div>
      <div className="SignUp-field">
      {/* <img src={phoneImage} alt="su-img" className="su-phoneImg" /> */}
        <input
          autoComplete="off"
          id="logemail"
          placeholder="Security answer"
          className="SignUp-input-field"
          name="phoneNumber"
          type="text"
          // onChange={}
          // value={}
        />
      </div>
    </>
  );
}
export default InputField2;
