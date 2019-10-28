import React from 'react';
import Filters from "./Filter";
import CharacterList from "./CharacterList";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Home = props => {
    const {AllCharacters, SearchName, getNameInput} = props;
    return (
        <TransitionGroup>
            <CSSTransition
                appear={true}
                timeout={500}
                classNames="fade"
            >
                <React.Fragment>
                    <Filters
                        SearchName={SearchName}
                        getNameInput={getNameInput}/>
                    <CharacterList
                        AllCharacters={AllCharacters}
                        SearchName={SearchName}
                    />
                </React.Fragment>
            </CSSTransition>
        </TransitionGroup>
    )
};

export default Home;