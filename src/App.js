import { useEffect, useState } from 'react';
import './App.css';
import { getStarships } from './Services/sw-api';
import StarShipCard from './Components/StarShipCards'


const [useData, setData] = useState({
  starship: [getNewShip()],
  code: shipCode(),
});


function App() {
    async function getAppData() {
    const data = await getStarships();
    console.log(data);
    }
  
    useEffect(() => {
      getAppData();
    }, []);

    function shipCode {
      new Array().fill().map(() => Math.floor(Math.random() * data.length));
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars</h1>
        {props.starship.map((data, idx) =>
        <StarShipCard 
        data={data}
        />
        )}
      </header>
    </div>
  );
}

export default App;
