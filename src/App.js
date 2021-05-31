import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth } from "./Firebase";
import { logout, login, selectUser } from './features/userSlice'
import Widgets from "./Widgets";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if(userAuth){
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                    }));
            }else{
                dispatch(logout());
            }
        })
    }, [])

    return (
        <div className="app">
            <Header />
            {!user? <Login /> : (
                <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
                {/* Widgets*/}
            </div>
            )}

            {/* App Body */}

        </div>
    );
}

export default App;
