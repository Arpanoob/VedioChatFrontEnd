import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ buttonText, cancelButton = false, onClickHandler }) {
  const buttonClass = cancelButton
    ? "join_room_cancel_button"
    : "join_room_success_button";
  return (
    <button className={buttonClass} onClick={onClickHandler}>
      {buttonText}{" "}
    </button>
  );
}

function JoinRoomButton({isRoomHost, handleJoinRoom}) {
  const navigate = useNavigate();
  function onClickCancelButton() {
    navigate("/");
  }

  const succesButtonText = isRoomHost ? "Host" : "Join";
  console.log(isRoomHost, "qwerty");
  return (
    <div className="join_room_buttons_container">
      <Button buttonText={succesButtonText} onClickHandler={handleJoinRoom} />
      <Button
        buttonText={"Cancel"}
        cancelButton
        onClickHandler={onClickCancelButton}
      />
    </div>
  );
}

export default JoinRoomButton;
