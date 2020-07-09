import React from "react";
import "./style.scss";

const AllGames = ({ games }) => {
  return (
    <div className="container">
      <br />
      <h5>All popular games in this genre</h5>
      {games.map((game, i) => (
        <div key={i} className="profile-card-container">
          <div className="game-image-area">
            <img src={game.img} className="game-image" />
          </div>
          <div className="game-info-area">
            <div className="game-name">Name : {game.name}</div>
            <div className="game-genre">Genre : {game.genre}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllGames;

/*

<img src={game.img} className="game-image" />

*/
