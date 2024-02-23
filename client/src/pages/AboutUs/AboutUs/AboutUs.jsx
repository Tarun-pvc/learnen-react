import { Fragment, useState } from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  const navigate = useNavigate();

  const handleApplicationClick = () => {
    navigate("/mentorApplication");
  }
  
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column image">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2 className="">About</h2>
              </div>
              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2 className="">Mission</h2>
              </div>
              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2 className="">Join As Mentor</h2>
              </div>
            </div>

            <div className="tab-content">
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>What is Learnen??</h2>
                <p>
                  Learnen is a Community-based Learning platform for anyone who
                  wants to track their academic progress and upskill.<br></br>
                  Learnen is a place for passionate teachers and curious
                  students to share knowledge!<br></br>
                  Learnen allows learners to access a range of courses,
                  educational materials, and learning resources online, anytime
                  and anywhere.
                </p>
                <h3>
                  <span className="blue-text">Learnen</span> is a German verb that means <span className="blue-text">to learn</span> in English.
                </h3>
                <p>
                  Learnen aim to provide learners with the flexibility and
                  convenience of learning at their own pace, on their own
                  schedule, and from wherever they choose.
                </p>
              </div>

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>Mission</h2>
                <p>
                  The mission of Learnen is to bring passionate teachers and
                  curious students together and provide students the access to
                  high-quality educational content and resources that can help
                  them acquire new skills, knowledge, and competencies.
                </p>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Innovative learning</a>
                  </h4>
                  <p className="description">
                  We're redefining education with cutting-edge technology, delivering engaging and personalized learning experiences.
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Global Collaboration</a>
                  </h4>
                  <p className="description">
                  Learnen is a global community, connecting learners worldwide for collaborative discussions and projects.
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Life learning for all</a>
                  </h4>
                  <p className="description">
                  We're dedicated to making learning accessible at every life stage, supporting continuous education for everyone. Join Learnen to embark on a transformative educational journey where knowledge knows no bounds.
                  </p>
                </div>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="join-mentor-column">
                  <h2>Join As Mentor</h2>
                  <p>
                    Are you an expert in your field? Join Learnen as a mentor and share your knowledge with passionate learners. Help them acquire new skills and achieve their goals.
                  </p>
                  <button className="join-mentor-button" onClick={handleApplicationClick}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
