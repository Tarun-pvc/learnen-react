import React from "react";
import "../styles/CourseRoomAssignments.css";
export default function CourseRoomAssignments() {
  return (
    <div className="cr-assignments-main">
      <h1>Assignments</h1>
      <hr/>
      <div className="cr-assignments-item">
        <div className="cr-assignments-item-heading">
          <h2>Assigned</h2>
        </div>
        <div className="cr-assignments-assigned-list-items-wrapper">
          <div className="cr-assignment-assigned-item">
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    Alice in the Wonderland
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    Literature
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>

              <div>
                <div className="cr-assignments-new-right-time">25.08.2023</div>
                <br></br>
                <a className="cr-assignments-new-right-view">View</a>
              </div>
            </div>
          </div>
          <div className="cr-assignment-assigned-item">
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    Alice in the Wonderland
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    Literature
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>

              <div>
                <div className="cr-assignments-new-right-time">25.08.2023</div>
                <br></br>
                <a className="cr-assignments-new-right-view">View</a>
              </div>
            </div>
          </div>
          <div className="cr-assignment-assigned-item">
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    Alice in the Wonderland
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    Literature
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>

              <div>
                <div className="cr-assignments-new-right-time">25.08.2023</div>
                <br></br>
                <a className="cr-assignments-new-right-view">View</a>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-assignments-item-heading">
          <h2>Submitted</h2>
          <div className="cr-assignment-assigned-item">
            <div className="cr-assignment-assigned-item-content">
              <div className="cr-assignments-new-left">
                <div>
                  <div className="cr-assignments-new-left-name">
                    Alice in the Wonderland
                  </div>
                  <div className="cr-assignments-new-left-lecture">
                    Literature
                  </div>
                </div>
              </div>
              <div className="cr-assignments-new-right"></div>

              <div>
                <div className="cr-assignments-new-right-time">25.08.2023</div>
                <br></br>
                <a className="cr-assignments-new-right-view">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
