import React from "react";

import Promo from '../Containers/Promo.jsx';

import Navigation from '../Containers/Navigation';

import ScrollFeature from "../Containers/ScrollFeature";

import ProductList from "../Containers/ProductList";

import Subscription from '../Containers/Subscription';

import Footer from '../Containers/Footer';


const Home = () =>{

    return (
            <div>
                <Promo/>
                <Navigation/>
                <ScrollFeature/>
                <ProductList/>
                <ScrollFeature/>
                <Subscription/>
                <Footer/>
                
            </div>
    );
}

export default Home;