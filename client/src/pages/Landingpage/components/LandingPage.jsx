import React from "react";
import "../LandingPage.css";
import hat from "../assets/hat.png";
import landing from "../assets/landing.png";
import pens from "../assets/pens.png";
import LandingCard1 from "../assets/LandingCard1.png";
import LandingCard2 from "../assets/LandingCard2.png";
import LandingCard3 from "../assets/LandingCard3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHandLizard, faStar } from "@fortawesome/free-solid-svg-icons";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import AboutUs from "../../AboutUs/AboutUs/AboutUs";
import Contact from "../../Contact/Contact";

function LandingPage() {
  const navigate = useNavigate();
  const handleLoginCLick = ()=>{
    navigate('/login')
  }

  const handleSignUpClick = ()=>{
    navigate('/signup')
  }
  return (
    <>
      <div className="LandingPage-wrapper">
        <div className="LandingPage-nav-wrapper">
          <div className="LandingPage-nav">
            <img className="LandingPage-nav-hat" src={hat} />
            <p className="LandingPage-nav-head">Learnen</p>
            <button className="LandingPage-nav-Login" onClick={handleLoginCLick}>Login</button>
          </div>
        </div>
        <div className="LandingPage-body-wrapper">
          <div className="LandingPage-section1">
            <div className="LandingPage-section1-left">
              <div className="LandingPage-section1-left-full">
                <p className="Learnfromtoday">LEARN FROM TODAY</p>
                <p className="TheBestWayFor">The Best Way For</p>
                <p className="YourLearning">
                  Your Learning{" "}
                  <img src={pens} className="LandingPage-section1-pens" />
                </p>
                <div className="LandingPage-section1-left-description">
                  <p className="LandingPage-section1-left-description1">
                    There are many variation of Lorem Ipsum available ,but the
                  </p>
                  <p className="LandingPage-section1-left-description1">
                    majority have suffered alterations
                  </p>
                </div>
                <div className="LandingPage-signup">
                  <button className="cta" onClick={handleSignUpClick}>
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
              {/* <img className="LandingPage-nav-landing" src={landing} /> */}
              <Spline scene="https://prod.spline.design/SMSW99ARc4h2i14C/scene.splinecode" />
            </div>
          </div>
          <div className="LandingPage-section2">
            <div className="lp-section2-square"></div>
            <div className="lp-section2-cards-wrapper">
              <div className="lp-section2-card">
                <div className="lp-section2-card-image">
                  <img src={LandingCard1} />
                </div>
                <div className="lp-section2-card-content">
                  <div className="lp-section2-card-content-title">
                    Financials Secuirty with Thinking & Principles
                  </div>
                  <div className="lp-section2-card-content-icons-wrapper">
                    <div className="lp-section2-card-icons1">
                      <FontAwesomeIcon icon={faGraduationCap} color="#F26E66" />
                      <p>78 Students</p>
                    </div>
                    <div className="lp-section2-card-icons2">
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lp-section2-card">
                <div className="lp-section2-card-image">
                  <img src={LandingCard2} />
                </div>
                <div className="lp-section2-card-content">
                  <div className="lp-section2-card-content-title">
                    Financials Secuirty with Thinking & Principles
                  </div>
                  <div className="lp-section2-card-content-icons-wrapper">
                    <div className="lp-section2-card-icons1">
                      <FontAwesomeIcon icon={faGraduationCap} color="#F26E66" />
                      <p>78 Students</p>
                    </div>
                    <div className="lp-section2-card-icons2">
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lp-section2-card">
                <div className="lp-section2-card-image">
                  <img src={LandingCard3} />
                </div>
                <div className="lp-section2-card-content">
                  <div className="lp-section2-card-content-title">
                    Financials Secuirty with Thinking & Principles
                  </div>
                  <div className="lp-section2-card-content-icons-wrapper">
                    <div className="lp-section2-card-icons1">
                      <FontAwesomeIcon icon={faGraduationCap} color="#F26E66" />
                      <p>78 Students</p>
                    </div>
                    <div className="lp-section2-card-icons2">
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                      <FontAwesomeIcon icon={faStar} color="#F9A24C" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="LandingPage-planet">
            <Spline scene="https://prod.spline.design/3agNilzFCv85F9IF/scene.splinecode" />
          </div> */}
        </div>
        <AboutUs/>
        <Contact/>
        {/* <div className="LandingPage-footer" style={{ backgroundColor: "#112d4e" }}>
          <div className="LandingPage-footer-links">
            <link to="/page1" className="LandingPage-footer-link">Page 1</link>
            <link to="/page2" className="LandingPage-footer-link">Page 2</ink>
            <link to="/page3" className="LandingPage-footer-link">Page 3</Link>
            <link to="/page4" className="LandingPage-footer-link">Page 4</Link>
            <link to="/page5" className="LandingPage-footer-link">Page 5</Link>
          </div>
          <p className="LandingPage-footer-text">© 2023 Learnen. All rights reserved.</p>
        </div> */}
      </div>
    </>
  );
}

export default LandingPage;
