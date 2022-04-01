import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {

    const fruitPokemons = ["Apple", "Banana", "Cherry"];

    const getFruitPokemon = () => fruitPokemons[Math.round(Math.random() * (fruitPokemons.length-1))];

    const [pokemons, setPokemons] = useState([]);

    function catchPokemon() {
        setPokemons((pokemons) => pokemons.concat(getFruitPokemon() + "-" + (pokemons.length + 1)));
    }

    let now = new Date();
    return (
        <div>
            <h1>Caught {pokemons.length} Pokemon on {now.toLocaleDateString()}</h1>
            <ul>
                {pokemons.map((pokemon) => <li key={pokemon}>{pokemon}</li>)}
            </ul>
            <button onClick={catchPokemon}>Catch Pokemon</button>
        </div>
    );
};

export default CaughtPokemon;

