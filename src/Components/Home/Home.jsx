import React, { useState } from 'react';

import meowLoader from '../../assets/meowLoader.gif'
import sadPikachu from '../../assets/sadPikachu.png'
import {
    Button,
    ButtonText, CapitalizedTitle,
    Container, ErrorContainer, ErrorImage,
    Input,
    LoadingContainer, LoadingGIF, LoadingText,
    PokemonImage,
    Title
} from "./Home.styles";
import Abilities from "./Abilities/Abilities";
import {MainTitle, Text} from "../Common/Texts.styles";

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const emptyList = pokemonAbilities.length <= 0

    function compareAbilities(a, b) {
        const abilityA = a.ability.name.toUpperCase()
        const abilityB = b.ability.name.toUpperCase()
        return (abilityA < abilityB) ? -1 : (abilityA > abilityB) ? 1 : 0;
    }

    function fetchPokemon() {
        if (inputValue === '') {
            return;
        }
        setError(false)
        setPokemonAbilities([])
        setLoading(true);
        const lowerCaseValue = inputValue.toLowerCase()
        fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCaseValue}`)
            .then((response) => {
            return response.json();
            })
            .then(response => {
                const sortedResponse = response['abilities'].sort(compareAbilities);
                setPokemonAbilities(sortedResponse);
                setPokemon(inputValue)
                setPokemonImage(response['sprites'].front_default)
                setInputValue('')
                setLoading(false);
            })
            .catch(e => {
                setError(e)
                setLoading(false);
            })
    }

    function onChangeHandler(e) {
        setInputValue(e.target.value)
    }

    return (
        <Container>
            <MainTitle>Please type a pokemon name below to see their abilities</MainTitle>
            <Input placeholder={'Type here'} type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button onClick={fetchPokemon}>
                <ButtonText>Search</ButtonText>
            </Button>
            {error && (
                <ErrorContainer>
                    <ErrorImage src={sadPikachu} alt={'sad pikachu'}/>
                    <Text>Oops, something went wrong, are you sure this pokemon exists?</Text>
                </ErrorContainer>
            )}
            {loading && (
                <LoadingContainer>
                    <LoadingGIF src={meowLoader} alt="meow spinner" />
                    <LoadingText>carregando...</LoadingText>
                </LoadingContainer>
            )}
            {!emptyList && !loading && (
                <>
                    <PokemonImage src={pokemonImage} alt="pokemon image"/>
                    <CapitalizedTitle>{pokemon} Abilities:</CapitalizedTitle>
                    <Abilities abilities={pokemonAbilities}/>
                </>
            )}


        </Container>
    )
}

export default Home;