import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import { ButtonBase } from '@material-ui/core';



const DATA = [
  { 
    name: 'Bulbasaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    
  },

  {
    name: 'Ivysaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    
  },
  {
    name: 'Venusaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
  },
  {
    name: 'Charmander',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    seleted: false
    
  },
  {
    name: 'Charmeleon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    seleted: false
  },
  {
    name: 'Charizard',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    seleted: false
  },
  {
    name: 'Squirtle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    seleted: false
  },
  {
    name: 'Wartortle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    seleted: false
  },
  {
    name: 'Blastoise',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    seleted: false
  },
  {
    name: 'Caterpie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    seleted: false
  },
  {
    name: 'Metapod',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    seleted: false
  },
  {
    name: 'Butterfree',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    seleted: false
  },
  {
    name: 'Weedle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    seleted: false
  },
  {
    name: 'Kakuna',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    seleted: false
  },
  {
    name: 'Beedrill',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    seleted: false
  },
  {
    name: 'Pidgey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    seleted: false
  },
  {
    name: 'Pidgeotto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    seleted: false
  },
  {
    name: 'Pidgeot',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    seleted: false
  },
  {
    name: 'Rattata',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    seleted: false
  },
  {
    name: 'Raticate',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    seleted: false
  },
  {
    name: 'Spearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    seleted: false
  },
  {
    name: 'Fearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    seleted: false
  },
  {
    name: 'Ekans',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    seleted: false
  },
  {
    name: 'Arbok',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    seleted: false
  },
  {
    name: 'Pikachu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    seleted: false
  },
  {
    name: 'Raichu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    seleted: false
  },
  {
    name: 'Sandshrew',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    seleted: false
  },
  {
    name: 'Sandslash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    seleted: false
  },
  {
    name: 'Nidoran F',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    seleted: false
  },
  {
    name: 'Nidorina',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    seleted: false
  },
  {
    name: 'Nidoqueen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    seleted: false
  },
  {
    name: 'Nidoran M',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    seleted: false
  },
  {
    name: 'Nidorino',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    seleted: false
  },
  {
    name: 'Nidoking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    seleted: false
  },
  {
    name: 'Clefairy',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    seleted: false
  },
  {
    name: 'Clefable',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    seleted: false
  },
  {
    name: 'Vulpix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    seleted: false
  },
  {
    name: 'Ninetales',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
    seleted: false
  },
  {
    name: 'Jigglypuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    seleted: false
  },
  {
    name: 'Wigglytuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
    seleted: false
  },
  {
    name: 'Zubat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
    seleted: false
  },
  {
    name: 'Golbat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
    seleted: false
  },
  {
    name: 'Oddish',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
    seleted: false
  },
  {
    name: 'Gloom',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
    seleted: false
  },
  {
    name: 'Vileplume',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
    seleted: false
  },
  {
    name: 'Paras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
    seleted: false
  },
  {
    name: 'Parasect',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
    seleted: false
  },
  {
    name: 'Venonat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
    seleted: false
  },
  {
    name: 'Venomoth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
    seleted: false
  },
  {
    name: 'Diglett',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    seleted: false
  },
  {
    name: 'Dugtrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
    seleted: false
  },
  {
    name: 'Meowth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
    seleted: false
  },
  {
    name: 'Persian',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
    seleted: false
  },
  {
    name: 'Psyduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    seleted: false
  },
  {
    name: 'Golduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
    seleted: false
  },
  {
    name: 'Mankey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
    seleted: false
  },
  {
    name: 'Primeape',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
    seleted: false
  },
  {
    name: 'Growlithe',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
    seleted: false
  },
  {
    name: 'Arcanine',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
    seleted: false
  },
  {
    name: 'Poliwag',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    seleted: false
  },
  {
    name: 'Poliwhirl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
    seleted: false
  },
  {
    name: 'Poliwrath',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
    seleted: false
  },
  {
    name: 'Abra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
    seleted: false
  },
  {
    name: 'Kadabra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
    seleted: false
  },
  {
    name: 'Alakazam',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    seleted: false
  },
  {
    name: 'Machop',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
    seleted: false
  },
  {
    name: 'Machoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
    seleted: false
  },
  {
    name: 'Machamp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    seleted: false
  },
  {
    name: 'Bellsprout',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
    seleted: false
  },
  {
    name: 'Weepinbell',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
    seleted: false
  },
  {
    name: 'Victreebel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
    seleted: false
  },
  {
    name: 'Tentacool',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
    seleted: false
  },
  {
    name: 'Tentacruel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
    seleted: false
  },
  {
    name: 'Geodude',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
    seleted: false
  },
  {
    name: 'Graveler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
    seleted: false
  },
  {
    name: 'Golem',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
    seleted: false
  },
  {
    name: 'Ponyta',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
    seleted: false
  },
  {
    name: 'Rapidash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
    seleted: false
  },
  {
    name: 'Slowpoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
    seleted: false
  },
  {
    name: 'Slowbro',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
    seleted: false
  },
  {
    name: 'Magnemite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
    seleted: false
  },
  {
    name: 'Magneton',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
    seleted: false
  },
  {
    name: 'Farfetchd',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
    seleted: false
  },
  {
    name: 'Doduo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
    seleted: false
  },
  {
    name: 'Dodrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
    seleted: false
  },
  {
    name: 'Seel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
    seleted: false
  },
  {
    name: 'Dewgong',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
    seleted: false
  },
  {
    name: 'Grimer',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
    seleted: false
  },
  {
    name: 'Muk',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
    seleted: false
  },
  {
    name: 'Shellder',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
    seleted: false
  },
  {
    name: 'Cloyster',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
    seleted: false
  },
  {
    name: 'Gastly',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
    seleted: false
  },
  {
    name: 'Haunter',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
    seleted: false
  },
  {
    name: 'Gengar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    seleted: false
  },
  {
    name: 'Onix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
    seleted: false
  },
  {
    name: 'Drowzee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
    seleted: false
  },
  {
    name: 'Hypno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
    seleted: false
  },
  {
    name: 'Krabby',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
    seleted: false
  },
  {
    name: 'Kingler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
    seleted: false
  },
  {
    name: 'Voltorb',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
    seleted: false
  },
  {
    name: 'Electrode',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
    seleted: false
  },
  {
    name: 'Exeggcute',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
    seleted: false
  },
  {
    name: 'Exeggutor',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
    seleted: false
  },
  {
    name: 'Cubone',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
    seleted: false
  },
  {
    name: 'Marowak',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png',
    seleted: false
  },
  {
    name: 'Hitmonlee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
    seleted: false
  },
  {
    name: 'Hitmonchan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png',
    seleted: false
  },
  {
    name: 'Lickitung',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
    seleted: false
  },
  {
    name: 'Koffing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png',
    seleted: false
  },
  {
    name: 'Weezing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png',
    seleted: false
  },
  {
    name: 'Rhyhorn',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
    seleted: false
  },
  {
    name: 'Rhydon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
    seleted: false
  },
  {
    name: 'Chansey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
    seleted: false
  },
  {
    name: 'Tangela',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
    seleted: false
  },
  {
    name: 'Kangaskhan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
    seleted: false
  },
  {
    name: 'Horsea',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
    seleted: false
  },
  {
    name: 'Seadra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
    seleted: false
  },
  {
    name: 'Goldeen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
    seleted: false
  },
  {
    name: 'Seaking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
    seleted: false
  },
  {
    name: 'Staryu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
    seleted: false
  },
  {
    name: 'Starmie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
    seleted: false
  },
  {
    name: 'Mr. Mime',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
    seleted: false
  },
  {
    name: 'Scyther',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
    seleted: false
  },
  {
    name: 'Jynx',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
    seleted: false
  },
  {
    name: 'Electabuzz',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
    seleted: false
  },
  {
    name: 'Magmar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
    seleted: false
  },
  {
    name: 'Pinsir',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
    seleted: false
  },
  {
    name: 'Tauros',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
    seleted: false
  },
  {
    name: 'Magikarp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
    seleted: false
  },
  {
    name: 'Gyarados',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
    seleted: false
  },
  {
    name: 'Lapras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
    seleted: false
  },
  {
    name: 'Ditto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    seleted: false
  },
  {
    name: 'Eevee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
    seleted: false
  },
  {
    name: 'Vaporeon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
    seleted: false
  },
  {
    name: 'Jolteon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
    seleted: false
  },
  {
    name: 'Flareon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
    seleted: false
  },
  {
    name: 'Porygon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
    seleted: false
  },
  {
    name: 'Omanyte',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
    seleted: false
  },
  {
    name: 'Omastar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
    seleted: false
  },
  {
    name: 'Kabuto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
    seleted: false
  },
  {
    name: 'Kabutops',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
    seleted: false
  },
  {
    name: 'Aerodactyl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
    seleted: false
  },
  {
    name: 'Snorlax',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    seleted: false
  },
  {
    name: 'Articuno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
    seleted: false
  },
  {
    name: 'Zapdos',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
    seleted: false
  },
  {
    name: 'Moltres',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
    seleted: false
  },
  {
    name: 'Dratini',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
    seleted: false
  },
  {
    name: 'Dragonair',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
    seleted: false
  },
  {
    name: 'Dragonite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    seleted: false
  },
  {
    name: 'Mewtwo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    seleted: false
  },
  {
    name: 'Mew',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
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
            return <Square value={obj.name} _selected={obj.seleted} image={obj.foto} onClick={() => handleClick(index)} addpokemon = {addpokemon} />
          })}
        </div>
      </div>
    </div>
  );
}

function Square(props) {
  const { value, _selected, onClick, image } = props;

  const [selected, setSelected] = useState(_selected);

  useEffect(() => {
    setSelected(_selected);
  }, [_selected]);



  const style = {
    borderRadius: '30px',
    margin: '5px',
    borderTop: '30px',
  };

  if (selected)
    style.backgroundColor = 'lightgreen';
  else
    style.backgroundColor = 'white';

  //console.log(style.padding)  
  return (
    <div className='square d-flex justify-content-center align-items-center' style={style}>
      <button id="botoes" onClick={() => onClick()} >{value}</button>
      <img className="pokefotos" src={image}></img>
    </div>
  )
}

export default App;