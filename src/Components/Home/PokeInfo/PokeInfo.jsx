import {CapitalizedTitle, PokemonImage} from "../../../screens/Home/Home.styles";
import Abilities from "../Abilities/Abilities";
import React from "react";

function PokeInfo({pokemon, pokemonAbilities, pokemonImage}) {
    return (
        <>
            <PokemonImage src={pokemonImage} alt="pokemon image"/>
            <CapitalizedTitle>{pokemon} Abilities:</CapitalizedTitle>
            <Abilities abilities={pokemonAbilities}/>
        </>
    )
}

export default PokeInfo;