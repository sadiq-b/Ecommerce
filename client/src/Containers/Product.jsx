import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './Product.css';


const Product = (props) =>{

    return (

        <div className="product_container">

            <div/>

            <img className="product_img" src={props.item.img}/>

            <div>

                 <div><ShoppingCartIcon/></div>
                 <div><SearchIcon/></div>
                 <div><FavoriteBorderIcon/></div>

            </div>
            
        
            
         </div>

    );
}


export default Product