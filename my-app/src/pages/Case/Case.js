import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import { ButtonBase } from '@material-ui/core';



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
    seleted: false
    
  },
  {
    name: '#5 - Charmeleon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    seleted: false
  },
  {
    name: '#6 - Charizard',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    seleted: false
  },
  {
    name: '#7 - Squirtle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    seleted: false
  },
  {
    name: '#8 - Wartortle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    seleted: false
  },
  {
    name: '#9 - Blastoise',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    seleted: false
  },
  {
    name: '#10 - Caterpie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    seleted: false
  },
  {
    name: '#11 - Metapod',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    seleted: false
  },
  {
    name: '#12 - Butterfree',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    seleted: false
  },
  {
    name: '#13 - Weedle',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    seleted: false
  },
  {
    name: '#14 - Kakuna',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    seleted: false
  },
  {
    name: '#15 - Beedrill',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    seleted: false
  },
  {
    name: '#16 - Pidgey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    seleted: false
  },
  {
    name: '#17 - Pidgeotto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    seleted: false
  },
  {
    name: '#18 - Pidgeot',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    seleted: false
  },
  {
    name: '#19 - Rattata',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    seleted: false
  },
  {
    name: '#20 - Raticate',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    seleted: false
  },
  {
    name: '#21 - Spearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    seleted: false
  },
  {
    name: '#22 - Fearow',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    seleted: false
  },
  {
    name: '#23 - Ekans',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    seleted: false
  },
  {
    name: '#24 - Arbok',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    seleted: false
  },
  {
    name: '#25 - Pikachu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    seleted: false
  },
  {
    name: '#26 - Raichu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    seleted: false
  },
  {
    name: '#27 - Sandshrew',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    seleted: false
  },
  {
    name: '#28 - Sandslash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    seleted: false
  },
  {
    name: '#29 - Nidoran F',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    seleted: false
  },
  {
    name: '#30 - Nidorina',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    seleted: false
  },
  {
    name: '#31 - Nidoqueen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    seleted: false
  },
  {
    name: '#32 - Nidoran M',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    seleted: false
  },
  {
    name: '#33 - Nidorino',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    seleted: false
  },
  {
    name: '#34 - Nidoking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    seleted: false
  },
  {
    name: '#35 - Clefairy',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    seleted: false
  },
  {
    name: '#36 - Clefable',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    seleted: false
  },
  {
    name: '#37 - Vulpix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    seleted: false
  },
  {
    name: '#38 - Ninetales',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
    seleted: false
  },
  {
    name: '#39 - Jigglypuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    seleted: false
  },
  {
    name: '#40 - Wigglytuff',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
    seleted: false
  },
  {
    name: '#41 - Zubat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
    seleted: false
  },
  {
    name: '#42 - Golbat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
    seleted: false
  },
  {
    name: '#43 - Oddish',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
    seleted: false
  },
  {
    name: '#44 - Gloom',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
    seleted: false
  },
  {
    name: '#45 - Vileplume',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
    seleted: false
  },
  {
    name: '#46 - Paras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
    seleted: false
  },
  {
    name: '#47 - Parasect',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
    seleted: false
  },
  {
    name: '#48 - Venonat',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
    seleted: false
  },
  {
    name: '#49 - Venomoth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
    seleted: false
  },
  {
    name: '#50 - Diglett',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    seleted: false
  },
  {
    name: '#51 - Dugtrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
    seleted: false
  },
  {
    name: '#52 - Meowth',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
    seleted: false
  },
  {
    name: '#53 - Persian',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
    seleted: false
  },
  {
    name: '#54 - Psyduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    seleted: false
  },
  {
    name: '#55 - Golduck',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
    seleted: false
  },
  {
    name: '#56 - Mankey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
    seleted: false
  },
  {
    name: '#57 - Primeape',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
    seleted: false
  },
  {
    name: '#58 - Growlithe',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
    seleted: false
  },
  {
    name: '#59 - Arcanine',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
    seleted: false
  },
  {
    name: '#60 - Poliwag',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    seleted: false
  },
  {
    name: '#61 - Poliwhirl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
    seleted: false
  },
  {
    name: '#62 - Poliwrath',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
    seleted: false
  },
  {
    name: '#63 - Abra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
    seleted: false
  },
  {
    name: '#64 - Kadabra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
    seleted: false
  },
  {
    name: '#65 - Alakazam',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    seleted: false
  },
  {
    name: '#66 - Machop',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
    seleted: false
  },
  {
    name: '#67 - Machoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
    seleted: false
  },
  {
    name: '#68 - Machamp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    seleted: false
  },
  {
    name: '#69 - Bellsprout',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
    seleted: false
  },
  {
    name: '#70 - Weepinbell',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
    seleted: false
  },
  {
    name: '#71 - Victreebel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
    seleted: false
  },
  {
    name: '#72 - Tentacool',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
    seleted: false
  },
  {
    name: '#73 - Tentacruel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
    seleted: false
  },
  {
    name: '#74 - Geodude',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
    seleted: false
  },
  {
    name: '#75 - Graveler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
    seleted: false
  },
  {
    name: '#76 - Golem',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
    seleted: false
  },
  {
    name: '#77 - Ponyta',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
    seleted: false
  },
  {
    name: '#78 - Rapidash',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
    seleted: false
  },
  {
    name: '#79 - Slowpoke',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
    seleted: false
  },
  {
    name: '#80 - Slowbro',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
    seleted: false
  },
  {
    name: '#81 - Magnemite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
    seleted: false
  },
  {
    name: '#82 - Magneton',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
    seleted: false
  },
  {
    name: '#83 - Farfetchd',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
    seleted: false
  },
  {
    name: '#84 - Doduo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
    seleted: false
  },
  {
    name: '#85 - Dodrio',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
    seleted: false
  },
  {
    name: '#86 - Seel',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
    seleted: false
  },
  {
    name: '#87 - Dewgong',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
    seleted: false
  },
  {
    name: '#88 - Grimer',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
    seleted: false
  },
  {
    name: '#89 - Muk',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
    seleted: false
  },
  {
    name: '#90 - Shellder',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
    seleted: false
  },
  {
    name: '#91 - Cloyster',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
    seleted: false
  },
  {
    name: '#92 - Gastly',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
    seleted: false
  },
  {
    name: '#93 - Haunter',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
    seleted: false
  },
  {
    name: '#94 - Gengar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    seleted: false
  },
  {
    name: '#95 - Onix',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
    seleted: false
  },
  {
    name: '#96 - Drowzee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
    seleted: false
  },
  {
    name: '#97 - Hypno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
    seleted: false
  },
  {
    name: '#98 - Krabby',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
    seleted: false
  },
  {
    name: '#99 - Kingler',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
    seleted: false
  },
  {
    name: '#100 - Voltorb',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
    seleted: false
  },
  {
    name: '#101 - Electrode',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
    seleted: false
  },
  {
    name: '#102 - Exeggcute',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
    seleted: false
  },
  {
    name: '#103 - Exeggutor',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
    seleted: false
  },
  {
    name: '#104 - Cubone',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
    seleted: false
  },
  {
    name: '#105 - Marowak',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png',
    seleted: false
  },
  {
    name: '#106 - Hitmonlee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
    seleted: false
  },
  {
    name: '#107 - Hitmonchan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png',
    seleted: false
  },
  {
    name: '#108 - Lickitung',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
    seleted: false
  },
  {
    name: '#109 - Koffing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png',
    seleted: false
  },
  {
    name: '#110 - Weezing',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png',
    seleted: false
  },
  {
    name: '#111 - Rhyhorn',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
    seleted: false
  },
  {
    name: '#112 - Rhydon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
    seleted: false
  },
  {
    name: '#113 - Chansey',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
    seleted: false
  },
  {
    name: '#114 - Tangela',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
    seleted: false
  },
  {
    name: '#115 - Kangaskhan',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
    seleted: false
  },
  {
    name: '#116 - Horsea',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
    seleted: false
  },
  {
    name: '#117 - Seadra',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
    seleted: false
  },
  {
    name: '#118 - Goldeen',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
    seleted: false
  },
  {
    name: '#119 - Seaking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
    seleted: false
  },
  {
    name: '#120 - Staryu',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
    seleted: false
  },
  {
    name: '#121 - Starmie',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
    seleted: false
  },
  {
    name: '#122 - Mr. Mime',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
    seleted: false
  },
  {
    name: '#123 - Scyther',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
    seleted: false
  },
  {
    name: '#124 - Jynx',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
    seleted: false
  },
  {
    name: '#125 - Electabuzz',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
    seleted: false
  },
  {
    name: '#126 - Magmar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
    seleted: false
  },
  {
    name: '#127 - Pinsir',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
    seleted: false
  },
  {
    name: '#128 - Tauros',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
    seleted: false
  },
  {
    name: '#129 - Magikarp',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
    seleted: false
  },
  {
    name: '#130 - Gyarados',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
    seleted: false
  },
  {
    name: '#131 - Lapras',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
    seleted: false
  },
  {
    name: '#132 - Ditto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    seleted: false
  },
  {
    name: '#133 - Eevee',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
    seleted: false
  },
  {
    name: '#134 - Vaporeon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
    seleted: false
  },
  {
    name: '#135 - Jolteon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
    seleted: false
  },
  {
    name: '#136 - Flareon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
    seleted: false
  },
  {
    name: '#137 - Porygon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
    seleted: false
  },
  {
    name: '#138 - Omanyte',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
    seleted: false
  },
  {
    name: '#139 - Omastar',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
    seleted: false
  },
  {
    name: '#140 - Kabuto',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
    seleted: false
  },
  {
    name: '#141 - Kabutops',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
    seleted: false
  },
  {
    name: '#142 - Aerodactyl',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
    seleted: false
  },
  {
    name: '#143 - Snorlax',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    seleted: false
  },
  {
    name: '#144 - Articuno',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
    seleted: false
  },
  {
    name: '#145 - Zapdos',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
    seleted: false
  },
  {
    name: '#146 - Moltres',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
    seleted: false
  },
  {
    name: '#147 - Dratini',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
    seleted: false
  },
  {
    name: '#148 - Dragonair',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
    seleted: false
  },
  {
    name: '#149 - Dragonite',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    seleted: false
  },
  {
    name: '#150 - Mewtwo',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    seleted: false
  },
  {
    name: '#151 - Mew',
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