import './App.css';
import { Router } from '@reach/router';
import Show from './components/Show';

function App() {
  return (
    
    <div className="App">

      <h1>Welcome</h1>
      <Router>
        <Show path="/home" variable={"Welcome"} />
        <Show path="/:variable" />
        <Show path="/:variable/:color" />
        <Show path="/:variable/:color/:backgroundColor" />
      </Router>
      
    </div>
  );
}

export default App;