import React from "react";

export default function MySchedule(props) {
  return (
    <>
      <div className="md-Middle-Schedule-new">
        <div className="md-Middle-Schedule-new-left">
          <div>
            <div  className="md-Middle-Schedule-new-left-Name">{props.title}</div>
            <div className="md-Middle-Schedule-new-left-Lecture">Lecture 5</div>
          </div>
        </div>
        <div className="md-Middle-Schedule-new-right"></div>
        
        <div>
            <div  className="md-Middle-Schedule-new-right-time">{props.time}</div>
            <br></br>
            <a className="md-Middle-Schedule-new-right-View" src={props.link}>View</a>
          </div>
      </div>
    </>
  );
}
