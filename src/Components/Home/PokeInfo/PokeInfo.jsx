import Abilities from "../Abilities/Abilities";
import React from "react";
import {CapitalizedTitle, PokemonImage} from "./PokeInfo.styles";

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
