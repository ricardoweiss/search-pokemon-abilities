import React, { useState } from 'react';

import meowLoader from '../../assets/meowLoader.gif'
import sadPikachu from '../../assets/sadPikachu.png'
import {
    Button,
    ButtonText,
    Container, ErrorContainer, ErrorImage, ErrorText,
    HomeTitle,
    Input,
    LoadingContainer, LoadingGIF, LoadingText,
    PokemonImage,
    Title
} from "./Home.styles";
import Abilities from "./Abilities/Abilities";

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const emptyList = pokemonAbilities.length <= 0

    function fetchPokemon() {
        setPokemonAbilities([])
        setLoading(true);
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
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button onClick={fetchPokemon}>
                <ButtonText>Search</ButtonText>
            </Button>
            {error && (
                <ErrorContainer>
                    <ErrorImage src={sadPikachu} alt={'sad pikachu'}/>
                    <ErrorText>Oops, something went wrong, are you sure this pokemon exists?</ErrorText>
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
                    <Title>{pokemon} Abilities</Title>
                    <Abilities abilities={pokemonAbilities}/>
                </>
            )}


        </Container>
    )
}

export default Home;