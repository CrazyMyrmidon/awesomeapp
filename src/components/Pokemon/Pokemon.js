import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  // console.log("Abilities", props.pokemon.abilities.split(", "));
  const { abilities, name, weight, awesome, terrifying } = props
  // const abilitiesArray = abilities.split(", ")
  // ^ You can only Map over Arrays, and you cannot access data before it is initialised

// All of this is, apparently, assigned a value but never used.
// Which makes sense, because there is no data to base that off of.
// Attempt: create separate list.

  return (
    <div className='card shadow-sm mb-4 Pokemon'>
      <div className='card-body pb-0'>
        <h5 className='card-title'>{props.name}</h5>
        <h6 className='card-subtitle mb-3 text-primary'>
          {props.awesome ? "An awesome Pokemon" : "Remarkably average"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? 'Very.' : "Not at all."}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map (ability => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
      }



//     <div>
//       <h2>Pokemon Name: {name}</h2>
//       <p>Weight: {weight} kg</p>
//       <p>Awesome: {awesome ? "Yes!" : "Not really, no."}</p>
//       <p>Terrifying: {terrifying ? "Very." : "It's more lovable than anything else, really."}</p>
//       <p>Abilities:</p>
//       <ul>
//         {abilities.map(ability => {
//           return <li>{ability}</li>
//         })}
//       </ul>
//     </div>
//   );
// }