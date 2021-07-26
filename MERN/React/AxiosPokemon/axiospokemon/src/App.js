
import './App.css';
import axios from 'axios';
import { useState} from 'react';


function App() {


  const [names, setName] = useState([]);


      
      
   
  const showName = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon?offset=807&limit=311')
  .then(response => setName(response.data.results))}

  



  return (
    
    <>
          <button onClick = {showName}>Fetch Pokemnon</button>

          
            <ul>
              
              {names.length > 0 && names.map((names, index)=>{
                  return <li><div key={index}>{names.name}</div> </li>
              })}
             
              </ul>

              </>
  );

}

export default App;
