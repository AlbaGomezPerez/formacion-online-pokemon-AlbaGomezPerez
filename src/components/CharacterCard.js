import React from 'react';

// estructura tarjeta personaje
const CharacterCard = props => {
    const {name, id} = props;
    return (
        <div className="card">
            <ul className="ContainerCharacter" key={id}>
                <li className="PaintCharacter">
                    <div className="CharacterName">{name}</div>
                </li>
            </ul>
        </div>
    );
};

// estructura de como es la tarjeta. Nombre, imagen...
export default CharacterCard;
