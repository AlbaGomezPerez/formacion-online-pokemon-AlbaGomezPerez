/*FILTER Y MAP*/
import React from "react";
// import PropTypes from 'prop-types';


const CharacterList = props => {
    const {AllCharacters, SearchName} = props;
    // console.log(AllCharacters);
    return (
        <ul className="pokemonList" >
            {AllCharacters
                .filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
                .map((item, index) => {
                    return (
                        <li className="pokemon" key={index}>
                                <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}/>
                            <div className="infoContainer">
                                <div className="pokemonName"> {item.name}</div>
                                <div className="pokemonWeight">{item.id}</div>
                                <div className="pokemonTypes">
                                    {item.types.map(typeInfo => {
                                        return (
                                            <span className="pokemonType">{typeInfo.type.name}</span>
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



// CharacterList.propTypes ={
//     AllCharacters: PropTypes.array
// };



export default CharacterList;