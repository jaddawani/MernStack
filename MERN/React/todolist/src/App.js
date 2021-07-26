
import React from 'react'; 
import { useState } from 'react';
import './App.css';
import Add from './Components/Add';
import ShowTask from './Components/ShowTask';

function App() {
  
const [taskk, settaskk] = useState([])

const addTask = (taskValue) => {
  const t={"task":taskValue,"completed" : false}
  
  settaskk([...taskk,t])
  
}

const changeCompleted = (e , index ) => {
  settaskk([...taskk.slice(0,index) , {...taskk[index] , completed: e.target.checked} , ...taskk.slice(index+1)])
}


const deleteTask = (e , index ) => {
  settaskk([...taskk.slice(0,index) , ...taskk.slice(index+1)])
}


  return (
    <div className="App">
      
      


      <Add addTask={addTask}  />
      <ShowTask klab={taskk} changeCompleted={changeCompleted} deleteTask={deleteTask} />

    </div>
  );
}

export default App;
  

