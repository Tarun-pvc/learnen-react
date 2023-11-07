import "./VerificationPage.css";
import React from "react";
import OtpImage from "./assets/6325251-removebg-preview.png";

function VerificationPage() {
  return (
    <React.Fragment>
      <div className="otp-body">
        <div className="otp-innerBox">
        <div className="otp-img-div">
          <img src={OtpImage} alt="otp-img" className="otp-img" />
        </div>
        <div className="right-div">
            <div class="otp-box">
                <form className="otp-Form">
                    <span className="mainHeading">Enter OTP</span>
                    <p className="otpSubheading">We have sent a verification code to your Gmail</p>
                    <div className="inputContainer">
                        <input required maxLength="1" type="text" className="otp-input" id="otp-input1" autoComplete="off"/>
                        <input required maxLength="1" type="text" className="otp-input" id="otp-input2" autoComplete="off"/>
                        <input required maxLength="1" type="text" className="otp-input" id="otp-input3" autoComplete="off"/>
                        <input required maxLength="1" type="text" className="otp-input" id="otp-input4" autoComplete="off"/>
                    </div>
                    <button className="verifyButton" type="submit">Verify</button>
                    <p className="resendNote">
                        Didn't receive the code? <button className="resendBtn">Resend Code</button>
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
