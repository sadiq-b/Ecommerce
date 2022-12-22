import React from "react";
import {Badge} from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import './Navigation.css'


const Navigation = () => {

    return (
        <div className="nav_container">
            <div className="left">
                <div >
                    <span>ENG</span>
                </div>

                <div className="nav_input">
                    <input></input>
                </div>


            </div>


            <div className="centre">WestStore.</div>


            <div className="right">

                <div style={{ marginLeft: "20px" }}>Login</div>

                <div style={{ marginLeft: "20px" }}>Register</div>

                <div style={{ marginLeft: "20px", marginRight: "10px" }}>
                    <Badge badgeContent={4} color="primary">
                        <AddShoppingCartOutlinedIcon/>
                       
                    </Badge></div>
                    

            </div>

        </div>
    );
}

export default Navigation;