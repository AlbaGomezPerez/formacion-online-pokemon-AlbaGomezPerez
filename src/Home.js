import React from 'react';
import Filters from "./Filter";
import CharacterList from "./CharacterList";

const Home = props => {
    const {AllCharacters, SearchName, getNameInput} = props;
    return (
        <React.Fragment>
            <Filters
                SearchName={SearchName}
                getNameInput={getNameInput}/>
            <CharacterList
                AllCharacters={AllCharacters}
                SearchName={SearchName}
            />
        </React.Fragment>
)};

export default Home;