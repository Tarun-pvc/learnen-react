import React from "react";

import MyDocument from "./MyDocument";
import SdRightBar from "./SdRightBar";

import "../styles/StudentDashboard.css";

export default function Document() {
  return (
    <div className="sd-Document-main-wrapper">
      <div className="sd-Middle-Document-wrapper">
        <h1>Documents</h1>
        <hr/>
        <div className="sd-Middle-DocumentHead">Mathematics</div>
        <div className="sd-Middle-DocumentHead-new">
          <MyDocument />
          <MyDocument />
          <MyDocument />
          <MyDocument />
          <MyDocument />
        </div>
        <div className="sd-Middle-DocumentHead">Physics</div>
        <div className="sd-Middle-DocumentHead-new">
          <MyDocument />
          <MyDocument />
        </div>
        <div className="sd-Middle-DocumentHead">Literature</div>
        <div className="sd-Middle-DocumentHead-new">
          <MyDocument />
        </div>
      </div>
      <SdRightBar />
    </div>
  );
}
