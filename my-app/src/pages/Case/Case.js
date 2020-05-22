import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 


const DATA = [
  {
    name: 'Bulbasaur',
    
  },

  {
    name: 'Ivysaur',
    
  },
  {
    name: 'Venusaur',
    
  },
  {
    name: 'Charmander',
    seleted: false
  },
  {
    name: 'Charmeleon',
    seleted: false
  },
  {
    name: 'Charizard',
    seleted: false
  },
  {
    name: 'Squirtle',
    seleted: false
  },
  {
    name: 'Wartortle',
    seleted: false
  },
  {
    name: 'Blastoise',
    seleted: false
  },
  {
    name: 'Caterpie',
    seleted: false
  },
  {
    name: 'Metapod',
    seleted: false
  },
  {
    name: 'Butterfree',
    seleted: false
  },
  {
    name: 'Weedle',
    seleted: false
  },
  {
    name: 'Kakuna',
    seleted: false
  },
  {
    name: 'Beedrill',
    seleted: false
  },
  {
    name: 'Pidgey',
    seleted: false
  },
  {
    name: 'Pidgeotto',
    seleted: false
  },
  {
    name: 'Pidgeot',
    seleted: false
  },
  {
    name: 'Rattata',
    seleted: false
  },
  {
    name: 'Raticate',
    seleted: false
  },
  {
    name: 'Spearow',
    seleted: false
  },
  {
    name: 'Fearow',
    seleted: false
  },
  {
    name: 'Ekans',
    seleted: false
  },
  {
    name: 'Arbok',
    seleted: false
  },
  {
    name: 'Pikachu',
    seleted: false
  },
  {
    name: 'Raichu',
    seleted: false
  },
  {
    name: 'Sandshrew',
    seleted: false
  },
  {
    name: 'Sandslash',
    seleted: false
  },
  {
    name: 'Nidoran',
    seleted: false
  },
  {
    name: 'Nidorina',
    seleted: false
  },
  {
    name: 'Nidoqueen',
    seleted: false
  },
  {
    name: 'Nidoran',
    seleted: false
  },
  {
    name: 'Nidorino',
    seleted: false
  },
  {
    name: 'Nidoking',
    seleted: false
  },
  {
    name: 'Clefairy',
    seleted: false
  },
  {
    name: 'Clefable',
    seleted: false
  },
  {
    name: 'Vulpix',
    seleted: false
  },
  {
    name: 'Ninetales',
    seleted: false
  },
  {
    name: 'Jigglypuff',
    seleted: false
  },
  {
    name: 'Wigglytuff',
    seleted: false
  },
  {
    name: 'Zubat',
    seleted: false
  },
  {
    name: 'Golbat',
    seleted: false
  },
  {
    name: 'Oddish',
    seleted: false
  },
  {
    name: 'Gloom',
    seleted: false
  },
  {
    name: 'Vileplume',
    seleted: false
  },
  {
    name: 'Paras',
    seleted: false
  },
  {
    name: 'Parasect',
    seleted: false
  },
  {
    name: 'Venonat',
    seleted: false
  },
  {
    name: 'Venomoth',
    seleted: false
  },
  {
    name: 'Diglett',
    seleted: false
  },
  {
    name: 'Dugtrio',
    seleted: false
  },
  {
    name: 'Meowth',
    seleted: false
  },
  {
    name: 'Persian',
    seleted: false
  },
  {
    name: 'Psyduck',
    seleted: false
  },
  {
    name: 'Golduck',
    seleted: false
  },
  {
    name: 'Mankey',
    seleted: false
  },
  {
    name: 'Primeape',
    seleted: false
  },
  {
    name: 'Growlithe',
    seleted: false
  },
  {
    name: 'Arcanine',
    seleted: false
  },
  {
    name: 'Poliwag',
    seleted: false
  },
  {
    name: 'Poliwhirl',
    seleted: false
  },
  {
    name: 'Poliwrath',
    seleted: false
  },
  {
    name: 'Abra',
    seleted: false
  },
  {
    name: 'Kadabra',
    seleted: false
  },
  {
    name: 'Alakazam',
    seleted: false
  },
  {
    name: 'Machop',
    seleted: false
  },
  {
    name: 'Machoke',
    seleted: false
  },
  {
    name: 'Machamp',
    seleted: false
  },
  {
    name: 'Bellsprout',
    seleted: false
  },
  {
    name: 'Weepinbell',
    seleted: false
  },
  {
    name: 'Victreebel',
    seleted: false
  },
  {
    name: 'Tentacool',
    seleted: false
  },
  {
    name: 'Tentacruel',
    seleted: false
  },
  {
    name: 'Geodude',
    seleted: false
  },
  {
    name: 'Graveler',
    seleted: false
  },
  {
    name: 'Golem',
    seleted: false
  },
  {
    name: 'Ponyta',
    seleted: false
  },
  {
    name: 'Rapidash',
    seleted: false
  },
  {
    name: 'Slowpoke',
    seleted: false
  },
  {
    name: 'Slowbro',
    seleted: false
  },
  {
    name: 'Magnemite',
    seleted: false
  },
  {
    name: 'Magneton',
    seleted: false
  },
  {
    name: 'Farfetchd',
    seleted: false
  },
  {
    name: 'Doduo',
    seleted: false
  },
  {
    name: 'Dodrio',
    seleted: false
  },
  {
    name: 'Seel',
    seleted: false
  },
  {
    name: 'Dewgong',
    seleted: false
  },
  {
    name: 'Grimer',
    seleted: false
  },
  {
    name: 'Muk',
    seleted: false
  },
  {
    name: 'Shellder',
    seleted: false
  },
  {
    name: 'Cloyster',
    seleted: false
  },
  {
    name: 'Gastly',
    seleted: false
  },
  {
    name: 'Haunter',
    seleted: false
  },
  {
    name: 'Gengar',
    seleted: false
  },
  {
    name: 'Onix',
    seleted: false
  },
  {
    name: 'Drowzee',
    seleted: false
  },
  {
    name: 'Hypno',
    seleted: false
  },
  {
    name: 'Krabby',
    seleted: false
  },
  {
    name: 'Kingler',
    seleted: false
  },
  {
    name: 'Voltorb',
    seleted: false
  },
  {
    name: 'Electrode',
    seleted: false
  },
  {
    name: 'Exeggcute',
    seleted: false
  },
  {
    name: 'Exeggutor',
    seleted: false
  },
  {
    name: 'Cubone',
    seleted: false
  },
  {
    name: 'Marowak',
    seleted: false
  },
  {
    name: 'Hitmonlee',
    seleted: false
  },
  {
    name: 'Hitmonchan',
    seleted: false
  },
  {
    name: 'Lickitung',
    seleted: false
  },
  {
    name: 'Koffing',
    seleted: false
  },
  {
    name: 'Weezing',
    seleted: false
  },
  {
    name: 'Rhyhorn',
    seleted: false
  },
  {
    name: 'Rhydon',
    seleted: false
  },
  {
    name: 'Chansey',
    seleted: false
  },
  {
    name: 'Tangela',
    seleted: false
  },
  {
    name: 'Kangaskhan',
    seleted: false
  },
  {
    name: 'Horsea',
    seleted: false
  },
  {
    name: 'Seadra',
    seleted: false
  },
  {
    name: 'Goldeen',
    seleted: false
  },
  {
    name: 'Seaking',
    seleted: false
  },
  {
    name: 'Staryu',
    seleted: false
  },
  {
    name: 'Starmie',
    seleted: false
  },
  {
    name: 'Mr. Mime',
    seleted: false
  },
  {
    name: 'Scyther',
    seleted: false
  },
  {
    name: 'Jynx',
    seleted: false
  },
  {
    name: 'Electabuzz',
    seleted: false
  },
  {
    name: 'Magmar',
    seleted: false
  },
  {
    name: 'Pinsir',
    seleted: false
  },
  {
    name: 'Tauros',
    seleted: false
  },
  {
    name: 'Magikarp',
    seleted: false
  },
  {
    name: 'Gyarados',
    seleted: false
  },
  {
    name: 'Lapras',
    seleted: false
  },
  {
    name: 'Ditto',
    seleted: false
  },
  {
    name: 'Eevee',
    seleted: false
  },
  {
    name: 'Vaporeon',
    seleted: false
  },
  {
    name: 'Jolteon',
    seleted: false
  },
  {
    name: 'Flareon',
    seleted: false
  },
  {
    name: 'Porygon',
    seleted: false
  },
  {
    name: 'Omanyte',
    seleted: false
  },
  {
    name: 'Omastar',
    seleted: false
  },
  {
    name: 'Kabuto',
    seleted: false
  },
  {
    name: 'Kabutops',
    seleted: false
  },
  {
    name: 'Aerodactyl',
    seleted: false
  },
  {
    name: 'Snorlax',
    seleted: false
  },
  {
    name: 'Articuno',
    seleted: false
  },
  {
    name: 'Zapdos',
    seleted: false
  },
  {
    name: 'Moltres',
    seleted: false
  },
  {
    name: 'Dratini',
    seleted: false
  },
  {
    name: 'Dragonair',
    seleted: false
  },
  {
    name: 'Dragonite',
    seleted: false
  },
  {
    name: 'Mewtwo',
    seleted: false
  },
  {
    name: 'Mew',
    seleted: false
  },
];

