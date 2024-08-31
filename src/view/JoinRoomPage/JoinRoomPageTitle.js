import React from "react";

function JoinRoomPageTitle({ isRoomHost }) {
  const titleText = isRoomHost ? "Host Meeting" : "Join Meeting";
  return <p className="join_room_title">{titleText}</p>;
}

export default JoinRoomPageTitle;
