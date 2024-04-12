import React from "react";

export default function MyDocument(props) {
  return (
    <>
      <div className="sd-Middle-Document-new">
        <div className="sd-Middle-Document-new-left">
          <div>
            <div className="sd-Middle-Document-new-left-Name">
              {props.title}
            </div>
            <div className="sd-Middle-Document-new-left-Lecture">
              {props.description}
            </div>
          </div>
        </div>
        <div className="sd-Middle-Document-new-right"></div>

        <div>
          <br></br>
          <a className="sd-Middle-Document-new-right-View" src={props.link}>View</a>
        </div>
      </div>
    </>
  );
}
