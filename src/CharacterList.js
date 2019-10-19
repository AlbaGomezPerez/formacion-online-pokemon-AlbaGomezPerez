/*FILTER Y MAP*/
import React from "react";
// import PropTypes from 'prop-types';


const CharacterList = props => {
    const {AllCharacters, SearchName} = props;
    // console.log(AllCharacters);
    return (
        <ul className="cartoonsList" >
            {AllCharacters
                .filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
                .map((item, index) => {
                    return (
                        <li className="cartoon" key={index}>
                                <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}/>
                            <div className="infoContainer">
                                <div className="cartoonName"> {item.name}</div>
                                <div className="weight">{item.id}</div>
                                <div className="types">
                                    {item.types.map(typeInfo => {
                                        return (
                                            <span className="type">{typeInfo.type.name}</span>
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