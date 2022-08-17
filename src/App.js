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

  let countrys = ['Egypt','South Korea','United Kingdom','Netherlands','Costa Rica','Switzerland','Uruguay','Croatia','Ireland',
  'Portugal','Paraguay','Nigeria','Sweden','Austria','Belgium','Hungary','Bulgaria','Iraq','Israel','Luxembourg','Thailand',
  'New Zealand','Denmark','Japan'];
  let capitals = [['Cairo','Luxor','Aswan'],['Busan','Jeju','Seoul'],['London','Manchester','Liverpool'],
  ['Rotendam','Hague','Amsterdam'],['San José','Cartago','Alajuela'],['Ginebra','Zurich','Bern'],
  ['Montevideo','Punta del Este','Maldonado'],['Dubrovnik','Split','Zagreb'],['Cork','Dublin','Galway'],['Lisbon','Porto',
  'Braga'],['Asunción','Luque','San Lorenzo'],['Lagos','Enugu','Abuya'],['Gothenburg','Helsingborg','Stockholm'],
  ['Vienna','Graz','Linz'],['Gante','Brussels','Brujas'],['Budapest','Debrecen','Pecs'],['Varna','Burgas','Sofía'],
  ['Ninaua','Basora','Baghdad'],['Beersheba','Jerusalem','Eilat'],['Luxembourg','Ettelbruck','Dudelange'],
  ['Ayutthaya','Chiang Mai','Bangkok'],['Wellington','Auckland','Nelson'],['Copenhaguen','Aarhus','Odense'],
  ['Osaka','Kyoto','Tokyo']];

  const [indice, setIndice] = useState(0);
  const [show, setShow] = useState(true);

    return (
    <div className="App"> 

     {show ?

      <div className="Index">
        <div>
          <h2>Welcome to my Geography Quiz App</h2>
        </div>
        <div className="Howtoplay">
          <h3>How to play:</h3>
          <p>Select the answer you think is the correct</p>
        </div>
        <button className="Startbtn" onClick={()=>setShow(!show)}>START</button>
      </div> 
      
      :

      <div className="Game">
        <div>
          <h3>What is the capital of {countrys[indice]}</h3>
        </div>
        <div className="Country-flag">
          <img src={`/Flags/${countrys[indice]}.png`} alt="Country Flag" className="Country-flag"/> 
        </div>
        <div>
          <ul className='Capitals-options-container'>
            {shuffle(capitals[indice]).map(capital =>
              <button className='Capitals-options' onClick={() => {
                if (indice < countrys.length-1){setIndice(indice + 1)}}}>
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
