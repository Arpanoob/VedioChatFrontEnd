import React, { useState } from "react";
import MicButtonImg from "../../../assets/mic.svg";
import MicButtonImgOff from "../../../assets/micOff.svg";

function MicButton() {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handelMicButtonPressed = () => {
    setIsMicMuted(!isMicMuted);
  };
  return (
    <div className="video_button_container">
      <img
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handelMicButtonPressed}
        className="video_button_image"
      />
    </div>
  );
}

export default MicButton;
