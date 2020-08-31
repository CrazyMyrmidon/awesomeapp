// src/components/PokemonList.js
import React from "react";
import Pokemon from "./Pokemon/Pokemon";

const PokemonList = props => {
  console.log(props.list);
  const pokemonToRender = props.list.map(poke => <Pokemon pokemon={poke} />);

  return <div>{pokemonToRender}</div>
}

export default PokemonList;

// Haiyaaaaa