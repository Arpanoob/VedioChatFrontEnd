import React from "react";
import ParticipantsLabel from "./ParticipantsLabel";
import Participants from "./Participants";

function ParticipantSection() {
  return (
    <div className="participants_section_container">
    <ParticipantsLabel/>
    <Participants/>
    </div>
  );
}

export default ParticipantSection;
