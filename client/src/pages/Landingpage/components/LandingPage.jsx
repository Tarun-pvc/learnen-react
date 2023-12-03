import React from "react";
import "../LandingPage.css";
import hat from "../assets/hat.png";
import landing from "../assets/landing.png";
import pens from "../assets/pens.png";

function LandingPage() {
  return (
    <>
      <div className="LandingPage-wrapper">
        <div className="LandingPage-nav-wrapper">
          <div className="LandingPage-nav">
            <img className="LandingPage-nav-hat" src={hat} />
            <p className="LandingPage-nav-head">Learnen</p>
            <button className="LandingPage-nav-Login">Login</button>
          </div>
        </div>
        <div className="LandingPage-body-wrapper">
          <div className="LandingPage-section1">
            <div className="LandingPage-section1-left">
              <div className="LandingPage-section1-left-full">
                <p className="Learnfromtoday">LEARN FROM TODAY</p>
                <p className="TheBestWayFor">The Best Way For</p>
                <p className="YourLearning">Your Learning <img src={pens} className="LandingPage-section1-pens"/></p>
                <div className="LandingPage-section1-left-description">
                  <p className="LandingPage-section1-left-description1">
                    There are many variation of Lorem Ipsum available ,but the
                  </p>
                  <p className="LandingPage-section1-left-description1">
                    majority have suffered alterations
                  </p>
                  
                </div>
                <div className="LandingPage-signup">
                  <button className="cta">
                    <span>Explore me</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="LandingPage-section1-right">
              <img className="LandingPage-nav-landing" src={landing} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
