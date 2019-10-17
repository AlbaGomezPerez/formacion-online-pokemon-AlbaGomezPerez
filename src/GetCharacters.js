/*PRIMERA PARTE DE LA PETICIÓN*/

const url = "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25&offset=1";

const GetCharacters = () => {
    return fetch(url)
        .then(response => response.json());
};

export {GetCharacters};
