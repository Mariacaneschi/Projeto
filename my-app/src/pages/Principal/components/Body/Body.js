import React from 'react';
import {Carousel} from 'react-bootstrap';
import {carousel} from 'bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';
const Body = () => (
<body id="main-body">
    <div class="central">
    <div id="divrup">
   <div id="meowth">
   <img id="mm" src="https://i.imgur.com/DghKK7X.png"></img>
 <div id="balão">
     <img id="balao" src="https://i.imgur.com/l0w6gLa.png"></img>
     </div>
     </div>
     </div>
<div id="divl">
<div id="carousels" class="carousel-slide" data-ride="carousel" data-interval="6000">
  <ol class="carousel-indicators">
    <li data-target="carousels" data-slide-to="0" class="active"></li>
    <li data-target="carousels" data-slide-to="1"></li>
    <li data-target="carousels" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.imgur.com/LOc195h.jpg" alt="First slide">
    </img></div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.imgur.com/zLIYWVG.jpg" alt="Second slide">
    </img></div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.imgur.com/IicGuLN.jpg" alt="Third slide">
    </img></div>
    <a class="carousel-control-prev" href="carousels" data-slide="prev">  
  </a>
  <a class="carousel-control-next" href="carousels" data-slide="next">
  </a>
</div>
</div>
<img id="pokebola1" src="https://i.imgur.com/FOn6jlT.png"></img>
<div id="propaganda1">Liberdade para escolher e treinar!</div>
<br></br>
<img id="pokebola2" src="https://i.imgur.com/FOn6jlT.png"></img>
<div id="propaganda2">Mais de 100 pokemons da primeira geração!</div>
<br></br>
<img id="pokebola3" src="https://i.imgur.com/FOn6jlT.png"></img>
<div id="propaganda3">Venha ser um treinador pokemon! Clique no botão abaixo!</div>
<br></br>
<Link to="/login">
<Button variant="contained" id="cadastro">
    <div id="cadastrotexto">Cadastre-se aqui!</div>
    </Button></Link> 
    <img id="ash" src="https://www.pngkey.com/png/full/19-195211_original-file-pokemon-diamond-and-pearl-ash.png"></img>
</div>
<div id="divrdown">
<img id="bulba" src="https://i.imgur.com/A5TVcKm.png"></img> </div>
</div>
</body>
)
export default Body;