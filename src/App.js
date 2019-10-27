import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {GetCharacters} from './services/GetCharacters';
import Home from "./components/Home";
import CharacterDetailCard from "./components/CharacterDetailCard";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllCharacters: [],
            SearchName: ''
        };

        this.getNameInput = this.getNameInput.bind(this);
    }


// Función sirve para pintar la petición al entrar en la página
    componentDidMount() {
        this.getCartoons();
    }

// Función que contiene la segunda parte del fetch, donde se actualiza
// el estado (array). Es llamada en componentDidMount
    getCartoons() {
        GetCharacters()
            .then(data => {
                const promise = data.results.map (item => {
                    return fetch(item.url)
                        .then(response => response.json())
                        .then(pokemonData => {
                            let speciesData= fetch(pokemonData.species.url)
                                .then(response => response.json())
                                .then(evolutionData => {
                                        return evolutionData.evolves_from_species;
                                });
                            pokemonData.evolvesData=speciesData;
                            return pokemonData;
                    });

                });

                return Promise.all(promise);
            })
            .then(info => {
                this.setState({
                    AllCharacters: info,
                });
            })
    }


    //función input.
    getNameInput(event){
        const SearchName = event.currentTarget.value;
        this.setState({
            SearchName: SearchName
        });

    }

    render()
    {
        const {AllCharacters, SearchName} = this.state;
        return (
            <div className="App">
                <header>
                    <h1 className="pokemon-title">My favorite's Pokemon</h1>
                </header>
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={routerProps => (
                                <Home
                                    AllCharacters={AllCharacters}
                                    SearchName={SearchName}
                                    getNameInput={this.getNameInput}
                                />
                            )}
                        />
                        <Route
                            path="/pokemon/:id"
                            render={routerProps => (
                                <CharacterDetailCard
                                    Match={routerProps.match}
                                    AllCharacters={AllCharacters}
                                />
                            )}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
    ;
}
export default App;



