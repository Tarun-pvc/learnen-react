import React from "react";

export default function CourseRoomSchedules() {
  return (
    <div className="cr-assignments-main">
      <h1>Schedules</h1>
      <hr />
      <div className="cr-assignments-item">
        <div className="cr-assignments-item-heading">
          <h2>Meetings</h2>
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
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "../styles/CourseRoomAssignments.css";
import { useSelector } from "react-redux";

export default function CourseRoomSchedules() {
  const user = useSelector((state) => state.wishList.user);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddSchedule = () => {
    setShowPopup(true);
  };
  const handleCancelSchedule = () => {
    setShowPopup(false);
  };

  return (
    <div className="cr-assignments-main">
      <div className="cr-assignments-header">
        <h1>Schedules</h1>
        {user.Position === "mentor" && (
          <button
            className="cr-add-assignment-button"
            onClick={handleAddSchedule}
          >
            Add Schedule
          </button>
        )}
      </div>
      <hr />
      <div className="cr-assignments-item">
        <div className="cr-assignments-item-heading">
          <h2>Meetings</h2>
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
            <h1>New Session</h1>
            <input
              type="text"
              placeholder="Session Title"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Session Date"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Session Time"
              className="assignment-popup-input"
            />
            <div className="assignment-popup-buttons">
              <button
                className="assignment-popup-button"
                onClick={handleCancelSchedule}
              >
                Cancel
              </button>
              <button className="assignment-popup-button">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
