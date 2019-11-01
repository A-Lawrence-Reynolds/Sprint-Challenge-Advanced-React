import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <div className="players-card">
        <h1>Name: {props.name}</h1>
        <h2>Country: {props.country}</h2>
        <h2>Number of searches:{props.searches}</h2>
      </div>
    </div>
  );
};
export default PlayerCard;
