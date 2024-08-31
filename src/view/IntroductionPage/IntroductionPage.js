import React, { useEffect } from "react";
import logo from "../../assets/logo.png";

import "./introductionPage.css";
import ConnectingButtons from "../ReuseableComponents/ConnectingButtons";
import { setConnectOnlyWithAudio, setIsRoomHost } from "../../store/actions";
import { connect } from "react-redux";

function IntroductionPage({
  setIsRoomHostAction,
  setConnectOnlyWithAudioAction,
}) {
  useEffect(() => {
    setIsRoomHostAction(false);
    setConnectOnlyWithAudioAction(false);
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    setConnectOnlyWithAudioAction: (connectOnlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(connectOnlyWithAudio)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
