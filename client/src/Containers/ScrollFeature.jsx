import { React, useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./ScrollFeature.css"


const ScrollFeature = () => {

    const [currentIndex, setcurrentIndex] = useState(0)




    const handleclick = (direction) => {

        if (direction === "left") {

            setcurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2);

        }
        else {

            setcurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0);


        }

    }



    return (
        <div className="scroll_container">

            <div className="leftarrow" onClick={() => handleclick("left")}>
                <ArrowLeftIcon />

            </div>



            <div className="slider_wrapper">

                <div className="single_slider">

                    <div>
                        <img className="slider_img" placeholder="myitem" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />

                    </div>


                    <div>

                        <h1> Nike Air Force</h1>

                        <p> bank holiday discount for all new arrivals !!!!!!! </p>


                        <button> SHOP NOW</button>

                    </div>



                </div>

                <div className="single_slider">

                    <div>
                        <img className="slider_img" placeholder="myitem" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />

                    </div>


                    <div>

                        <h1> Nike Air Force</h1>

                        <p> bank holiday discount for all new arrivals !!!!!!! </p>


                        <button> SHOP NOW</button>

                    </div>



                </div>



            </div>




            <div className="rightarrow" onClick={() => handleclick("right")}>

                <ArrowRightIcon />

            </div>




        </div>
    );
}

export default ScrollFeature;