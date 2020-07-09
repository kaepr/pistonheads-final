import React, { useState } from "react";
import AllGames from "./AllGames";
import SearchFilter from "./SearchFilter";
import super_meat_boy from "./images/super_meat_boy.jpg";
import "./style.scss";
import bioshock from "./images/bioshock.jpg";
import dishonored from "./images/dishonored.jpg";
import ff7 from "./images/ff7.jpg";
import half_life_2 from "./images/half_life_2.jpg";
import metal_gear from "./images/metal_gear.jpg";
import sekiro from "./images/sekiro.jpg";
import persona_5 from "./images/persona_5.jpg";
import silent_hill_2 from "./images/silent_hill_2.jpg";
import witcher_3 from "./images/witcher_3.jpg";

const Recommend = (props) => {
  const [search, setSearch] = useState("");
  const [games] = useState([
    {
      name: "Super Meat Boy",
      genre: "Platformer",
      img: super_meat_boy,
    },
    {
      name: "Bioshock",
      genre: "FPS, RPG",
      img: bioshock,
    },
    {
      name: "Dishonored",
      genre: "Actio, adventure, Stealth",
      img: dishonored,
    },
    {
      name: "Final Fantasy 7",
      genre: "JRPG",
      img: ff7,
    },
    {
      name: "Half Life 2",
      genre: "FPS",
      img: half_life_2,
    },
    {
      name: "Metal Gear Solid",
      genre: "Action, Adventure, Stealth",
      img: metal_gear,
    },
    {
      name: "Persona 5",
      genre: "JRPG, Simulation",
      img: persona_5,
    },
    {
      name: "Sekiro : Shadows Die Twice",
      genre: "Action, Adventure, Souls-Like",
      img: sekiro,
    },
    {
      name: "Silent Hill 2",
      genre: "Survival, Horror",
      img: silent_hill_2,
    },
    {
      name: "Witcher 3",
      genre: "Action, RPG",
      img: witcher_3,
    },
  ]);

  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (e) => {
    setSearch(e);
    let oldList = games.map((game) => {
      return {
        name: game.name,
        genre: game.genre.toLowerCase(),
        img: game.img,
      };
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
    <div className="container">
      <br />
      <h3>Mention the genre to get recommendations </h3>
      <br />
      <SearchFilter
        value={search}
        handleChange={(e) => handleChange(e.target.value)}
      />
      <AllGames games={search.length < 1 ? games : filterDisplay} />
    </div>
  );
};

export default Recommend;
