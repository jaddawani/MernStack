import React from 'react'
import axios from 'axios';
const Delete=(props) => {
    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId) 
            .then(res=>{
                successCallback();
                console.log(productId);
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default Delete
