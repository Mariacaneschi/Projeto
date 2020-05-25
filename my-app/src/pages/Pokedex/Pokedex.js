
import React from 'react';
import './styles.css'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'; 




function Pokedex(props) {

    //const selecionados =  props.location.state.selecionados


    let selecionados;
    if(props.location.state) selecionados = props.location.state.selecionados
    else {return (
    
    <div className="back h-100">
    <h1> Minha Pokedex</h1>

    
    <Link id="adicionar" class="btn btn-danger"  to={{
    pathname: '/case',
    }}> Adicionar Pokémons </Link>



</div>
)}

    return (
        <div className="back h-100">
            <h1> Minha Pokedex</h1>

            
            <Link id="adicionar" class="btn btn-danger"  to={{
            pathname: '/case',
            }}> Adicionar Pokémons </Link>

        


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
        <div id = "quadrs" className = "d-flex flex-wrap justify-content-center">
            {value}
        </div>


    )
}

export default Pokedex;



