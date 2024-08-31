import React from "react";
import { connect } from "react-redux";

// const dummy = [
//   {
//     identity: "Jacke",
//   },
//   {
//     identity: "Anna",
//   },
//   {
//     identity: "Marek",
//   },
//   {
//     identity: "Darius",
//   },
// ];
const SingleParticipants = (props) => {
  const { identity, lastItem, participant } = props;

  return (
    <React.Fragment>
      <p className="participants_paragraph">{identity}</p>
      {!lastItem && <span className="participants_seprators_line"></span>}
    </React.Fragment>
  );
};
function Participants({ Participants }) {
  console.log(Participants, "Participants");
  return (
    <div className="participants_container">
      {Participants.map((participant, index) => (
        <SingleParticipants
          key={index}
          lastItem={Participants.length === index + 1}
          participant={participant}
          identity={participant.identity}
        />
      ))}
    </div>
  );
}

const mapStoreStatetoProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStatetoProps)(Participants);
