import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {

    }
    return (
        <div className="login">
            <form>
                <input 
                type="text" 
                placeholder="Full name- Required"
                value = {name}
                onchange={e => setName(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Profile url-optional" 
                value = {profilePic}
                />
                <input 
                value={email} 
                onchange={e => setEmail(e.target.value)} 
                type="email" 
                placeholder="yourmail@mail.com" />
                <input 
                type="password" 
                placeholder="password"
                value = {password}
                onChange={ e => setPassword(e.target.value) }
                />
                <button type="submit" onClick={loginToApp}> Sign In </button>
            </form>
            <p> Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
};

export default Login;