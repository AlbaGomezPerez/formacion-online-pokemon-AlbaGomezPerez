import React from 'react';
import './App.css';
import {GetCharacters, GetCharactersDetails} from './services/GetCharacters';
import CharacterList from "./CharacterList";
import Filters from "./Filter";

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
                for (let item of data.results) {
                    GetCharactersDetails(item.url).then(pokemonData => {
                        this.setState({
                            AllCharacters: [...this.state.AllCharacters, pokemonData]
                        })
                    })

                }
    //
            });
    }

        getNameInput(event){
            const SearchName = event.currentTarget.value;
            this.setState({
                SearchName: SearchName
            });

        }

        // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.

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

