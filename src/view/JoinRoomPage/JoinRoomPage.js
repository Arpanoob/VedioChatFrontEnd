import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from "../../store/actions";

import "./joinroompage.css";
import JoinRoomPageTitle from "./JoinRoomPageTitle";
import JoinRoomContent from "./JoinRoomContent";

function JoinRoomPage(props) {
  const { setIsRoomHostAction, isRoomHost } = props;
  console.log(props);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const host = searchParams.get("host");
    if (host) {
      setIsRoomHostAction(true);
    }
  }, []);
  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomPageTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
}

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
