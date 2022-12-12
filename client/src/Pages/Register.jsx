import React from "react";
import './Register.css';


const Register = () => {

    return (

        <div className="reg-container">
            <div className="reg-wrap">

                <h1 className="reg-title">CREATE ACCOUNT</h1>

                <div className="reg-form">
                    <input className="reg-input" placeholder="name" />

                    <input className="reg-input" placeholder="lastname" />

                    <input className="reg-input" placeholder="username" />

                    <input className="reg-input" placeholder="email" />

                    <input  className="reg-input" placeholder="password" />

                    <input className="reg-input" placeholder="confirm password" />

                    <button> Submit </button>
                </div>
            </div>

        </div>

    );
}

export default Register;