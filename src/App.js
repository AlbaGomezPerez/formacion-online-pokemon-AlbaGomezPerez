import React from 'react';
import {GetCharacters} from './services/GetCharacters';
import CharacterList from "./components/CharacterList";
import Filters from "./components/Filter";
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
                        .then(response => response.json());
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
                    <Filters
                        SearchName={SearchName}
                        getNameInput={this.getNameInput}
                    />
                    <CharacterList
                        AllCharacters={AllCharacters}
                        SearchName={SearchName}
                    />
                </main>
            </div>
        );
    }
    ;
}
export default App;

