import React, { useState } from 'react'
import axios from 'axios';
const Form = () => {
    //keep track of what is being typed via useState hook
    const [product, setProduct] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', {
            product,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>product</label><br/>
                <input type="text" onChange={(e)=>setProduct(e.target.value)} value={product}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Form;