import React, { useState } from 'react';
import sadPikachu from '../../assets/sadPikachu.png'
import {
    Button,
    ButtonText, CapitalizedTitle,
    Container, HomeTitle,
    Input,
    PokemonImage,
} from "./Home.styles";
import Abilities from "./Abilities/Abilities";
import {MainTitle, Text} from "../Common/Texts.styles";
import Loading from "../Common/Loading/Loading";
import Error from "../Common/Error/Error";

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
                console.log(response)
                const sortedResponse = response['abilities'].sort(compareAbilities);
                setPokemonAbilities(sortedResponse);
                setPokemon(response['name'])
                setPokemonImage(response['sprites'].front_default)
                setInputValue('')
                setLoading(false);
            })
            .catch(e => {
                setError('Oops, something went wrong, are you sure this pokemon exists?')
                setLoading(false);
            })
    }

    function onChangeHandler(e) {
        setInputValue(e.target.value)
    }

    return (
        <Container>
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input placeholder={'Type here'} type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button onClick={fetchPokemon}>
                <ButtonText>Search</ButtonText>
            </Button>
            {error && (
                <Error errorImage={sadPikachu} errorMessage={error}/>
            )}
            {loading && (
                <Loading/>
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