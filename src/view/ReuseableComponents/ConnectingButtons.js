import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom";

function ConnectingButtons() {
  const navigate = useNavigate();
  
  function JoinRoomPage() {
    navigate("/join-room");
  }
  function JoinRoomPageAsHost() {
    navigate("/join-room?host=true");
  }
  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={JoinRoomPage}
      />
      <ConnectingButton
        buttonText="Host a meeting"
        createRoomButton
        onClickHandler={JoinRoomPageAsHost}
      />
    </div>
  );
}

export default ConnectingButtons;
