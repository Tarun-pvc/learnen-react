import React from "react";

import growth from "../assets/growth.png";
import correct from "../assets/correct.png";

export default function Description() {
  return (
    <div className="description-container">
      <div className="description-box1">
        <div className="box1">
          <div className="box1-heading">
            <img className="description-image" src={growth} alt="" />
            <b className="description-heading">Effective Team Communication</b>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Develop communication strategies for remote and distributed
              project teams.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Explore Google Meet and Chat for seamless team collaboration.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Implement project execution plans using Google Calendar and Tasks.
            </p>
          </div>
        </div>
      </div>
      <div className="description-box2">
        <div className="box1">
          <div className="box1-heading">
            <img className="description-image" src={growth} alt="" />
            <b className="description-heading">
              Resource Allocation and Tracking
            </b>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Explore Google Sheets for resource allocation and tracking.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Learn to manage project resources efficiently using Google
              Workspace.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Develop effective communication strategies for project
              stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className="description-box3">
        <div className="box1">
          <div className="box1-heading">
            <img className="description-image" src={growth} alt="" />
            <b className="description-heading">
              Google Agile Project Management
            </b>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Implement effective and efficient agile project management
              methodologies.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Explore Google's agile-friendly features and applications.
            </p>
          </div>
          <div className="box-info">
            <img className="description-image" src={correct} alt="" />
            <p className="description-info">
              Use Google Forms and Surveys for project quality feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
