
import {Text} from "../Texts.styles";
import {ErrorContainer, ErrorImage} from "./Error.styles";

function Error({errorMessage, errorImage}) {
    return (
        <ErrorContainer>
            <ErrorImage src={errorImage} alt={'sad pikachu'}/>
            <Text>{errorMessage}</Text>
        </ErrorContainer>
    )
}

export default Error;