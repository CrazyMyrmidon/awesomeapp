// import React from "react";
// import Pokemon from "./components/Pokemon/";

const all_pokemon = [
  {name: "Gardevoir (MEGA)", weight: 46.4},
  {name: "Swampert (MEGA)", weight: 81.9},
  {name: "Bulbasaur", weight: 6.9},
  {name: "Mewtwo", weight: 122},
  {name: "Beedrill (MEGA)", weight: 65}
];

const res = all_pokemon.map(pokemon => {
  return `${pokemon.name}: ${pokemon.weight}`;
});
console.log(res);
