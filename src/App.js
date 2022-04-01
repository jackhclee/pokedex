import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

//import React from "react";

// This is the original one

const App = (props) => {
  // return (<div>
  //   <header>
  //     <h1>Welcome to the Pokedex</h1>
  //     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
  //   </header>
  // </div>)
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (<div id="react-container">
    <Logo appName="Pokedex" />
    <BestPokemon abilities={abilities}/>
    <CaughtPokemon />
    </div>);
};

export default App;
