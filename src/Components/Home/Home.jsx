import React, { useState } from 'react';
import {Button, ButtonText, Container, HomeTitle, Input, Label, PokemonImage, Title} from "./Home.styles";
import Abilities from "./Abilities/Abilities";

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState(false)

    const emptyList = pokemonAbilities.length <= 0

    function fetchPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((response) => {
            return response.json();
            })
            .then(response => {
                console.log(response)
                setPokemonAbilities(response['abilities']);
                setPokemon(inputValue)
                setPokemonImage(response['sprites'].front_default)
                setInputValue('')
            })
            .catch(e => setError(e))
    }

    function onChangeHandler(e) {
        setInputValue(e.target.value)
    }

    return (
        <Container>
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input type="text" value={inputValue} onChange={onChangeHandler}/>
            <Label>{error && 'Pokemon não encontrado'}</Label>
            <Button onClick={fetchPokemon}>
                <ButtonText>Search</ButtonText>
            </Button>
            {!emptyList && (
                <>
                    <PokemonImage src={pokemonImage} alt="pokemon image"/>
                    <Title>{pokemon} Abilities</Title>
                </>
            )}

            <Abilities abilities={pokemonAbilities}/>
        </Container>
    )
}

export default Home;