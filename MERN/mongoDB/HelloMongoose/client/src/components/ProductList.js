import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import Delete from './Delete';

const ProductList = (props) => {

    const [product , setProduct] = useState([]);

    // const [loaded , setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{ 
                setProduct(res.data)
                // setLoaded(true);
            });
    }, [product])

    const removeFromDom = Id => {
        setProduct(product.filter(product => product._id !== Id));
    }

    return (
        <div>
            {product.map((product, idx)=>{
                return (
                <>
                    <p key={idx}>
                        <Link to = {'/product/'+ product._id} >
                            {product.product}
                        </Link>
                        <Delete productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>

                </>
                )
            })}
        </div>
    )
}
export default ProductList;