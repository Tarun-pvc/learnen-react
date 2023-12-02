import { Fragment, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  
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
                <h2 className="">Experience</h2>
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
                    <a href="">CodePen is a community</a>
                  </h4>
                  <p className="description">
                    Most creations on CodePen are public and open source. They
                    are living things that other people and the community can
                    interact with, from a simple hearting, to leaving a comment,
                    to forking and changing for their own needs.
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">CodePen is a community</a>
                  </h4>
                  <p className="description">
                    Most creations on CodePen are public and open source. They
                    are living things that other people and the community can
                    interact with, from a simple hearting, to leaving a comment,
                    to forking and changing for their own needs.
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">CodePen is a community</a>
                  </h4>
                  <p className="description">
                    Most creations on CodePen are public and open source. They
                    are living things that other people and the community can
                    interact with, from a simple hearting, to leaving a comment,
                    to forking and changing for their own needs.
                  </p>
                </div>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Web Developer</h3>
                  <span>2022-Present</span>
                  <p>
                    Reprehenderit sunt Lorem mollit elit aliquip in enim
                    reprehenderit laboris minim est adipisicing. Ullamco
                    deserunt esse qui nisi nisi. Veniam proident nostrud labore
                    et do amet ipsum consectetur Lorem aute aliquip enim sint.
                    Qui laborum officia excepteur aliquip minim sint elit
                    laboris laborum duis. Consequat do do anim cillum aute ea.
                    Labore nostrud eu ut dolor cillum aute sit ullamco et.
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Graphic Designer</h3>
                  <span>2020-2022</span>
                  <p>
                    Reprehenderit sunt Lorem mollit elit aliquip in enim
                    reprehenderit laboris minim est adipisicing. Ullamco
                    deserunt esse qui nisi nisi. Veniam proident nostrud labore
                    et do amet ipsum consectetur Lorem aute aliquip enim sint.
                    Qui laborum officia excepteur aliquip minim sint elit
                    laboris laborum duis. Consequat do do anim cillum aute ea.
                    Labore nostrud eu ut dolor cillum aute sit ullamco et.
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Photoshop</h3>
                  <span>2016-2020</span>
                  <p>
                    Reprehenderit sunt Lorem mollit elit aliquip in enim
                    reprehenderit laboris minim est adipisicing. Ullamco
                    deserunt esse qui nisi nisi. Veniam proident nostrud labore
                    et do amet ipsum consectetur Lorem aute aliquip enim sint.
                    Qui laborum officia excepteur aliquip minim sint elit
                    laboris laborum duis. Consequat do do anim cillum aute ea.
                    Labore nostrud eu ut dolor cillum aute sit ullamco et.
                  </p>
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
