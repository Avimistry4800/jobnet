import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'
import { auth } from './Firebase';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {
        if(!name){
            return alert("Please Insert Your Full Name");
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
        
        .then(() => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic

                })
            );
        }).catch((error) => {
            alert(error.message)
        })
    })
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
                placeholder="Profile Pic url-optional" 
                value = {profilePic}
                onChange={ e =>setProfilePic(e.target.value)}
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