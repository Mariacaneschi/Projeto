
import React from 'react';
import './styles.css'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



function Pokedex() {
    return (
        <div className="back h-100">
            <form action="/case" class="inline">
                <button id="adicionar" class="btn btn-button"> Adicionar Pokémons </button>
            </form>
            <h1> Minha Pokedex</h1>
        </div>
    )

}

export default Pokedex;



