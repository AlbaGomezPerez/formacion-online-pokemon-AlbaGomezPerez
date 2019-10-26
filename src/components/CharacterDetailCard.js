import React from 'react';
import { Link } from "react-router-dom";


const CharacterDetailCard = props => {
    const {Match, AllCharacters} = props;
    const CharacterId = parseInt(Match.params.id);
    return (
        <ul className="CartoonsDetail">
            {AllCharacters
                .filter(myCartoon => myCartoon.id === CharacterId)
                .map(item => {
                    console.log(item.name);
                    return (
                        <div className="cardDetail" key={item.id}>
                            <Link className="DetailLink" to={"/"}>
                                <ul className="ContainerCharacterDetail">
                                    <li className="PaintCharacterDetail">Hola
                                        <div className="ContainerFeaturesDetail">
                                            <div className="CharacterNameDetail">{item.name}</div>
                                            <div className="BackContainer">
                                                <p className="BackText">Go back</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    )
                })}
        </ul>
    )

};

export default CharacterDetailCard;