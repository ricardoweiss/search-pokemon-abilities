import React from "react";
import {ButtonContainer, ButtonText} from "./Button.styles";

function Button({onClickHandler, children}) {
    return (
        <ButtonContainer onClick={onClickHandler}>
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

export default Button;