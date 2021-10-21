import {AbilityName, AbilityRow} from "./Ability.styles";

function Ability({name}) {
    return (
        <AbilityRow>
            <AbilityName>{name}</AbilityName>
        </AbilityRow>
    )
}

export default Ability