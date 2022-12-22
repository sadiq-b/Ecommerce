import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";

import './Footer.css';


const Footer = () => {

    return (
        <div className="footer_container">
            <div className="left_side">

                <h1> Ecom Store</h1>

                <p> welcome to Ecom your number store for the latest shirts , durags and trousers. for everyone male, females</p>

                <div className="social_icons">

                    <  FacebookIcon />

                    <InstagramIcon/>

                    <MailIcon/>



                </div>
            </div>



            <div className="middle">

                <h2> Links associated with website</h2>

                <ul>
                    <li>home</li>
                    <li>Men</li>
                    <li>tracking</li>
                    <li>my account</li>
                    <li>terms</li>
                    <li>cart</li>
                    <li>assecories</li>
                    <li>my acount</li>
                </ul>


            </div>

            <div className="right_side">

                <h3> Contact </h3>

                <h4>lagos, island  </h4>

                <h5> +234</h5>

                <h6>shopwest@group.com  </h6>

                <div></div>

            </div>

        </div>

    );
}

export default Footer