export const Actions = {
  SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
  Connection_only_With_Audio: "Connection_only_With_Audio",
  Identity: "Identity",
  RoomId: "RoomId",
  SET_SHOW_OVERLAY: "SET_SHOW_OVERLAY",
  SET_PARTICIPANTS: "SET_PARTICIPANTS",
};

export const setIsRoomHost = (isRoomHost) => {
  return {
    type: Actions.SET_IS_ROOM_HOST,
    isRoomHost,
  };
};

export const setConnectOnlyWithAudio = (connectOnlyWithAudio) => {
  return {
    type: Actions.Connection_only_With_Audio,
    connectOnlyWithAudio,
  };
};

export const setIdentity = (identity) => {
  return {
    type: Actions.Identity,
    identity,
  };
};
export const setRoomId = (RoomId) => {
  return {
    type: Actions.RoomId,
    RoomId,
  };
};

export const setShowOverLay = (showOverLay) => {
  return {
    type: Actions.SET_SHOW_OVERLAY,
    showOverLay,
  };
};

export const setParticipants = (Participants) => {
  return {
    type: Actions.SET_PARTICIPANTS,
    Participants,
  };
};
