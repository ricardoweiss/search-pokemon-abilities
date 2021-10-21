import Button from "../../Common/Button/Button";
import React from "react";
import {HomeTitle, Input} from "./Searchbar.styles";

function Searchbar({onKeyUp, fetchPokemon, inputValue, onChangeHandler}) {
    return (
        <>
            <HomeTitle>Please type a pokemon name below to see their abilities</HomeTitle>
            <Input onKeyUp={onKeyUp} placeholder={'Type here'} type="text" value={inputValue} onChange={onChangeHandler}/>
            <Button onClickHandler={fetchPokemon}>Search</Button>
        </>

    )
}

export default Searchbar;
