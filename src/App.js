import React from 'react';
import './App.css';
import {GetCharacters} from './GetCharacters';
import CharacterList from "./CharacterList";

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            AllCharacters: []
        };

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

                this.setState({
                    AllCharacters : data.results
                });
            });
    }

    render() {
    const {AllCharacters} = this.state;
    return (
        <div className="App">
            <header>
                <h1 className="Title">Hola</h1>
            </header>
            <main>
                <CharacterList
                AllCharacters={AllCharacters}/>
            </main>
        </div>
    );
};
}
export default App;

