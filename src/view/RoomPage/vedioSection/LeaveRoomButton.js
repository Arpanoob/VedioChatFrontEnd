import React from "react";
import { leaveRoom } from "../../../utils/wss";

function LeaveRoomButton() {
  function handelRoomButton() {
    console.log("leaved");
    leaveRoom();
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  }
  return (
    <div className="video_button_container">
      <button className="video_button_end" onClick={handelRoomButton}>
        Leave Room
      </button>
    </div>
  );
}

export default LeaveRoomButton;
