import React from "react";
import {popularProducts} from '../data'
import Product from './Product';
import './ProductList.css';


const ProductList = ({}) => {

    return (
        <div className="product_list_container">

        {popularProducts.map((item)=> (
            <Product item={item} key={item.id} value={item.id}/>
        ))}
        
        </div>
    );


}


export default ProductList