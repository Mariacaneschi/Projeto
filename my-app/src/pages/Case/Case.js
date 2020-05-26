import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 




const DATA = [
  { 
    name: '#1 - Bulbasaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    
  },

  {
    name: '#2 - Ivysaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    
  },
  {
    name: '#3 - Venusaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
  },
  {
    name: '#4 - Charmander',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    selected: false
    
  },
  {
    name: '#5 - Charmeleon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    selected: false
  },
  {
    name: '#6 - Charizard',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    selected: false
  },
  {
    name: '#7 - Squirtle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    selected: false
  },
  {
    name: '#8 - Wartortle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    selected: false
  },
  {
    name: '#9 - Blastoise',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    selected: false
  },
  {
    name: '#10 - Caterpie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    selected: false
  },
  {
    name: '#11 - Metapod',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    selected: false
  },
  {
    name: '#12 - Butterfree',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    selected: false
  },
  {
    name: '#13 - Weedle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    selected: false
  },
  {
    name: '#14 - Kakuna',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    selected: false
  },
  {
    name: '#15 - Beedrill',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    selected: false
  },
  {
    name: '#16 - Pidgey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    selected: false
  },
  {
    name: '#17 - Pidgeotto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    selected: false
  },
  {
    name: '#18 - Pidgeot',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    selected: false
  },
  {
    name: '#19 - Rattata',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    selected: false
  },
  {
    name: '#20 - Raticate',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    selected: false
  },
  {
    name: '#21 - Spearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    selected: false
  },
  {
    name: '#22 - Fearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    selected: false
  },
  {
    name: '#23 - Ekans',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    selected: false
  },
  {
    name: '#24 - Arbok',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    selected: false
  },
  {
    name: '#25 - Pikachu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    selected: false
  },
  {
    name: '#26 - Raichu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    selected: false
  },
  {
    name: '#27 - Sandshrew',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    selected: false
  },
  {
    name: '#28 - Sandslash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    selected: false
  },
  {
    name: '#29 - Nidoran F',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    selected: false
  },
  {
    name: '#30 - Nidorina',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    selected: false
  },
  {
    name: '#31 - Nidoqueen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    selected: false
  },
  {
    name: '#32 - Nidoran M',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    selected: false
  },
  {
    name: '#33 - Nidorino',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    selected: false
  },
  {
    name: '#34 - Nidoking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    selected: false
  },
  {
    name: '#35 - Clefairy',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    selected: false
  },
  {
    name: '#36 - Clefable',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    selected: false
  },
  {
    name: '#37 - Vulpix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    selected: false
  },
  {
    name: '#38 - Ninetales',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
    selected: false
  },
  {
    name: '#39 - Jigglypuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    selected: false
  },
  {
    name: '#40 - Wigglytuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
    selected: false
  },
  {
    name: '#41 - Zubat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
    selected: false
  },
  {
    name: '#42 - Golbat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
    selected: false
  },
  {
    name: '#43 - Oddish',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
    selected: false
  },
  {
    name: '#44 - Gloom',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
    selected: false
  },
  {
    name: '#45 - Vileplume',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
    selected: false
  },
  {
    name: '#46 - Paras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
    selected: false
  },
  {
    name: '#47 - Parasect',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
    selected: false
  },
  {
    name: '#48 - Venonat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
    selected: false
  },
  {
    name: '#49 - Venomoth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
    selected: false
  },
  {
    name: '#50 - Diglett',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    selected: false
  },
  {
    name: '#51 - Dugtrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
    selected: false
  },
  {
    name: '#52 - Meowth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
    selected: false
  },
  {
    name: '#53 - Persian',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
    selected: false
  },
  {
    name: '#54 - Psyduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    selected: false
  },
  {
    name: '#55 - Golduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
    selected: false
  },
  {
    name: '#56 - Mankey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
    selected: false
  },
  {
    name: '#57 - Primeape',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
    selected: false
  },
  {
    name: '#58 - Growlithe',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
    selected: false
  },
  {
    name: '#59 - Arcanine',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
    selected: false
  },
  {
    name: '#60 - Poliwag',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    selected: false
  },
  {
    name: '#61 - Poliwhirl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
    selected: false
  },
  {
    name: '#62 - Poliwrath',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
    selected: false
  },
  {
    name: '#63 - Abra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
    selected: false
  },
  {
    name: '#64 - Kadabra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
    selected: false
  },
  {
    name: '#65 - Alakazam',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    selected: false
  },
  {
    name: '#66 - Machop',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
    selected: false
  },
  {
    name: '#67 - Machoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
    selected: false
  },
  {
    name: '#68 - Machamp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    selected: false
  },
  {
    name: '#69 - Bellsprout',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
    selected: false
  },
  {
    name: '#70 - Weepinbell',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
    selected: false
  },
  {
    name: '#71 - Victreebel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
    selected: false
  },
  {
    name: '#72 - Tentacool',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
    selected: false
  },
  {
    name: '#73 - Tentacruel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
    selected: false
  },
  {
    name: '#74 - Geodude',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
    selected: false
  },
  {
    name: '#75 - Graveler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
    selected: false
  },
  {
    name: '#76 - Golem',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
    selected: false
  },
  {
    name: '#77 - Ponyta',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
    selected: false
  },
  {
    name: '#78 - Rapidash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
    selected: false
  },
  {
    name: '#79 - Slowpoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
    selected: false
  },
  {
    name: '#80 - Slowbro',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
    selected: false
  },
  {
    name: '#81 - Magnemite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
    selected: false
  },
  {
    name: '#82 - Magneton',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
    selected: false
  },
  {
    name: '#83 - Farfetchd',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
    selected: false
  },
  {
    name: '#84 - Doduo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
    selected: false
  },
  {
    name: '#85 - Dodrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
    selected: false
  },
  {
    name: '#86 - Seel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
    selected: false
  },
  {
    name: '#87 - Dewgong',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
    selected: false
  },
  {
    name: '#88 - Grimer',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
    selected: false
  },
  {
    name: '#89 - Muk',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
    selected: false
  },
  {
    name: '#90 - Shellder',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
    selected: false
  },
  {
    name: '#91 - Cloyster',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
    selected: false
  },
  {
    name: '#92 - Gastly',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
    selected: false
  },
  {
    name: '#93 - Haunter',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
    selected: false
  },
  {
    name: '#94 - Gengar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    selected: false
  },
  {
    name: '#95 - Onix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
    selected: false
  },
  {
    name: '#96 - Drowzee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
    selected: false
  },
  {
    name: '#97 - Hypno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
    selected: false
  },
  {
    name: '#98 - Krabby',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
    selected: false
  },
  {
    name: '#99 - Kingler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
    selected: false
  },
  {
    name: '#100 - Voltorb',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
    selected: false
  },
  {
    name: '#101 - Electrode',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
    selected: false
  },
  {
    name: '#102 - Exeggcute',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
    selected: false
  },
  {
    name: '#103 - Exeggutor',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
    selected: false
  },
  {
    name: '#104 - Cubone',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
    selected: false
  },
  {
    name: '#105 - Marowak',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png',
    selected: false
  },
  {
    name: '#106 - Hitmonlee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
    selected: false
  },
  {
    name: '#107 - Hitmonchan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png',
    selected: false
  },
  {
    name: '#108 - Lickitung',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
    selected: false
  },
  {
    name: '#109 - Koffing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png',
    selected: false
  },
  {
    name: '#110 - Weezing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png',
    selected: false
  },
  {
    name: '#111 - Rhyhorn',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
    selected: false
  },
  {
    name: '#112 - Rhydon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
    selected: false
  },
  {
    name: '#113 - Chansey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
    selected: false
  },
  {
    name: '#114 - Tangela',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
    selected: false
  },
  {
    name: '#115 - Kangaskhan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
    selected: false
  },
  {
    name: '#116 - Horsea',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
    selected: false
  },
  {
    name: '#117 - Seadra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
    selected: false
  },
  {
    name: '#118 - Goldeen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
    selected: false
  },
  {
    name: '#119 - Seaking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
    selected: false
  },
  {
    name: '#120 - Staryu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
    selected: false
  },
  {
    name: '#121 - Starmie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
    selected: false
  },
  {
    name: '#122 - Mr. Mime',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
    selected: false
  },
  {
    name: '#123 - Scyther',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
    selected: false
  },
  {
    name: '#124 - Jynx',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
    selected: false
  },
  {
    name: '#125 - Electabuzz',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
    selected: false
  },
  {
    name: '#126 - Magmar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
    selected: false
  },
  {
    name: '#127 - Pinsir',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
    selected: false
  },
  {
    name: '#128 - Tauros',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
    selected: false
  },
  {
    name: '#129 - Magikarp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
    selected: false
  },
  {
    name: '#130 - Gyarados',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
    selected: false
  },
  {
    name: '#131 - Lapras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
    selected: false
  },
  {
    name: '#132 - Ditto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    selected: false
  },
  {
    name: '#133 - Eevee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
    selected: false
  },
  {
    name: '#134 - Vaporeon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
    selected: false
  },
  {
    name: '#135 - Jolteon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
    selected: false
  },
  {
    name: '#136 - Flareon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
    selected: false
  },
  {
    name: '#137 - Porygon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
    selected: false
  },
  {
    name: '#138 - Omanyte',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
    selected: false
  },
  {
    name: '#139 - Omastar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
    selected: false
  },
  {
    name: '#140 - Kabuto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
    selected: false
  },
  {
    name: '#141 - Kabutops',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
    selected: false
  },
  {
    name: '#142 - Aerodactyl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
    selected: false
  },
  {
    name: '#143 - Snorlax',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    selected: false
  },
  {
    name: '#144 - Articuno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
    selected: false
  },
  {
    name: '#145 - Zapdos',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
    selected: false
  },
  {
    name: '#146 - Moltres',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
    selected: false
  },
  {
    name: '#147 - Dratini',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
    selected: false
  },
  {
    name: '#148 - Dragonair',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
    selected: false
  },
  {
    name: '#149 - Dragonite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    selected: false
  },
  {
    name: '#150 - Mewtwo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    selected: false
  },
  {
    name: '#151 - Mew',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
    selected: false
  },
];
function App() {

  const [data, setData] = useState(DATA);

  const [selecionados, setSelecionados] = useState([])

  function addpokemon (pokemon){
    setSelecionados(selecionados.push(pokemon))
  }

  function handleClick(index) {

    setSelecionados([...selecionados, data[index]]);
    const newData = [...data];
    const item = newData[index];

    item.selected = !item.selected;

    setData(newData);

  }

  return (
    <div className="App h-100">
      <div id="header1"> 
      <div>

        
        <h1 id = "titulo" className="d-flex flex-wrap justify-content-center"> Selecione os Pokémons: </h1>

        <Link id="voltar" className="btn btn-outline-danger" to={{

          pathname: '/pokedex',
        }}>
                 Pokedex          
        </Link>


        <Link id="principal" className="btn btn-outline-danger" to={{

          pathname: '/',
        
        }}>        Página Principal

        </Link>


        <Link id="selecionar" className="btn btn-danger"  to={{
            pathname: '/pokedex',
            state: {
              selecionados: selecionados
            }}}> Selecionar 
        </Link>

        <div id = "quadrados" className="d-flex flex-wrap justify-content-center">
          {data.map((obj, index) => {
            return <Square value={obj.name} _selected={obj.selected} image={obj.foto} onClick={() => handleClick(index)} addpokemon = {addpokemon} />
          })}
        </div>
        <ScrollUpButton />


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

  return (
    <div className='square d-flex justify-content-center align-items-center' style={style}>
      <button id="botoes" onClick={() => onClick()} >{value}</button>
      <img className="pokefotos" src={image}></img>
    </div>
  )
}

export default App;