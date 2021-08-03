import React, { useState , useEffect } from 'react'
import ProductList from '../components/ProductList'
import Form from '../components/Form';
import axios from 'axios';

const Main = () => {

    const [product , setProduct] = useState([]);
    // const [loaded , setLoaded] = useState(false);
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/product')
    //         .then(res =>{ 
    //             setProduct(res.data)
    //             setLoaded(true);
    //         });
    // }, [])

    // const removeFromDom = Id => {
    //     setProduct(product.filter(product => product._id !== Id));
    // }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/new', product)
            .then(res=>{
                setProduct([...[product], res.data]);
            })
    }
    return (
        <div>
           <Form onSubmitProp={createProduct} initialProduct="" initialPrice="" initialDescription=""/>
           <hr/>
           {/* {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>} */}
           <ProductList />
        </div>
    )
}

export default Main
