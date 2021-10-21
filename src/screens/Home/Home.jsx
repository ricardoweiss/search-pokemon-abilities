import React, { useState } from 'react';
import sadPikachu from '../../assets/sadPikachu.png'
import {
    Container,
    Page,
} from "./Home.styles";
import Loading from "../../Components/Common/Loading/Loading";
import Error from "../../Components/Common/Error/Error";
import Searchbar from "../../Components/Home/Searchbar/Searchbar";
import PokeInfo from "../../Components/Home/PokeInfo/PokeInfo";

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
                <Searchbar
                    fetchPokemon={fetchPokemon}
                    onKeyUp={onKeyUp}
                    inputValue={inputValue}
                    onChangeHandler={onChangeHandler}
                />
                {error && (
                    <Error errorImage={sadPikachu} errorMessage={error}/>
                )}
                {loading && (
                    <Loading/>
                )}
                {!emptyList && !loading && (
                    <PokeInfo pokemonAbilities={pokemonAbilities} pokemon={pokemon} pokemonImage={pokemonImage} />
                )}
            </Container>
        </Page>
    )
}

export default Home;