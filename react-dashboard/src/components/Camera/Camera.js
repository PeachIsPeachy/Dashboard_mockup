import React from "react";
import trafficVid from "../../assets/trafficVid/traffic.mp4";
import "./camera.css";

function Camera() {
  return (
    <div className="video-container">
      <video controls>
        <source src={trafficVid} type="video/webm" />
      </video>
    </div>
  );
}

export default Camera;
