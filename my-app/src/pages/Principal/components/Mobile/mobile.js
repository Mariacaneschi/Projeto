import React from "react";
import { Carousel } from "react-bootstrap";
import { carousel } from "bootstrap";
import { Link } from "react-router-dom";
import "./mobile.css";
import Login from "../Login/Login";
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
 
const MenuPopupState = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <div>
      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
        Menu Inicial
      </Button>
      <Menu {...bindMenu(popupState)}>
        <a href="https://www.pokemon.com/br/"> <MenuItem onClick={popupState.close}>Página Oficial</MenuItem> </a>
        <Link to="/pokedex"> <MenuItem onClick={popupState.close}>Pokedex</MenuItem></Link>
        <Link to="/case"><MenuItem onClick={popupState.close}>Case</MenuItem></Link>
      </Menu>
    </div>
  )
}

const Mobile = () => (
  <div className="tudo">
    <header id="headermobile">
        <div id="img4">
      <div id="titulo5">Pokedex online</div>
      </div>
        </header>
        <MenuPopupState/> 
        
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