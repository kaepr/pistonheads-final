import React, { useState } from "react";
import AllGames from "./AllGames";
import SearchFilter from "./SearchFilter";

const Recommend = (props) => {
  const [search, setSearch] = useState("");
  const [games] = useState([
    {
      name: "Super Meat Boy",
      genre: "platformer",
    },
    {
      name: "Half Life",
      genre: "fps",
    },
    {
      name: "Persona 4 Golden",
      genre: "rpg",
    },
    {
      name: "Street Fighter 5",
      genre: "fighting",
    },
    {
      name: "Death Stranding",
      genre: "strand",
    },
  ]);

  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (e) => {
    setSearch(e);
    let oldList = games.map((game) => {
      return { name: game.name.toLowerCase(), genre: game.genre.toLowerCase() };
    });

    if (search !== "") {
      let newList = [];
      newList = oldList.filter((game) =>
        game.genre.includes(search.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(games);
    }
  };

  return (
    <div>
      <h3>Mention the genre to get recommendations </h3>

      <SearchFilter
        value={search}
        handleChange={(e) => handleChange(e.target.value)}
      />
      <AllGames games={search.length < 1 ? games : filterDisplay} />
    </div>
  );
};


export default Recommend;
