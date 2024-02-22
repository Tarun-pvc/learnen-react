import React from "react";
import { useState } from "react";
import "../styles/CourseRoomAssignments.css";
import { useSelector } from "react-redux";

export default function CourseRoomAssignments() {
  const user = useSelector((state) => state.wishList.user);
  const [showPopup, setShowPopup] = useState(false);

  

  const handleAddAssignment = () => {
    setShowPopup(true);
  };
  const handleCancelAssignment = () => {
    setShowPopup(false);
  };
  return (
    <div className="cr-assignments-main">
      <div className="cr-assignments-header">
      <h1>Assignments</h1>
      {user.Position === "mentor" && (
        <button
          className="cr-add-assignment-button"
          onClick={handleAddAssignment}
        >
          Add Assignment
        </button>
      )}
      </div>
      
      <hr />
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
      </div>
      {showPopup && (
        <div className="overlay">
          <div className="assignment-popup">
            <h1>Add Assignment</h1>
            <input
              type="text"
              placeholder="Assignment Title"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Deadline"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Link"
              className="assignment-popup-input"
            />
            <div className="assignment-popup-buttons">
              <button onClick={handleCancelAssignment}>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
