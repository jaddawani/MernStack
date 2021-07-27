import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { Router } from '@reach/router';
import Show from './components/Show';


function App() {

 

  return (
    <>
  <Search/>
<Router>
<Show path="/people/:id"/>
  
</Router>
</>
  );
}

export default App;
