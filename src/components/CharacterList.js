/*FILTER Y MAP*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './../styles/characterList.css';


const CharacterList = props => {
    const {AllCharacters, SearchName} = props;
    return (
        <ul className="pokemonList">
            {AllCharacters
                .filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
                .map((item, index) => {
                    return (
                        <li className="pokemon" key={index}>
                            <div className="pokemonName">
                                <Link className="cardLink" to={"/pokemon/" + item.id}> {item.name}
                                </Link>
                            </div>
                                <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}/>
                            <div className="pokemonId">{item.id}</div>
                            <div className="infoContainer">
                                <div className="pokemonTypes">
                                    {item.types.map((typeInfo, index) => {
                                        return (
                                            <span className="pokemonType" key={index}>{typeInfo.type.name}</span>
                                        )
                                    })}
                            </div>
                                <div className="pokemonEvolution">{item.evolvesData != null ? 'Evolution: ' + item.evolvesData.name : ''}</div>
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