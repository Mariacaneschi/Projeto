import React, { useState, useEffect } from 'react';
import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
const DATA = [
  {
    name: 'Bulbasaur',
    seleted: false
} ,

{
    name: 'Ivysaur',
    seleted: false
} ,
{
    name: 'Venusaur',
    seleted: false
} ,
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
}];
  
function App() {


  const [data, setData] = useState(DATA);

  console.log('renderizou');

  useEffect(() => {
    console.log('EXECUTOU UMA VEZ');
  }, [])

  function handleClick(index) {
   
    const newData = [...data];
    const item = newData[index];

    item.seleted = !item.seleted;

    setData(newData);

    console.log(item);
    console.log('Clicou');
  }

  return (
    <div className="App">
      <button id = "selecionar" type="button" >Selecionar</button>
      <h1> Selecione os Pokémons: </h1>
      <div className="d-flex flex-wrap justify-content-center">
      {data.map((obj, index) => {
          return <Square value={obj.name} _selected={obj.seleted} onClick={() => handleClick(index)} />
        })}
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
  };
  if (selected)
    style.backgroundColor = 'green';
  else
    style.backgroundColor = 'slategray';

    console.log(style.padding)

  return (
    <div className='square d-flex justify-content-center align-items-center' style={style}>
      <button id= "botoes" onClick={() => onClick()} >{value}</button>
    </div>
  )
}

export default App;