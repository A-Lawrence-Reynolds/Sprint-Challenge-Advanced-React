import React from "react";
import PlayerCard from "./PlayersCard";
const Players = props => {
  return (
    <div className="player-info">
      {props.playersInfo.map(players => {
        return (
          <PlayerCard
            key={players.id}
            name={players.name}
            country={players.country}
            searches={players.searches}
            id={players.id}
          />
        );
      })}
    </div>
  );
};

export default Players;
