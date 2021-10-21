import React, { useState } from 'react';
import sadPikachu from '../assets/sadPikachu.png'
import {
    Button,
    ButtonText, CapitalizedTitle,
    Container, HomeTitle,
    Input, Page,
    PokemonImage,
} from "./Home.styles";
import Abilities from "../Components/Home/Abilities/Abilities";
import Loading from "../Components/Common/Loading/Loading";
import Error from "../Components/Common/Error/Error";

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function onKeyUp(e) {
        if (e.key === 'Enter') {
            fetchPokemon();
        }
    }

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
        <Page>
            <Container>
                <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
                <Input onKeyUp={onKeyUp} placeholder={'Type here'} type="text" value={inputValue} onChange={onChangeHandler}/>
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
        </Page>

    )
}

export default Home;