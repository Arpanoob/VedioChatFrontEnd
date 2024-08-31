import io from "socket.io-client";

import store from "../store/store";
import * as Actions from "../store/actions";
import * as WebRtcHandeler from "./WebRtchandeler";

const Server = "http://localhost:5002";

let socket = null;

export const connectWithSocketIoServer = () => {
  socket = io(Server);

  socket.on("connect", () => {
    console.log("Successfully connected with socket io server");
  });

  socket.on("room-id", ({ roomId }) => {
    //Update Store
    console.log("roomId", roomId);
    store.dispatch(Actions.setRoomId(roomId));
  });
  socket.on("room-update", ({ connectedUser }) => {
    store.dispatch(Actions.setParticipants(connectedUser));
  });
  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    WebRtcHandeler.prepareNewPeerConnection(connUserSocketId, false);
  });
  socket.on("conn-signal", (data) => {
    WebRtcHandeler.handlingSignalingData(data);
  });
};

export const createNewRoom = (identity) => {
  const data = {
    identity,
  };

  socket.emit("create-new-room", data);
};

export const joinRoom = (identity, roomId) => {
  const data = {
    roomId,
    identity,
  };

  socket.emit("join-room", data);
};

export const leaveRoom = async () => {
  await socket.emit("leave-room", {});
  console.log("pakka");
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};
