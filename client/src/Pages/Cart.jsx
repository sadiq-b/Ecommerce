
import React from "react";
import Navigation from "../Containers/Navigation";
import "./Cart.css";




const Cart = () => {

    return (

        <div>
            <Navigation />
            <div className="cart_wrapper">

                <div className="cart_top">

                    <button>Continue Shoping</button>

                    <div>
                        <span>shoppingbag</span>
                        <span> Wishlist</span>
                    </div>

                    <button>Check Out</button>

                </div>

                
                <div className="cart_bottom">

                    <div className="cart_bottom_details">

                        <div className="cart_segment_detail">

                            <img className="cart_img" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="my shirt" />

                            <div className="cart_bottom_detail">

                                <h1>Product:T-shirt all stars</h1>
                                <h2>ID:1278</h2>
                                <h3>Size:10</h3>

                            </div>

                        </div>

                        <div className="cart_segment_detail_b">
                            <div>
                                <h4>+</h4>
                                <span>3</span>
                                <h5>-</h5>
                            </div>
                            <span> $ 100</span>

                        </div>

                    </div>

                    <div  className="cart_summary">
                        <h1>summary</h1>

                        <div className="cart_summary_sub">
                            <span>ItemCost(s)</span>
                            <span>$150</span>

                        </div>

                        <div className="cart_summary_sub">
                            <span>Delivery Price</span>
                            <span>$10</span>

                        </div>

                        <div className="cart_summary_sub">
                            <span>Discount</span>
                            <span>$-5</span>

                        </div>

                        <div className="cart_summary_sub">
                            <span>Total</span>
                            <span>$$155</span>

                        </div>

                        <button> CHECKOUT NOW</button>

                    </div>


                </div>


            </div>

        </div>

    );
}

export default Cart