import React ,{useState} from 'react'
import axios from 'axios';

const Form = () => {
    const [product, setProduct] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new personcopy
        axios.post('http://localhost:8000/api/product/new', {
           product , 
           price,
           description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>product</label><br/>
                <input type="text" onChange={(e)=>setProduct(e.target.value)} value={product}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>




            
        </div>
    )
}

export default Form
