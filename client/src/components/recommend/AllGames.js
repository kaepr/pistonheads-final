import React from "react";

const AllGames = ({ games }) => {
  return (
    <div>
      <h5>All popular games in this genre</h5>
      {games.map((game, i) => (
        <div key={i}>
          <li>
            <h6>
              Name is : {game.name} &nbsp;
              Genre is : <span>{game.genre}</span>
            </h6>
          </li>
        </div>
      ))}
    </div>
  );
};

export default AllGames;
