import React, {useState} from 'react';
import {Button, ButtonText, Container, HomeTitle, Input} from "./Home.styles";

function Home() {
    const [inputValue, setInputValue] = useState('')
    function onChangeHandler(e) {
        setInputValue(e.target.value)
    }

    return (
        <Container>
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button>
                <ButtonText>Search</ButtonText>
            </Button>

        </Container>
    )
}

export default Home;