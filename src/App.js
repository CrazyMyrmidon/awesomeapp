import React from 'react';
// import PokemonList from './components/PokemonList';
// import logo from './logo.svg';
import Title from './components/Title'
import Pokemon from './components/Pokemon/Pokemon.js'
import './style/global.scss';

const pokemons = [
  {
    name: "Gardevoir (MEGA)",
    weight: 46.4,
    awesome: true, 
    terrifying: true,
    abilities: ["Synchronise", "Trace", "Telepathy", "(Pixilate)"]
  },
  {
    name: "Swampert (MEGA)",
    weight: 81.9,
    awesome: true,
    terrifying: true,
    abilities: ["Torrent", "Damp", "(Swift Swim)"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Beedrill (MEGA)",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  },
  {
    name: "Magikarp",
    weight: 10,
    awesome: false,
    terrifying: false,
    abilities: ["Swift Swim", "Rattled"]
  }
]

function App() {
//   const pokemonsToRender = pokemons.map(props => 
//     <Pokemon
//       name={props.name}
//       abilities={props.abilities}
//       weight={props.weight}
//       awesome={props.awesome}
//       terrifying={props.terrifying}
//   />)
//   return (
//     <div className="App">
//       <main>
//         <Title content ="I Will Slap This Program Silly At Some Point"/>
//       </main>
//       <p className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World! How are you today?
//         </a>
//         <p>I see we're going to be making a social-media clone this week. Maybe a meme video competition?</p>
//         <h2>Did you see the new Uncle Roger video? :'D</h2>
//       </p>
//       <main>
//         {pokemonsToRender}
//       </main>
//     </div>
//   );

const totalWeight = pokemons.reduce((acc, poke) => {
  return acc + poke.weight;
}, 0);

console.log("Total: ", totalWeight);
return (
  <main className="container">
    <Title content="My Pokemon Opinions" />
    <div className="row">
      {pokemons.map(pokemon => (
        <div className="my-3 mb-4 col-md-6 col-lg-4">
          <Pokemon
          name={pokemon.name}
          weight={pokemon.weight}
          awesome={pokemon.awesome}
          terrifying={pokemon.terrifying}
          abilities={pokemon.abilities}
          />
        </div>
      ))}
    </div>
  </main>
  // <div className='App'>
  //   <header className='App-header'>
  //     <h2>Total Weight: {totalWeight}</h2>
  //     <PokemonList list={pokemons} />
  //   </header>

  // </div>
)

// return (
//   <main className="container">
//     <Title content="Something Something Pokemon" />
//     <div className="row">
//       {PokemonList.map(pokemon => (
//         <div className="col-md-6 col-lg-4">
//           <Pokemon
//           name={pokemon.name}
//           weight={pokemon.weight}
//           awesome={pokemon.awesome}
//           terrifying={pokemon.terrifying}
//           abilities={pokemon.abilities}
//           />
//         </div>
//       ))}
//     </div>
//   </main>
// )
}

export default App;
