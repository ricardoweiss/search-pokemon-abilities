import React, {useEffect, useState} from 'react';
import {Button, ButtonText, Container, HomeTitle, Input} from "./Home.styles";

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [error, setError] = useState(false)

    function fetchPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((response) => {
            return response.json()
            }).catch(e => setError(true))
            .then(response => {
                setPokemonAbilities(response['abilities']);
                console.log(pokemonAbilities)
            })
    }

    function onChangeHandler(e) {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    return (
        <Container>
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button onClick={fetchPokemon}>
                <ButtonText>Search</ButtonText>
            </Button>
        </Container>
    )
}

export default Home;