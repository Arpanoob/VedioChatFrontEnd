import React from "react";

function Input({ placeholder, handeler, value }) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handeler}
      className="join_room_input"
    />
  );
}

function JoinRoomInputs({
  roomIdValue,
  setRoomIdValue,
  nameValue,
  setNameValue,
  isRoomHost,
}) {
  const roomIdValueChange = (event) => {
    setRoomIdValue(event.target.value);
  };

  const nameValueChange = (event) => {
    setNameValue(event.target.value);
  };
  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <Input
          placeholder="Enter Room Id"
          value={roomIdValue}
          handeler={roomIdValueChange}
        />
      )}
      <Input
        placeholder="Enter Name"
        value={nameValue}
        handeler={nameValueChange}
      />
    </div>
  );
}

export default JoinRoomInputs;
