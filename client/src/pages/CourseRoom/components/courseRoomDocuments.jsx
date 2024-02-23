import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/CourseRoomAssignments.css";

export default function CourseRoomDocuments() {
const user = useSelector((state) => state.wishList.user);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddDocument = () => {
    setShowPopup(true);
  };
  const handleCancelDocument = () => {
    setShowPopup(false);
  };

  return (
    <div className="cr-assignments-main">
      <div className="cr-assignments-header">
      <h1>Documents</h1>
      {user.Position === "mentor" && (
          <button
            className="cr-add-assignment-button"
            onClick={handleAddDocument}
          >
            Add Document
          </button>
        )}
      </div>
      <hr />
      <div className="cr-assignments-item">
        <div className="cr-assignments-item-heading">
          <h2>Materials</h2>
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
            <h1>Add Document</h1>
            <input
              type="text"
              placeholder="Document Name"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Document Description"
              className="assignment-popup-input"
            />
            <input
              type="text"
              placeholder="Document Link"
              className="assignment-popup-input"
            />
            <div className="assignment-popup-buttons">
              <button onClick={handleCancelDocument}>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
