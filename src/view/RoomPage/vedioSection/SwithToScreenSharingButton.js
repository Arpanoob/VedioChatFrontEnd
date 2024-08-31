import React, { useState } from "react";
import SwitchImg from "../../../assets/switchToScreenSharing.svg";
function SwithToScreenSharingButton() {
  const [isScreenSharingActive, setIsSharingActive] = useState(false);
  const handelScreenShareToggel = () => {
    setIsSharingActive(!isScreenSharingActive);
  };
  return (
    <div className="video_button_container">
      <img
        src={SwitchImg}
        onClick={handelScreenShareToggel}
        className="video_button_image"
      />
    </div>
  );
}

export default SwithToScreenSharingButton;
    