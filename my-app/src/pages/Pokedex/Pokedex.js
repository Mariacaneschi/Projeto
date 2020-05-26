import React from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Pokedex(props) {

    let selecionados;
    if (props.location.state) {
        selecionados = props.location.state.selecionados;
    }

    else {
        return (
            <div className="back h-100">
                <div id="header2">
                    <div className="title">
                        <h1 id="titulo2"> Minha Pokedex</h1>
                        <Link id="adicionar" class="btn btn-danger" to={{
                            pathname: '/case',
                        }}> Adicionar Pokémons </Link>
                    </div>
                </div>

                <footer id="quantidade">
                    <br></br>
                    <h5> Você tem 0 Pokémon(s) em sua Pokédex! </h5>
                </footer>
            </div>
        )
    }

    return (
        <div className="back">
            <div id="header2">
                <div className="title">
                    <h1 id="titulo2"> Minha Pokedex</h1>
                    <Link id="adicionar" class="btn btn-danger" to={{
                        pathname: '/case',
                    }}> Adicionar Pokémons </Link>
                </div>
            </div>

            <div className="container_quadrados">
                {selecionados.map(obj => {
                    if (obj.selected)
                        return <Square value={obj.name} image={obj.foto} />
                })}
            </div>

            <footer id="quantidade">
                <br></br>
                <h5> Você tem {selecionados.length} Pokémon(s) em sua Pokédex! </h5>
            </footer>

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



