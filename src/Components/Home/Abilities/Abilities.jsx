import React from "react";
import Ability from "./Ability/Ability";


function Abilities({abilities}) {
    return abilities.map((abilities) => {
            const { ability } = abilities;
            const { name } = ability;
            return <Ability key={name} name={name}/>;
        })
}

export default Abilities;
