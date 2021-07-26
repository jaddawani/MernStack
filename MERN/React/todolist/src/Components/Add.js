import React, { useState } from "react";


const Add = (props) => {

    const [task, settask] = useState("");
    const [task2, settask2] = useState({});



    const submitHandler = (e) => {

        e.preventDefault()
       
        
        props.addTask(task);
        
        

    }

    return (
        <div>
            
            <form onSubmit={submitHandler}>
            
            <div>
                <label>TASK: </label>
                <input type="text" onChange={ (e) => settask(e.target.value) } value={task} />
            </div>
            <input type="submit" value="ADD" />
        </form>

        </div>
    )
}

export default Add
