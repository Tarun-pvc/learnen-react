import React from "react";

function NewSchedule() {
  return (
    <>
      <div className="md-Middle-Schedule-new">
        <div className="md-Middle-Schedule-new-left">
          <div>
            <div  className="md-Middle-Schedule-new-left-Name">Definite Integral</div>
            <div className="md-Middle-Schedule-new-left-Lecture">Lecture 5</div>
          </div>
        </div>
        <div className="md-Middle-Schedule-new-right"></div>
        
        <div>
            <div  className="md-Middle-Schedule-new-right-time">25.08.2023 03:00-4:00 PM</div>
            <br></br>
            <a className="md-Middle-Schedule-new-right-View">View</a>
          </div>
      </div>
    </>
  );
}
export default NewSchedule;
