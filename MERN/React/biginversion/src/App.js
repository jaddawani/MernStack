
import './App.css';
import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">

  <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
  <PersonCard firstName="wadee" lastName="awad" age={ 27 } hairColor="Brown" /> 
  <PersonCard firstName="jad" lastName="dawani" age={ 8 } hairColor="Brown" /> 
  <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
  
    </div>
  );
}

export default App;
