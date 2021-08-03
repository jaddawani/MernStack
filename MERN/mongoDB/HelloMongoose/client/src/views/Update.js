import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate}from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data.product);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            product,
            price,
            description
        })
            .then(res => console.log(res));
            navigate("/")
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>product</label><br />
                    <input type="text" 
                    name="product" 
                    value={product} 
                    onChange={(e) => { setProduct(e.target.value) }} />
                </p>
                <p>
                    <label>price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update