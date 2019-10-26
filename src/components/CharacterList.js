/*FILTER Y MAP*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import CharacterCard from "./CharacterCard";


const CharacterList = props => {
    const {AllCharacters, SearchName} = props;
    return (
        <ul className="pokemonList">
            {AllCharacters
                .filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
                .map((item, index) => {
                    return (
                        <li className="pokemon" key={index}>
                                <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}/>
                            <div className="pokemonId">{item.id}</div>
                            <div className="infoContainer">
                                <div className="pokemonName">
                                    <Link className="CardLink" to={"/pokemon/" + item.id}> {item.name}
                                            <CharacterCard>
                                                name={item.name}
                                                id={item.id}/>
                                            </CharacterCard>
                                    </Link>
                                </div>
                                <div className="pokemonTypes">
                                    {item.types.map((typeInfo, index) => {
                                        return (
                                            <span className="pokemonType" key={index}>{typeInfo.type.name}</span>
                                        )
                                    })}
                            </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};

CharacterList.propTypes ={
    AllCharacters: PropTypes.array
};

export default CharacterList;