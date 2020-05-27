import React from "react";
import { Carousel } from "react-bootstrap";
import { carousel } from "bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mobile.css";
import Login from "../Login/Login";

const Mobile = () => (
  <div className="tudo">
    <header id="headermobile">
        <div id="img4">
      <div id="titulo5">Pokedex online</div>
      </div>
        </header>
        <body id="boydzera">
       <div id="divrupmobile">
         <Login className="login"></Login>
         <div id="bemvindo"> SEJA BEM VINDO À MAIS NOVA POKEDEX</div>
         <img id="bulbas" src="https://i.imgur.com/A5TVcKm.png"></img>
       </div>
     </body>
        </div>
);
export default Mobile;