import React from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Pokedex(props) {

    let selecionados;
    if (props.location.state) {
        selecionados = props.location.state.selecionados;
        selecionados.sort(function (a, b) {
            return (a.name > b.name) ? 1 : ((b.name > a.nome) ? -1 : 0);
        });
    }

    else {
        return (
            <div className="back h-100">
                <div className="title">
                    <h1> Minha Pokedex</h1>
                    <Link id="adicionar" class="btn btn-danger" to={{
                        pathname: '/case',
                    }}> Adicionar Pokémons </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="back">
            <div className="title">
                <h1> Minha Pokedex</h1>
                <Link id="adicionar" class="btn btn-danger" to={{
                    pathname: '/case',
                }}> Adicionar Pokémons </Link>
            </div>

            <div className="container_quadrados">
                {selecionados.map(obj => {
                    if (obj.selected)
                        return <Square value={obj.name} image={obj.foto} />
                })}
            </div>

        </div>
    )

}



function Square(props) {

    const value = props.value;
    const image = props.image;
    return (
        <div id="quadrs" className="d-flex flex-wrap justify-content-center">
            <div id="np"> {value} </div>
            <img className="pokefotos" src={image}></img>
        </div>

    )
}


export default Pokedex;



