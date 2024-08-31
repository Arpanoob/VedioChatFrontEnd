import React, { useEffect } from "react";

import "./RoomPage.css";
import ParticipantSection from "./participantSection/ParticipantSection";
import VedioSection from "./vedioSection/VedioSection";
import ChatSection from "./chatSection/ChatSection";
import RoomLabel from "./RoomLabel";

import * as WebRtcHandeler from "../../utils/WebRtchandeler";
import { connect } from "react-redux";
import ShowOverLay from "./ShowOverLay";

function RoomPage({ roomId, identity, isRoomHost, showOverLay }) {
  useEffect(() => {
    WebRtcHandeler.getLocalPreviewAndInitRoomConnection(
      isRoomHost,
      identity,
      roomId,
      showOverLay
    );
  }, []);
  console.log("roompage:::", roomId, identity);
  return (
    <div className="room_container">
      <ParticipantSection />
      <VedioSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
      {showOverLay && <ShowOverLay />}
    </div>
  );
}

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStoreStateToProps)(RoomPage);
