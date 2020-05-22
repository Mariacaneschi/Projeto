
import React from 'react';
import './styles.css'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




function Pokedex(props) {

    const selecionados =  props.location.state.selecionados

    return (
        <div className="back h-100">
            <h1> Minha Pokedex</h1>

            <form action="/case" class="inline">
                <button id="adicionar" class="btn btn-button"> Adicionar Pokémons </button> 
            </form>

            <div className = "d-flex flex-wrap justify-content-center">
                {selecionados.map(obj => {
                    return <Square value = {obj.name}/>
                })}
            </div>
        </div>
    )

}

function Square(props){
    
    const value = props.value;    
    return (
        <div >
            {value}
        </div>
    )
}

export default Pokedex;



