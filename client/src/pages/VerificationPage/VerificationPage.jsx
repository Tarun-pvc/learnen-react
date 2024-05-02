import "./VerificationPage.css";
import React from "react";
import OtpImage from "./assets/6325251-removebg-preview.png";
import firebase from "firebase/compat/app";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'firebase/compat/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerificationPage() {
  const firebaseConfig = {
    apiKey: "AIzaSyAlnQ8wbCkNBZpQ5tXtNCzbK6VoGeUVa2Q",
    authDomain: "learnen-c860c.firebaseapp.com",
    projectId: "learnen-c860c",
    storageBucket: "learnen-c860c.appspot.com",
    messagingSenderId: "635172915121",
    appId: "1:635172915121:web:bbe2c680f750aad5ad1f90",
    measurementId: "G-85PH43X385"
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

  const userCreate = async () => {
    const signupname = userData.signupname;
    const signupemail = userData.signupemail;
    const signuppass = userData.signuppass;
    const phonenumber = userData.phonenumber;
    const securityquestion = userData.securityquestion;
    const securityanswer = userData.securityanswer  ;
    try {
      await axios.post("https://learnen-react.onrender.com/api/signup", {
          signupname,
          signupemail,
          signuppass,
          phonenumber,
          securityquestion,
          securityanswer,
      });

      toast.success("Account created successfully!");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      navigate("/login");
  } catch (err) {
      console.error(err);
      toast.error("Error creating account. Please try again later.");
      navigate("/signup");
  }
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
        <ToastContainer position="top-right"/>
      </div>
    </React.Fragment>
  );
}

export default VerificationPage;
