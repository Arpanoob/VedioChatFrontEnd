import React, { useState } from "react";
import OnlyWithAudioCheckBx from "./onlyWithAudioCheckBx";
import JoinRoomInputs from "./JoinRoomInputs";

import { connect } from "react-redux";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../../store/actions";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButton from "./JoinRoomButton";
import getRoomExist from "../../api/roomExist";
import { useNavigate } from "react-router-dom";

function JoinRoomContent({
  isRoomHost,
  setConnectOnlyWithAudioAction,
  connectOnlyWithAudio,
  setIdentityAction,
  setRoomIdAction,
}) {
  const navigate = useNavigate();
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleJoinRoom() {
    console.log("Added bro");
    setIdentityAction(nameValue);
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  }

  async function joinRoom() {
    const room = await getRoomExist(roomIdValue);

    const { RoomExist, RoomFull } = room;
    if (RoomExist) {
      if (RoomFull) {
        setErrorMessage("Room Exausted");
      } else {
        //Join Room
        setRoomIdAction(roomIdValue);
        navigate("/room");
      }
    } else {
      setErrorMessage("Room Do Not Exist Any More , check room id");
    }
  }

  function createRoom() {
    navigate("/room");
  }

  return (
    <React.Fragment>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckBx
        setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButton isRoomHost={isRoomHost} handleJoinRoom={handleJoinRoom} />
    </React.Fragment>
  );
}
const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudioAction: (connectOnlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(connectOnlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
  };
};

const mapStoreStateToProps = (state) => {
  return { ...state };
};
export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
