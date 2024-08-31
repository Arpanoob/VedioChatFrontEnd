import store from "../store/store";
import { setShowOverLay } from "../store/actions";

import Peer from "simple-peer";

import * as wss from "../utils/wss";

const defaultConstraints = {
  audio: true,
  vedio: true,
};

let localStream;
let peers = {};
let streams = [];

export const getLocalPreviewAndInitRoomConnection = (
  isRoomHost,
  identity,
  roomId = null
) => {
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      console.log("SuccessFully recived local Stream");
      localStream = stream;
      showLocalVedioPreview(localStream);
      store.dispatch(setShowOverLay(false));
      console.log("isRoomHost", isRoomHost);
      isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId);
    })
    .catch((err) => {
      console.log("Error When try to get local stream");
      console.log(err);
    });
};

const showLocalVedioPreview = (stream) => {};

const getConfiguation = () => {
  return {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };
};
export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const configuration = getConfiguation();

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: configuration,
    stream: localStream,
  });

  peers[connUserSocketId].on("stream", (stream) => {
    console.log("new stream came");

    addStream(stream, connUserSocketId);
    streams = [...streams, stream];
  });
  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };

    wss.signalPeerData(signalData);
  });
};

export const handlingSignalingData = (data) => {
  peers[data.connUserSocketId].signal(data.signal);
};

const addStream = (stream, connUserSocketId) => {};
