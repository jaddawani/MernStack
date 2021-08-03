
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

const Details = (props) => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, )

    return (
        <>
        <div>
            
            <p>{product.product}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>

        <Link to={"/product/" + product._id + "/edit"}>
            Edit
        </Link>
    </>
    )
}

export default Details
