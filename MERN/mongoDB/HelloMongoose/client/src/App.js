import React, { useEffect, useState } from 'react'
import './App.css';
import Form from '../src/components/Form';
import ProductList from '../src/components/ProductList'
import axios from 'axios';
import Main from './views/Main';
import Details from './components/Details';
import {Router} from '@reach/router';
import Update from './views/Update'



function App() {


    
  return ( 
  <div classNme="App">
  <Router>
    <Main path="/"></Main>
    <Details path="product/:id" />
    <Update path="product/:id/edit"/>
  </Router>
  </div>
  );
}

export default App;
