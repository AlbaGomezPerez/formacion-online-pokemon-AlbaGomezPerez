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
                            <div className="pokemonImage">
                                <img src={item.sprites.front_default} alt={item.name}/>
                            </div>
                            <div className="cartoonName"> {item.name}</div>
                            <div className="weight">{item.id}</div>
                            <div className="types">
                                {item.types.map(typeInfo => {
                                    return (
                                        <span>{typeInfo.type.name}</span>
                                    )
                                })}
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