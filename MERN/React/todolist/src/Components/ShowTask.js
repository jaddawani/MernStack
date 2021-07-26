import React from 'react'

const ShowTask = (props) => {

    
 

    const completed =  (e , index) => {
        props.changeCompleted (e , index)
       

    }
   
    return (
        <div>


          
            
                {props.klab.map((value , index) =>{


                        return (
                            <label style={value.completed?{textDecoration :"line-through" } : {}} key={index} >{value.task}

                            
                                <input  type="checkbox" checked={value.completed} onChange={(e) => completed(e, index)}/> 
                                <buttun onClick = {(e) => props.deleteTask(e , index) } >Delete</buttun>
                            </label>)
                                })}

                            
          
            
        </div>
    )
}

export default ShowTask
