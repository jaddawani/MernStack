import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';



const Show = (props) => {
    const [sandal, setSandal] = useState([]);



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`+props.id)
            
            .then(response => setSandal(response.data))
            .catch (reject => setSandal({error:"hello!!!!"}))
        
    }, [props.id]);


    return (
        <div>
            
         
           <p>{sandal.name}</p>
           <p>{sandal.eye_color}</p>
            
            
            
        </div>
    )
}

export default Show
