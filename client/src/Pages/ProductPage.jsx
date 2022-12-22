import React from "react";

import Navigation from '../Containers/Navigation';

import Footer from '../Containers/Footer';

import './ProductPage.css';

const ProductPage = () => {

  return (

    <div >
      <Navigation />

      <div className="container_productpage">
        <div className="img_class">
          <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="prouct" />
        </div>

        <div className="info_class">
          <h1 >tracksuit</h1>
          <span className="product_span">this what you were during the summer. this what you were during the summer. this what you were during the summer
            this what you were during the summer this what you were during the summer this what you were during the summer this what you were during the summer. this what you were during the summer.
          </span>
          <p>
            $ 20
          </p>

          <div className="container_select">
            <div className="color_class">
              <h2 className="title">Color</h2>
              <p className="color_product" />
              <p className="color_product" />
              <p className="color_product" />

            </div>

            <div className="size_class">
              <h3 className="title">Size</h3>
              <select className="option_product">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>

          <div className="increment">

            <div>
              <h4>-</h4>
              <span>1</span>
              <h5>+</h5>

            </div>

            <button>Add To Cart</button>

          </div>

        </div>
      </div>

    </div>



  );

}

export default ProductPage



