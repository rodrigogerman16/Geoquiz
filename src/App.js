import React, { useState } from "react";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function App() {

  let countrys = ['Egipto','Corea del Sur','Reino Unido','Países Bajos','Costa Rica','Suiza','Uruguay','Croacia','Irlanda',
  'Portugal','Paraguay','Nigeria','Suecia','Austria','Bélgica','Hungría','Bulgaria','Iraq','Israel','Luxemburgo','Tailandia',
  'Nueva Zelanda','Dinamarca','Japón'];
  let capitals = [['El Cairo','Lúxor','Asuán'],['Busan','Jeju','Seúl'],['Londres','Mánchester','Liverpool'],
  ['Rótendam','La Haya','Ámsterdam'],['San José','Cartago','Alajuela'],['Ginebra','Zúrich','Berna'],
  ['Montevideo','Punta del Este','Maldonado'],['Dubrovnik','Split','Zagreb'],['Cork','Dublín','Galway'],['Lisboa','Porto',
  'Braga'],['Asunción','Luque','San Lorenzo'],['Lagos','Enugu','Abuya'],['Gotemburgo','Helsingborg','Estocolmo'],
  ['Viena','Graz','Linz'],['Gante','Bruselas','Brujas'],['Budapest','Debrecen','Pécs'],['Varna','Burgas','Sofía'],
  ['Ninaua','Basora','Bagdad'],['Beerseba','Jerusalén','Eilat'],['Luxemburgo','Ettelbruck','Dudelange'],
  ['Ayutthaya','Chiang Mai','Bangkok'],['Wellington','Auckland','Nelson'],['Copenhague','Aarhus','Odense'],
  ['Osaka','Kioto','Tokio']];

  const [show, setShow] = useState(false);
  const [indice, setIndice] = useState(0);

    return (
    <div className="App">
      
      {!show &&
      <div className="Index">
        <div>
          <h2>Welcome to my Geography Quiz App</h2>
        </div>
        <div className="Howtoplay">
          <h3>How to play:</h3>
          <p>Select the answer you think is the correct</p>
        </div>
        <button onClick={() => setShow(prev => ! prev)} className="Startbtn">START</button>
      </div>
      }

      {show && 
      <div className="Game">
        <div>
          What is the capital of {countrys[indice]}
        </div>
        <div>
          <ul className='Capitals-options-container'>
            {shuffle(capitals[indice]).map(capital =>
              <button className='Capitals-options' onClick={() => {
                if (indice < countrys.length-1) {
                setIndice(indice + 1)
              }}}>
                {capital}
              </button>)
            }
          </ul>
        </div>
      </div>
      }

    </div>
  );
}

export default App;
