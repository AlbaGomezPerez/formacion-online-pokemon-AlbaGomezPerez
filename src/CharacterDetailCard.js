import React from 'react';
import { Link } from "react-router-dom";


const CharacterDetailCard = props => {
    const {AllCharacters, Match} = props;
    const CharacterId = parseInt(Match.params.id);

    return(
        <div>
            <div>{CharacterId}</div>
            <Link to={"/"}>
                Vuelve atrás
            </Link>
        </div>
    )

}

export default CharacterDetailCard;