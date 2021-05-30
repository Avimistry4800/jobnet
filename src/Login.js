import React from 'react';
import './Login.css'
const Login = () => {
    const loginToApp = () => {

    }
    const register = () =>{

    }
    return (
        <div className= "login">
            <form>
                <input type="text" placeholder="Full name- Required"/>
                <input type="text" placeholder="Profile url-optional"/>
                <input type="email" placeholder="yourmail@mail.com"/>
                <input type="password" placeholder="password"/>
                <button type="submit" onClick={loginToApp}> Sign In </button>
            </form>
            <p> Not a member?
                <span className = "login__register" onClick= {register}>Register Now</span>
            </p>
        </div>
    );
};

export default Login;