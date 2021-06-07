import React from 'react';
import "./Login.css";
import web from "./images/black.jpg";
import { loginUrl } from './spotify';

function Login() {
    return (
        <div>
        <div className="login">
           
            <img src={web} alt="spotify"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
        </div>
    )
}

export default Login;
