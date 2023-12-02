import "./VerificationPage.css";
import React from "react";
import OtpImage from "./assets/6325251-removebg-preview.png";
import firebase from "firebase/compat/app";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'firebase/compat/auth';

function VerificationPage() {
  const firebaseConfig = {
    apiKey: "AIzaSyDqf7o8A9gNzqnorMKFPTpJQIApBHy_BV4",
    authDomain: "learnen-4281f.firebaseapp.com",
    projectId: "learnen-4281f",
    storageBucket: "learnen-4281f.appspot.com",
    messagingSenderId: "179464901093",
    appId: "1:179464901093:web:afc3bf6823f2d6ae889f0c",
    measurementId: "G-BDNE3B0STE",
  };

  firebase.initializeApp(firebaseConfig);

  const location = useLocation();
  const [phoneOtp, setPhoneOtp] = React.useState(["", "", "", "","",""]);

  const { userData } = location.state || {};
  console.log(userData);

  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    // Create a new array to avoid mutating state directly
    const newOtp = [...phoneOtp];
    newOtp[index] = value;

    // Update the state with the new OTP values
    setPhoneOtp(newOtp);
  };

  const handleverifySubmit = (event) => {
    event.preventDefault();
    handleVerifyPhoneOTP();
  }

  const handleVerifyPhoneOTP = async () => {
    const otpValue = phoneOtp.join("");
    console.log(otpValue)

    try {
      const verificationResult = await window.confirmationResult.confirm(
        otpValue
      );
      console.log("Phone number verified:", verificationResult.user);
      userCreate();
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  const userCreate = () => {
    const signupname = userData.signupname;
    const signupemail = userData.signupemail;
    const signuppass = userData.signuppass;
    const phonenumber = userData.phonenumber;
    const securityquestion = userData.securityquestion;
    const securityanswer = userData.securityanswer  ;
    axios
      .post("http://localhost:3000/api/signup", {
        signupname,
        signupemail,
        signuppass,
        phonenumber,
        securityquestion,
        securityanswer,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        navigate("/signup");
      });
  };

  return (
    <React.Fragment>
      <div className="otp-body">
        <div className="otp-innerBox">
          <div className="otp-img-div">
            <img src={OtpImage} alt="otp-img" className="otp-img" />
          </div>
          <div className="right-div">
            <div className="otp-box">
              <form className="otp-Form" onSubmit={handleverifySubmit}>
                <span className="mainHeading">Enter OTP</span>
                <p className="otpSubheading">
                  We have sent a verification code to your Gmail
                </p>
                <div className="inputContainer">
                  {phoneOtp.map((digit, index) => (
                    <input
                      key={index}
                      required
                      maxLength="1"
                      type="text"
                      className="otp-input"
                      autoComplete="off"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                    />
                  ))}
                </div>
                <button className="verifyButton" type="submit">
                  Verify
                </button>
                <p className="resendNote">
                  Didn't receive the code?{" "}
                  <button className="resendBtn">Resend Code</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VerificationPage;
