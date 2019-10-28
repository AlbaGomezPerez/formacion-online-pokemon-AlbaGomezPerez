import React from 'react';
import { Link } from "react-router-dom";
import './../styles/characterDetailCard.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";


const CharacterDetailCard = props => {
    const {Match, AllCharacters} = props;
    const CharacterId = parseInt(Match.params.id);
    return (
        <TransitionGroup>
            <CSSTransition
                appear={true}
                timeout={500}
                classNames="fade"
            >
        <ul className="cartoonsDetail">
            {AllCharacters
                .filter(myCartoon => myCartoon.id === CharacterId)
                .map(item => {
                    console.log(item.name);
                    return (
                        <div className="cardDetail" key={item.id}>
                            <Link className="detailLink" to={"/"}>
                                <div className="containerName">
                                    <div className="characterNameDetail">{item.name}</div>
                                </div>
                                <ul className="containerCharacterDetail">
                                    <li className="paintCharacterDetail">
                                        <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}/>
                                        <div className="containerFeaturesDetail">
                                            <div className="characterWeightDetail">Weight: {item.weight}</div>
                                            <div className="characterHeightDetail">Height: {item.height}</div>
                                            <div className="characterSkillDetail">Habilidades</div>
                                            <div className="characterEvolutionDetail">Evoluciones</div>
                                            <div className="pokemonTypes">
                                                {item.types.map((typeInfo, index) => {
                                                    return (
                                                        <span className="pokemonType" key={index}>{typeInfo.type.name}</span>
                                                    )
                                                })}
                                            </div>
                                            <div className="backContainer">
                                                <p className="backText"></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    )
                })}
        </ul>
            </CSSTransition>
        </TransitionGroup>
    )

};

export default CharacterDetailCard;