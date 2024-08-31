import React, { useState } from "react";
import CameraButtonImg from "../../../assets/camera.svg";
import CameraButtonImgOff from "../../../assets/cameraOff.svg";
function CameraButton() {
  const [isLocalVedioDisabled, setIsLocalVedioDisabled] = useState(false);
  function handelCameraButtonPressed() {
    setIsLocalVedioDisabled(!isLocalVedioDisabled);
  }
  return (
    <div className="video_button_container">
      <img
        src={isLocalVedioDisabled ? CameraButtonImg : CameraButtonImgOff}
        className="video_button_image"
        onClick={handelCameraButtonPressed}
      />
    </div>
  );
}

export default CameraButton;
