/*FILTER Y MAP*/
import React from "react";
import PropTypes from 'prop-types';

const CharacterList = props => {
    const {AllCharacters} = props;
    return (
        <ul className="cartoonsList" >
            {AllCharacters
                .map(item => {
                    return (
                        <li  className="cartoon" key={item.id}>
                            {item.name}
                        </li>
                    );
                })}
        </ul>
    );
};

CharacterList.propTypes ={
    AllCharacters: PropTypes.array
};

export default CharacterList;