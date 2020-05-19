import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';
const Header = () => ( 
<header id="main-header"> 
<div id="img"> </div>
<Button variant="contained" id="suporte">
    <div id="suportetexto">Suporte</div>
    </Button>
    <Link to="/case">
<Button variant="contained" id="case">
    <div id="pokemonstexto">Pokemons</div>
    </Button></Link>
    <Link to="/pokedex">
<Button variant="contained" id="pokedex">
    <div id="pokedextexto">Pokedex</div>
    </Button></Link> 
<div id="titulo">Pokedex online</div></header> 
);

export default Header; 
