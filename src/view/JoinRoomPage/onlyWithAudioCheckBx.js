import React from "react";

import CheckBox from "../../assets/check.png";

function OnlyWithAudioCheckBx({
  setConnectOnlyWithAudio,
  connectOnlyWithAudio,
}) {
  console.log(setConnectOnlyWithAudio, connectOnlyWithAudio);
  function handleConnectionTypeChange() {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  }
  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" src={CheckBox}></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  );
}

export default OnlyWithAudioCheckBx;