function App() {

  const [data, setData] = useState(DATA);

  const [selecionados, setSelecionados] = useState([])

  function addpokemon (pokemon){
    setSelecionados(selecionados.push(pokemon))
  }

  function handleClick(index) {

    setSelecionados([...selecionados, data[index]])
    const newData = [...data];
    const item = newData[index];

    item.seleted = !item.seleted;

    setData(newData);
    
  
    console.log(selecionados);

  }

  


  return (
    <div className="App h-100">
      <div>

        
        <h1 id = "titulo" className="d-flex flex-wrap justify-content-center"> Selecione os Pokémons: </h1>

        <form action="/pokedex" class="inline">
                <button id="voltar" class="btn btn-outline-danger"> Voltar </button>
            </form>

        <Link id="selecionar" class="btn btn-danger"  to={{
            pathname: '/pokedex',
            state: {
              selecionados: selecionados
            }}}> Selecionar </Link>

        

        <div id = "quadrados" className="d-flex flex-wrap justify-content-center">
          {data.map((obj, index) => {
            return <Square value={obj.name} _selected={obj.seleted} onClick={() => handleClick(index)} addpokemon = {addpokemon} />
          })}
        </div>
      </div>
    </div>
  );
}

function Square(props) {
  const { value, _selected, onClick } = props;

  const [selected, setSelected] = useState(_selected);

  useEffect(() => {
    setSelected(_selected);
  }, [_selected]);

  const style = {
    borderRadius: '30px',
    margin: '5px',
    borderTop: '30px'
  };

  if (selected)
    style.backgroundColor = 'green';
  else
    style.backgroundColor = 'slategray';

  //console.log(style.padding)

  return (
    <div className='square d-flex justify-content-center align-items-center' style={style}>
      <button id="botoes" onClick={() => onClick()} >{value}</button>
    </div>
  )
}

export default App;