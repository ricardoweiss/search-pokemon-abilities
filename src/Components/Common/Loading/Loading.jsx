import meowLoader from "../../../assets/meowLoader.gif";
import {LoadingContainer, LoadingGIF, LoadingText} from "./Loading.styles";

function Loading() {
    return (
        <LoadingContainer>
            <LoadingGIF src={meowLoader} alt="meow spinner" />
            <LoadingText>carregando...</LoadingText>
        </LoadingContainer>
    )
}

export default Loading;