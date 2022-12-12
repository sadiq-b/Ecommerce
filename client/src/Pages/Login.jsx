import React from "react";
import './Register.css'

const Login = () =>{

    return (

        <div className="reg-container">
            <div className="reg-wrap">

                <h1 className="reg-title">CREATE ACCOUNT</h1>

                <div className="log-form">
                    <input className="reg-input" placeholder="username" />

                    <input className="reg-input" placeholder="password" />

                    <button style={{width:'40%'}} className="reg-input"> Login </button>

                    <a className="reg-input" > forgot password?</a>
                    <a className="reg-input"> SIGNUP </a>
                </div>
            </div>

        </div>

    );
}

export default Login;
