/*PETICIÓN INICIAL*/
const url = "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25&offset=0";

const GetCharacters = () => {
    return fetch(url)
        .then(response => response.json());
};


/*SEGUNDA PETICIÓN. Detalles pokemons*/
const GetCharactersDetails = (pokemonDetailUrl) => {
    return fetch(pokemonDetailUrl)
        .then(response => response.json());
};



export {GetCharacters};
export {GetCharactersDetails};
