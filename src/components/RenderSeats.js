import React from "react";

const RenderSeats = props => {
  const seatBooked = props.allocatedseat.includes(props.number + 1);
  return (
    <div
      className={`seats text-center ${seatBooked ? "active" : ""}`}
      seatno={props.number + 1}
      onClick={props.handleSeatClick}
    >
      {props.number + 1}
    </div>
  );
};

export { RenderSeats as default };
