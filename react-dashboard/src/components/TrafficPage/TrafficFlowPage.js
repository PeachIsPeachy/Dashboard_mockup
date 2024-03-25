import React from "react";
import "./trafficFlowPage.css";
import video from "../../assets/trafficVid/traffic.mp4";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";

function TrafficFlowPage() {
  let data = [
    {
      id: 1,

      videoUrl: video,
    },
    {
      id: 2,

      videoUrl: video,
    },
    {
      id: 3,

      videoUrl: video,
    },
    {
      id: 4,

      videoUrl: video,
    },
  ];
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>react video gallery</h1> */}
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="video" key={index}>
              <div className="video-container">
                <Video
                  style={{ width: "100%" }}
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                >
                  <source src={item.videoUrl} type="video/webm" />
                </Video>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrafficFlowPage;
